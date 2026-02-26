'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './RoofingMaterials.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const RoofingMaterials = () => {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Roofing Materials We Install
                    </h2>

                    <p className={styles.paragraph}>
                        Every property is different, and the right roofing system depends on style preferences, durability needs, and local climate conditions.
                    </p>

                    <p className={styles.boldParagraph}>
                        We install a variety of roofing systems to suit your property:
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>
                                <Link href="/roof-types/shingle-roofing/" className={styles.inlineLink}>
                                    Asphalt shingles.
                                </Link>
                            </strong>{' '}
                            Popular for affordability and solid weather resistance
                        </li>
                        <li>
                            <strong>Metal roofing.</strong> Known for durability in harsh conditions
                        </li>
                        <li>
                            <strong>Tile or slate.</strong> Adds character with timeless style and strong weather protection
                        </li>
                        <li>
                            <strong>TPO or PVC flat roofing.</strong> Ideal for commercial buildings
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Not sure which material suits your property? We’ll walk you through the options with clear recommendations.
                    </p>

                    <h3  className={styles.columnTitle}>Benefits of Choosing Our Roofing Experts</h3>

                    <ul className={styles.processList}>
                        <li>Decades of combined roofing experience</li>
                        <li>Affordable pricing with no hidden costs</li>
                        <li>Wide range of roofing materials and styles</li>
                        <li>Local knowledge of Chicago’s climate conditions</li>
                        <li>Excellent customer service and ongoing support</li>
                    </ul>

                    <h3  className={styles.columnTitle}>What Roofing Material Is Best for Chicago Homes?</h3>

                    <p className={styles.paragraph}>Choosing the right roofing material depends on your priorities. Asphalt shingles are cost-effective and versatile, while metal roofing provides durability and energy efficiency. Flat roofs are often used for city homes and commercial properties. Our experts at Advanced Roofing Team Construction guide you through the best options based on durability, style, and long-term value.</p>

                </div>

                {/* RIGHT */}
                <ScrollReveal direction="right">
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/about-us/content-v6.png"
                                alt="Advanced Roofing Team Truck"
                                fill
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
