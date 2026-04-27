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
import StatsBar from "@/features/home/StatsBar/StatsBar";
import StormAlert from "@/shared/components/StormAlert/StormAlert";
import AdvancedIsHere from "@/features/home/AdvancedIsHere/AdvancedIsHere";
import BeforeAndAfter from "@/features/home/BeforeAndAfter/BeforeAndAfter";
import StormDamageCheck from "@/features/home/StormDamageCheck/StormDamageCheck";
import OurProjects from "@/features/home/OurProjects/OurProjects";
import Financing from "@/features/home/Financing/Financing";
import {NowServing} from "@/features/home/NowServing/NowServing";

export default function HomeContainer({ dbReviews }: { dbReviews: any[] }) {
    return (
        <main>
            {/* --- HERO SECTION --- */}
            <VideoBanner showSubtitle={true}/>
            <NowServing/>
            <StormAlert />
            <OurServices />
            <StatsBar/>
            <AboutHome />
            <StormRecovery />
            <AwardsBanner />
            <WhyChooseUs />
            <AdvancedIsHere/>
            <BeforeAndAfter/>
            <StormDamageCheck/>
            <OurProjects/>
            <Financing/>
            <MoreThanRoofing />
            <HappyCustomers dbReviews={dbReviews} />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>

        </main>
    );
}