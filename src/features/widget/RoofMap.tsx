"use client";
/**
 * RoofMap — migrated from @react-google-maps/api to @vis.gl/react-google-maps
 *
 * Components replaced:
 *   GoogleMap     → <Map> from @vis.gl
 *   Polygon       → google.maps.Polygon via useEffect (imperative API)
 *   DrawingManager → google.maps.drawing.DrawingManager via useMapsLibrary('drawing')
 *
 * Behavior is identical to the original:
 *   - Shows detected roof polygon, editable via drag points
 *   - "Redraw Roof" button activates DrawingManager for manual polygon draw
 *   - "Reset" restores the originally detected polygon
 *   - hideControls prop hides toolbar + polygon (preview-only mode)
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

    const map = useMap(); // Obtenemos la instancia del mapa

    // Sincronizar el mapa cuando el centro cambia (ej. el usuario busca otra dirección)
    useEffect(() => {
        if (map && center) {
            map.setCenter(center);
            map.setZoom(zoom);
        }
    }, [map, center, zoom]);

    const [isDrawingMode, setIsDrawingMode] = useState(false);
    const [drawnCoords, setDrawnCoords]     = useState<{ lat: number; lng: number }[] | undefined>(undefined);

    const activeCoords = drawnCoords ?? polygonCoords;

    const startDrawing   = () => { setIsDrawingMode(true); setDrawnCoords(undefined); };
    const resetToDetected = () => {
        setIsDrawingMode(false);
        setDrawnCoords(undefined);
        if (polygonCoords) onPolygonEdit?.(polygonCoords);
    };

    const handlePolygonComplete = useCallback((coords: { lat: number; lng: number }[]) => {
        setDrawnCoords(coords);
        setIsDrawingMode(false);
        onPolygonEdit?.(coords);
    }, [onPolygonEdit]);

    return (
        <div className="mt-6 border-4 border-white shadow-2xl rounded-xl overflow-hidden relative">
            {/* Fixed pixel height — no vh units to avoid dead-zone bug */}
            <div style={{ width: "100%", height: "400px" }}>
                <Map
                    defaultCenter={center}
                    defaultZoom={zoom}
                    mapTypeId="satellite"
                    disableDefaultUI={true}
                    gestureHandling={'greedy'} // Mejora la experiencia en móviles/scroll
                    tilt={0}
                    style={{ width: "100%", height: "100%" }}
                >
                    {/* Editable polygon — shown when not in drawing mode */}
                    {activeCoords && !isDrawingMode && !hideControls && (
                        <EditablePolygon
                            coords={activeCoords}
                            onEdit={onPolygonEdit}
                        />
                    )}

                    {/* Drawing manager — shown when redraw mode is active */}
                    {isDrawingMode && (
                        <DrawingOverlay onPolygonComplete={handlePolygonComplete} />
                    )}
                </Map>
            </div>

            {/* Toolbar */}
            {!hideControls && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                    {!isDrawingMode ? (
                        <>
                            <div className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                                Drag points to adjust roof edges
                            </div>
                            <button
                                onClick={startDrawing}
                                className="flex items-center gap-1.5 bg-white hover:bg-gray-100 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg transition-all active:scale-95 border border-gray-200"
                            >
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
                                🖊️ Click to place points — Click first point to close shape
                            </div>
                            <button
                                onClick={() => setIsDrawingMode(false)}
                                className="bg-white/80 hover:bg-white text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow transition-all border border-gray-100"
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
// Uses the imperative google.maps.Polygon API directly — same approach as
// AreaPolygon in CoverageMap, consistent across the codebase.

interface EditablePolygonProps {
    coords: { lat: number; lng: number }[];
    onEdit?: (coords: { lat: number; lng: number }[]) => void;
}

function EditablePolygon({ coords, onEdit }: EditablePolygonProps) {
    const map        = useMap();
    const polygonRef = useRef<google.maps.Polygon | null>(null);

    // Sync coords from parent (e.g. after reset)
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

        // Listen to vertex drag + insertion
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
    }, [map]); // stable: polygon is recreated only when map changes

    return null;
}

// ─── Drawing Overlay ──────────────────────────────────────────────────────────
// Mounts a DrawingManager for free-hand polygon drawing.
// Uses useMapsLibrary('drawing') — same library already loaded by
// GoogleMapsProvider, zero extra network cost.

interface DrawingOverlayProps {
    onPolygonComplete: (coords: { lat: number; lng: number }[]) => void;
}

function DrawingOverlay({ onPolygonComplete }: DrawingOverlayProps) {
    const map         = useMap();
    const drawingLib  = useMapsLibrary("drawing");

    useEffect(() => {
        if (!map || !drawingLib) return;

        const dm = new drawingLib.DrawingManager({
            map,
            drawingMode: google.maps.drawing.OverlayType.POLYGON,
            drawingControl: false,
            polygonOptions: {
                fillColor: "#3b82f6",
                fillOpacity: 0.25,
                strokeColor: "#2563eb",
                strokeWeight: 2.5,
                editable: true,
                draggable: false,
                zIndex: 2,
            },
        });

        const listener = dm.addListener("polygoncomplete", (poly: google.maps.Polygon) => {
            const path   = poly.getPath();
            const coords = path.getArray().map((ll) => ({ lat: ll.lat(), lng: ll.lng() }));
            poly.setMap(null);   // remove the drawn overlay
            dm.setMap(null);     // deactivate drawing manager
            onPolygonComplete(coords);
        });

        return () => {
            google.maps.event.removeListener(listener);
            dm.setMap(null);
        };
    }, [map, drawingLib, onPolygonComplete]);

    return null;
}