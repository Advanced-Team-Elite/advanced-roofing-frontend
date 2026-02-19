"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './ChicagoRoofInstallation.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

const ChicagoRoofInstallation = () => {
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

                    <h1 className={styles.mainTitle}>Chicago Roof Installation & Replacement</h1>
                    <h2 className={styles.subTitle}>Roof Upgrades for Properties Across the Greater Chicagoland Area</h2>

                    <div className={styles.textContent}>
                        <p>
                            When it’s time for a new roof, choosing the right team matters. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we help homeowners and businesses across Chicago and nearby suburbs with complete roof installation and full replacement services built to handle our region’s weather.
                        </p>

                        <p >
                            Whether your roof is showing signs of age or you've experienced{' '}
                            <Link href="/roofing/storm-damage-repair/" className={styles.inlineLink}>
                                storm damage
                            </Link>{' '}
                            that requires a full replacement, we guide you through the process and materials designed for long-term performance.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Call (847) 262-9774 or{' '}
                                <Link href="/contact-us/" className={styles.inlineLink}>
                                    contact us online
                                </Link>{' '}
                                today to schedule a service and get a free estimate.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Residential & Commercial Roof Installation</h3>

                        <p>
                            We install durable roofing systems built to handle the extremes of Illinois weather. Whether it’s for your home, multi-family building, or commercial property, we bring the experience and materials to deliver reliable protection.
                        </p>

                        <p className={styles.boldText}>Our roof installation and replacement services include:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                Full roof replacement for homes, multi-family buildings, and commercial properties
                            </li>
                            <li>
                                Storm assessments and coordination with insurance adjusters for qualified claims
                            </li>
                            <li>
                                24/7 emergency response for storm-related issues
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChicagoRoofInstallation;