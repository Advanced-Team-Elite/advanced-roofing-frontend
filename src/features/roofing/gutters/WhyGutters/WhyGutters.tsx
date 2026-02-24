'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './WhyGutters.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const WhyGutters = () => {

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
                        Why Gutters Matter for Chicago Homes & Businesses
                    </h2>

                    <p className={styles.paragraph}>
                        With the heavy rain, snow, and wind common in the Chicago area, properly installed gutters help manage water runoff and reduce risks like:
                    </p>

                    <ul className={styles.processList}>
                        <li>Soil erosion near the foundation</li>
                        <li>Basement moisture or flooding</li>
                        <li>Water damage to siding, walkways, or landscaping</li>
                        <li>Premature wear around roofing edges</li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our team delivers gutter solutions built to handle local conditions and help keep your property better protected year-round.
                    </p>

                    <h3 className={styles.subtitle} >Request Your Free Gutter Estimate Today</h3>

                    <p className={styles.paragraph}>Advanced Roofing Team Construction offers dependable gutter installation and replacement to help manage water around your home or commercial building. We proudly serve Chicago and the Greater Chicagoland Area with solutions built for our weather.</p>

                    <div className={styles.ctaBanner}>
                        <p>
                            Call <strong>(847) 262-9774</strong> or{' '}
                            <Link href="/contact-us" className={styles.yellowLink}>
                                contact us online
                            </Link>{' '}
                            today to schedule a service.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};
