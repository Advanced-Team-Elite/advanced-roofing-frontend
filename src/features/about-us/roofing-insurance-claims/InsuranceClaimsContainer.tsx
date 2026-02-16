"use client";
import React from 'react';
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import WorkWithInsurance from "@/features/about-us/roofing-insurance-claims/WorkWithInsurance/WorkWithInsurance";
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness
    from "@/shared/components/AwardWinningBusiness/AwardWinningBusiness";
import {
    EnsuringCompensation
} from "@/features/about-us/roofing-insurance-claims/EnsuringCompensation/EnsuringCompensation";
import RoofingHappyCustomers
    from "@/shared/components/RoofingHappyCustomers/RoofingHappyCustomers";
import {Footer} from "@/shared/components/layout/footer/Footer";
import ContactUsByClaim from "@/shared/components/ContactUsByClaim/ContactUsByClaim";

const InsuranceClaimsContainer = () => {
    return (
        <main>
            <SharedBanner
                title="Roofing Insurance Claims"
                isCityVisible={false}
                isIconVisible={true}
                backgroundImage={"/assets/images/features/roofing/banner-v3.jpg"}
            />
            <WorkWithInsurance/>
            <AboutOurServices/>
            <AwardWinningBusiness/>
            <EnsuringCompensation/>
            <RoofingHappyCustomers/>

            <Footer upperSection={<ContactUsByClaim/>}/>
        </main>
    );
};

export default InsuranceClaimsContainer;