"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import EmergencyRoofRepair from "@/features/roofing/emergency-roof-repairs/EmergencyRoofRepair/EmergencyRoofRepair";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import {StepByStep} from "@/features/roofing/emergency-roof-repairs/StepByStep/StepByStep";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {WhyChicagoRely} from "@/features/roofing/emergency-roof-repairs/WhyChicagoRely/WhyChicagoRely";
import FrequentlyQuestions from "@/features/roofing/emergency-roof-repairs/FrequentlyQuestions/FrequentlyQuestions";

export const EmergencyRoofRepairsContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.webp"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <EmergencyRoofRepair />
                <ProductRecomendation/>
                <StepByStep/>
                <WhyChicagoRely/>
                <ImageGalleryRow/>
                <FrequentlyQuestions/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};