"use client";
// features/estimate/components/StreetViewPitchTool.tsx
//
// Herramienta de medición manual de pitch usando el panorama interactivo de
// Street View (google.maps.StreetViewPanorama) — el mismo motor que usa
// Google Maps real, con flechas de navegación en el piso para CAMINAR por
// la calle, no solo una foto fija.
//
// NO usa IA/visión por computadora para "detectar" el ángulo — el usuario
// traza la línea sobre el filo del techo que ve en la foto, y calculamos el
// ángulo exacto de esa línea respecto a la horizontal. Es una asistencia
// visual, no una medición topográfica certificada (se aclara en la UI).
//
// Dos modos, porque navegar (arrastrar/caminar) y medir (arrastrar para
// dibujar) usan los mismos gestos de mouse y compiten entre sí:
// - Navigate: control total del panorama (arrastrar para mirar, scroll para
//   zoom, click en las flechas del piso para caminar). El overlay de dibujo
//   no captura clicks (pointer-events: none), todo pasa al panorama.
// - Measure: el overlay SÍ captura los clicks (pointer-events: auto) para
//   dibujar las dos líneas; el panorama de fondo queda visualmente fijo
//   pero sigue ahí — el D-pad propio sigue funcionando para ajustes finos
//   porque corta la propagación del evento antes de llegar al overlay.

import { useEffect, useRef, useState, useCallback } from "react";
import { RoofPitch } from "@/types/roofing";

// Estado completo de una sesión de medición — cámara + posición (si caminó)
// + las dos líneas. El padre (QuoteForm) lo guarda por sección para que
// reabrir el modal vuelva exactamente a donde quedó.
export interface StreetViewMeasurementState {
    heading: number;
    camPitch: number;
    zoomLevel: number; // zoom nativo del panorama (0 = normal, más alto = más zoom)
    position: { lat: number; lng: number } | null; // dónde caminó el usuario; null = ubicación original de la propiedad
    phase: "reference" | "slope";
    refLine: { x: number; y: number }[] | null;
    slopeAnchor: { x: number; y: number } | null;
    slopeCursor: { x: number; y: number } | null;
    slopeFinal: { x: number; y: number } | null;
}

interface StreetViewPitchToolProps {
    location: { lat: number; lng: number };
    initialState?: StreetViewMeasurementState;
    onStateChange: (state: StreetViewMeasurementState) => void;
    onConfirm: (degrees: number, matchedPitch: RoofPitch) => void;
    onClose: () => void;
}

const ASPECT_W = 640;
const ASPECT_H = 400;

// ─── Helpers geográficos ────────────────────────────────────────────────────
function computeBearing(from: { lat: number; lng: number }, to: { lat: number; lng: number }): number {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const toDeg = (r: number) => (r * 180) / Math.PI;
    const lat1 = toRad(from.lat);
    const lat2 = toRad(to.lat);
    const dLng = toRad(to.lng - from.lng);
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    const brng = toDeg(Math.atan2(y, x));
    return (brng + 360) % 360;
}

// ─── Mapeo de grado exacto → categoría de pricing existente ────────────────
function matchPitchCategory(degrees: number): RoofPitch {
    if (degrees < 4) return "shallow";
    if (degrees < 20.5) return "shallow";
    if (degrees < 35.3) return "medium";
    if (degrees < 43.8) return "steep";
    return "high_steep";
}

// Ícono de flecha reutilizable para el D-pad — a nivel de módulo, no depende
// de nada del componente padre, así que no debe recrearse en cada render.
function Chevron({ direction }: { direction: "up" | "down" | "left" | "right" }) {
    const rotation = { up: 0, right: 90, down: 180, left: 270 }[direction];
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" style={{ transform: `rotate(${rotation}deg)` }}>
            <path d="M12 5l7 12H5z" fill="currentColor" />
        </svg>
    );
}

