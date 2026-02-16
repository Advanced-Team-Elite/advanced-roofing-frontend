'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './HomeownersChooseUs.module.css';
import Link from "next/link";

export const HomeownersChooseUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Why Homeowners Choose Our Tile Roof Repair Company in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        Handling tile roof damage and navigating
                        {' '}
                        <Link href="/roofing/" className={styles.inlineLink}>
                        insurance claim.
                        </Link>{' '}
                        can be frustrating even for seasoned property owners. That’s why many families and
                        {' '}
                        <Link href="/roofing/" className={styles.inlineLink}>
                            businesses
                        </Link>{' '}
                        turn to us for fast assistance and a seamless process. Our service supports you at every step:
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>Advocacy during the claim:</strong> We work for your interests—not the
                            insurer's. Our team ensures a thorough assessment and supports your efforts to
                            secure fair compensation for covered property damage.
                        </li>
                        <li>
                            <strong>Thorough documentation:</strong> We handle accurate{' '}
                            <Link href="/roofing/roof-inspections/" className={styles.inlineLink}>
                                inspections
                            </Link>{' '}
                            and detailed measurements to eliminate oversights that can stall your repairs
                            or reduce your settlement.
                        </li>
                        <li>
                            <strong>
                                <Link href="/emergency-roof-repairs/" className={styles.inlineLink}>
                                    24/7 service availability:
                                </Link>
                            </strong>{' '}
                            Roof emergencies rarely happen on a schedule. We answer the call, anytime.
                        </li>
                        <li>
                            <strong>Clear, consistent updates:</strong> You stay informed at every stage,
                            from inspection through restoration, so you always know what's next.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Unlike other tile roof repair companies in Chicago, we stay accessible and responsive throughout your project, offering personal communication and reliable follow-through. We are familiar with the city’s neighborhoods, building permit requirements, and insurance procedures specific to the region, so you receive clear guidance whenever you need it. Instead of leaving you to navigate insurance paperwork or unclear steps, we walk with you and help make each stage of your tile roof repair manageable.
                        Our {" "}
                        <Link href="/reviews/" className={styles.inlineLink}>
                            clients trust our process
                        </Link> {" "}
                        because we prioritize your home—and your peace of mind—every time.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Ensure your high-end tile roof is protected against Chicago's harsh weather cycles. Schedule expert tile repair to maintain its durability and beauty.
                                Contact us at{' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    <strong>(847) 262-9774</strong>
                                </a>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to dispatch a crew now.
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
