"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {TileRoofChicago} from "@/features/roofing/tile-roof-repair/TileRoofChicago/TileRoofChicago";
import {HomeownersChooseUs} from "@/features/roofing/tile-roof-repair/HomeownersChooseUs/HomeownersChooseUs";
import {LocalConsiderations} from "@/features/roofing/tile-roof-repair/LocalConsiderations/LocalConsiderations";
import {
    FrequentlyQuestionsTileRoof
} from "@/features/roofing/tile-roof-repair/FrequentlyQuestionsTileRoof/FrequentlyQuestionsTileRoof";

export const TileRoofRepairContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <TileRoofChicago />
                <ProductRecomendation/>
                <HomeownersChooseUs/>
                <LocalConsiderations/>
                <ImageGalleryRow/>
                <FrequentlyQuestionsTileRoof/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};