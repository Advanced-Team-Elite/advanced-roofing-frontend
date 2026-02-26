'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './GutterReplacement.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const GutterReplacement = () => {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Gutter Replacement
                    </h2>

                    <p className={styles.paragraph}>
                        If your current gutters are damaged, pulling away, or no longer handling rain effectively, a replacement may be needed. We provide inspections and honest recommendations to help you decide when an upgrade is the right choice.
                    </p>

                    <p className={styles.boldText}>Common signs your gutters may need replacing include:</p>

                    <ul className={styles.processList}>
                        <li>Sagging or detaching from the structure</li>
                        <li>Cracks, holes, or visible rust</li>
                        <li>Persistent clogging despite regular cleaning</li>
                        <li>Water pooling around your foundation</li>
                    </ul>

                    <p className={styles.paragraph}>
                        All gutter systems are installed with reliable materials suited for Chicago’s changing seasons.
                    </p>

                    <h3 className={styles.subTitle}>Routine Gutter Cleaning & Maintenance</h3>

                    <p className={styles.paragraph}>Keeping your gutters clear of debris helps extend their lifespan and directs water safely away from your property. We offer routine cleaning and maintenance to reduce clogging and wear over time.</p>

                    <p className={styles.paragraph}>Regular upkeep supports the protection of your roofline, siding, and landscaping, especially after storms or seasonal shifts.</p>

                </div>

                {/* RIGHT */}
                <ScrollReveal direction="right">
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/about-us/content-v6.webp"
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
