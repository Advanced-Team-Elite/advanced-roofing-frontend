'use client';

import Image from 'next/image';
import styles from './RoofingInMount.module.css';
import Link from "next/link";
import {useState} from "react";

export default function RoofingInMount() {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Mount Prospect, IL</h2>
                    <h3 className={styles.subtitle}>Advanced Roofing Team Construction: Trusted Roofers for Storm Damage Support & Roof Installations</h3>

                    <p className={styles.paragraph}>
                        Severe weather is nothing new for property owners in Mount Prospect. From hail and high winds to unpredictable Midwest storms, your roof faces constant exposure. When damage happens,{' '}
                        <Link href="/about-us/" className={styles.inlineLink}>Advanced Roofing Team Construction</Link>{' '}
                        provides dependable roofing solutions, including storm-related roof replacements, detailed inspections, and insurance support.
                    </p>

                    <p className={styles.paragraph}>
                        Whether you’re dealing with the effects of a storm or planning a roof upgrade, our team helps make the process straightforward with reliable service from start to finish.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            Call <strong>(847) 262-9774</strong> or{' '}
                            <Link href="/contact" className={styles.yellowLink}>contact us online</Link>{' '}
                            to schedule a service and get a free estimate.
                        </p>
                    </div>
                </div>

                <div className={styles.imageColumn}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/home/content-v14.png"
                                alt="Chicago Roofing"
                                width={1000}
                                height={800}
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};