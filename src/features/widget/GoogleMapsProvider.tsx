"use client";
import { useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "@/lib/google-maps";
import { ReactNode } from "react";

// 'drawing' es requerido para el DrawingManager (botón "Edit Roof")
// 'geometry' es requerido para computeArea en handlePolygonEdit
const LIBRARIES: ("places" | "drawing" | "geometry")[] = ["places", "drawing", "geometry"];

export const GoogleMapsProvider = ({ children }: { children: ReactNode }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: LIBRARIES,
    });

    if (loadError) return <div className="p-4 text-red-500">Error loading Maps</div>;
    if (!isLoaded) return <div className="p-4">Loading satellite engine...</div>;

    return <>{children}</>;
};