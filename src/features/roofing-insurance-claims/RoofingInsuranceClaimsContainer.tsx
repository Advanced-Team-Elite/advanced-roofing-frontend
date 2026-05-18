"use client";
import SharedBanner from "@/shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import AboutOurServices from "@/shared/components/AboutOurServices/AboutOurServices";
import AwardWinningBusiness from "@/shared/components/AwardWinningBusiness/AwardWinningBusiness";
import RoofingHappyCustomers from "@/shared/components/RoofingHappyCustomers/RoofingHappyCustomers";
import {Footer} from "@/shared/components/layout/footer/Footer";
import {WorkDirectly} from "@/features/roofing-insurance-claims/WorkDirectly/WorkDirectly";
import {GetCompensation} from "@/features/roofing-insurance-claims/GetCompensation/GetCompensation";
import {ContactUsByAccurate} from "@/shared/components/ContactUsByAccurate/ContactUsByAccurate";

export const RoofingInsuranceClaimsContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Property Evidence Report"
                isCityVisible={false}
                isIconVisible={true}
                backgroundImage={"/assets/images/features/roofing/banner-v3.webp"}
            />

            {/* Contenido principal debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <WorkDirectly/>
                    <AboutOurServices/>
                    <AwardWinningBusiness/>
                    <GetCompensation/>
                    <RoofingHappyCustomers/>

                </div>
            </section>


            <Footer upperSection={<ContactUsByAccurate/>}/>
        </div>
    );
};