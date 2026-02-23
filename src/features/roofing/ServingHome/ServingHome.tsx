"use client";
import React from 'react';
import styles from './ServingHome.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const ServingHome = () => {
    return (
        <section className={styles.servingSection}>
            <div className={styles.container}>

                {/* Bloque de Texto: Izquierda en Desktop, Abajo en Mobile */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Chicago Roofing Services</h2>
                    <h3 className={styles.subtitle}>
                        Serving Homes & Businesses Across the Greater <br/> Chicagoland Area — We've Got You Covered
                    </h3>

                    <p className={styles.paragraph}>
                        When your roof reaches the end of its lifespan or a storm leaves damage behind,
                        having a reliable team makes all the difference. At{' '}
                        <Link href="/about-us" className={styles.inlineLink}>
                            Advanced Roofing Team Construction
                        </Link>
                        , we help homeowners and businesses across Chicago with full roof
                        installations, replacements, and storm recovery support.
                    </p>

                    <h4 className={styles.listHeader}>What you get when you work with us:</h4>
                    <ul className={styles.benefitList}>
                        <li>Over 20 years of hands-on roofing experience</li>
                        <li>GAF Master Elite and Owens Corning Preferred Contractor credentials</li>
                        <li>Complete roofing solutions for homes and commercial properties</li>
                        <li>Guidance through the insurance process after hail, wind, or storm damage</li>
                        <li>24/7 emergency response</li>
                        <li>Free estimates to help you plan with confidence</li>
                        <li>Insured service with dependable warranties</li>
                    </ul>

                    <div className={styles.contactBanner}>
                        <p className={styles.contactText}>
                            Call <a href="tel:8472629774">(847) 262-9774</a> or <Link href="/contact"><strong className={styles.contactUs}>contact us online</strong></Link> today and talk to one of our team about your roofing needs.
                        </p>
                    </div>
                </div>

                {/* Bloque de Imagen: Derecha en Desktop, Arriba en Mobile */}
                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/images/features/roofing/content-v10.png"
                                alt="Chicago Roofing Services"
                                className={styles.mainImage}
                            />
                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
};

export default ServingHome;