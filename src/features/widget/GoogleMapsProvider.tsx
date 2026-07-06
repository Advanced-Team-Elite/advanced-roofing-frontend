"use client";
/**
 * GoogleMapsProvider — unified loader
 *
 * Libraries loaded: places, geometry
 * ("drawing" removed — DrawingManager no longer exists in Maps JS API v3.65+;
 * RoofMap now implements manual click-to-draw using the "geometry" library
 * for proximity detection.)
 */

import { APIProvider } from "@vis.gl/react-google-maps";
import { GOOGLE_MAPS_API_KEY } from "@/lib/google-maps";
import { ReactNode } from "react";

const LIBRARIES = ["places", "geometry"] as const;

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