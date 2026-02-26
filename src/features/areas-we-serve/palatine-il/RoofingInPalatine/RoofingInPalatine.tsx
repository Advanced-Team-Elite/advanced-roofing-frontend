'use client';

import Image from 'next/image';
import styles from './RoofingInPalatine.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function RoofingInPalatine() {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Palatine, IL</h2>
                    <h3 className={styles.subtitle}>Roof Installations & Replacements for Homes & Businesses</h3>

                    <p className={styles.paragraph}>
                        Staying ahead of roof damage from hail, wind, and unpredictable Midwest weather is essential for property owners in Palatine. When storms hit or your existing roof starts to show its age, <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing Team Construction </Link> is ready with dependable roofing solutions.
                    </p>

                    <p className={styles.paragraph}>
                        We provide full roof replacements, storm inspections, and new installations for both residential and commercial properties across Palatine and surrounding areas. Since 2004, homeowners, businesses, and property managers throughout the Greater Chicagoland Area have trusted our team to deliver reliable results.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            If you are facing major repairs or roofing needs, don’t wait! <Link href="/contact" className={styles.yellowLink}>Contact our office today</Link> at <strong>(847) 262-9774</strong> and schedule a service.
                        </p>
                    </div>

                </div>

                <div className={styles.imageColumn}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right">
                                <Image
                                    src="/assets/images/features/about-us/content-v6.webp"
                                    alt="Chicago Roofing"
                                    width={1000}
                                    height={800}
                                    className={styles.mainImage}
                                    priority
                                />
                            </ScrollReveal>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};