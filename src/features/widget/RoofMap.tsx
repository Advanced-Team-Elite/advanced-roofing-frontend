"use client";

import { Map as GoogleMap, useMap } from "@vis.gl/react-google-maps";
import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { RoofSection} from "@/types/roofing";

interface RoofMapProps {
    center: { lat: number; lng: number };
    zoom: number;
    sections: RoofSection[];
    activeSectionId: string | null;
    onSelectSection: (id: string) => void;
    onUpdateSectionCoords: (id: string, coords: { lat: number; lng: number }[]) => void;
    // ── Dibujo manual punto-por-punto ────────────────────────────────────────
    isDrawingMode: boolean;
    onStartAddSection: () => void; // activa el modo dibujo
    onSectionDrawn: (coords: { lat: number; lng: number }[]) => void; // el usuario terminó el polígono
    onCancelDrawing: () => void;
    onRemoveSection: (id: string) => void;
    hideControls?: boolean;
}

const SECTION_COLORS = ["#00589e", "#e65100", "#2e7d32", "#6a1b9a", "#c2185b"];

// ─── Subcomponente: Manejo de Polígonos existentes y Recalibración ────────────
function RoofPolygons({
                          sections,
                          activeSectionId,
                          onSelectSection,
                          onUpdateSectionCoords,
                          center,
                          zoom,
                          isDrawingMode,
                      }: {
    sections: RoofSection[];
    activeSectionId: string | null;
    onSelectSection: (id: string) => void;
    onUpdateSectionCoords: (id: string, coords: { lat: number; lng: number }[]) => void;
    center: { lat: number; lng: number };
    zoom: number;
    isDrawingMode: boolean;
}) {
    const map = useMap();
    const polygonRefs = useRef<Map<string, google.maps.Polygon>>(new Map());

    useEffect(() => {
        if (map && center) {
            map.panTo(center);
            if (zoom) {
                map.setZoom(zoom);
            }
        }
    }, [map, center.lat, center.lng, zoom]);

    useEffect(() => {
        if (!map || typeof google === "undefined") return;

        // 1. Limpiar polígonos eliminados
        polygonRefs.current.forEach((polygon, id) => {
            if (!sections.some((s) => s.id === id)) {
                polygon.setMap(null);
                polygonRefs.current.delete(id);
            }
        });

        // 2. Crear o actualizar polígonos
        sections.forEach((section, index) => {
            // Mientras se está dibujando una sección nueva, ninguna existente
            // queda editable — evita que un click para agregar un punto
            // termine moviendo un vértice de otra sección por error.
            const isActive = section.id === activeSectionId && !isDrawingMode;
            const color = section.color || SECTION_COLORS[index % SECTION_COLORS.length];

            let polygon = polygonRefs.current.get(section.id);

            if (!polygon) {
                polygon = new google.maps.Polygon({
                    paths: section.coords,
                    map,
                    strokeColor: color,
                    strokeOpacity: 0.9,
                    strokeWeight: isActive ? 3 : 2,
                    fillColor: color,
                    fillOpacity: isActive ? 0.45 : 0.25,
                    editable: isActive,
                    draggable: isActive,
                });

                polygon.addListener("click", () => {
                    if (!isDrawingMode) onSelectSection(section.id);
                });

                polygonRefs.current.set(section.id, polygon);
            } else {
                polygon.setPaths(section.coords);
                polygon.setOptions({
                    strokeColor: color,
                    fillColor: color,
                    strokeWeight: isActive ? 3 : 2,
                    fillOpacity: isActive ? 0.45 : 0.25,
                    editable: isActive,
                    draggable: isActive,
                });
            }

            if (isActive) {
                const path = polygon.getPath();
                const notifyChange = () => {
                    const newCoords: { lat: number; lng: number }[] = [];
                    for (let i = 0; i < path.getLength(); i++) {
                        const pt = path.getAt(i);
                        newCoords.push({ lat: pt.lat(), lng: pt.lng() });
                    }
                    onUpdateSectionCoords(section.id, newCoords);
                };

                google.maps.event.clearListeners(path, "set_at");
                google.maps.event.clearListeners(path, "insert_at");
                google.maps.event.clearListeners(path, "remove_at");

                path.addListener("set_at", notifyChange);
                path.addListener("insert_at", notifyChange);
                path.addListener("remove_at", notifyChange);
            }
        });
    }, [map, sections, activeSectionId, onSelectSection, onUpdateSectionCoords, isDrawingMode]);

    return null;
}

