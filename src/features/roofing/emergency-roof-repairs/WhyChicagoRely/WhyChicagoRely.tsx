'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhyChicagoRely.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const WhyChicagoRely = () => {
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
                        Why Chicago Homeowners <br/> Rely on Us <br/> When Storms Hit
                    </h2>

                    <p className={styles.paragraph}>
                        We know that storm damage brings uncertainty and stress. Homeowners choose Advanced Roofing Team
                        Construction because we streamline the repair and{' '}
                        <Link href="/roofing-insurance-claims/" className={styles.blueLink}>
                            insurance process.
                        </Link>{' '}
                        Our trained team manages inspections, detailed documentation, and ensures that nothing falls through
                        the cracks as you work with your insurance company. This hands-on, personalized guidance helps you
                        get back to your routine quickly and with less hassle. From the first call, we focus on fairness,
                        accuracy, and clear updates as we help restore your property.
                    </p>

                    <p className={styles.paragraph}>
                        Chicago’s city codes and building permit rules can complicate roof repair after storms, particularly
                        in historic neighborhoods or association-managed properties. Because we work{' '}
                        <Link href="/areas-we-serve/" className={styles.blueLink}>
                            throughout the area,
                        </Link>{' '}
                        we stay up-to-date on permit requirements and inspection needs, so your repairs comply with local
                        guidelines. Our team’s local perspective helps prevent paperwork issues and keeps your project moving.
                        Don't hesitate to call the experts when it comes to emergency roof repair{' '}
                        <Link href="/reviews/" className={styles.blueLink}>
                            Chicago residents trust.
                        </Link>
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Need an urgent repair with full insurance documentation? Contact us at <strong>(847) 262-9774</strong> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to get expert help with your claim.
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
