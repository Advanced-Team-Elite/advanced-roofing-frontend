"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './ChicagoStormDamage.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const ChicagoStormDamage = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.container}>

                {/* Columna del Formulario: Primero en el DOM para que salga arriba en Tablet/Mobile */}
                <div className={styles.formColumn}>
                    <ContactForm />
                </div>

                {/* Columna de Texto: Contenido Exacto del Mockup */}
                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h1 className={styles.mainTitle}>Chicago, IL, Storm Damage Repair </h1>
                    <h2 className={styles.subTitle}>We Offer 24/7 Emergency Help After Wind & Hail Damage Across the Greater Chicagoland Area</h2>

                    <div className={styles.textContent}>
                        <p>
                            In Chicago, storms can arrive fast, bringing high winds, hail, and unpredictable weather that leaves your roof vulnerable. While some damage is easy to spot, other issues may quietly weaken your roof’s ability to protect your property. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we provide storm damage inspections, insurance claim assistance, and full roof replacements when severe weather takes a toll.
                        </p>

                        <p className={styles.textBold}>What you get when you work with us:</p>


                        <ul className={styles.benefitsList}>
                            <li>
                                Serving Chicago and the surrounding metropolitan area since 2004
                            </li>
                            <li>
                                Haag Certified Roof Inspectors trained to accurately assess wind and hail damage
                            </li>
                            <li>
                                <Link href="/about-us/gaf-masterelite-preferred-contractor/" className={styles.inlineLink}>
                                    GAF Master Elite
                                </Link>
                                {' '}and{' '}
                                <Link href="/about-us/owens-corning-preferred-contractor/" className={styles.inlineLink}>
                                    Owens Corning Preferred Contractor
                                </Link>
                                {' '}credentials
                            </li>
                            <li>
                                Fully insured service with available warranty coverage
                            </li>
                            <li>
                                Around-the-clock emergency response
                            </li>
                            <li>
                                Direct insurance claim assistance to simplify the process
                            </li>
                            <li>
                                Free, no-obligation estimates
                            </li>
                        </ul>

                        <h3 className={styles.sectionHeading}>Why Certified Roof Inspections Make a Difference</h3>

                        <p>
                            Storm damage isn’t always obvious from the ground. Even small areas of weakness, if left undetected, can lead to bigger problems down the line. That’s why trained storm inspectors play an important role after severe weather hits.
                        </p>

                        <p>
                            At Advanced Roofing Team Construction, our team combines hands-on experience with advanced certifications to provide trusted, thorough roof evaluations. Whether you're dealing with recent storm impacts or simply want peace of mind after severe weather, we offer professional inspections backed by over 20 years of industry knowledge.
                        </p>

                        <h3 className={styles.sectionHeading}>How Do I Know If My Roof Has Storm Damage?</h3>

                        <p>
                            Storm damage isn’t always easy to see. Signs your roof may need repair include:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>Missing or curled shingles</li>
                            <li>Water stains on ceilings or walls</li>
                            <li>Shingle granules collecting in gutters</li>
                            <li>Dents or cracks caused by hail</li>
                            <li>Drafts or leaks inside your attic</li>
                        </ul>

                        <h3 className={styles.sectionHeading}>What Should I Do Immediately After a Storm?</h3>

                        <p>
                            Safety should always come first. Once the storm passes:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>Check your property from the ground for visible damage</li>
                            <li>Take photos of any damage for insurance purposes</li>
                            <li>Avoid climbing on your roof—it may be unsafe</li>
                            <li>Contact Advanced Roofing Team Construction for a full inspection</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};