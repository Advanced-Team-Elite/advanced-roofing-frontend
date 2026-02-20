"use client";
import React from 'react';
import styles from './TrustedLocal.module.css';
// Asegúrate de tener el FlairIcon disponible
import { FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const TrustedLocal = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.container}>
                <div className={styles.flexLayout}>

                    {/* Columna de Imagen con borde amarillo */}
                    <div className={styles.imageColumn}>
                        <ScrollReveal direction="right" distance={30}>
                            <img
                                src="/assets/images/features/about-us/content-v9.png"
                                alt="Roof Inspection Support"
                                className={styles.mainImage}
                            />
                        </ScrollReveal>

                    </div>

                    {/* Columna de Texto */}
                    <div className={styles.textColumn}>
                        <div className={styles.iconWrapper}>
                            <FlairIcon size={150} />
                        </div>

                        <h2 className={styles.title}>Trusted Local Roofing Since 2004</h2>

                        <p className={styles.paragraph}>
                            Based in Chicago and serving surrounding suburbs, Advanced Roofing Team Construction understands the unique challenges Midwest properties face, whether it’s hail, high winds, or aging materials. We focus on durable roofing solutions with an emphasis on clear communication and consistent service.
                        </p>

                        <p className={styles.paragraph}>
                            Our customers appreciate the straightforward process we provide, especially when insurance claims come into play after storm damage. You can expect professional support from the initial inspection to the final installation.
                        </p>

                        <h3 className={styles.subtitle}>
                            Talk to Advanced Roofing Team Construction About Roofing in Your Area
                        </h3>

                        <p className={styles.paragraph}>
                            If you’re in Chicago or one of the nearby suburbs, our team is ready to help with your next roofing project. Whether it’s time for a replacement or your property has storm damage, we’re here to walk you through the process.
                        </p>

                        {/* Bloque CTA Azul */}
                        <div className={styles.ctaBox}>
                            <p className={styles.ctaText}>
                                Call <a href="tel:8472629774" className={styles.phoneLink}>(847) 262-9774</a> or <a href="/contact" className={styles.contactLink}>contact us online</a> for a free estimate and learn how we can help protect your home or business across Chicagoland.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};