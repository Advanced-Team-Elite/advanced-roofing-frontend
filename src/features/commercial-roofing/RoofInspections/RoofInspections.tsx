"use client";
import React, {useState} from 'react';
import styles from './RoofInspections.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const RoofInspections = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Imagen (arriba en mobile) */}
                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right" distance={30}>
                        <img
                            src="/assets/images/features/roofing/content-v17.webp"
                            alt="Roofing Project Installation"
                            className={styles.mainImage}
                        />
                    </ScrollReveal>

                </div>

                {/* Lado Derecho: Contenido */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Roof Inspections & Storm Damage Support</h2>

                    <p className={styles.paragraph}>
                        Storms can pass {' '}
                        <Link href="/areas-we-serve/" className={styles.inlineLink}>
                            through the Chicago Metropolitan Area
                        </Link>{' '}
                        quickly, often leaving hidden damage in their wake. High winds, hail, and heavy rain may weaken your building’s roof, even when visible signs aren’t immediately present.
                    </p>

                    <p className={styles.paragraph}>
                        At Advanced Roofing Team Construction, we provide comprehensive{' '}
                        <Link href="/commercial-roofing/" className={styles.inlineLink}>
                            roof inspections
                        </Link>{' '}
                        to identify storm-related damage promptly. When replacement is necessary, we provide clear documentation and assist throughout the
                        {' '}
                        <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                            insurance process
                        </Link>{' '}
                        . Our trained catastrophe inspectors know what to look for and can help guide the next steps.
                    </p>

                    <p className={styles.paragraph}>
                        During an inspection, we document impact points, seam conditions, damaged flashings, and areas where water may be entering the system, even if it has not yet reached the interior. Our team reviews these findings with you in plain language so you understand which issues are urgent, which are developing, and what the potential risks are if work is delayed. This approach helps you prioritize repairs and make informed choices before filing an insurance claim.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h3 className={styles.subtitle}>Why Businesses Work with Advanced Roofing Team Construction</h3>

                        <p className={styles.paragraph}>We’ve been supporting businesses across Chicago and surrounding communities since 2004, providing reliable roofing solutions with straightforward service.</p>

                        <h4 className={styles.listHeader}>What we offer:</h4>

                        <ul className={styles.benefitsList}>
                            <li>Fully insured service with available warranty coverage</li>
                            <li>Free estimates for installation, replacement, and storm damage assessments</li>
                            <li>
                                <Link href="/roofing/emergency-roof-repairs/" className={styles.inlineLink}>
                                    24/7 emergency response for storm-related roofing needs
                                </Link>
                            </li>
                            <li>Hands-on support when working with your insurance provider</li>
                        </ul>

                        <p className={styles.paragraph}>
                            Whether you’re replacing an aging roof or recovering after a storm, we’re here to help protect your property.
                        </p>
                        <p className={styles.paragraph}>
                            From the first call, you work with a team that understands how disruptive roofing projects can be for a commercial property. We coordinate with your timelines, discuss phasing options for multi-building campuses, and keep you updated as work progresses so there are no surprises. Many clients appreciate having a single point of contact who knows your building, can answer questions quickly, and will be here in the future when it is time to plan the next phase of improvements.
                        </p>
                        <div className={styles.ctaBanner}>
                            <p>
                                Upgrade your property with a durable TPO or EPDM system that offers superior UV resistance and long-term leak protection for your business.
                                Contact us at {' '}
                                <a href="tel:8472629774" className={styles.yellowLink}>
                                    <strong>(847) 262-9774</strong>
                                </a>{' '} or{' '}
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