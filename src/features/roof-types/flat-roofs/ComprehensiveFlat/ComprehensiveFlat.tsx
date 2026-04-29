'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ComprehensiveFlat.module.css';
import Link from "next/link";

export const ComprehensiveFlat = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/images/features/roofing/content-v7.webp"
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
                        Our Comprehensive Flat Roof Installation & Support Services
                    </h2>

                    <p className={styles.paragraph}>
                        Each type of building—historic, commercial, or residential—calls for a unique approach when it comes to flat roof installation. At Advanced Roofing Team Construction, we clearly explain your options, from industry-leading TPO and EPDM membranes to time-tested modified bitumen. We ensure that every material we recommend withstands Chicago's seasonal extremes and local code requirements. We handle:
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>Material Selection:</strong> We guide you through the benefits and considerations of various flat roofing materials, from energy efficiency to durability in wind, snow, and sunlight.
                        </li>
                        <li>
                            <strong>Seamless Coordination:</strong> Our team plans each phase, schedules to minimize disruptions, and keeps you informed throughout every stage of the roof installation process.
                        </li>
                        <li>
                            <strong>Transparent Cost Guidance:</strong> We provide clear, itemized estimates that clearly outline what to expect, including material and labor costs, using up-to-date pricing.
                        </li>
                        <li>
                            <strong>Post-Installation Support:</strong> We review key maintenance and care tips after installation to help you maximize your roof’s performance and lifespan. Our team remains available to answer any questions at any time you need extra support.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>Our full-service approach makes large installation projects in Chicago feel straightforward and manageable. We establish clear timelines, maintain safe and organized job sites, and are candid about any adjustments that may arise. By prioritizing thorough planning and communication, your project stays on track and in line with local ordinances—giving you peace of mind and long-term value for your property.</p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.contactBanner}>
                            <p className={styles.contactText}>
                                Ready for a professional installation that includes proper drainage and insulation?
                                Contact us at <a href="tel:+18472629774">(847) 262-9774</a> or {" "}
                                <Link href="/contact-us"> <strong className={styles.contactUs}>fill out our online form</strong></Link>.
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
