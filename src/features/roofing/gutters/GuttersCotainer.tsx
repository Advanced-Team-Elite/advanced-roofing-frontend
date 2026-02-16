"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {GutterServices} from "@/features/roofing/gutters/GutterServices/GutterServices";
import {GutterReplacement} from "@/features/roofing/gutters/GutterReplacement/GutterReplacement";
import {WhyGutters} from "@/features/roofing/gutters/WhyGutters/WhyGutters";

export const GuttersContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1-alt.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <GutterServices />
                <ProductRecomendation/>

                <GutterReplacement/>
                <WhyGutters/>

                <ImageGalleryRow/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};