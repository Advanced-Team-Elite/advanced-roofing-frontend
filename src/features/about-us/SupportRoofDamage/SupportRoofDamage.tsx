"use client";
import React from 'react';
import styles from './SupportRoofDamage.module.css';
// Asegúrate de tener el FlairIcon disponible
import { FlairIcon} from "@/shared/Icons/Icons";

const SupportRoofDamage = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.flexLayout}>

                    {/* Columna de Imagen con borde amarillo */}
                    <div className={styles.imageColumn}>
                        <img
                            src="/assets/images/features/about-us/content-v9.png"
                            alt="Roof Inspection Support"
                            className={styles.mainImage}
                        />
                    </div>

                    {/* Columna de Texto */}
                    <div className={styles.textColumn}>
                        <div className={styles.iconWrapper}>
                            <FlairIcon size={150} />
                        </div>

                        <h2 className={styles.title}>24/7 Support for Roof Damage</h2>

                        <p className={styles.paragraph}>
                            Severe storms often leave behind more than visible damage, hidden issues can compromise your roof’s integrity over time. That’s why Advanced Roofing Team Construction provides 24/7 storm response and comprehensive damage assessments across the Greater Chicagoland Area.
                        </p>

                        <p className={styles.paragraph}>
                            Our Haag Certified team has completed advanced training to properly evaluate storm-related damage from hail, high winds, and other severe conditions. We conduct detailed inspections, capture photo documentation, and assist with the insurance process to help protect your investment.
                        </p>

                        <p className={styles.paragraph}>
                            Whether you're recovering from storm damage or planning a full roof replacement, our team is ready to help.
                        </p>

                        {/* Bloque CTA Azul */}
                        <div className={styles.ctaBox}>
                            <p className={styles.ctaText}>
                                Call <a href="tel:8472629774" className={styles.phoneLink}>(847) 262-9774</a> or <a href="/contact" className={styles.contactLink}>contact us online</a> to schedule a service and request your free estimate today.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SupportRoofDamage;