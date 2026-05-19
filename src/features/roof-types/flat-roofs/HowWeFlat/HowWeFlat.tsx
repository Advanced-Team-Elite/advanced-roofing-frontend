'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './HowWeFlat.module.css';
import Link from "next/link";

export const HowWeFlat = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        How We Raise the Bar for Flat Roof Installation in Chicago
                    </h2>

                    <p className={styles.paragraph}>
                        Choosing the right contractor has a significant impact on your project’s
                        long-term value and the results you achieve during local inspections.
                        Our team relies on careful planning, detailed project documentation,
                        and precise measurements to ensure every installation aligns with Chicago’s construction standards. We support more than just the roofing work itself—we manage communication, timelines, and any paperwork your building may require during the process.
                    </p>

                    <ul className={styles.benefitsList}>
                        <li>
                            <strong>Trained team members:</strong> Our staff conducts <Link href="/roofing/roof-inspections/">inspections</Link>, measurements, and recordkeeping using best practices that align with local guidelines.
                        </li>
                        <li>
                            <strong>Customer-first philosophy:</strong> We work around your preferred schedule, provide regular project updates, and respond quickly to questions.
                        </li>
                        <li>
                            <strong>Full-service support:</strong> Our team guides you through project documentation and communications tailored to building associations or local agencies as needed.
                        </li>
                        <li>
                            <strong>Local experience:</strong> Our familiarity with city building regulations and weather patterns enables us to prevent delays and find practical solutions for every site.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Building inspectors and association managers in Chicago expect detailed records and organized scheduling for new roof installations. Our experience with city approvals and review procedures helps streamline the process, keeping projects moving forward. With Advanced Roofing Team Construction, you gain a partner who values transparency and reliable communication—and has a proven track record of successful local roofing projects.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.contactBanner}>
                            <p className={styles.contactText}>
                                Call <a href="tel:8779456565">(877) 945-6565</a> or <Link href="/contact-us"><strong className={styles.contactUs}>contact us online</strong></Link>
                                to request your free estimate. We’ll help you find the right roofing solution for your home or business.
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
                            src="/assets/images/features/about-us/content-v6.webp"
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
