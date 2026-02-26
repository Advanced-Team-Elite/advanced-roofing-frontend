'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './LocalConsiderations.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const LocalConsiderations = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <ScrollReveal direction="right">
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
                </ScrollReveal>


                {/* RIGHT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Chicago Tile Roofing: Weather, Codes & Local Considerations
                    </h2>

                    <p className={styles.paragraph}>
                        Repairing a tile roof in Chicago presents unique challenges, including freeze-thaw cycles, hail events, industrial pollutants, and strict city building codes. Both Illinois and Chicago enforce standards for safety, durability, and energy efficiency. These rules protect your investment and can impact insurance claim outcomes. We stay current with city code requirements, ensuring your repairs meet standards and your documentation supports a fair insurance review.
                    </p>

                    <br/>

                    <ul className={styles.benefitsList}>
                        <li>
                            Tile repairs and replacements must use materials approved by the Illinois and Chicago codes
                        </li>
                        <li>
                            Repairs must meet minimum wind- and impact-resistance ratings
                        </li>
                        <li>
                            Documented professional{' '}
                            <Link href="/roofing/roof-inspections/" className={styles.inlineLink}>
                                inspections
                            </Link>{' '}
                            may be needed for insurance settlement reviews
                        </li>
                        <li>
                            Repair estimates should accurately reflect Chicago labor and material costs
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Because Chicago regularly updates building codes to reflect newer roofing standards and safety practices, working with a repair provider who knows local rules reduces your risk of expensive rework or missed approvals. City inspectors sometimes require post-storm compliance checks, especially for larger or historic buildings in protected areas. We track these requirements to ensure you remain compliant and maintain your property’s value. By staying proactive, you can often improve your claim payout and lower the risk of future issues with your tile roof repair in Chicago.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Need fast emergency service to repair storm-damaged or missing tiles? Call our specialists for guaranteed, non-invasive tile roofing repair.
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
