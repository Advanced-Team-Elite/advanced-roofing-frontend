'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhyOwnersTrust.module.css';
import Link from "next/link";

export const WhyOwnersTrust = () => {
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
                        Why Property Owners Trust Our Chicago Skylight Team
                    </h2>

                    <p className={styles.paragraph}>
                        Chicago weather puts every skylight to the test. From powerful windstorms to heavy winter snow,
                        conditions can lead to unique issues not typically seen in milder regions.
                        Our hands-on process supports you from the first call through project completion.
                        We conduct in-depth inspections, help you document issues, and guide you through the{' '}
                        <Link href="/roofing-insurance-claims/" className={styles.blueLink}>
                            insurance claim process
                        </Link>
                        . Our repairs address the real cause—not just appearances—so your skylight lasts through future seasons.
                    </p>

                    <ul className={styles.benefitsList}>
                        <li>
                            <strong>Complete communication:</strong> We keep you informed at every step so
                            you always know the status of your repair.
                        </li>
                        <li>
                            <strong>Detail-focused assessments:</strong> Our trained team documents all
                            damage and ensures no problem is overlooked.
                        </li>
                        <li>
                            <strong>Responsive support:</strong>{' '}
                            <Link href="/roofing/emergency-roof-repairs/" className={styles.inlineLink}>
                                24/7 availability
                            </Link>{' '}
                            means you never wait long when urgent skylight problems arise.
                        </li>
                        <li>
                            <strong>Goal-driven advocacy:</strong> We work to make the insurance process
                            smoother and help maximize what your claim can cover, taking current material
                            prices into account.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>

                        <Link href="/reviews/" className={styles.blueLink}>
                            We’ve built trust across Chicago’s neighborhoods
                        </Link>{' '}
                        by being responsive, professional, and clear. Our clients rely on us for honest feedback and prompt service, whether their property is a classic bungalow or a modern condo. We understand that different buildings present unique challenges and regulations. Our approach adapts to local codes, neighborhood requirements, and your property’s individual design. This flexibility ensures a positive repair experience and strong, lasting results for your skylight.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Ready to restore the integrity and clarity of your residential or commercial skylight? Schedule your free repair assessment and get a precise estimate today.
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
