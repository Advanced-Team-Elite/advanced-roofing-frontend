'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TimeToReplace.module.css';
import Link from "next/link";

export const TimeToReplace = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/images/features/roofing/content-v7.png"
                            alt="Chicago Roofing"
                            fill
                            className={styles.mainImage}
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Is It Time to Replace Your Roof?
                    </h2>

                    <p className={styles.paragraph}>
                        Roofs in Chicago face constant exposure to heavy snow, hail, wind, and wide temperature swings. Over time, this can weaken your roof's ability to protect your property.
                    </p>

                    <p className={styles.boldText}>You may want to plan a replacement if you notice:</p>

                    <ul className={styles.processList}>
                        <li>Missing or damaged shingles</li>
                        <li>Sagging rooflines</li>
                        <li>Interior moisture or visible water stains</li>
                        <li>Granules collecting in gutters</li>
                        <li>Noticeable storm damage</li>
                    </ul>

                    <p className={styles.paragraph}>
                        We provide thorough assessments and practical guidance to help you decide when a full replacement makes sense.
                    </p>

                </div>

            </div>
        </section>
    );
};
