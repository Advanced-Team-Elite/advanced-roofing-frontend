"use client";
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness from "@/shared/components/AwardWinningBusiness/AwardWinningBusiness";
import RoofingHappyCustomers from "@/shared/components/RoofingHappyCustomers/RoofingHappyCustomers";
import {Footer} from "@/shared/components/layout/footer/Footer";
import ContactUsByEstimating from "@/shared/components/ContactUsByEstimating/ContactUsByEstimating";
import {RoofTypesForChicago} from "@/features/roof-types/RoofTypesForChicago/RoofTypesForChicago";
import {ChoosingRoof} from "@/features/roof-types/ChoosingRoof/ChoosingRoof";

export const RoofTypesContainer = () => {
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

                    <RoofTypesForChicago/>
                    <AboutOurServices/>
                    <AwardWinningBusiness/>
                    <ChoosingRoof/>
                    <RoofingHappyCustomers/>

                </div>
            </section>


            <Footer upperSection={<ContactUsByEstimating/>}/>
        </div>
    );
};