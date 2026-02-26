'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhySkylightInstallation.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const WhySkylightInstallation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Why Homeowners Choose Advanced Roofing Team Construction for Skylight Installation
                    </h2>

                    <p className={styles.paragraph}>
                        Your choice of skylight installer matters. Our hands-on, start-to-finish approach means you stay informed, confident, and supported. With us, you receive:
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>Personalized guidance:</strong> We answer questions and communicate
                            each step, so you always know what’s coming next.
                        </li>
                        <li>
                            <strong>Clear documentation:</strong> We handle detailed measurements and site
                            assessments to ensure your skylight fits perfectly and meets your goals.
                        </li>
                        <li>
                            <strong>Advocacy during{' '}
                                <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                                    insurance claims:
                                </Link></strong>{' '}
                            If storm damage or coverage is an issue, we work with you to ensure all
                            losses are properly assessed and included in your claim.
                        </li>
                        <li>
                            <strong>Responsive scheduling:</strong> Our flexible approach and 24/7
                            availability mean you get prompt service when it matters most.
                        </li>
                        <li>
                            <strong>Full-service support:</strong> From{' '}
                            <Link href="/roofing/skylight-repair/" className={styles.inlineLink}>
                                emergency repairs
                            </Link>{' '}
                            to final installation, we manage every phase, ensuring a smooth and
                            stress-free process for you.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our commitment goes beyond completing the installation. We offer products backed by manufacturer warranties for extra assurance. Chicago's diverse roofs require tailored solutions, and our team adjusts methods for different styles, from classic city homes to contemporary designs. With our detailed documentation, you can address
                        {' '}
                        <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                            insurance claims
                        </Link>{' '}
                        smoothly if recent weather has caused damage. We aim to make the entire skylight installation process easy and transparent, so you remain confident throughout the entire process.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Ready to enhance your home's appeal and energy efficiency with modern, insulated skylights?
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
                <ScrollReveal direction="right">
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/about-us/content-v6.webp"
                                alt="Advanced Roofing Team Truck"
                                fill
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};
