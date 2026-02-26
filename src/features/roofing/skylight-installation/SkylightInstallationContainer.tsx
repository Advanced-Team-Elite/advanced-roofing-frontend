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
import {SkylightInstallation} from "@/features/roofing/skylight-installation/SkylightInstallation/SkylightInstallation";
import {
    WhySkylightInstallation
} from "@/features/roofing/skylight-installation/WhySkylightInstallation/WhySkylightInstallation";
import {
    WhatExpectSkylightInstallation
} from "@/features/roofing/skylight-installation/WhatExpectSkylightInstallation/WhatExpectSkylightInstallation";
import {
    FrequentlyQuestionsSkylightInstallation
} from "@/features/roofing/skylight-installation/FrequentlyQuestionsSkylightInstallation/FrequentlyQuestionsSkylightInstallation";

export const SkylightInstallationContainer = () => {
    return (
        <div>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <RoofingBanner imagePath={"/assets/images/features/roofing/banner-v1.webp"}/>

            {/* Contenido principal que respira debajo de la imagen */}
            <section>
                <SkylightInstallation />
                <ProductRecomendation/>

                <WhySkylightInstallation/>
                <WhatExpectSkylightInstallation/>

                <ImageGalleryRow/>
                <FrequentlyQuestionsSkylightInstallation/>
            </section>

            <Footer upperSection={<FinancingSection/>}/>
        </div>
    );
};