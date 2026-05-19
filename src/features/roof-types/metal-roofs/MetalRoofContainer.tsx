"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {
    AdvancedConstructionAdvantage
} from "@/features/roof-types/shingle-roofing/AdvancedConstructionAdvantage/AdvancedConstructionAdvantage";
import {FlatRoofInstallation} from "@/features/roof-types/flat-roofs/FlatRoofInstallation/FlatRoofInstallation";
import {HowWeFlat} from "@/features/roof-types/flat-roofs/HowWeFlat/HowWeFlat";
import {ComprehensiveFlat} from "@/features/roof-types/flat-roofs/ComprehensiveFlat/ComprehensiveFlat";
import FrequentlyQuestionsFlatRoof
    from "@/features/roof-types/flat-roofs/FrequentlyQuestionsFlatRoof/FrequentlyQuestionsFlatRoof";
import {MetalRoofInstallation} from "@/features/roof-types/metal-roofs/MetalRoofInstallation/MetalRoofInstallation";
import {ExpectMetal} from "@/features/roof-types/metal-roofs/ExpectMetal/ExpectMetal";
import {WhyTrustMetal} from "@/features/roof-types/metal-roofs/WhyTrustMetal/WhyTrustMetal";
import FrequentlyQuestionsMetalRoof
    from "@/features/roof-types/metal-roofs/FrequentlyQuestionsMetalRoof/FrequentlyQuestionsMetalRoof";

export const MetalRoofContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.webp"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <MetalRoofInstallation />
                <ProductRecomendation/>
                <ExpectMetal/>
                <WhyTrustMetal/>
                <ImageGalleryRow/>
                <FrequentlyQuestionsMetalRoof/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};