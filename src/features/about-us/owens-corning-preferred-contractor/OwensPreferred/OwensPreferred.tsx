"use client";
import React from 'react';
import styles from './OwensPreferred.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const OwensPreferred = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.flexContainer}>

                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={160} />
                    </div>
                    <h2 className={styles.mainTitle}>Owens Corning Preferred Contractor</h2>

                    <div className={styles.contentWrapper}>
                        <h3 className={styles.subTitle}>QUALITY AND SERVICE LIKE NO OTHER</h3>
                        <p className={styles.paragraph}>
                            As a homeowner, ensuring the integrity of your roof is crucial to protecting your investment and providing peace of mind for years to come. When it comes to selecting a roofing contractor, choosing an Owens Corning Preferred Contractor is a decision that can offer you unparalleled quality, reliability, and assurance.
                        </p>

                        <h3 className={styles.subTitle}>OWENS CORNING, A TRUSTED NAME</h3>
                        <p className={styles.paragraph}>
                            Known for its exceptional products and commitment to excellence. By partnering with Owens Corning, Preferred Contractors have access to top-of-the-line roofing materials that are designed to withstand the test of time and provide superior protection for your home.
                        </p>
                    </div>
                </div>

                <ScrollReveal direction="right" initialOpacity={0.8}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageFrame}>
                            <img
                                src="/assets/images/features/about-us/content-v6.webp"
                                alt="Advanced Roofing Team Truck"
                                className={styles.aboutImage}
                            />
                        </div>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};

export default OwensPreferred;