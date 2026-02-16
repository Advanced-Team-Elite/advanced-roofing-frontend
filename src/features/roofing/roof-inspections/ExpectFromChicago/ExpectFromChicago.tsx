'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ExpectFromChicago.module.css';
import Link from "next/link";

export const ExpectFromChicago = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        What to Expect from Your Roof Inspection in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        During your roof inspection, we take time to learn about your property and your concerns. We then walk the roof, note details, and measure all key areas, checking for:
                    </p>

                    <ul className={styles.processList}>
                        <li>Shingle bruising, cracks, or missing sections from hail or wind</li>
                        <li>Dented or damaged flashing, valleys, or chimneys</li>
                        <li>Signs of aging, wrinkling, or improper installation</li>
                        <li>Granule loss and details are easy to miss from ground level</li>
                    </ul>

                    <p className={styles.paragraph}>
                        After we complete our assessment, we take photos and thorough notes. Our team prepares a documentation packet, which you can use for insurance claims or to inform contractors should you plan repairs. We account for the latest Chicago building codes so your roof remains protected and compliant under local ordinances. Throughout the process, we talk through our findings, flag urgent risks, and make sure you understand everything before we leave.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Need an expert assessment for an insurance claim or home purchase?
                                Contact us at <a href="tel:8472629774" className={styles.yellowLink}><strong>(847) 262-9774</strong></a> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to get a certified report.
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
