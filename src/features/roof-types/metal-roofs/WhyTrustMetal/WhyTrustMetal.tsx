'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './WhyTrustMetal.module.css';
import Link from "next/link";

export const WhyTrustMetal = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
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

                {/* RIGHT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Why Trust Our Metal Roofing Company in Chicago, IL?
                    </h2>

                    <p className={styles.paragraph}>
                        At Advanced Roofing Team Construction, we provide complete support throughout the metal roofing process. Our team focuses on detail during every inspection and installation. From first contact to final review, we act as your partner, explaining your options and making sure your questions receive direct answers.
                    </p>

                    <p className={styles.paragraph}>
                        Many property owners want clarity when switching from an older roofing material to metal. Our team takes a transparent approach, sharing information about metal systems for both traditional and modern buildings. We help you compare product options for homes, condos, and multi-unit properties, so your investment fits your goals.
                        {' '}
                        <Link href="/reviews/" className={styles.linkText}>
                            <strong>Trust the metal roofing company Chicago homeowners rely on.</strong>
                        </Link>
                    </p>

                    <p className={styles.paragraph}>
                        When you choose us for a metal roofing project, you also gain access to our broader roofing knowledge from years of working in Chicago and the Greater Chicagoland Area. We draw on that experience to flag potential issues early, such as ventilation concerns, snow load considerations, or previous storm damage that might affect how a new roof performs. Our crews coordinate scheduling, material delivery, and clean-up in a way that respects busy city streets and tight alleys, which helps the project move smoothly even in dense Chicago neighborhoods.
                    </p>

                    <p className={styles.paragraph}>
                        Our background with storm damage work means we understand how metal systems behave after hail, wind, and ice events that commonly move through the region. When appropriate, we can document existing conditions and help you understand how a new metal system may support long-term protection and potential insurance considerations. That combination of practical field experience and detailed communication gives many owners confidence as they upgrade to a new roof.
                    </p>


                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.contactBanner}>
                            <p className={styles.contactText}>
                                Invest in a low-maintenance, long-lasting roofing solution today.
                                Contact us at <a href="tel:+18472629774">(847) 262-9774</a> or {" "}
                                <Link href="/contact-us">
                                    <strong className={styles.contactUs}>fill out our online form</strong>
                                </Link> to learn about our material options.
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
