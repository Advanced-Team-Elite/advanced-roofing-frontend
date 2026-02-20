'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './AreasWeService.module.css';
import Link from "next/link";
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const AreasWeService = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={160} />
                    </div>

                    <h2 className={styles.title}>
                        Areas We Service
                    </h2>

                    <h3 className={styles.subtitle}>
                        Roof Installations, Replacements & Storm Damage Support from Advanced Roofing Team Construction
                    </h3>

                    <p className={styles.paragraph}>
                        When storms roll through or it’s time to upgrade your property’s roof, having a reliable local team makes all the difference.{' '}
                        <Link href="/about-us/" className={styles.inlineLinkBlue}>
                            Advanced Roofing Team Construction
                        </Link>{' '}
                        provides residential and commercial roofing services throughout Chicago and surrounding communities in the Greater Chicagoland Area. Whether you’re dealing with hail damage, wind damage, or looking to replace an aging roof, our team is ready to help.
                    </p>

                    <p className={styles.paragraph}>
                        Since 2004, we’ve partnered with homeowners, businesses, and property managers to provide{' '}
                        <Link href="/roofing/roof-installation-replacement/" className={styles.inlineLinkBlue}>
                            roof installations
                        </Link>
                        , replacements, and{' '}
                        <Link href="/roofing/storm-damage-repair/" className={styles.inlineLinkBlue}>
                            storm damage
                        </Link>{' '}
                        support with a clear, customer-focused approach.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p>
                            Contact us at {' '}
                            <a href="tel:8472629774" className={styles.inlineLink}>
                                <strong>(847) 262-9774</strong>
                            </a>{' '}  for a free roofing estimate anywhere in Chicago or the surrounding suburbs.
                        </p>
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
