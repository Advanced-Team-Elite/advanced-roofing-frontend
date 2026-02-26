'use client';

import Image from 'next/image';
import styles from './RoofingInNaperville.module.css';
import Link from "next/link";
import {useState} from "react";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function RoofingInNaperville() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Naperville, IL</h2>
                    <h3 className={styles.subtitle}>Shield Your Home with Premium Weather-Resistant Roofing</h3>

                    <p className={styles.paragraph}>
                        When your home’s roof has received some wear and tear, whether over the years or from a recent event, you don’t have to panic. <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing</Link> can assist with your <Link href="/roofing/" className={styles.inlineLink}>roofing</Link>, <Link href="/roofing/siding" className={styles.inlineLink}>siding</Link>, and <Link href="/roofing/gutters" className={styles.inlineLink}>gutter</Link> needs and leave your home better than before. Backed by over 20 years of experience, our <Link href="/reviews/" className={styles.inlineLink}>reputable roofing company</Link> is the obvious choice for all of your roofing repair and installation needs.
                    </p>

                    <p className={styles.paragraph}>
                        You can rest assured that our team will meet your needs and get the job done the first time correctly.
                    </p>

                    <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                        <li className={styles.paragraph}>We offer 50-year inclusive manufacturer-backed warranties.</li>
                        <li className={styles.paragraph}>We have <Link href="/roofing/emergency-roof-repairs" className={styles.inlineLink}>24/7 emergency services</Link> available to clients in need.</li>
                        <li className={styles.paragraph}>We are a <Link href="/about-us/gaf-masterelite-preferred-contractor" className={styles.inlineLink}>GAF Master Elite Roofing Contractor</Link> and an <Link href="/about-us/owens-corning-preferred-contractor" className={styles.inlineLink}>Owens Corner Preferred Contractor</Link>.</li>
                        <li className={styles.paragraph}>We specialize in <Link href="/roofing-insurance-claims" className={styles.inlineLink}>insurance claims assistance</Link> and catastrophe repairs.</li>
                    </ol>

                    <p className={styles.paragraph}>
                        As a trusted roofer Naperville homeowners turn to after hail, wind, and heavy snow, we take the time to carefully assess your property, explain your options in plain language, and recommend solutions that meet local building codes and our area’s demanding Midwest climate. Our crews are familiar with how storms move through <Link href="/areas-we-serve" className={styles.inlineLink}>DuPage and Will County</Link>, and we plan every project with long-term durability, ventilation, and drainage in mind so your roof performs well season after season.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            Don&apos;t wait for the next storm to discover a hidden leak in your roofing system.
                            Contact us at <strong>(847) 262-9774</strong> or {' '}
                            <Link href="/contact-us" className={styles.yellowLink}>fill out our online form.</Link>
                        </p>
                    </div>

                    {/* PARTE EXPANDIBLE (image_d78839.png) */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h2 className={styles.subtitle} style={{ color: '#004a8c' }}>We Handle Your Roofing Project From Start to Finish</h2>

                        <p className={styles.paragraph}>
                            At Advanced Roofing, we understand each customer’s needs and projects are unique. Our knowledgeable and licensed roofers have the skills to handle any situation, including the big problems. We specialize in insurance claims and catastrophe damage. If a storm has severely damaged your home, we can help you estimate the damage and retain coverage for your project.
                        </p>

                        <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                            <li className={styles.paragraph}>Roof installations</li>
                            <li className={styles.paragraph}>Residential roofing projects</li>
                            <li className={styles.paragraph}>
                                <Link href="/commercial-roofing" className={styles.inlineLink}>Commercial roofing projects</Link>
                            </li>
                            <li className={styles.paragraph}>Severe storm damage</li>
                        </ol>

                        <p className={styles.paragraph}>
                            When you work with our team, you do not have to juggle multiple contractors or wonder who is responsible for what step. From the initial inspection and documentation for your insurer to the final walkthrough, we coordinate every phase so your project stays on schedule and complies with Naperville roofing contractor requirements and local permit processes. We also discuss material choices, warranties, and budget considerations up front so you can make confident decisions about your home or business. We also offer <Link href="/financing" className={styles.inlineLink}>flexible financing solutions</Link> to ensure that you get your roofing taken care of.
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