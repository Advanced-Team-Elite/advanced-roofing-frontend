'use client';

import Image from 'next/image';
import styles from './RoofingInHoffman.module.css';
import Link from "next/link";
import {useState} from "react";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function RoofingInHoffman() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Hoffman Estates, IL</h2>
                    <h3 className={styles.subtitle}>Reinforce Your Home Defense with Impact-Resistant Materials</h3>

                    <p className={styles.paragraph}>
                        Keeping your roof ready for Midwest weather is critical in Hoffman Estates. From heavy winds to hailstorms, Illinois properties face year-round conditions that can wear down{' '}
                        <Link href="/roofing" className={styles.inlineLink}>roofing systems</Link>. At{' '}
                        <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing Team Construction</Link>, we provide full roof replacements, storm damage support, and{' '}
                        <Link href="/reviews" className={styles.inlineLink}>dependable service</Link> for homes and businesses throughout Hoffman Estates and the surrounding area.
                    </p>

                    <p className={styles.paragraph}>
                        Since 2004, our team has helped property owners{' '}
                        <Link href="/areas-we-serve" className={styles.inlineLink}>across the Greater Chicagoland Area</Link>{' '}
                        navigate roofing projects with straightforward communication, trusted materials, and trained storm response teams available when severe weather hits.
                    </p>

                    <p className={styles.paragraph}>
                        We know many homeowners in Hoffman Estates juggle busy schedules, so we work to make the process as convenient as possible. Our team coordinates inspection times, helps you gather any information your{' '}
                        <Link href="/roofing-insurance-claims" className={styles.inlineLink}>insurance</Link>{' '}
                        carrier requests, and keeps you updated on next steps. By handling measurements and documentation consistently on every project, we aim to reduce back-and-forth with adjusters and move your roof replacement forward with fewer delays caused by paperwork.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            Avoid costly interior water damage by identifying hidden shingle wear before the next heavy storm hits.
                            Contact us at <strong>(847) 262-9774</strong> or{' '}
                            <Link href="/contact" className={styles.yellowLink}>fill out our online form.</Link>
                        </p>
                    </div>

                    {/* PARTE EXPANDIBLE (image_d714b5.png) */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h2 className={styles.subtitle} style={{ color: '#00ccff' }}>Why Clients Choose Advanced Roofing Team Construction</h2>

                        <p className={styles.paragraph}>
                            We bring more than 20 years of roofing experience to every project, along with the knowledge to simplify the process, especially after severe storms.
                        </p>

                        <p className={styles.paragraph}><strong>Here&apos;s what sets us apart:</strong></p>

                        <ul className={styles.benefitsList} style={{ paddingLeft: '20px' }}>
                            <li className={styles.paragraph}>
                                <Link href="/roofing/emergency-roof-repairs/" className={styles.inlineLink}>24/7 emergency response</Link> for storm damage
                            </li>
                            <li className={styles.paragraph}>Thorough roof inspections and insurance documentation</li>
                            <li className={styles.paragraph}>Catastrophe-trained teams ready to assist after hail or high winds</li>
                            <li className={styles.paragraph}>
                                Full roof replacements for residential and <Link href="/commercial-roofing/" className={styles.inlineLink}>commercial properties</Link>
                            </li>
                            <li className={styles.paragraph}>Insured work with available warranty coverage</li>
                            <li className={styles.paragraph}>
                                <Link href="/about-us/owens-corning-preferred-contractor/" className={styles.inlineLink}>Owens Corning Preferred Contractor</Link> and <Link href="/about-us/gaf-masterelite-preferred-contractor/" className={styles.inlineLink}>GAF Master Elite Preferred Contractor</Link>
                            </li>
                        </ul>

                        <p className={styles.paragraph}>
                            When you choose us for a roof replacement, we walk you through each phase so you know what to expect from the first visit to the final cleanup. Our team helps you compare material options, talk through how long the work will take, and understand how weather conditions in Hoffman Estates might influence scheduling. We also review how we protect landscaping, driveways, and nearby structures during installation so you feel confident that your property will be respected throughout the project. We also offer <Link href="/financing" className={styles.inlineLink}>flexible financing solutions</Link> to ensure that you get the perfect roofing system for your home.
                        </p>
                    </div>

                    <div className={styles.readMoreWrapper}>
                        <button className={styles.readMoreBtn} onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? 'Read Less' : 'Continue Reading'}
                            <span className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ''}`}>∨</span>
                        </button>
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