"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import ChicagoRoofInstallation
    from "@/features/roofing/roof-installation-replacement/ChicagoRoofInstallation/ChicagoRoofInstallation";
import {RoofingMaterials} from "@/features/roofing/roof-installation-replacement/RoofingMaterials/RoofingMaterials";
import {TimeToReplace} from "@/features/roofing/roof-installation-replacement/TimeToReplace/TimeToReplace";
import StormDamage from "@/features/roofing/roof-installation-replacement/StormDamage/StormDamage";
import {SidingServices} from "@/features/roofing/siding/SidingServices/SidingServices";
import FrequentlyQuestions from "@/features/roofing/emergency-roof-repairs/FrequentlyQuestions/FrequentlyQuestions";
import {FrequentlyQuestionsSiding} from "@/features/roofing/siding/FrequentlyQuestionsSiding/FrequentlyQuestionsSiding";

export const SidingContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1-3.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <SidingServices />
                <ProductRecomendation/>
                <FrequentlyQuestionsSiding/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};