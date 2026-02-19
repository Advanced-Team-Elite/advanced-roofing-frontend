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
import {ChicagoShingleRoofing} from "@/features/roof-types/shingle-roofing/ChicagoShingleRoofing/ChicagoShingleRoofing";
import {WhyShingleRoofing} from "@/features/roof-types/shingle-roofing/WhyShingleRoofing/WhyShingleRoofing";
import {TimeForShingle} from "@/features/roof-types/shingle-roofing/TimeForShingle/TimeForShingle";
import {
    AdvancedConstructionAdvantage
} from "@/features/roof-types/shingle-roofing/AdvancedConstructionAdvantage/AdvancedConstructionAdvantage";

export const ShingleRoofingContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <ChicagoShingleRoofing />
                <ProductRecomendation/>
                <WhyShingleRoofing/>
                <TimeForShingle/>
                <ImageGalleryRow/>
                <AdvancedConstructionAdvantage/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};