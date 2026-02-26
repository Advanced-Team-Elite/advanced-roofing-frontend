'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './StepByStep.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const StepByStep = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Step-By-Step Roof Repair Process for Chicago Property Owners
                    </h2>

                    <p className={styles.paragraph}>
                        We’ve developed a process to reduce stress for every emergency roof repair in Chicago.
                        Here’s what you can expect when you work with us:
                    </p>

                    {/* LISTA MOCKUP */}
                    <ul className={styles.processList}>
                        <li>
                            <strong>Immediate on-call response –</strong> Our team answers your call at any hour,
                            responding quickly to secure and protect your property.
                        </li>
                        <li>
                            <strong>Thorough on-site inspection –</strong> We carefully document damage,
                            making sure every issue gets noted in our assessment.
                        </li>
                        <li>
                            <strong>Clear and proactive communication –</strong> You get updates and explanations
                            as repairs progress, without confusing technical terms.
                        </li>
                        <li>
                            <strong>Guidance through insurance claims –</strong> We help provide the photos,
                            supporting documentation, and measurements you need for your insurance carrier.
                        </li>
                        <li>
                            <strong>Restoration that reflects current standards –</strong> Our recommendations and
                            cost assessments use current market rates and reflect industry best practices to
                            support you from start to finish.
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Chicago’s unique property landscape often requires us to tailor our approach—especially
                        in districts with strict permit or inspection requirements. We stay current with these
                        rules to head off inspection backlogs or approval delays. Throughout each project, we
                        remain available to answer your questions and give support so you always know what the
                        next step involves. This active involvement helps you regain stability and confidence
                        in your property.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Stop active roof leaks immediately to prevent severe interior damage.
                                Contact us at {' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    <strong>(847) 262-9774</strong>
                                </a>{' '} or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to dispatch a crew now.
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
                                alt="Roofing contractor installing shingles"
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
