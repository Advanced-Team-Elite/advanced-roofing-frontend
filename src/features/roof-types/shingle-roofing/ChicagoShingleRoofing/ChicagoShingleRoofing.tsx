"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './ChicagoShingleRoofing.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const ChicagoShingleRoofing = () => {
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

                    <h1 className={styles.mainTitle}>Chicago Shingle Roofing Services</h1>
                    <h2 className={styles.subTitle}>Shingle Roofing Installation & Replacement Homes & Businesses</h2>

                    <div className={styles.textContent}>
                        <p>
                            Shingle roofing remains one of the most popular choices for homes and commercial properties across Chicago, and for good reason. Asphalt shingles offer reliable performance, weather resistance, and great curb appeal without stretching your budget.
                        </p>
                        <p>
                            At{' '}
                            <Link href="/about-us/" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>
                            , we install high-quality shingle roofing throughout the Greater Chicagoland Area. Whether you're upgrading your property or replacing
                            {' '}
                            <Link href="/roofing/storm-damage-repair/" className={styles.linkText}>
                                <strong> storm-damaged roofing</strong>
                            </Link>{' '}, our team helps you select shingles that combine durability with style.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Call {' '}
                                <Link href="tel:8472629774">
                                    (847) 262-9774
                                </Link>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    contact us online
                                </Link>{' '}
                                today for a free estimate on shingle roofing.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Types of Shingle Roofing We Install</h3>

                        <h4 className={styles.subSectionHeading}>Architectural Shingles</h4>

                        <p>
                            Sometimes called dimensional shingles, these add a layered look to your roof for more visual depth. Thicker than standard 3-tab shingles, they offer added durability suited to Chicago’s weather.
                        </p>

                        <h4 className={styles.subSectionHeading}>3-Tab Shingles</h4>

                        <p>
                            A cost-effective option with a clean, uniform appearance. Ideal for homeowners looking for dependable coverage that stays within budget.
                        </p>

                        <h4 className={styles.subSectionHeading}>Impact-Resistant Shingles</h4>

                        <p>
                            Designed to better withstand debris, hail, and harsh conditions. A smart choice for properties frequently exposed to storms across the Greater Chicagoland Area.
                        </p>


                    </div>
                </div>

            </div>
        </section>
    );
};