export function StreetViewPitchTool({ location, initialState, onStateChange, onConfirm, onClose }: StreetViewPitchToolProps) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const [status, setStatus] = useState<
        "loading" | "ok" | "no_coverage" | "request_denied" | "over_limit" | "error"
    >(() => (apiKey ? "loading" : "error"));
    const [rawStatus, setRawStatus] = useState<string | null>(null);

    // ── Modo: Navigate (control total del panorama) vs Measure (dibujar) ───
    const [mode, setMode] = useState<"navigate" | "measure">("navigate");

    // ── Cámara / posición del panorama ──────────────────────────────────────
    const [heading, setHeading] = useState(initialState?.heading ?? 0);
    const [camPitch, setCamPitch] = useState(initialState?.camPitch ?? 0);
    const [zoomLevel, setZoomLevel] = useState(initialState?.zoomLevel ?? 1);
    const [position, setPosition] = useState<{ lat: number; lng: number } | null>(initialState?.position ?? null);

    const panoContainerRef = useRef<HTMLDivElement>(null);
    const panoramaRef = useRef<google.maps.StreetViewPanorama | null>(null);

    // ── Medición en dos pasos, mismo mecanismo para las dos líneas ──────────
    // Click para poner el primer punto → mover el mouse (preview en vivo) →
    // click para fijar el segundo punto. Sin arrastre en ningún lado — antes
    // el paso 1 pedía drag y el paso 2 pedía click, esa inconsistencia era
    // justo lo confuso.
    type Phase = "reference" | "slope";
    const [phase, setPhase] = useState<Phase>(initialState?.phase ?? "reference");

    const [refAnchor, setRefAnchor] = useState<{ x: number; y: number } | null>(
        initialState?.refLine ? initialState.refLine[0] : null
    );
    const [refCursor, setRefCursor] = useState<{ x: number; y: number } | null>(
        initialState?.refLine ? initialState.refLine[1] : null
    );
    const [refFinal, setRefFinal] = useState<{ x: number; y: number } | null>(
        initialState?.refLine ? initialState.refLine[1] : null
    );

    const [slopeAnchor, setSlopeAnchor] = useState<{ x: number; y: number } | null>(initialState?.slopeAnchor ?? null);
    const [slopeCursor, setSlopeCursor] = useState<{ x: number; y: number } | null>(initialState?.slopeCursor ?? null);
    const [slopeFinal, setSlopeFinal] = useState<{ x: number; y: number } | null>(initialState?.slopeFinal ?? null);
    const drawAreaRef = useRef<HTMLDivElement>(null);

    // Reportar cada cambio de estado hacia el padre.
    const onStateChangeRef = useRef(onStateChange);
    useEffect(() => {
        onStateChangeRef.current = onStateChange;
    }, [onStateChange]);

    useEffect(() => {
        onStateChangeRef.current({
            heading,
            camPitch,
            zoomLevel,
            position,
            phase,
            refLine: refAnchor && refFinal ? [refAnchor, refFinal] : null,
            slopeAnchor,
            slopeCursor,
            slopeFinal,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heading, camPitch, zoomLevel, position, phase, refAnchor, refFinal, slopeAnchor, slopeCursor, slopeFinal]);

    const getRelativePoint = useCallback((clientX: number, clientY: number) => {
        const rect = drawAreaRef.current?.getBoundingClientRect();
        if (!rect) return { x: 0, y: 0 };
        return {
            x: ((clientX - rect.left) / rect.width) * ASPECT_W,
            y: ((clientY - rect.top) / rect.height) * ASPECT_H,
        };
    }, []);

    const handleAreaClick = (e: React.MouseEvent) => {
        if (mode !== "measure") return;
        const pt = getRelativePoint(e.clientX, e.clientY);

        if (phase === "reference") {
            if (!refAnchor) {
                setRefAnchor(pt);
                setRefCursor(pt);
                return;
            }
            if (!refFinal) {
                setRefFinal(pt);
                setSlopeAnchor(pt);
                setSlopeCursor(pt);
                setPhase("slope");
            }
            return;
        }

        // phase === "slope"
        if (slopeAnchor && !slopeFinal) {
            setSlopeFinal(pt);
        }
    };

    const handleAreaMove = (e: React.PointerEvent) => {
        if (mode !== "measure") return;
        const pt = getRelativePoint(e.clientX, e.clientY);

        if (phase === "reference" && refAnchor && !refFinal) {
            setRefCursor(pt);
            return;
        }

        if (phase === "slope" && slopeAnchor && !slopeFinal) {
            setSlopeCursor(pt);
        }
    };

    const lineAngle = (a: { x: number; y: number }, b: { x: number; y: number }) => {
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        if (dx < 0) {
            dx = -dx;
            dy = -dy;
        }
        return (Math.atan2(dy, dx) * 180) / Math.PI;
    };

    const hasRefLine = !!refAnchor && !!refFinal && (refAnchor.x !== refFinal.x || refAnchor.y !== refFinal.y);
    const hasSlopeLine =
        !!slopeAnchor && !!slopeFinal && (slopeAnchor.x !== slopeFinal.x || slopeAnchor.y !== slopeFinal.y);

    const measuredDegrees =
        hasRefLine && hasSlopeLine
            ? Math.round(Math.abs(lineAngle(slopeAnchor!, slopeFinal!) - lineAngle(refAnchor!, refFinal!)) * 10) / 10
            : null;

    const matchedPitch = measuredDegrees !== null ? matchPitchCategory(measuredDegrees) : null;

    const clearReference = () => {
        setRefAnchor(null);
        setRefCursor(null);
        setRefFinal(null);
        setSlopeAnchor(null);
        setSlopeCursor(null);
        setSlopeFinal(null);
        setPhase("reference");
    };

    const clearSlope = () => {
        setSlopeFinal(null);
        setSlopeCursor(slopeAnchor);
        setPhase("slope");
    };

    // Si el usuario ya trazó algo y quiere volver a Navigate (caminar/mirar
    // alrededor), esas líneas quedan visualmente desalineadas con la foto en
    // cuanto se mueve la cámara — así que se lo avisamos y limpiamos.
    const handleGoToNavigate = () => {
        if (hasRefLine || hasSlopeLine) {
            const ok = window.confirm(
                "Switching to Navigate will clear your current measurement lines (they'd no longer line up once you move the view). Continue?"
            );
            if (!ok) return;
        }
        clearReference();
        setMode("navigate");
    };

    // 1. Verificar cobertura antes de intentar crear el panorama
    useEffect(() => {
        if (!apiKey) return;

        const metadataUrl = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${location.lat},${location.lng}&key=${apiKey}`;

        fetch(metadataUrl)
            .then((res) => res.json())
            .then((data) => {
                setRawStatus(data.status ?? null);
                console.log("[StreetViewPitchTool] metadata response:", data);

                if (data.status === "OK") {
                    if (!initialState) {
                        const panoLocation = data.location as { lat: number; lng: number };
                        const initialHeading = computeBearing(panoLocation, location);
                        setHeading(Math.round(initialHeading));
                    }
                    setStatus("ok");
                    return;
                }

                if (data.status === "ZERO_RESULTS" || data.status === "NOT_FOUND") {
                    setStatus("no_coverage");
                    return;
                }

                if (data.status === "REQUEST_DENIED") {
                    setStatus("request_denied");
                    return;
                }

                if (data.status === "OVER_QUERY_LIMIT") {
                    setStatus("over_limit");
                    return;
                }

                setStatus("error");
            })
            .catch((err) => {
                console.error("[StreetViewPitchTool] metadata fetch failed:", err);
                setStatus("error");
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey, location.lat, location.lng]);

    // 2. Crear el panorama interactivo una sola vez que la cobertura está OK.
    // No se recrea si heading/camPitch/zoom cambian después — esos cambios
    // se aplican imperativamente sobre la instancia ya creada (más abajo),
    // y el panorama es la fuente de verdad (sus propios listeners actualizan
    // el estado de React, no al revés).
    useEffect(() => {
        if (status !== "ok" || !panoContainerRef.current || typeof google === "undefined") return;
        if (panoramaRef.current) return;

        const panorama = new google.maps.StreetViewPanorama(panoContainerRef.current, {
            position: position ?? location,
            pov: { heading, pitch: camPitch },
            zoom: zoomLevel,
            addressControl: false,
            showRoadLabels: false,
            motionTracking: false,
            motionTrackingControl: false,
            fullscreenControl: false,
            panControl: false,
            zoomControl: false,
            linksControl: true,
            clickToGo: true,
            scrollwheel: true,
        });

        panoramaRef.current = panorama;

        const povListener = panorama.addListener("pov_changed", () => {
            const pov = panorama.getPov();
            setHeading(pov.heading);
            setCamPitch(pov.pitch);
        });
        const zoomListener = panorama.addListener("zoom_changed", () => {
            setZoomLevel(panorama.getZoom());
        });
        const posListener = panorama.addListener("position_changed", () => {
            const pos = panorama.getPosition();
            if (pos) setPosition({ lat: pos.lat(), lng: pos.lng() });
        });

        return () => {
            google.maps.event.removeListener(povListener);
            google.maps.event.removeListener(zoomListener);
            google.maps.event.removeListener(posListener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    // Apagar los controles nativos del panorama al entrar en Measure — así
    // un click para dibujar no se interpreta como "caminar hacia ahí"
    // (clickToGo), y el scroll no hace zoom del panorama mientras medís.
    // No alcanza con que el overlay tape el click visualmente: hay que
    // desactivar el comportamiento en el panorama mismo.
    useEffect(() => {
        if (!panoramaRef.current) return;
        panoramaRef.current.setOptions({
            clickToGo: mode === "navigate",
            scrollwheel: mode === "navigate",
            linksControl: mode === "navigate",
        });
    }, [mode]);

    // El paso de rotación/inclinación del D-pad es proporcional al zoom
    // actual del panorama — con zoom alto, un salto fijo grande te saca el
    // techo de cuadro.
    const approxFov = 180 / Math.pow(2, zoomLevel);
    const rotateStep = Math.max(4, Math.round(approxFov * 0.35));
    const tiltStep = Math.max(2, Math.round(approxFov * 0.12));

    // Foto estática (Street View Static API) calculada con la cámara actual
    // del panorama — SOLO se usa en modo Measure. Una <img> no tiene ningún
    // comportamiento interactivo propio, así que no compite con el dibujo
    // como sí lo hacía el panorama en vivo (que no tiene forma de desactivar
    // "arrastrar para mirar alrededor", solo clickToGo).
    const measurePos = position ?? location;
    const measureImageUrl = `https://maps.googleapis.com/maps/api/streetview?size=${ASPECT_W}x${ASPECT_H}&location=${measurePos.lat},${measurePos.lng}&heading=${heading}&pitch=${camPitch}&fov=${Math.round(approxFov)}&source=outdoor&key=${apiKey}`;

    const rotate = (sign: 1 | -1) => {
        const newHeading = (heading + sign * rotateStep + 360) % 360;
        panoramaRef.current?.setPov({ heading: newHeading, pitch: camPitch });
    };
    const tilt = (sign: 1 | -1) => {
        const newPitch = Math.max(-20, Math.min(40, camPitch + sign * tiltStep));
        panoramaRef.current?.setPov({ heading, pitch: newPitch });
    };
    const zoomBtn = (delta: number) => {
        const newZoom = Math.max(0, Math.min(4, zoomLevel + delta));
        panoramaRef.current?.setZoom(newZoom);
    };
    const resetView = () => {
        panoramaRef.current?.setPov({ heading, pitch: 0 });
        panoramaRef.current?.setZoom(1);
    };
    const resetToProperty = () => {
        panoramaRef.current?.setPosition(location);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                    <h3 className="text-base font-black text-gray-800 uppercase tracking-wider">
                        Measure Pitch from Street View
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 text-xl leading-none cursor-pointer px-2"
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <div className="p-5 space-y-4">
                    {status === "loading" && (
                        <div className="h-[300px] flex items-center justify-center text-sm text-gray-400 font-semibold">
                            Loading Street View…
                        </div>
                    )}

                    {status === "error" && (
                        <div className="h-[300px] flex items-center justify-center text-base text-red-500 font-semibold text-center px-6">
                            Could not load Street View. Check the API key or your connection.
                            {rawStatus && (
                                <span className="block text-sm font-normal text-gray-400 mt-2">
                                    Status returned: {rawStatus}
                                </span>
                            )}
                        </div>
                    )}

                    {status === "request_denied" && (
                        <div className="h-[300px] flex items-center justify-center text-base text-red-500 font-semibold text-center px-6 leading-snug">
                            Google returned REQUEST_DENIED. Street View Static API is a separate product in
                            Google Cloud — you need to enable it under <strong>APIs & Services → Library →
                            &quot;Street View Static API&quot;</strong>, and check that the API key doesn&apos;t
                            have referrer/IP restrictions blocking this call.
                        </div>
                    )}

                    {status === "over_limit" && (
                        <div className="h-[300px] flex items-center justify-center text-base text-amber-600 font-semibold text-center px-6">
                            The Street View Static API quota was exceeded for this key. Check usage/billing in
                            Google Cloud Console.
                        </div>
                    )}

                    {status === "no_coverage" && (
                        <div className="h-[300px] flex items-center justify-center text-base text-amber-600 font-semibold text-center px-6">
                            No Street View imagery is available for this address. Pick one of the 4 standard categories by eye.
                        </div>
                    )}

                    {status === "ok" && (
                        <>
                            {/* ── Toggle de modo ── */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleGoToNavigate}
                                    className={`flex-1 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                                        mode === "navigate"
                                            ? "bg-[#00589e] text-white shadow-md"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                                >
                                    Navigate & Walk
                                </button>
                                <button
                                    onClick={() => setMode("measure")}
                                    className={`flex-1 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all cursor-pointer ${
                                        mode === "measure"
                                            ? "bg-[#e65100] text-white shadow-md"
                                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                    }`}
                                >
                                    Measure Angle
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 leading-snug">
                                {mode === "navigate" ? (
                                    <>
                                        Drag to look around, scroll to zoom, and click the arrows on the ground to
                                        walk down the street — just like Street View. Once you have a clear view of
                                        the roof, switch to <strong className="text-[#e65100]">Measure Angle</strong>.
                                    </>
                                ) : phase === "reference" ? (
                                    <>
                                        <strong className="text-[#2563eb]">Step 1 of 2:</strong> click once on
                                        something you know is truly level (a gutter, a window edge, the base of a
                                        wall) to start, move your cursor along it, then click again to set the
                                        reference line.
                                    </>
                                ) : (
                                    <>
                                        <strong className="text-[#e65100]">Step 2 of 2:</strong> move your cursor
                                        along the roof slope, then click once to set the angle.
                                    </>
                                )}
                            </p>

                            <div
                                className="relative w-full rounded-xl overflow-hidden border border-gray-200"
                                style={{ aspectRatio: `${ASPECT_W} / ${ASPECT_H}` }}
                            >
                                {/* Panorama interactivo real — se queda montado siempre (para no
                                    perder su estado), pero se oculta en Measure sin destruirlo */}
                                <div
                                    ref={panoContainerRef}
                                    className="absolute inset-0"
                                    style={{ visibility: mode === "measure" ? "hidden" : "visible" }}
                                />

                                {/* Foto estática — SOLO en Measure. Es una <img> inerte, sin
                                    ningún comportamiento propio que compita con el dibujo. */}
                                {mode === "measure" && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={measureImageUrl}
                                        alt="Street View snapshot para medir"
                                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                                        draggable={false}
                                    />
                                )}

                                {/* Overlay de dibujo — solo captura clicks en modo Measure */}
                                <div
                                    ref={drawAreaRef}
                                    className="absolute inset-0 select-none touch-none"
                                    style={{ pointerEvents: mode === "measure" ? "auto" : "none" }}
                                    onClick={handleAreaClick}
                                    onPointerMove={handleAreaMove}
                                >
                                    <svg
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                        viewBox={`0 0 ${ASPECT_W} ${ASPECT_H}`}
                                    >
                                        {refAnchor && (
                                            <circle cx={refAnchor.x} cy={refAnchor.y} r={5} fill="#2563eb" stroke="#fff" strokeWidth={1.5} />
                                        )}

                                        {/* Preview en vivo de la referencia, mientras se apunta el 2do punto */}
                                        {phase === "reference" && refAnchor && refCursor && !refFinal && (
                                            <line
                                                x1={refAnchor.x}
                                                y1={refAnchor.y}
                                                x2={refCursor.x}
                                                y2={refCursor.y}
                                                stroke="#2563eb"
                                                strokeWidth={3}
                                                strokeDasharray="6 5"
                                                strokeLinecap="round"
                                                opacity={0.75}
                                            />
                                        )}

                                        {hasRefLine && (
                                            <>
                                                <line
                                                    x1={refAnchor!.x}
                                                    y1={refAnchor!.y}
                                                    x2={refFinal!.x}
                                                    y2={refFinal!.y}
                                                    stroke="#2563eb"
                                                    strokeWidth={3.5}
                                                    strokeLinecap="round"
                                                />
                                                <circle cx={refFinal!.x} cy={refFinal!.y} r={5} fill="#2563eb" stroke="#fff" strokeWidth={1.5} />
                                            </>
                                        )}

                                        {phase === "slope" && slopeAnchor && slopeCursor && !slopeFinal && (
                                            <line
                                                x1={slopeAnchor.x}
                                                y1={slopeAnchor.y}
                                                x2={slopeCursor.x}
                                                y2={slopeCursor.y}
                                                stroke="#e65100"
                                                strokeWidth={3}
                                                strokeDasharray="6 5"
                                                strokeLinecap="round"
                                                opacity={0.75}
                                            />
                                        )}

                                        {hasSlopeLine && (
                                            <>
                                                <line
                                                    x1={slopeAnchor!.x}
                                                    y1={slopeAnchor!.y}
                                                    x2={slopeFinal!.x}
                                                    y2={slopeFinal!.y}
                                                    stroke="#e65100"
                                                    strokeWidth={3.5}
                                                    strokeLinecap="round"
                                                />
                                                <circle cx={slopeFinal!.x} cy={slopeFinal!.y} r={5} fill="#e65100" stroke="#fff" strokeWidth={1.5} />
                                            </>
                                        )}

                                        {slopeAnchor && (
                                            <circle cx={slopeAnchor.x} cy={slopeAnchor.y} r={5.5} fill="#111827" stroke="#fff" strokeWidth={1.5} />
                                        )}
                                    </svg>

                                    {/* ── D-pad + Zoom — funciona en los dos modos, corta la
                                        propagación para no interferir con el dibujo ni con el
                                        drag nativo del panorama ── */}
                                    <div
                                        className="absolute bottom-3 right-3 flex items-end gap-2.5 pointer-events-none"
                                        onPointerDown={(e) => e.stopPropagation()}
                                        onPointerMove={(e) => e.stopPropagation()}
                                        onPointerUp={(e) => e.stopPropagation()}
                                    >
                                        <div
                                            className="grid pointer-events-auto"
                                            style={{ gridTemplateColumns: "repeat(3, 32px)", gridTemplateRows: "repeat(3, 32px)", gap: "4px" }}
                                        >
                                            <div />
                                            <button
                                                type="button"
                                                onClick={() => tilt(1)}
                                                title="Look up"
                                                className="rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 cursor-pointer"
                                            >
                                                <Chevron direction="up" />
                                            </button>
                                            <div />

                                            <button
                                                type="button"
                                                onClick={() => rotate(-1)}
                                                title="Rotate left"
                                                className="rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 cursor-pointer"
                                            >
                                                <Chevron direction="left" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={resetView}
                                                title="Reset view"
                                                className="rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-400 cursor-pointer"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-current" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => rotate(1)}
                                                title="Rotate right"
                                                className="rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 cursor-pointer"
                                            >
                                                <Chevron direction="right" />
                                            </button>

                                            <div />
                                            <button
                                                type="button"
                                                onClick={() => tilt(-1)}
                                                title="Look down"
                                                className="rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 cursor-pointer"
                                            >
                                                <Chevron direction="down" />
                                            </button>
                                            <div />
                                        </div>

                                        <div className="flex flex-col gap-2.5 pointer-events-auto">
                                            <button
                                                type="button"
                                                onClick={() => zoomBtn(0.5)}
                                                title="Zoom in"
                                                className="w-8 h-8 rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 font-black text-base cursor-pointer"
                                            >
                                                +
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => zoomBtn(-0.5)}
                                                title="Zoom out"
                                                className="w-8 h-8 rounded-full bg-white hover:bg-gray-50 shadow-lg flex items-center justify-center text-gray-700 font-black text-base cursor-pointer"
                                            >
                                                −
                                            </button>
                                        </div>
                                    </div>

                                    {/* Volver a la ubicación original de la propiedad si el
                                        usuario caminó lejos y se perdió (solo en Navigate) */}
                                    {mode === "navigate" && (
                                        <button
                                            type="button"
                                            onClick={resetToProperty}
                                            className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white shadow-lg text-xs font-bold text-gray-700 cursor-pointer pointer-events-auto"
                                        >
                                            ↩ Back to Property
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Result */}
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between gap-3 flex-wrap">
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                                        Measured Angle
                                    </p>
                                    <p className="text-3xl font-black text-[#00589e]">
                                        {measuredDegrees !== null ? `${measuredDegrees}°` : "—"}
                                    </p>
                                </div>
                                {matchedPitch && (
                                    <div className="text-right">
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-wider">
                                            Matches Category
                                        </p>
                                        <p className="text-base font-black text-gray-800 capitalize">
                                            {matchedPitch.replace("_", " ")}
                                        </p>
                                    </div>
                                )}
                                {mode === "measure" && !hasRefLine && (
                                    <span className="text-sm font-bold text-[#2563eb] bg-blue-100 rounded-full px-3 py-1">
                                        Reference line needed
                                    </span>
                                )}
                                {mode === "measure" && hasRefLine && !hasSlopeLine && (
                                    <span className="text-sm font-bold text-[#e65100] bg-orange-100 rounded-full px-3 py-1">
                                        Roof line needed
                                    </span>
                                )}
                                <div className="flex gap-1.5 ml-auto">
                                    <button
                                        onClick={clearReference}
                                        disabled={!hasRefLine}
                                        className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-bold text-[#2563eb] cursor-pointer whitespace-nowrap"
                                    >
                                        Redo Reference
                                    </button>
                                    <button
                                        onClick={clearSlope}
                                        disabled={!hasSlopeLine}
                                        className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed text-sm font-bold text-[#e65100] cursor-pointer whitespace-nowrap"
                                    >
                                        Redo Roof Line
                                    </button>
                                </div>
                            </div>

                            <p className="text-xs text-gray-400 italic leading-snug">
                                Visual estimate based on the photo — not a certified topographic measurement.
                            </p>
                        </>
                    )}
                </div>

                <div className="flex justify-end gap-2 px-5 py-4 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-xl text-sm font-black uppercase tracking-wider text-gray-600 hover:bg-gray-200 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (measuredDegrees !== null && matchedPitch) {
                                onConfirm(measuredDegrees, matchedPitch);
                            }
                        }}
                        disabled={measuredDegrees === null}
                        className="px-5 py-2 rounded-xl text-sm font-black uppercase tracking-wider bg-[#00589e] hover:bg-[#004277] disabled:opacity-40 disabled:cursor-not-allowed text-white cursor-pointer"
                    >
                        Use This Pitch
                    </button>
                </div>
            </div>
        </div>
    );
}