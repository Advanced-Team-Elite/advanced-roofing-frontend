"use client";
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import ServingHome from "@/features/roofing/ServingHome/ServingHome";
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness from "@/shared/components/AwardWinningBusiness/AwardWinningBusiness";
import RoofingHappyCustomers from "@/shared/components/RoofingHappyCustomers/RoofingHappyCustomers";
import ComercialSolutions from "@/features/roofing/ComercialSolutions/ComercialSolutions";
import RoofingProjects from "@/features/roofing/RoofingProjects/RoofingProjects";
import {Footer} from "@/shared/components/layout/footer/Footer";
import ContactUsByClaim from "@/shared/components/ContactUsByClaim/ContactUsByClaim";
import ContactUsByEstimating from "@/shared/components/ContactUsByEstimating/ContactUsByEstimating";
import {ChicagoRoofingServices} from "@/features/commercial-roofing/ChicagoRoofingServices/ChicagoRoofingServices";
import {RoofInspections} from "@/features/commercial-roofing/RoofInspections/RoofInspections";
import {
    FrequentlyQuestionsCommercial
} from "@/features/commercial-roofing/FrequentlyQuestionsCommercial/FrequentlyQuestionsCommercial";
import {ContactUsForWeather} from "@/shared/components/ContactUsForWeather/ContactUsForWeather";

export const CommercialRoofingContainer = () => {
    return (
        <div className={styles.mainWrapper}>

            <SharedBanner
                title="Commercial Roofing"
                isCityVisible={false}
                isIconVisible={true}
                backgroundImage={"/assets/images/features/roofing/banner-v4.jpg"}
            />

            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <ChicagoRoofingServices/>
                    <AboutOurServices/>
                    <AwardWinningBusiness/>
                    <RoofInspections/>
                    <RoofingHappyCustomers/>
                    <FrequentlyQuestionsCommercial/>

                </div>
            </section>


            <Footer upperSection={<ContactUsForWeather/>}/>
        </div>
    );
};