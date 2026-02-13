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
        </main>
    );
};

export default InsuranceClaimsContainer;