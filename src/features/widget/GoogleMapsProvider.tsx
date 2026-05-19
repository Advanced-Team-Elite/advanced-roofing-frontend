"use client";
/**
 * GoogleMapsProvider — unified loader
 *
 * Previously used useJsApiLoader from @react-google-maps/api.
 * Now uses APIProvider from @vis.gl/react-google-maps.
 *
 * ONE loader for the entire app — CoverageMap and QuoteDrawer both
 * consume the same google.maps global, eliminating the dual-loader
 * conflict that caused "google.maps.Map is not a constructor".
 *
 * Libraries loaded: places, drawing, geometry
 * (drawing is required by DrawingManager / "Edit Roof" button)
 */

import { APIProvider } from "@vis.gl/react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "@/lib/google-maps";
import { ReactNode } from "react";

const LIBRARIES = ["places", "drawing", "geometry"] as const;

export const GoogleMapsProvider = ({ children }: { children: ReactNode }) => {
    return (
        <APIProvider
            apiKey={GOOGLE_MAPS_API_KEY}
            libraries={[...LIBRARIES]}
            onLoad={() => console.debug("[Maps] SDK loaded")}
            onError={(e) => console.error("[Maps] Load error", e)}
        >
            {children}
        </APIProvider>
    );
};