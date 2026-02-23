"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './GutterServices.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const GutterServices = () => {
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

                    <h1 className={styles.mainTitle}>Chicago, IL, Gutter Services</h1>
                    <h2 className={styles.subTitle}>Gutter Installation & Replacement for Properties Across the Greater Chicagoland Area</h2>

                    <div className={styles.textContent}>
                        <p>
                            A dependable gutter system plays a key role in protecting your property from water damage. At
                            {" "}<Link href="/about-us" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>
                            , we install durable gutters designed to keep rainwater flowing away from your roof, siding, and foundation. Whether you’re building new or upgrading an older system, we provide straightforward gutter installation and replacement services across Chicago and nearby communities.
                        </p>

                        <h2 className={styles.subTitle}>Our Seamless Gutter Installation </h2>

                        <p>We provide complete gutter installation and replacement for both residential and commercial properties. Every project begins with accurate measurements and recommendations based on your building’s design.</p>

                        <p className={styles.boldText}>Available gutter options include:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Seamless aluminum.</strong> Durable, low-maintenance, and designed to reduce leaks
                            </li>
                            <li>
                                <strong>Copper.</strong> Adds a finished look while offering long-term durability
                            </li>
                            <li>
                                <strong>Gutter guards.</strong> Helps minimize clogging from leaves or debris
                            </li>
                        </ul>

                        <p>Our team handles the full process, from removing old materials to installing your new system with care and precision.</p>


                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Contact us at (847) 262-9774 or through our{' '}
                                <Link href="/contact-us/" className={styles.blueLink}>
                                    online form
                                </Link>{' '}
                                for your free estimate.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};