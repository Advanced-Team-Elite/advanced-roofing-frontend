"use client";
import React from 'react';
import Link from 'next/link';
import styles from './AdvancedConstructionAdvantage.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

export const AdvancedConstructionAdvantage = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>
                <h2 className={styles.mainTitle}>The Advanced Roofing Team Construction Advantage</h2>
            </div>

            <div className={styles.container}>
                {/* COLUMNA IZQUIERDA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <p>
                            We’ve been serving homeowners and businesses across Chicago since 2004, delivering straightforward service and durable results. Our team brings extensive experience, especially when navigating storm damage situations or insurance claims.
                        </p>
                        <br/>
                        <p> <strong>What you get when you work with us:</strong> </p>

                        <ul className={styles.processList}>
                            <li>
                                24/7 emergency response for storm-related roofing needs
                            </li>
                            <li>
                                <Link href="/about-us/gaf-master-elite" className={styles.linkHighlight}>
                                    GAF Master Elite
                                </Link>
                                {' '}and{' '}
                                <Link href="/about-us/owens-corning" className={styles.linkHighlight}>
                                    Owens Corning Preferred Contractor
                                </Link>
                                {' '}status
                            </li>
                            <li>
                                Trained catastrophe inspectors experienced in storm assessments
                            </li>
                        </ul>

                        <p>If recent weather left your roof in rough shape, we can help determine if a full shingle replacement is the best option. Our team handles inspections, documentation, and works with your insurance provider when needed.</p>
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <h3>Let’s Talk About Your New Shingle Roof</h3>
                        <p>
                            If you're ready to upgrade your property with durable shingle roofing, Advanced Roofing Team Construction is here to help. We provide professional installation across Chicago and the surrounding area, backed by dependable materials and responsive service.
                        </p>
                    </div>

                    {/* BANNER NEGRO */}
                    <div className={styles.blackBanner}>
                        <p>
                            Call <span>(847) 262-9774</span> or{' '}
                            <Link href="/contact-us" className={styles.yellowLink}>
                                contact us online
                            </Link>{' '}
                            today to get started with your free estimate.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.footerBtn}>
                <Link href="/contact-us" className={styles.contactLink}>
                    <button className={styles.contactBtn}>Contact Us</button>
                </Link>
            </div>
        </section>
    );
};