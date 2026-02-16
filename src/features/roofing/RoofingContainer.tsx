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

const RoofingContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Roofing"
                isCityVisible={false}
                isIconVisible={true}
                backgroundImage={"/assets/images/features/roofing/banner-v3.jpg"}
            />

            {/* Contenido principal que respira debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <ServingHome/>
                    <AboutOurServices/>
                    <AwardWinningBusiness/>
                    <RoofingProjects/>
                    <RoofingHappyCustomers/>
                    <ComercialSolutions/>

                </div>
            </section>


            <Footer upperSection={<ContactUsByEstimating/>}/>
        </div>
    );
};

export default RoofingContainer;