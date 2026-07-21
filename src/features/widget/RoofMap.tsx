"use client";
/**
 * RoofMap — migrated from @react-google-maps/api to @vis.gl/react-google-maps
 *
 * NOTE: DrawingManager was removed by Google in Maps JS API v3.65+.
 * Manual polygon drawing (click-to-place points) replaces it below.
 */

import { Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useMemo, useCallback, useRef, useState, useEffect } from "react";

interface RoofMapProps {
    center: { lat: number; lng: number };
    polygonCoords?: { lat: number; lng: number }[];
    onPolygonEdit?: (newCoords: { lat: number; lng: number }[]) => void;
    zoom?: number;
    hideControls?: boolean;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export const RoofMap = ({
                            center,
                            polygonCoords,
                            onPolygonEdit,
                            zoom = 20,
                            hideControls = false,
                        }: RoofMapProps) => {

    const map = useMap();

    useEffect(() => {
        if (map && center) {
            map.setCenter(center);
            map.setZoom(zoom);
        }
    }, [map, center, zoom]);

    const [isDrawingMode, setIsDrawingMode] = useState(false);
    const [drawnCoords, setDrawnCoords]     = useState<{ lat: number; lng: number }[] | undefined>(undefined);
    const [drawnPointCount, setDrawnPointCount] = useState(0);
    const [finishSignal, setFinishSignal]   = useState(0);

    const activeCoords = drawnCoords ?? polygonCoords;

    const startDrawing = () => {
        setIsDrawingMode(true);
        setDrawnCoords(undefined);
        setDrawnPointCount(0);
    };

    const resetToDetected = () => {
        setIsDrawingMode(false);
        setDrawnCoords(undefined);
        setDrawnPointCount(0);
        if (polygonCoords) onPolygonEdit?.(polygonCoords);
    };

    const cancelDrawing = () => {
        setIsDrawingMode(false);
        setDrawnPointCount(0);
    };

    const handlePolygonComplete = useCallback((coords: { lat: number; lng: number }[]) => {
        setDrawnCoords(coords);
        setIsDrawingMode(false);
        setDrawnPointCount(0);
        onPolygonEdit?.(coords);
    }, [onPolygonEdit]);

    return (
        <div className="mt-6 border-4 border-white shadow-2xl rounded-xl overflow-hidden relative">
            <div style={{ width: "100%", height: "400px" }}>
                <Map
                    defaultCenter={center}
                    defaultZoom={zoom}
                    mapTypeId="satellite"
                    disableDefaultUI={true}
                    gestureHandling={'greedy'}
                    tilt={0}
                    style={{ width: "100%", height: "100%" }}
                >
                    {activeCoords && !isDrawingMode && !hideControls && (
                        <EditablePolygon
                            coords={activeCoords}
                            onEdit={onPolygonEdit}
                        />
                    )}

                    {isDrawingMode && (
                        <ManualDrawOverlay
                            onPolygonComplete={handlePolygonComplete}
                            onPointsChange={setDrawnPointCount}
                            finishSignal={finishSignal}
                        />
                    )}
                </Map>
            </div>

            {/* Toolbar */}
            {!hideControls && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {!isDrawingMode ? (
                        <>
                            <div className="relative bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="16" x2="12" y2="12" />
                                    <line x1="12" y1="8" x2="12.01" y2="8" />
                                </svg>
                                Drag points to adjust roof edges

                            </div>
                            <button
                                onClick={startDrawing}
                                className="flex cursor-pointer items-center gap-1.5 bg-white hover:bg-gray-100 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg transition-all active:scale-95 border border-gray-200"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                                Redraw Roof
                            </button>
                            {drawnCoords && (
                                <button
                                    onClick={resetToDetected}
                                    className="bg-white/80 hover:bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all border border-gray-100"
                                >
                                    ↺ Reset
                                </button>
                            )}
                        </>
                    ) : (
                        <div className="flex items-center gap-2">
                            <div className="bg-black/70 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/10 animate-pulse">
                                🖊️ Click to place points — click first point to close
                            </div>
                            {drawnPointCount >= 3 && (
                                <button
                                    onClick={() => setFinishSignal((n) => n + 1)}
                                    className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow transition-all border border-emerald-400"
                                >
                                    ✓ Finish Shape
                                </button>
                            )}
                            <button
                                onClick={cancelDrawing}
                                className="bg-white/80 cursor-pointer hover:bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all border border-gray-100"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// ─── Editable Polygon ─────────────────────────────────────────────────────────
// Unchanged — imperative google.maps.Polygon API.

interface EditablePolygonProps {
    coords: { lat: number; lng: number }[];
    onEdit?: (coords: { lat: number; lng: number }[]) => void;
}

function EditablePolygon({ coords, onEdit }: EditablePolygonProps) {
    const map        = useMap();
    const polygonRef = useRef<google.maps.Polygon | null>(null);

    useEffect(() => {
        if (polygonRef.current) {
            polygonRef.current.setPaths(coords);
        }
    }, [coords]);

    useEffect(() => {
        if (!map) return;

        const polygon = new google.maps.Polygon({
            map,
            paths: coords,
            fillColor: "#3b82f6",
            fillOpacity: 0.25,
            strokeColor: "#2563eb",
            strokeWeight: 2.5,
            editable: true,
            draggable: false,
            zIndex: 1,
        });

        polygonRef.current = polygon;

        const readCoords = () => {
            if (!onEdit) return;
            const path = polygon.getPath();
            const updated = path.getArray().map((ll) => ({ lat: ll.lat(), lng: ll.lng() }));
            onEdit(updated);
        };

        const path        = polygon.getPath();
        const mouseUp     = polygon.addListener("mouseup",  readCoords);
        const dragEnd     = polygon.addListener("dragend",  readCoords);
        const insertAt    = google.maps.event.addListener(path, "insert_at",    readCoords);
        const removeAt    = google.maps.event.addListener(path, "remove_at",    readCoords);
        const setAt       = google.maps.event.addListener(path, "set_at",       readCoords);

        return () => {
            google.maps.event.removeListener(mouseUp);
            google.maps.event.removeListener(dragEnd);
            google.maps.event.removeListener(insertAt);
            google.maps.event.removeListener(removeAt);
            google.maps.event.removeListener(setAt);
            polygon.setMap(null);
            polygonRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    return null;
}

// ─── Manual Draw Overlay ────────────────────────────────────────────────────
// Replaces DrawingManager (removed by Google in Maps JS API v3.65+).
// Click on the map to place points; click near the first point (or press
// "Finish Shape") to close the polygon. Uses the "geometry" library for
// distance-based proximity detection on the "click first point to close" UX.

interface DrawingOverlayProps {
    onPolygonComplete: (coords: { lat: number; lng: number }[]) => void;
    onPointsChange?: (count: number) => void;
    finishSignal: number;
}

function ManualDrawOverlay({ onPolygonComplete, onPointsChange, finishSignal }: DrawingOverlayProps) {
    const map        = useMap();
    const geometry   = useMapsLibrary("geometry");

    const pointsRef  = useRef<google.maps.LatLng[]>([]);
    const polygonRef = useRef<google.maps.Polygon | null>(null);
    const markersRef = useRef<google.maps.Marker[]>([]);
    const finishRef  = useRef<() => void>(() => {});

    useEffect(() => {
        if (!map) return;

        const polygon = new google.maps.Polygon({
            map,
            paths: [],
            fillColor: "#3b82f6",
            fillOpacity: 0.25,
            strokeColor: "#2563eb",
            strokeWeight: 2.5,
            clickable: false,
            zIndex: 2,
        });
        polygonRef.current = polygon;

        const clearAll = () => {
            polygon.setMap(null);
            markersRef.current.forEach((m) => m.setMap(null));
            markersRef.current = [];
            pointsRef.current = [];
            onPointsChange?.(0);
        };

        const finish = () => {
            if (pointsRef.current.length < 3) return;
            const coords = pointsRef.current.map((ll) => ({ lat: ll.lat(), lng: ll.lng() }));
            clearAll();
            onPolygonComplete(coords);
        };
        finishRef.current = finish;

        const addPoint = (latLng: google.maps.LatLng) => {
            pointsRef.current.push(latLng);
            polygon.setPath(pointsRef.current);
            onPointsChange?.(pointsRef.current.length);

            const marker = new google.maps.Marker({
                position: latLng,
                map,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 5,
                    fillColor: "#2563eb",
                    fillOpacity: 1,
                    strokeColor: "#fff",
                    strokeWeight: 2,
                },
            });
            markersRef.current.push(marker);
        };

        const clickListener = map.addListener("click", (e: google.maps.MapMouseEvent) => {
            if (!e.latLng) return;

            // Close the shape if clicking near the first placed point
            if (pointsRef.current.length >= 3 && geometry) {
                const firstPos = pointsRef.current[0];
                const dist = geometry.spherical.computeDistanceBetween(firstPos, e.latLng);
                const zoomLevel = map.getZoom() ?? 20;
                const metersPerPixel =
                    (156543.03392 * Math.cos((firstPos.lat() * Math.PI) / 180)) / Math.pow(2, zoomLevel);
                const closeThresholdMeters = metersPerPixel * 14; // ~14px tolerance

                if (dist < closeThresholdMeters) {
                    finish();
                    return;
                }
            }

            addPoint(e.latLng);
        });

        return () => {
            google.maps.event.removeListener(clickListener);
            clearAll();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, geometry]);

    // External "Finish Shape" button trigger
    useEffect(() => {
        if (finishSignal > 0) finishRef.current();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [finishSignal]);

    return null;
}