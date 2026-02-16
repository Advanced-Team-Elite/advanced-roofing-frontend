'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhyTrustChicago.module.css';
import Link from "next/link";

export const WhyTrustChicago = () => {
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
                        Why Trust Our Roof Inspection Team in Chicago?
                    </h2>

                    <p className={styles.paragraph}>
                        Our team uncovers issues others overlook and translates our findings into custom recommendations you can understand and use right away. Here are other reasons why
                        {' '}
                        <Link href="/reviews" className={styles.yellowLink}>
                            Chicago residents trust us
                        </Link>{' '}
                        :
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>Full-service support:</strong> From your initial call to delivering
                            inspection documents, we handle every detail and keep the process stress-free.
                        </li>
                        <li>
                            <strong>Storm & hail damage focus:</strong> We understand the roof damage common
                            in Chicago’s climate, and our inspections catch even subtle issues left behind
                            by recent storms.
                        </li>
                        <li>
                            <strong>Industry-trained staff familiar with Chicago codes:</strong> Our team
                            stays current with local building laws, insurance policies, and advances in
                            roofing materials to help avoid costly mistakes.
                        </li>
                        <li>
                            <strong>24/7 availability for emergencies:</strong> We respond quickly,
                            especially if you need an urgent inspection after a storm or sudden damage.
                        </li>
                        <li>
                            <strong>Clear, open communication:</strong> We explain every finding in direct
                            language, so you always know what your options are and what steps to take next.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Many companies focus on speed alone, but we go deeper for accurate, Chicago-specific results. Roof inspectors in this city must tackle challenges unique to the Midwest—steep temperature swings, lake-effect moisture, and city codes updated in response to local weather events.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Don't wait for a small issue to become a major leak
                                Contact us at <a href="tel:8472629774" className={styles.yellowLink}><strong>(847) 262-9774</strong></a> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                for proactive roof maintenance.
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

            </div>
        </section>
    );
};
