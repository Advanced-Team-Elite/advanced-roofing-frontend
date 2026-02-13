"use client";
import React from 'react';
import SharedBanner from "@/features/about-us/SharedBanner";
import styles from '../SharedBanner.module.css';
import OwensPreferred from "@/features/about-us/owens-corning-preferred-contractor/OwensPreferred/OwensPreferred";
import KeyBenefits from "@/features/about-us/owens-corning-preferred-contractor/KeyBenefits/KeyBenefits";
import WhyChoose from "@/features/about-us/WhyChoose/WhyChoose";

const OwensPreferredContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Owens Preferred Contractor"
                isCityVisible={true}
            />

            {/* Contenido principal que respira debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <OwensPreferred />
                    <KeyBenefits />
                    <WhyChoose/>
                </div>
            </section>
        </div>
    );
};

export default OwensPreferredContainer;