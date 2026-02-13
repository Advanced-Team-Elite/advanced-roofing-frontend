"use client";
import React from 'react';
import styles from './AwardWinningBusiness.module.css';

const logos = [
    { src: "/assets/images/features/home/AngiesList.png", alt: "Angie's List Super Service Award" },
    { src: "/assets/images/features/home/gaf-certified-logo.png", alt: "GAF Certified" },
    { src: "/assets/images/features/home/Haag-Commercial-Logo.png", alt: "HAAG Certified Inspector" },
    { src: "/assets/images/features/home/PreferredContractor_OwensCorning.png", alt: "Owens Corning Preferred Contractor" },
    { src: "/assets/images/features/home/Haag-Commercial-Logo.png", alt: "HAAG Certified Inspector" },
    { src: "/assets/images/features/home/AngiesList_2019.png", alt: "Angie's List 2019 Award" },
];

const AwardWinningBusiness = () => {
    return (
        <section className={styles.awardSection}>
            <div className={styles.container}>

                {/* Carro arriba en mobile, derecha en desktop */}
                <div className={styles.imageColumn}>
                    <img
                        src="/assets/images/features/about-us/content-v6.png"
                        alt="Advanced Roofing Truck"
                        className={styles.truckImage}
                    />
                </div>

                <div className={styles.contentColumn}>
                    <h2 className={styles.mainTitle}>
                        Award-Winning Business
                    </h2>

                    <div className={styles.logoGrid}>
                        {logos.map((logo, index) => (
                            <div key={index} className={`${styles.logoWrapper} ${styles[`logo-${index}`]}`}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={styles.brandLogo}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AwardWinningBusiness;