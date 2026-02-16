'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ChicagoSkylight.module.css';
import Link from "next/link";

export const ChicagoSkylight = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        How Our Chicago Skylight Repairs Deliver Long-Term Results
                    </h2>

                    <p className={styles.paragraph}>
                        Understanding Chicago building codes and the impact of severe weather lets us deliver skylight repairs that last. We pay attention to every detail, from matching repair materials to your existing{' '}
                        <Link href="/roofing/" className={styles.inlineLink}>
                            roof
                        </Link>{' '}
                        to ensuring seals can withstand heavy snow and sudden temperature drops. Our familiarity with both historic homes and modern construction enables us to identify issues specific to your property type, thereby protecting its value and style.
                    </p>

                    <p className={styles.paragraph}>
                        For properties in landmark or HOA-guided neighborhoods, our team knows when to expect extra permit steps or documentation. We advise you on important city regulations and help you navigate expectations so your project moves forward smoothly. Using proven repair methods and durable, locally-sourced materials gives your skylight the strength to withstand Chicago’s changing climate year after year. This thorough approach means your home remains safe, comfortable, and filled with natural light.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Need a trusted specialist to fix cracked glass or compromised flashing? Call our experts for guaranteed, long-lasting skylight leak solutions.
                                Contact us at{' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    <strong>(847) 262-9774</strong>
                                </a>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                            </p>
                        </div>
                    </div>

                    <div className={styles.readMoreWrapper}>
                        <button
                            className={styles.readMoreBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Continue Reading'}
                            <span className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ''}`}>∨</span>
                        </button>
                    </div>

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
