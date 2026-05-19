import { CHICAGO_ROOFING_PRICES } from '@/lib/constants';
import { RoofingQuoteRequest, QuoteBreakdown } from '@/types/roofing';

export const useRoofCalculator = () => {

    const calculateQuote = (data: RoofingQuoteRequest): QuoteBreakdown => {
        const { squareFeet, material, pitch, layersToRemove } = data;

        const squares = squareFeet / CHICAGO_ROOFING_PRICES.SQUARE_FOOT_UNIT;

        let total = 0;
        let materialCost = 0;
        let laborCost = 0;
        let removalCost = 0;

        if (material === "flat_tpo") {
            // TPO: precio fijo por sq, sin pitch ni layers
            materialCost = CHICAGO_ROOFING_PRICES.MATERIALS.flat_tpo * squares;
            total = materialCost;
        } else {
            // Asphalt shingle: precio por pitch (incluye material + labor)
            const ratePerSq = CHICAGO_ROOFING_PRICES.LABOR_BY_PITCH[pitch as keyof typeof CHICAGO_ROOFING_PRICES.LABOR_BY_PITCH] ?? 425;
            laborCost = ratePerSq * squares;

            // Remoción de capas
            removalCost = CHICAGO_ROOFING_PRICES.REMOVAL_PER_LAYER_SQ * layersToRemove * squares;

            total = laborCost + removalCost;
        }

        return {
            materialCost: Number(materialCost.toFixed(2)),
            laborCost:    Number(laborCost.toFixed(2)),
            removalCost:  Number(removalCost.toFixed(2)),
            total:        Number(total.toFixed(2)),
        };
    };

    return { calculateQuote };
};