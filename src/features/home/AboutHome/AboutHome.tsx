'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AboutHome.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const AboutHome = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* Bloque Izquierdo: Contenido con Padding Proporcional */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Chicago Roofing Company</h2>
                    <h3 className={styles.subtitle}>24/7 Emergency Roof Response Across Greater Chicagoland</h3>

                    <p className={styles.paragraph}>
                        When it comes to protecting your property, your roof plays one of the most important roles.
                        At{' '}
                        <Link href="/" className={styles.highlight}>
                            Advanced Roofing Team Construction
                        </Link>
                        , we help homeowners and businesses across Chicago with professional{' '}
                        <Link href="/services/roofing/roof-installation-replacement" className={styles.highlight}>
                            roof installations and full replacements
                        </Link>{' '}
                        designed to handle our region's unpredictable weather.
                    </p>

                    <p className={styles.paragraph}>
                        Whether you’re upgrading an aging roof or dealing with the aftermath of storm damage,
                        we’re here to guide you through the process with dependable service and straightforward communication.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p>
                            Call <strong>(847) 262-9774</strong> today or{' '}
                            <Link href="/contact-us" className={styles.yellowLink}>
                                contact us online
                            </Link>{' '}
                            to schedule your free estimate with our experienced Chicago roofing team.
                        </p>
                    </div>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <br></br>
                        <h2 className={styles.subtitle}>Trusted Roof Replacement & Installation Across Chicago</h2>

                        <p className={styles.paragraph}>
                            Your roof is the first line of defense, and over time, even the most durable materials need to be replaced.
                            We provide complete roof installation and replacement services for residential and commercial properties
                            across Chicago and the Greater Chicagoland Area.
                            Our team works with high-quality materials from recognized manufacturers to install
                            roofing systems built to withstand Chicago’s weather extremes, including high winds, hail,
                            snow, and temperature shifts. With more than two decades of roofing experience, we
                            understand what it takes to deliver reliable results.
                        </p>
                    </div>

                    {/* Botón Continue Reading con línea superior como en image_2dd7d7.jpg */}
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

                {/* Bloque Derecho: Imagen Full a Sangre */}
                <ScrollReveal direction="right" >
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/home/content-v14.png"
                                alt="Chicago Roofing"
                                width={1000}
                                height={800}
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};