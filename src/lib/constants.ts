export const CHICAGO_ROOFING_PRICES = {
    SQUARE_FOOT_UNIT: 100,

    MATERIALS: {
        asphalt_shingle: 0, // precio varía por pitch — ver LABOR_BY_PITCH
        flat_tpo: 1250,     // ✅ Peter Mar 2026: $1,250/sq incl. insulation
    },

    // Asphalt shingle: precio total por sq (material + labor) según pitch
    // flat = TPO territory, pero si alguien elige asphalt flat → $1,250 también
    LABOR_BY_PITCH: {
        flat:       1250, // 0/12
        shallow:    425,  // 4/12–6/12
        medium:     450,  // 7/12–8/12
        steep:      470,  // 9/12–11/12
        high_steep: 500,  // 12/12
    },

    REMOVAL_PER_LAYER_SQ: 30, // ✅ Peter Mar 2026 — por capa, independiente del pitch
};