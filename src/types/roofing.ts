export type RoofMaterial = 'asphalt_shingle' | 'flat_tpo';

export type RoofPitch = 'shallow' | 'medium' | 'steep' | 'high_steep';

export type DetectedPitch = RoofPitch | 'flat';

export interface RoofingQuoteRequest {
    address: string;
    squareFeet: number;
    material: RoofMaterial;
    pitch: RoofPitch;
    layersToRemove: number;
}

export interface QuoteBreakdown {
    materialCost: number;
    laborCost: number;
    removalCost: number;
    total: number;
}

export interface RoofDetectionData {
    detectedAreaSqFt: number;
    detectedPitchDegrees: number;
    roofPolygon: { lat: number; lng: number }[];
}