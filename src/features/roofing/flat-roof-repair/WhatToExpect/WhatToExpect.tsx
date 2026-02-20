'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhatToExpect.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const WhatToExpect = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        What to Expect From Our Flat Roof Repair Process in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        When you contact us for flat roof repair, you benefit from a smooth and transparent experience designed around your needs:
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>
                                <Link href="/emergency-roof-repair-chicago/" className={styles.inlineLink}>
                                    24/7 Emergency Response:
                                </Link>
                            </strong>{' '}
                            Call us anytime, and we dispatch staff promptly to
                            secure your roof and prevent further damage.
                        </li>
                        <li>
                            <strong>In-depth inspection:</strong> Our team conducts a comprehensive evaluation, utilizing
                            precise measurements and clear photographic documentation to document every issue.
                        </li>
                        <li>
                            <strong>Transparent estimates:</strong> We explain all recommended repairs and expected costs,
                            so you know what to expect from the start.
                        </li>
                        <li>
                            <strong>
                                <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                                    Claims assistance:
                                </Link>
                            </strong>{' '}
                            We assist with insurance correspondence, ensuring that
                            supporting documents reach your insurance company and that your claim addresses all covered damages.
                        </li>
                        <li>
                            <strong>Professional restoration:</strong> We utilize high-quality materials that meet Chicago
                            building codes, ensuring long-lasting results.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        We keep you updated through each phase of the project and answer your questions promptly, so you always know where things stand. Our in-depth knowledge of Chicago’s permit offices enables us to help you navigate city requirements seamlessly, keeping your project on schedule and moving forward smoothly. Our goal is to avoid unnecessary delays or repeat visits by delivering repairs that pass any required city inspections the first time.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Protect your property and inventory from costly water damage. Contact us <strong>(847) 262-9774</strong> or{' '}
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
                                src="/assets/images/features/about-us/content-v6.png"
                                alt="Chicago Roofing"
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
