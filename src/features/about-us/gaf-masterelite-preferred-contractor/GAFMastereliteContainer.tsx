"use client";
import React from 'react';
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import {GafPreferred} from "@/features/about-us/gaf-masterelite-preferred-contractor/GafPreferred/GafPreferred";
import WarrantyProgram from "@/features/about-us/gaf-masterelite-preferred-contractor/WarrantyProgram/WarrantyProgram";
import WhyChoose from "@/features/about-us/WhyChoose/WhyChoose";
import {Footer} from "@/shared/components/layout/footer/Footer";
import ContactToday from "@/shared/components/ContactToday/ContactToday";

const GAFMastereliteContainer = () => {
    return (
        <main>
            <SharedBanner
                title="GAF Master Elite Roofing Contractor"
                isCityVisible={true}
            />
            <GafPreferred/>
            <WarrantyProgram/>
            <WhyChoose/>

            <Footer upperSection={<ContactToday/>}/>
        </main>
    );
};

export default GAFMastereliteContainer;