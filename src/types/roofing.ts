// src/types/roofing.ts
export type RoofMaterial = 'asphalt_shingle' | 'flat_tpo';

export type RoofPitch = 'shallow' | 'medium' | 'steep' | 'high_steep';

export type DetectedPitch = RoofPitch | 'flat';

export interface RoofSection {
    id: string;
    name: string; // ej. "Main Roof", "Section B", "Porch"
    coords: { lat: number; lng: number }[];
    areaSqFt: number;
    material: RoofMaterial;
    pitch: RoofPitch;
    // Grado exacto medido con la herramienta de Street View (opcional).
    // El pricing sigue usando `pitch` (la categoría) — este campo es solo
    // para mostrar el dato preciso que originó esa categoría.
    pitchDegrees?: number;
    layersToRemove: number;
    color?: string; // Para diferenciar visulamente los polígonos en el mapa
}

export interface RoofingQuoteRequest {
    address: string;
    sections: RoofSection[];
}

export interface QuoteBreakdown {
    materialCost: number;
    laborCost: number;
    removalCost: number;
    total: number;
}