// ─── Subcomponente: Dibujo manual punto-por-punto ──────────────────────────────
// NO usa google.maps.drawing.DrawingManager — Google la sacó de la Maps JS API
// (v3.65+), por eso los tipos aparecen vacíos/sin métodos. En su lugar: un
// listener de click plano sobre el mapa que va acumulando vértices, con un
// Polygon + Markers de preview manuales, y botones "Finish" / "Undo" / "Cancel"
// en el toolbar del padre (controlados vía ref imperativo).
export interface DrawingControllerHandle {
    finish: () => void;
    undoLastPoint: () => void;
}

const DrawingController = forwardRef<
    DrawingControllerHandle,
    {
        isDrawingMode: boolean;
        onSectionDrawn: (coords: { lat: number; lng: number }[]) => void;
        onPointsChange: (count: number) => void;
    }
>(function DrawingController({ isDrawingMode, onSectionDrawn, onPointsChange }, ref) {
    const map = useMap();
    const [points, setPoints] = useState<{ lat: number; lng: number }[]>([]);

    const previewPolygonRef = useRef<google.maps.Polygon | null>(null);
    const vertexMarkersRef = useRef<google.maps.Marker[]>([]);
    const onSectionDrawnRef = useRef(onSectionDrawn);
    const onPointsChangeRef = useRef(onPointsChange);
    const pointsRef = useRef<{ lat: number; lng: number }[]>([]);

    useEffect(() => {
        onSectionDrawnRef.current = onSectionDrawn;
    }, [onSectionDrawn]);

    useEffect(() => {
        onPointsChangeRef.current = onPointsChange;
    }, [onPointsChange]);

    // Mantener una copia "de lectura" del último valor de points en un ref.
    // finish() la lee de acá — NUNCA metemos un side effect dentro del
    // updater de setPoints, porque React (Strict Mode) puede invocar ese
    // updater dos veces para verificar pureza, y eso duplicaba la sección.
    useEffect(() => {
        pointsRef.current = points;
        onPointsChangeRef.current(points.length);
    }, [points]);

    // Exponer acciones imperativas al padre (botones del toolbar)
    useImperativeHandle(
        ref,
        () => ({
            finish: () => {
                if (pointsRef.current.length >= 3) {
                    onSectionDrawnRef.current(pointsRef.current);
                }
            },
            undoLastPoint: () => {
                setPoints((prev) => prev.slice(0, -1));
            },
        }),
        []
    );

    // Reiniciar puntos cada vez que se activa/desactiva el modo dibujo
    useEffect(() => {
        setPoints([]);
    }, [isDrawingMode]);

    // Click en el mapa → agrega un vértice
    useEffect(() => {
        if (!map || !isDrawingMode) return;

        const listener = map.addListener("click", (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;
            const pt = { lat: e.latLng.lat(), lng: e.latLng.lng() };
            setPoints((prev) => [...prev, pt]);
        });

        return () => {
            google.maps.event.removeListener(listener);
        };
    }, [map, isDrawingMode]);

    // Dibujar/actualizar el polígono de preview + marcadores de vértice
    useEffect(() => {
        if (!map || typeof google === "undefined") return;

        if (!isDrawingMode || points.length === 0) {
            previewPolygonRef.current?.setMap(null);
            previewPolygonRef.current = null;
            vertexMarkersRef.current.forEach((m) => m.setMap(null));
            vertexMarkersRef.current = [];
            return;
        }

        if (!previewPolygonRef.current) {
            previewPolygonRef.current = new google.maps.Polygon({
                map,
                paths: points,
                strokeColor: "#e65100",
                strokeWeight: 2,
                fillColor: "#e65100",
                fillOpacity: 0.25,
                clickable: false,
            });
        } else {
            previewPolygonRef.current.setPath(points);
        }

        vertexMarkersRef.current.forEach((m) => m.setMap(null));
        vertexMarkersRef.current = points.map(
            (p) =>
                new google.maps.Marker({
                    position: p,
                    map,
                    clickable: false,
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 5,
                        fillColor: "#e65100",
                        fillOpacity: 1,
                        strokeColor: "#ffffff",
                        strokeWeight: 1.5,
                    },
                })
        );
    }, [map, points, isDrawingMode]);

    // Limpieza al desmontar
    useEffect(() => {
        return () => {
            previewPolygonRef.current?.setMap(null);
            vertexMarkersRef.current.forEach((m) => m.setMap(null));
        };
    }, []);

    return null;
});

