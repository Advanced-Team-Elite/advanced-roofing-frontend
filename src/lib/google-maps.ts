export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

// Definimos las librerías fuera del componente para evitar re-renders innecesarios
export const MAPS_LIBRARIES: ("places" | "geometry" | "drawing" | "visualization")[] = ["places"];

export const DEFAULT_CENTER = {
    lat: 41.8781, // Coordenadas base de Chicago
    lng: -87.6298,
};