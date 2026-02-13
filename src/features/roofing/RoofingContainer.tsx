"use client";
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import ServingHome from "@/features/roofing/ServingHome/ServingHome";
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness from "@/shared/components/AwardWinningBusiness/AwardWinningBusiness";
import RoofingHappyCustomers from "@/shared/components/RoofingHappyCustomers/RoofingHappyCustomers";

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

                    <RoofingHappyCustomers/>

                </div>
            </section>
        </div>
    );
};

export default RoofingContainer;