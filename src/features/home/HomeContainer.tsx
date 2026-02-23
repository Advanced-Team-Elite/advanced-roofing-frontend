'use client';
import {AboutHome} from "@/features/home/AboutHome/AboutHome";
import {StormRecovery} from "@/features/home/StormRecovery/StormRecovery";
import WhyChooseUs from "@/features/home/WhyChooseUs/WhyChooseUs";
import OurServices from "@/features/home/OurServices/OurServices";
import MoreThanRoofing from "@/features/home/MoreThanRoofing/MoreThanRoofing";
import HappyCustomers from "@/features/home/HappyCustomers/HappyCustomers";
import ContactUs from "@/features/home/ContactUs/ContactUs";
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";
import VideoBanner from "@/shared/components/VideoBanner/VideoBanner";
import AwardsBanner from "@/shared/components/AwardsBanner/AwardsBanner";

export default function HomeContainer() {
    return (
        <main>
            {/* --- HERO SECTION --- */}
            <VideoBanner showSubtitle={true}/>
            <OurServices />
            <AboutHome />
            <StormRecovery />
            <AwardsBanner />
            <WhyChooseUs />
            <MoreThanRoofing />
            <HappyCustomers />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>

        </main>
    );
}