'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './TimeForShingle.module.css';
import Link from "next/link";

export const TimeForShingle = () => {

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
                        Know When It’s Time for a New Shingle Roof
                    </h2>

                    <p className={styles.paragraph}>
                        If your roof is aging or showing visible signs of wear, delaying replacement can lead to bigger problems down the line. Spotting early warning signs helps you stay ahead of costly damage and protect your property.
                    </p>

                    <p className={styles.paragraph}>
                        <strong>You may want to plan for a full roof replacement if you’ve noticed:</strong>
                    </p>

                    <ul className={styles.processList}>
                        <li>Missing or curled shingles</li>
                        <li>Bald spots where granules have worn away</li>
                        <li>Dark streaks or visible algae growth</li>
                        <li>Sagging areas or uneven rooflines</li>
                        <li>Water stains inside your home or attic</li>
                        <li>Noticeable storm damage, such as hail dents or debris impacts</li>
                    </ul>

                    <p className={styles.paragraph}>Not all damage is easy to spot from the ground. Our trained team offers thorough inspections to help assess your roof’s condition and discuss your next steps.</p>

                </div>

            </div>
        </section>
    );
};
