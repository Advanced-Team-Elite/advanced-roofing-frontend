'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './FlatRoofChicago.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const FlatRoofChicago = () => {
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
                        Flat Roof Repair Services for Homes & Businesses in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        Flat roofs require dedicated care, especially in Illinois, where heavy rain, snow, and strong winds can challenge even the most durable materials. We offer a comprehensive range of flat roof repair services after a storm in Chicago and other{' '}
                        <Link href="/areas-we-serve/" className={styles.blueLink}>
                            nearby areas
                        </Link>{' '}
                        :
                    </p>

                    <ul className={styles.processList}>
                        <li>
                            <strong>Thorough assessments:</strong> Our team documents all damage, identifying
                            hidden issues that could become costly if left unaddressed.
                        </li>
                        <li>
                            <strong>Accurate repair estimates:</strong> We use current material pricing and
                            detailed documentation to support your claim, helping you receive a fair
                            insurance settlement.
                        </li>
                        <li>
                            <strong>Emergency repairs:</strong> Our crew's fast action prevents water from
                            entering your property, minimizing further expense and disruption.
                        </li>
                        <li>
                            <strong>Insurance coordination:</strong> We communicate with insurance adjusters
                            to ensure your claim covers all necessary repairs for full restoration.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our crew understands the unique design and drainage requirements of flat roofs found around Chicago. We have experience with various flat roofing systems, including modified bitumen, EPDM, and TPO, which effectively handle Chicago’s temperature swings and storm activity. We match repair materials and techniques to your roof’s specific composition, always adhering to local guidelines and industry best practices to ensure lasting results. Don't hesitate to call the experts when it comes to flat roof repair{' '}
                        <Link href="/reviews/" className={styles.blueLink}>
                            Chicago residents trust.
                        </Link>{' '}
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                NReady to fix persistent leaks on your commercial or residential flat roof? Contact us at  <strong>(847) 262-9774</strong> or{' '}
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
