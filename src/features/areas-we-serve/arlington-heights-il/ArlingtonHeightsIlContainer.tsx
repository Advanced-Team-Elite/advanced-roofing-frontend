'use client';
import {AboutHome} from "@/features/home/AboutHome/AboutHome";
import {StormRecovery} from "@/features/home/StormRecovery/StormRecovery";
import WhyChooseUs from "@/features/home/WhyChooseUs/WhyChooseUs";
import OurServices from "@/features/home/OurServices/OurServices";
import HappyCustomers from "@/features/home/HappyCustomers/HappyCustomers";
import ContactUs from "@/features/home/ContactUs/ContactUs";
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import VideoBanner from "@/shared/components/VideoBanner/VideoBanner";
import AwardsBanner from "@/shared/components/AwardsBanner/AwardsBanner";
import {RoofingServicesSection} from "@/shared/components/RoofingServicesSection/RoofingServicesSection";
import {HandleRoofingProjectSection} from "@/shared/components/HandleRoofingProjectSection/HandleRoofingProjectSection";

export default function ArlingtonHeightsIlContainer() {
    return (
        <main>
            {/* --- HERO SECTION --- */}
            <VideoBanner showSubtitle={true}/>
            <AwardsBanner />
            <WhyChooseUs />
            <OurServices />
            <HappyCustomers />

            <RoofingServicesSection title="ARLINGTON HEIGHTS ROOFING SERVICES" imageSrc="/assets/images/features/about-us/content-v6.png" />
            <HandleRoofingProjectSection city={"Arlington "}/>

            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>

        </main>
    );
}