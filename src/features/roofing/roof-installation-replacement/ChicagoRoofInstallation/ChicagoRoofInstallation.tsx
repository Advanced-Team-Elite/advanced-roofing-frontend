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

                    <h1 className={styles.mainTitle}>Chicago's Insurance Restoration & Roofing Experts</h1>
                    <h2 className={styles.subTitle}>We Help Homeowners Recover More From Storm Damage Claims While Delivering Quality Roof Replacements.</h2>

                    <div className={styles.textContent}>
                        <p>
                            When it is time for a new roof, partnering with a proven, certified team is essential for long-term property protection. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we provide comprehensive roof installation and full replacement services to residential homeowners and commercial property managers across Chicagoland and the surrounding metropolitan area.
                        </p>

                        <p >
                            Whether your current roof has reached the end of its lifespan or you have suffered severe{' '}
                            <Link href="/roofing/storm-damage-repair/" className={styles.inlineLink}>
                                storm-related damage
                            </Link>{' '}
                            that necessitates a total replacement, our experts guide you through the selection of high-performance materials engineered to endure the region’s extreme weather cycles.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Call us at <Link href="tel:8779456565" className={styles.inlineLink}><strong>(877) 945-6565</strong></Link> or{' '}
                                <Link href="/contact-us/" className={styles.inlineLink}>
                                    schedule your free inspection online
                                </Link>{' '}
                                to get an accurate, no-obligation estimate for your property.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Expert Residential & Commercial Roofing Solutions</h3>

                        <p>
                            We install high-performance roofing systems designed to resist heavy winds, hail, and the rapid temperature fluctuations common throughout Illinois. From complex residential designs to large-scale commercial roofing projects, we bring the industry-leading craftsmanship required to deliver superior, reliable protection.
                        </p>

                        <p className={styles.boldText}>Our professional installation and replacement capabilities include:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                Full-scale roof replacement for single-family homes, multi-family developments, and commercial buildings
                            </li>
                            <li>
                                Advanced storm damage assessments and expert advocacy during the insurance claims process
                            </li>
                            <li>
                                Rapid, 24/7 emergency response for critical roof failures
                            </li>
                            <li>
                                Precision installation of industry-leading, warrantied roofing systems
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChicagoRoofInstallation;