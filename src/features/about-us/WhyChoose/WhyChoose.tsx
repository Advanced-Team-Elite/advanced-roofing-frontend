"use client";
import React from 'react';
import styles from './WhyChoose.module.css';
import { HammerIcon, HouseIcon, InspectionIcon, ProfessionalIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const WhyChoose = () => {
    return (
        <section
            className={styles.whyChooseSection}
            style={{ backgroundImage: `url('/assets/images/features/about-us/bg-4.jpg')` }}
        >
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h2 className={styles.mainTitle}>Why Choose Advanced <br/> Roofing Team Construction?</h2>

                    <ScrollReveal direction="zoom" >
                        <div className={styles.featuresGrid}>
                            {/* Característica 1 */}
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <HammerIcon size={45} />
                                </div>
                                <h3 className={styles.featureTitle}>Quality Products & Solutions</h3>
                                <p className={styles.featureDescription}>
                                    We use only top-quality products and deliver lasting roofing solutions built to protect your home for years to come.
                                </p>
                            </div>

                            {/* Característica 2 */}
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <HouseIcon size={45} />
                                </div>
                                <h3 className={styles.featureTitle}>Customer Care Focused</h3>
                                <p className={styles.featureDescription}>
                                    We put customers first, offering attentive service, clear communication, and support every step of the way.
                                </p>
                            </div>

                            {/* Característica 3 */}
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <InspectionIcon size={45} />
                                </div>
                                <h3 className={styles.featureTitle}>Free Inspections & Estimates</h3>
                                <p className={styles.featureDescription}>
                                    We offer free estimates and inspections to help you make informed roofing decisions—no pressure, no obligation.
                                </p>
                            </div>

                            {/* Característica 4 */}
                            <div className={styles.featureItem}>
                                <div className={styles.iconBox}>
                                    <ProfessionalIcon size={45} />
                                </div>
                                <h3 className={styles.featureTitle}>Experienced & Professional</h3>
                                <p className={styles.featureDescription}>
                                    Experienced and professional, we deliver reliable roofing solutions with quality craftsmanship and trusted service.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;