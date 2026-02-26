'use client';

import Image from 'next/image';
import styles from './ServingPalatine.module.css';
import {useState} from "react";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ServingPalatine = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right" distance={40}>
                                <Image
                                    src="/assets/images/features/home/content-v15.webp"
                                    alt="Roofing worker repairing storm damage"
                                    width={600}
                                    height={500}
                                    className={styles.mainImage}
                                />
                            </ScrollReveal>

                        </div>
                    </div>
                </div>

                {/* Bloque de Texto */}
                <div className={styles.textContent}>
                    <h3 className={styles.title} style={{ marginTop: '20px' }}>
                        Advanced Roofing Team Construction: Trusted Roofers Since 2004
                    </h3>

                    <p className={styles.paragraph}>
                        With decades of experience across the Greater Chicagoland Area, our team delivers reliable roofing solutions built around your property’s needs. Whether you’re replacing an aging roof or recovering from storm damage, we’re here to guide you every step of the way.
                    </p>

                    <p className={styles.textBold}>
                        <strong>What sets us apart:</strong>
                    </p>

                    <ul className={styles.benefitsList}>
                        <li>Haag Certified team with advanced training to assess storm-related roof damage</li>
                        <li>Direct communication with your insurance provider when needed</li>
                        <li>Fully insured service with available warranty options</li>
                        <li>24/7 emergency response for storm-related roofing needs</li>
                    </ul>

                    <p className={styles.paragraph}>
                        Severe weather can leave behind both visible and hidden roof damage. Our inspectors provide detailed evaluations, thorough documentation, and support throughout the insurance process to help prevent overlooked issues.
                    </p>

                    <p className={styles.paragraph}>
                        We focus on clear communication, quality workmanship, and helping property owners navigate storm recovery or planned roofing projects with confidence.
                    </p>

                    {/* PARTE EXPANDIBLE */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>



                        <h4 className={styles.question}>Request a Free Roofing Estimate Today</h4>
                        <p className={styles.paragraph}>
                            If you’re dealing with storm damage or it’s time to upgrade your roof, Advanced Roofing Team Construction is ready to help. Our team provides full roof replacements, storm assessments, and dependable roofing systems designed for Illinois properties.
                        </p>

                        {/* Banner dentro de la parte expandible con los 2 links solicitados */}
                        <div className={styles.ctaBanner} style={{ marginTop: '30px' }}>
                            <p style={{ textAlign: 'center', margin: 0 }}>
                                Call {' '}
                                <Link href="tel:(847) 262-9774">
                                    <strong>(847) 262-9774</strong>
                                </Link>
                                {' '} or {' '}
                                <Link href="/contact" className={styles.yellowLink}>
                                    contact us online
                                </Link>{' '}
                                to schedule your free estimate or storm damage inspection. Let’s protect your home or business with the right roofing solution.
                            </p>
                        </div>
                    </div>

                    <div className={styles.readMoreWrapper}>
                        <button
                            className={styles.readMoreBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Continue Reading'}
                            <span className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ''}`}>∨</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};