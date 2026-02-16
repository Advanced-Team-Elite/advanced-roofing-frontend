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
import {ChicagoStormDamage} from "@/features/roofing/storm-damage-repair/ChicagoStormDamage/ChicagoStormDamage";
import {ThoroughStorm} from "@/features/roofing/storm-damage-repair/ThoroughStorm/ThoroughStorm";
import {RoofWindDamage} from "@/features/roofing/storm-damage-repair/RoofWindDamage/RoofWindDamage";

export const StormDamageRepairContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1-4.jpg"}/>

            {/* Contenido principal que respira debajo de la imagen */}
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