"use client";
import SharedBanner from "./SharedBanner";
import styles from './SharedBanner.module.css';
import AboutUs from "@/features/about-us/AboutUs/AboutUs";

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

                </div>
            </section>
        </div>
    );
};

export default AboutContainer;