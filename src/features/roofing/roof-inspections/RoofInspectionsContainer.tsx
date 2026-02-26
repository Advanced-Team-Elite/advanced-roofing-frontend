"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {RoofingMaterials} from "@/features/roofing/roof-installation-replacement/RoofingMaterials/RoofingMaterials";
import {TimeToReplace} from "@/features/roofing/roof-installation-replacement/TimeToReplace/TimeToReplace";
import {RoofInspector} from "@/features/roofing/roof-inspections/RoofInspector/RoofInspector";
import FrequentlyQuestions from "@/features/roofing/emergency-roof-repairs/FrequentlyQuestions/FrequentlyQuestions";
import FrequentlyQuestionsInspections
    from "@/features/roofing/roof-inspections/FrequentlyQuestionsInspections/FrequentlyQuestionsInspections";
import {ExpectFromChicago} from "@/features/roofing/roof-inspections/ExpectFromChicago/ExpectFromChicago";
import {WhyTrustChicago} from "@/features/roofing/roof-inspections/WhyTrustChicago/WhyTrustChicago";

export const RoofInspectionsContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.webp"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <RoofInspector />
                <ProductRecomendation/>

                <ExpectFromChicago/>
                <WhyTrustChicago/>

                <ImageGalleryRow/>
                <FrequentlyQuestionsInspections/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};