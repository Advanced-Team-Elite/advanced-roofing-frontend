"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import FlatRoofRepair from "@/features/roofing/flat-roof-repair/WhatExpectFromUs/FlatRoofRepair";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import FrequentlyQuestionsRoofRepair
    from "@/features/roofing/flat-roof-repair/FrequentlyQuestionsRoofRepair/FrequentlyQuestionsRoofRepair";
import {WhatToExpect} from "@/features/roofing/flat-roof-repair/WhatToExpect/WhatToExpect";
import {FlatRoofChicago} from "@/features/roofing/flat-roof-repair/FlatRoofChicago/FlatRoofChicago";

export const FlatRoofRepairContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.webp"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <FlatRoofRepair />
                <ProductRecomendation/>

                <WhatToExpect/>
                <FlatRoofChicago/>

                <ImageGalleryRow/>
                <FrequentlyQuestionsRoofRepair/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};