'use client';
import WhyChooseUs from "@/features/home/WhyChooseUs/WhyChooseUs";
import OurServices from "@/features/home/OurServices/OurServices";
import HappyCustomers from "@/features/home/HappyCustomers/HappyCustomers";
import ContactUs from "@/features/home/ContactUs/ContactUs";
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import VideoBanner from "@/shared/components/VideoBanner/VideoBanner";
import AwardsBanner from "@/shared/components/AwardsBanner/AwardsBanner";
import RoofingInNaperville from "@/features/areas-we-serve/naperville-il/RoofingInNaperville/RoofingInNaperville";
import {ServingNaperville} from "@/features/areas-we-serve/naperville-il/ServingNaperville/ServingNaperville";

export default function NapervilleIlContainer() {
    return (
        <main>
            <VideoBanner showSubtitle={true}/>
            <AwardsBanner />

            <RoofingInNaperville />
            <ServingNaperville/>

            <WhyChooseUs />
            <OurServices />
            <HappyCustomers />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>
        </main>
    );
}