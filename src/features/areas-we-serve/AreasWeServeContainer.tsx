"use client";
import SharedBanner from "../../shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import WhyChoose from "@/features/about-us/WhyChoose/WhyChoose";
import {Footer} from "@/shared/components/layout/footer/Footer";
import ContactToday from "@/shared/components/ContactToday/ContactToday";
import {AreasWeService} from "@/features/areas-we-serve/AreasWeService/AreasWeService";
import {OurServiceAreas} from "@/features/areas-we-serve/OurServiceAreas/OurServiceAreas";
import {TrustedLocal} from "@/features/areas-we-serve/TrustedLocal/TrustedLocal";

export const AreasWeServeContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Proudly Serving Chicago"
                isCityVisible={false}
                backgroundImage={"/assets/images/features/areas-we-serve/banner-v2.webp"}
            />

            {/* Contenido principal que respira debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <AreasWeService />
                    <OurServiceAreas />
                    <WhyChoose />
                    <TrustedLocal />

                </div>
            </section>
            <Footer upperSection={<ContactToday/>}/>
        </div>
    );
};