// ─── Componente Principal ──────────────────────────────────────────────────────
export const RoofMap = ({
                            center,
                            zoom,
                            sections,
                            activeSectionId,
                            onSelectSection,
                            onUpdateSectionCoords,
                            isDrawingMode,
                            onStartAddSection,
                            onSectionDrawn,
                            onCancelDrawing,
                            onRemoveSection,
                            hideControls = false,
                        }: RoofMapProps) => {
    const drawingRef = useRef<DrawingControllerHandle>(null);
    const [drawnPointCount, setDrawnPointCount] = useState(0);

    return (
        <div className="w-full h-[500px] min-h-[500px] relative rounded-xl overflow-hidden border border-gray-200">
            <GoogleMap
                defaultCenter={center}
                defaultZoom={zoom}
                mapTypeId="satellite"
                tilt={0}
                disableDefaultUI={true}
                zoomControl={true}
                gestureHandling="greedy"
                style={{ width: "100%", height: "100%" }}
            >
                <RoofPolygons
                    sections={sections}
                    activeSectionId={activeSectionId}
                    onSelectSection={onSelectSection}
                    onUpdateSectionCoords={onUpdateSectionCoords}
                    center={center}
                    zoom={zoom}
                    isDrawingMode={isDrawingMode}
                />
                <DrawingController
                    ref={drawingRef}
                    isDrawingMode={isDrawingMode}
                    onSectionDrawn={onSectionDrawn}
                    onPointsChange={setDrawnPointCount}
                />
            </GoogleMap>

            {/* Toolbar / Controles */}
            {!hideControls && (
                <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg border border-gray-200 pointer-events-auto flex items-center gap-2">
                        {isDrawingMode ? (
                            <span className="text-xs font-black text-[#e65100] uppercase tracking-wider">
                                Click to mark each corner · {drawnPointCount} point{drawnPointCount === 1 ? "" : "s"}
                            </span>
                        ) : (
                            <>
                                <span className="text-xs font-black text-gray-700 uppercase tracking-wider">
                                    Sections ({sections.length}):
                                </span>
                                <div className="flex gap-1.5 overflow-x-auto max-w-xs sm:max-w-md py-0.5">
                                    {sections.map((sec, idx) => {
                                        const isActive = sec.id === activeSectionId;
                                        const color = sec.color || SECTION_COLORS[idx % SECTION_COLORS.length];
                                        return (
                                            <button
                                                key={sec.id}
                                                onClick={() => onSelectSection(sec.id)}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                                                    isActive
                                                        ? "bg-[#00589e] text-white shadow-sm"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                }`}
                                            >
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full border border-white"
                                                    style={{ backgroundColor: color }}
                                                />
                                                {sec.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="pointer-events-auto flex gap-2">
                        {isDrawingMode ? (
                            <>
                                <button
                                    onClick={() => drawingRef.current?.undoLastPoint()}
                                    disabled={drawnPointCount === 0}
                                    className="bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed text-gray-700 border border-gray-300 px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                                >
                                    Undo Point
                                </button>
                                <button
                                    onClick={() => drawingRef.current?.finish()}
                                    disabled={drawnPointCount < 3}
                                    className="bg-[#2e7d32] hover:bg-[#1b5e20] disabled:opacity-40 disabled:cursor-not-allowed text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                                >
                                    Finish Shape
                                </button>
                                <button
                                    onClick={onCancelDrawing}
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={onStartAddSection}
                                    className="bg-[#00589e] hover:bg-[#004277] text-white px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all cursor-pointer"
                                >
                                    + Add Roof Section
                                </button>

                                {sections.length > 1 && activeSectionId && (
                                    <button
                                        onClick={() => onRemoveSection(activeSectionId)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                                        title="Delete active section"
                                    >
                                        Delete Section
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};