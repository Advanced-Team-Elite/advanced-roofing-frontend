'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ThoroughStorm.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ThoroughStorm = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Thorough Storm Damage Inspections & Insurance Documentation
                    </h2>

                    <p className={styles.paragraph}>
                        Storm recovery brings enough challenges; navigating inspections and insurance shouldn’t make it harder. At Advanced Roofing Team Construction, we manage both the technical side of the inspection, and the details needed to support your
                        {' '} <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                            insurance claim.
                        </Link>{' '}
                    </p>

                    <p className={styles.paragraph}>
                        Our Haag Certified Inspectors undergo advanced training focused on storm-related damage, ensuring that even subtle signs of roof weakness are identified.
                    </p>

                    <p className={styles.textBold}>What to expect from our team:</p>

                    <ul className={styles.processList}>
                        <li>Comprehensive roof inspections for wind and hail damage</li>
                        <li>Clear reporting with photos and precise measurements</li>
                        <li>Documentation tailored to support your insurance claim</li>
                        <li>Direct communication with your insurance adjuster</li>
                        <li>Advocacy for fair evaluations and up-to-date material pricing</li>
                    </ul>

                    <p className={styles.paragraph}>We’ll walk you through your options with straightforward recommendations based on the condition of your roof.</p>

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
