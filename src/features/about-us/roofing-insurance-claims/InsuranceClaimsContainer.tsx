"use client";
import React from 'react';
import SharedBanner from "@/features/about-us/SharedBanner";
import WorkWithInsurance from "@/features/about-us/roofing-insurance-claims/WorkWithInsurance/WorkWithInsurance";
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness
    from "@/features/about-us/roofing-insurance-claims/AwardWinningBusiness/AwardWinningBusiness";
import {
    EnsuringCompensation
} from "@/features/about-us/roofing-insurance-claims/EnsuringCompensation/EnsuringCompensation";
import RoofingHappyCustomers
    from "@/features/about-us/roofing-insurance-claims/RoofingHappyCustomers/RoofingHappyCustomers";

const InsuranceClaimsContainer = () => {
    return (
        <main>
            <SharedBanner
                title="Roofing Insurance Claims"
                isCityVisible={false}
            />
            <WorkWithInsurance/>
            <AboutOurServices/>
            <AwardWinningBusiness/>
            <EnsuringCompensation/>
            <RoofingHappyCustomers/>
        </main>
    );
};

export default InsuranceClaimsContainer;