"use client";
import React from 'react';
import styles from './RoofTypesForChicago.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const RoofTypesForChicago = () => {
    return (
        <section className={styles.servingSection}>
            <div className={styles.container}>

                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Roof Types for Chicago Homes & Businesses</h2>
                    <h3 className={styles.subtitle}>
                        Durable Roofing Options Installed Across the Greater Chicagoland Area
                    </h3>

                    <p className={styles.paragraph}>
                        The roof you choose plays a big role in protecting your property, especially in Chicago, where high winds, hail, and unpredictable storms are part of daily life. At{' '}
                        <Link href="/about-us" className={styles.inlineLink}>
                            Advanced Roofing Team Construction
                        </Link>
                        , we install a wide range of roof types for homes and businesses throughout the city and surrounding areas.
                    </p>

                    <h4 className={styles.listHeader}>What you get when you work with us:</h4>
                    <ul className={styles.benefitList}>
                        <li>Over 20 years of hands-on roofing experience</li>
                        <li className={styles.paragraph}>
                            <Link href="/about-us/gaf-masterelite-preferred-contractor/" className={styles.inlineLink}>
                                GAF Master Elite
                            </Link>
                            &nbsp;and&nbsp;
                            <Link href="/about-us/owens-corning-preferred-contractor/" className={styles.inlineLink}>
                                Owens Corning Preferred Contractor
                            </Link>
                            &nbsp;credentials
                        </li>
                        <li>Complete roofing solutions for homes and commercial properties</li>
                        <li>Guidance through the insurance process after hail, wind, or storm damage</li>
                        <li>24/7 emergency response</li>
                        <li>Free estimates to help you plan with confidence</li>
                        <li>Insured service with dependable warranties</li>
                    </ul>

                    <div className={styles.contactBanner}>
                        <p className={styles.contactText}>
                            Call <a href="tel:8472629774">(847) 262-9774</a> or <Link href="/contact"><strong className={styles.contactUs}>contact us online</strong></Link>
                            to request your free estimate. We’ll help you find the right roofing solution for your home or business.
                        </p>
                    </div>
                </div>

                <ScrollReveal direction="right" >
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/images/features/roofing/content-v10.png"
                                alt="Chicago Roofing Services"
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};