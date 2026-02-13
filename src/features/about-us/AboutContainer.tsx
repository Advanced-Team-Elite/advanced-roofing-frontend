"use client";
import SharedBanner from "../../shared/components/SharedBanner/SharedBanner";
import styles from '../../shared/components/SharedBanner/SharedBanner.module.css';
import AboutUs from "@/features/about-us/AboutUs/AboutUs";
import Support from "@/features/about-us/Support/Support";
import WhyChoose from "@/features/about-us/WhyChoose/WhyChoose";
import SupportRoofDamage from "@/features/about-us/SupportRoofDamage/SupportRoofDamage";

const AboutContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Get to Know Us"
                isCityVisible={true}
            />

            {/* Contenido principal que respira debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>

                    <AboutUs />
                    <Support />
                    <WhyChoose />
                    <SupportRoofDamage />

                </div>
            </section>
        </div>
    );
};

export default AboutContainer;