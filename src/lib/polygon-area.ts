// lib/polygon-area.ts
// Calcula el área real de un polígono dibujado por el usuario,
// usando la librería "geometry" de Google Maps (ya cargada en
// GoogleMapsProvider: LIBRARIES = ["places", "geometry"]).

interface LatLng {
    lat: number;
    lng: number;
}

export function computeAreaSqFt(coords: LatLng[]): number {
    if (!coords || coords.length < 3) return 0;
    if (typeof google === "undefined" || !google.maps?.geometry) {
        console.warn("[polygon-area] geometry library not loaded yet");
        return 0;
    }

    const areaMeters2 = google.maps.geometry.spherical.computeArea(coords);
    return Math.round(areaMeters2 * 10.7639); // m² → ft²
}