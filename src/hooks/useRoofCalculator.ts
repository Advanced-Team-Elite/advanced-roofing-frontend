// src/hooks/useRoofCalculator.ts
import { RoofingQuoteRequest, QuoteBreakdown } from "@/types/roofing";

export const useRoofCalculator = () => {
    const calculateQuote = ({ sections }: RoofingQuoteRequest): QuoteBreakdown => {
        let totalMaterialCost = 0;
        let totalLaborCost = 0;
        let totalRemovalCost = 0;

        sections.forEach((section) => {
            let baseRatePerSqFt = section.material === "flat_tpo" ? 6.5 : 4.5;

            if (section.material === "asphalt_shingle") {
                if (section.pitch === "medium") baseRatePerSqFt += 0.5;
                if (section.pitch === "steep") baseRatePerSqFt += 1.2;
                if (section.pitch === "high_steep") baseRatePerSqFt += 2.0;
            }

            const matCost = Math.round(section.areaSqFt * baseRatePerSqFt * 0.45);
            const labCost = Math.round(section.areaSqFt * baseRatePerSqFt * 0.55);
            const remCost =
                section.material === "flat_tpo"
                    ? 0
                    : Math.round(section.areaSqFt * 0.75 * section.layersToRemove);

            totalMaterialCost += matCost;
            totalLaborCost += labCost;
            totalRemovalCost += remCost;
        });

        return {
            materialCost: totalMaterialCost,
            laborCost: totalLaborCost,
            removalCost: totalRemovalCost,
            total: totalMaterialCost + totalLaborCost + totalRemovalCost,
        };
    };

    return { calculateQuote };
};