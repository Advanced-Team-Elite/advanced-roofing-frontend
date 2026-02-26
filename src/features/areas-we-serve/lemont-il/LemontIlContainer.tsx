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

export default function LemontIlContainer() {
    return (
        <main>
            <VideoBanner showSubtitle={true}/>
            <AwardsBanner />

            <RoofingServicesSection title="LEMONT ROOFING SERVICES" imageSrc="/assets/images/features/home/content-v14.webp" />
            <HandleRoofingProjectSection city={"Lemont "}/>

            <WhyChooseUs />
            <OurServices />
            <HappyCustomers />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>
        </main>
    );
}