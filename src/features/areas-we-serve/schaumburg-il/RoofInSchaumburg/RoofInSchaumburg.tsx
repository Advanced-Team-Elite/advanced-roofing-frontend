'use client';

import Image from 'next/image';
import styles from './RoofInSchaumburg.module.css';
import Link from "next/link";
import {useState} from "react";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function RoofInSchaumburg() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Schaumburg, IL</h2>
                    <h3 className={styles.subtitle}>Upgrade Your Home Protection With Roof Replacement Done By Experts</h3>

                    <p className={styles.paragraph}>
                        When your home’s roof has received some wear and tear, whether over the years or from a recent event, you don’t have to panic. <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing</Link> can assist with your <Link href="/roofing" className={styles.inlineLink}>roofing</Link>, siding, and gutter needs, leaving your home better than before. Backed by over 20 years of experience, our reputable roofing company is the obvious choice for all of your roofing repair and installation needs.
                    </p>

                    <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                        <li className={styles.paragraph}>You can be assured that our team will meet your needs and complete the job correctly the first time.</li>
                        <li className={styles.paragraph}>We offer 50-year inclusive manufacturer-backed warranties.</li>
                        <li className={styles.paragraph}>We have <Link href="/roofing/emergency-roof-repairs" className={styles.inlineLink}>24/7 emergency services</Link> available to clients in need.</li>
                        <li className={styles.paragraph}>We are a <Link href="/about-us/gaf-masterelite-preferred-contractor" className={styles.inlineLink}>GAF Master Elite Roofing Contractor</Link> and an <Link href="/about-us/owens-corning-preferred-contractor" className={styles.inlineLink}>Owens Corner Preferred Contractor</Link>.</li>
                        <li className={styles.paragraph}>We focus on <Link href="/insurance-claims-assistance" className={styles.inlineLink}>insurance claims assistance</Link> and catastrophe repairs.</li>
                    </ol>

                    <p className={styles.paragraph}>
                        When we visit your property in Schaumburg, we begin by conducting a thorough <Link href="/roofing/roof-inspections/" className={styles.inlineLink}>roof inspection</Link> to determine the age of the system, any storm or hail damage, and whether a repair or full roof replacement is the most suitable option. We explain our findings in plain language, review shingle and material options, and help you compare short-term and long-term costs, so you can make a confident decision. Our team also thoroughly documents damage, ensuring your insurance carrier has a clear picture of what is needed to restore your home to its pre-storm condition.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            If you are facing major repairs or roofing needs, don’t wait! <Link href="/contact" className={styles.yellowLink}>Contact our office today</Link> at <strong>(847) 262-9774</strong> and schedule a service.
                        </p>
                    </div>

                    {/* PARTE EXPANDIBLE (image_d7fcf6.png) */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h2 className={styles.subtitle} style={{ color: '#004a8c' }}>We Handle Your Roofing Project From Start to Finish</h2>

                        <p className={styles.paragraph}>
                            At <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing</Link>, we understand each customer’s needs and projects are unique. Our knowledgeable and licensed roofers have the skills to handle any situation, including the big problems. We focus on insurance claims and catastrophe damage. If a storm has severely damaged your home, we can help you estimate the damage and retain coverage for your project.
                        </p>

                        <p className={styles.paragraph}>Seek our Schaumburg roofing company if you need assistance with:</p>

                        <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                            <li className={styles.paragraph}>Roof installations</li>
                            <li className={styles.paragraph}>Residential roofing projects</li>
                            <li className={styles.paragraph}>
                                <Link href="/commercial-roofing" className={styles.inlineLink}>Commercial roofing projects</Link>
                            </li>
                            <li className={styles.paragraph}>Severe storm damage</li>
                        </ol>

                        <p className={styles.paragraph}>
                            For many homeowners in the Schaumburg area, the most stressful part of a roofing project is coordinating between contractors, insurers, and local requirements. We take that burden off your plate by planning the work schedule, ordering materials, and tracking progress from the first inspection through the final walkthrough. Our catastrophe-trained team <Link href="/reviews" className={styles.inlineLink}>stays in touch with you throughout the job</Link> so you always know what phase your roof is in and when crews will be on-site, which is especially helpful if you are juggling work, family, and other obligations.
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