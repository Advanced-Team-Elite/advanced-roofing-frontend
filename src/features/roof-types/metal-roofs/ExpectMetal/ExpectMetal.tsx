'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ExpectMetal.module.css';
import Link from "next/link";

export const ExpectMetal = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        What to Expect From Your Metal Roofing Project in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        We make the metal roofing process straightforward, guiding you every step of the way. Our approach is hands-on, detail-oriented, and matched to Chicago’s unique building codes and weather conditions. Here is how you will experience the process with Advanced Roofing Team Construction:
                    </p>

                    <ul className={styles.benefitsList}>
                        <li>
                            <strong>Initial call and assessment:</strong> We discuss your goals, answer your questions, and schedule an inspection at your convenience.
                        </li>
                        <li>
                            <strong>On-site inspection and guidance:</strong> Our team evaluates your property and shares honest feedback about the best metal roofing choices for Chicago’s climate.
                        </li>
                        <li>
                            <strong>Professional installation:</strong> Crews work efficiently and with care, minimizing disruptions and keeping you informed throughout.
                        </li>
                        <li>
                            <strong>Final walkthrough:</strong> We review the results together to make sure they meet your expectations and address any remaining concerns.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        City building permits for metal roofing in Chicago often require specific documentation and approval, especially in landmark or historic districts. We keep you up to date on the process and help streamline the experience, reducing any confusion or delays. By offering honest consultations shaped by your preferences and city guidelines, we keep the roofing process clear and focused on your unique needs.
                    </p>

                    <h3 className={styles.sectionHeading}>Cost and Value of Metal Roofing in Chicago</h3>

                    <p className={styles.paragraph}>
                        Budget is a key part of any roofing decision, and understanding how metal compares to other options helps you plan with confidence. While the initial price of a metal system is often higher than basic asphalt shingles, many Chicago owners find that the longer service life, reduced maintenance, and potential energy savings narrow that gap over time. Because metal performs well in high winds, hail, and heavy snow, it can also help reduce the likelihood of frequent repairs after storms move through the area.
                    </p>

                    <p className={styles.paragraph}>
                        We walk you through a clear cost breakdown so you can see how materials, labor, tear-off, and any needed decking repairs contribute to the final number. For some projects in the city or suburbs, keeping an existing deck and improving ventilation can support both comfort and roof longevity. Our team can also discuss financing options that spread project costs into predictable monthly payments, which many Chicago homeowners find helpful when balancing other household expenses with a major upgrade.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.contactBanner}>
                            <p className={styles.contactText}>
                                Ready to save money on cooling with an energy-efficient metal roof?
                                Contact us at <a href="tel:+18472629774">(847) 262-9774</a> or {" "}
                                <Link href="/contact-us">
                                    <strong className={styles.contactUs}>fill out our online form</strong>
                                </Link> to schedule your consultation.
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
                            src="/assets/images/features/about-us/content-v6.webp"
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
