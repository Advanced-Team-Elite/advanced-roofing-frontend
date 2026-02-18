'use client';
import WhyChooseUs from "@/features/home/WhyChooseUs/WhyChooseUs";
import OurServices from "@/features/home/OurServices/OurServices";
import HappyCustomers from "@/features/home/HappyCustomers/HappyCustomers";
import ContactUs from "@/features/home/ContactUs/ContactUs";
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import VideoBanner from "@/shared/components/VideoBanner/VideoBanner";
import AwardsBanner from "@/shared/components/AwardsBanner/AwardsBanner";
import RoofingInOrland from "@/features/areas-we-serve/orland-park-il/RoofingInOrland/RoofingInOrland";
import {ServingOrland} from "@/features/areas-we-serve/orland-park-il/ServingOrland/ServingOrland";

export default function OrlandParkIlContainer() {
    return (
        <main>
            <VideoBanner showSubtitle={true}/>
            <AwardsBanner />

            <RoofingInOrland />
            <ServingOrland/>

            <WhyChooseUs />
            <OurServices />
            <HappyCustomers />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>
        </main>
    );
}