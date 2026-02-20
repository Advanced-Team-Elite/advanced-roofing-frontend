'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhatExpectSkylightInstallation.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const WhatExpectSkylightInstallation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <ScrollReveal direction="right">
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
                </ScrollReveal>


                {/* RIGHT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        What to Expect During Your Skylight Installation in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        Every home has unique features, which means each skylight installation requires thoughtful planning and clear communication. When you partner with us for skylight installation, we focus on safe, durable results using time-tested processes:
                    </p>

                    <ul className={styles.benefitsList}>
                        <li>
                            <strong>Initial site visit:</strong> We assess your space, advise on the best
                            placement, and take precise measurements for a skylight that suits your roof
                            and maximizes optimal light.
                        </li>
                        <li>
                            <strong>Material and product selection:</strong> We help you choose skylights
                            built to withstand the temperature swings in Illinois, strong winds, and the
                            weight of winter snow.
                        </li>
                        <li>
                            <strong>Professional installation:</strong> Our team follows the manufacturer's
                            instructions and adheres to strict local building codes, utilizing high-quality
                            materials and proven techniques that safeguard against leaks and drafts.
                        </li>
                        <li>
                            <strong>Insurance and documentation:</strong> If insurance is involved, we
                            manage the documentation process, communicating directly and keeping your
                            claim on track.
                        </li>
                        <li>
                            <strong>Post-installation check:</strong> After completing the installation,
                            we review the new feature with you, address any care or maintenance questions,
                            and explain the available product warranties.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>

                        We handle residential and smaller{' '}
                        <Link href="/commercial-roofing/" className={styles.blueLink}>
                            commercial projects
                        </Link>{' '}
                        with care, adjusting each installation to the roof type and building age. Because Chicago weather changes quickly, we plan your skylight installation around favorable conditions to limit exposure during construction. Don't hesitate to call the experts when it comes to skylight installation
                        {' '}
                        <Link href="/reviews/" className={styles.blueLink}>
                            Chicago residents trust.
                        </Link>{' '}
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Avoid costly leaks and structural issues by choosing our guaranteed, weather-tight installation.
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

            </div>
        </section>
    );
};
