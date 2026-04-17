"use client";
import { GoogleMap, Polygon, DrawingManager } from "@react-google-maps/api";
import { useMemo, useCallback, useRef, useState } from "react";

interface RoofMapProps {
    center: { lat: number; lng: number };
    polygonCoords?: { lat: number; lng: number }[];
    onPolygonEdit?: (newCoords: { lat: number; lng: number }[]) => void;
    zoom?: number;
    hideControls?: boolean;
}

const MAP_CONTAINER_STYLE = { width: "100%", height: "400px" };

export const RoofMap = ({ center, polygonCoords, onPolygonEdit, zoom = 20, hideControls = false }: RoofMapProps) => {
    const polygonRef = useRef<google.maps.Polygon | null>(null);
    const [isDrawingMode, setIsDrawingMode] = useState(false);
    const [drawnCoords, setDrawnCoords] = useState<{ lat: number; lng: number }[] | undefined>(undefined);

    const activeCoords = drawnCoords ?? polygonCoords;

    const polygonOptions = useMemo<google.maps.PolygonOptions>(() => ({
        fillColor: "#3b82f6",
        fillOpacity: 0.25,
        strokeColor: "#2563eb",
        strokeWeight: 2.5,
        editable: !isDrawingMode,
        draggable: false,
        zIndex: 1,
    }), [isDrawingMode]);

    const drawingManagerOptions = useMemo<google.maps.drawing.DrawingManagerOptions>(() => ({
        drawingMode: "polygon" as google.maps.drawing.OverlayType,
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
    }), []);

    const onEdit = useCallback(() => {
        if (polygonRef.current && onPolygonEdit) {
            const path = polygonRef.current.getPath();
            const coords = path.getArray().map(ll => ({ lat: ll.lat(), lng: ll.lng() }));
            onPolygonEdit(coords);
        }
    }, [onPolygonEdit]);

    const onPolygonComplete = useCallback((poly: google.maps.Polygon) => {
        const path = poly.getPath();
        const coords = path.getArray().map(ll => ({ lat: ll.lat(), lng: ll.lng() }));
        poly.setMap(null);
        setDrawnCoords(coords);
        setIsDrawingMode(false);
        onPolygonEdit?.(coords);
    }, [onPolygonEdit]);

    const startDrawing = () => { setIsDrawingMode(true); setDrawnCoords(undefined); };
    const resetToDetected = () => {
        setIsDrawingMode(false);
        setDrawnCoords(undefined);
        if (polygonCoords) onPolygonEdit?.(polygonCoords);
    };

    return (
        <div className="mt-6 border-4 border-white shadow-2xl rounded-xl overflow-hidden relative">
            <GoogleMap
                mapContainerStyle={MAP_CONTAINER_STYLE}
                center={center}
                zoom={zoom}
                options={{ mapTypeId: "satellite", disableDefaultUI: true, tilt: 0 }}
            >
                {activeCoords && !isDrawingMode && !hideControls && (
                    <Polygon
                        onLoad={(poly) => (polygonRef.current = poly)}
                        paths={activeCoords}
                        options={polygonOptions}
                        onMouseUp={onEdit}
                        onDragEnd={onEdit}
                    />
                )}
                {isDrawingMode && (
                    <DrawingManager
                        options={drawingManagerOptions}
                        onPolygonComplete={onPolygonComplete}
                    />
                )}
            </GoogleMap>

            {/* Toolbar — solo visible después de una búsqueda */}
            {!hideControls && <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {!isDrawingMode ? (
                    <>
                        {/* Tooltip oscuro con blur */}
                        <div className="bg-black/70 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                            Drag points to adjust roof edges
                        </div>

                        {/* Botón Redraw: Fondo blanco, texto negro */}
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
                        {/* Tooltip de dibujo: Ahora igual al de "Drag points" (Negro/70) */}
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
            </div>}
        </div>
    );
};