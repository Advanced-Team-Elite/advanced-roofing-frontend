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
import BeforeAndAfter from "@/features/home/BeforeAndAfter/BeforeAndAfter";
import StormDamageCheck from "@/features/home/StormDamageCheck/StormDamageCheck";
import OurProjects from "@/features/home/OurProjects/OurProjects";
import Financing from "@/features/home/Financing/Financing";
import {NowServing} from "@/features/home/NowServing/NowServing";
import {Language} from "@/features/home/Lenguage/Language";
import CoverageMap from "@/features/home/CoverageMap/CoverageMap";
import {TopBannerAward} from "@/features/home/TopBannerAward/TopBannerAward";
import {CareerCarousel} from "@/shared/components/modals/CareerModal";

export default function HomeContainer({ dbReviews }: { dbReviews: any[] }) {
    return (
        <main>
            <CareerCarousel />
            <VideoBanner showSubtitle={true}/>
            <StormAlert />
            <TopBannerAward/>

                {/*<div className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-300">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://radar.weather.gov/"
                            title="Radar en vivo"
                            style={{ border: 'none' }}
                        />
                </div>*/}
            <NowServing/>
            <Language/>
            <StatsBar/>
            <OurServices />
            <AboutHome />
            <AwardsBanner />
            <WhyChooseUs />
            <BeforeAndAfter/>
            <StormDamageCheck/>
            <Financing/>
            <CoverageMap/>
            <OurProjects/>
            <MoreThanRoofing />
            <HappyCustomers dbReviews={dbReviews} />
            <ContactUs />
            <Footer upperSection={<FinancingSection/>}/>

        </main>
    );
}