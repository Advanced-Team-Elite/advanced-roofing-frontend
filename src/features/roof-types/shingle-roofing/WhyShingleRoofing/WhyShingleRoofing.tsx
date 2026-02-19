'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhyShingleRoofing.module.css';
import Link from "next/link";

export const WhyShingleRoofing = () => {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Why Shingle Roofing Works for Chicago Properties
                    </h2>

                    <p className={styles.paragraph}>
                        Asphalt shingles combine affordability, strength, and versatility,
                        making them a practical option for homes and businesses alike.
                        With our region’s unpredictable weather, including high winds, hail, and heavy snow, choosing reliable materials matters.
                    </p>

                    <p><strong>Shingle roofing works well for:</strong></p>

                    <ul className={styles.processList}>
                        <li>
                            Residential homes
                        </li>
                        <li>
                            Multi-family properties and rental units
                        </li>
                        <li>
                            Small to mid-sized commercial buildings
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        We work with leading manufacturers to offer various colors and styles, so your roof complements your property while providing solid protection from the elements.
                    </p>

                </div>

                {/* RIGHT */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/images/features/about-us/content-v6.png"
                            alt="Chicago Roofing"
                            fill
                            className={styles.mainImage}
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
