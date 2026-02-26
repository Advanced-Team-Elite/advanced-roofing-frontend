"use client";
import React from 'react';
import {Footer} from "@/shared/components/layout/footer/Footer";
import RoofingBanner from "@/shared/components/RoofingBanner/RoofingBanner";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import ProductRecomendation from "@/features/roofing/emergency-roof-repairs/ProductRecomendation/ProductRecommendation";
import ImageGalleryRow from "@/shared/components/ImageGalleryRow/ImageGalleryRow";
import {ChicagoStormDamage} from "@/features/roofing/storm-damage-repair/ChicagoStormDamage/ChicagoStormDamage";
import {ThoroughStorm} from "@/features/roofing/storm-damage-repair/ThoroughStorm/ThoroughStorm";
import {RoofWindDamage} from "@/features/roofing/storm-damage-repair/RoofWindDamage/RoofWindDamage";

export const StormDamageRepairContainer = () => {
    return (
        <div>
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1-4.jpg"}/>

            <section>
                <ChicagoStormDamage />
                <ProductRecomendation/>

                <ThoroughStorm/>
                <RoofWindDamage/>

                <ImageGalleryRow/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};