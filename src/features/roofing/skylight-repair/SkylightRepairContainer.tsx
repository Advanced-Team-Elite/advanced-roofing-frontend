"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {SkylightRepair} from "@/features/roofing/skylight-repair/SkylightRepair/SkylightRepair";
import {ChicagoSkylight} from "@/features/roofing/skylight-repair/ChicagoSkylight/ChicagoSkylight";
import {WhyOwnersTrust} from "@/features/roofing/skylight-repair/WhyOwnersTrust/WhyOwnersTrust";
import {
    FrequentlyQuestionsSkylightRepair
} from "@/features/roofing/skylight-repair/FrequentlyQuestionsSkylightRepair/FrequentlyQuestionsSkylightRepair";

export const SkylightRepairContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <SkylightRepair />
                <ProductRecomendation/>
                <ChicagoSkylight/>
                <WhyOwnersTrust/>
                <ImageGalleryRow/>
                <FrequentlyQuestionsSkylightRepair/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};