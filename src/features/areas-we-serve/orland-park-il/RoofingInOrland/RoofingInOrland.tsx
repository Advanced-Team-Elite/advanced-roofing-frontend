'use client';

import Image from 'next/image';
import styles from './RoofingInOrland.module.css';
import Link from "next/link";
import {useState} from "react";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function RoofingInOrland() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>Roofing Services in Orland Park, IL</h2>
                    <h3 className={styles.subtitle}>Premium Roofing Solutions Backed By Decades Of Local Expertise</h3>

                    <p className={styles.paragraph}>
                        When your home’s roof has received some wear and tear, whether over the years or from a recent event, you don’t have to panic. <Link href="/about-us" className={styles.inlineLink}>Advanced Roofing</Link> can assist with your <Link href="/roofing" className={styles.inlineLink}>roofing</Link>, siding, and gutter needs, leaving your home better than before. Backed by over 20 years of experience, our <Link href="/reviews" className={styles.inlineLink}>reputable roofing company</Link> is the obvious choice for all of your roofing repair and installation needs.
                    </p>

                    <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                        <li className={styles.paragraph}>We offer 50-year inclusive manufacturer-backed warranties.</li>
                        <li className={styles.paragraph}>We have <Link href="/roofing/emergency-roof-repairs" className={styles.inlineLink}>24/7 emergency services</Link> available to clients in need.</li>
                        <li className={styles.paragraph}>We are a <Link href="/about-us/gaf-masterelite-preferred-contractor" className={styles.inlineLink}>GAF Master Elite Roofing Contractor</Link> and <Link href="/about-us/owens-corning-preferred-contractor" className={styles.inlineLink}>Owens Corner Preferred Contractor</Link>.</li>
                        <li className={styles.paragraph}>We handle <Link href="/roofing-insurance-claims" className={styles.inlineLink}>insurance claims</Link> assistance and catastrophe repairs.</li>
                    </ol>

                    <p className={styles.paragraph}>
                        When storms move through Orland Park, hail and high winds can damage shingles, flashing, and gutters in ways that are not always visible from the ground. Our trained catastrophe team members conduct detailed <Link href="/roof-inspections" className={styles.inlineLink}>inspections</Link>, document every affected area, and provide clear summaries to ensure you understand the full scope of work before any project begins. As a homeowner, this level of detail helps you make informed decisions about repairs and provides a stronger foundation for insurance discussions.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p style={{ textAlign: 'center' }}>
                            If you are facing major repairs or roofing needs, don’t wait! <Link href="/contact" className={styles.yellowLink}>Contact our office today</Link> at <strong>(847) 262-9774</strong> and schedule a service.
                        </p>
                    </div>

                    {/* PARTE EXPANDIBLE (image_d79b43.png) */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h2 className={styles.subtitle} style={{ color: '#00589e' }}>We Handle Your Roofing Project From Start to Finish in Orland Park</h2>

                        <p className={styles.paragraph}>
                            At Advanced Roofing, we understand each customer’s needs and projects are unique. Our knowledgeable and licensed roofers have the skills to handle any situation, including the big problems. We handle insurance claims and catastrophe damage. If a storm has severely damaged your home, we can help you estimate the damage and retain coverage for your project.
                        </p>

                        <p className={styles.paragraph}>Seek our Orland Park roofing company if you need assistance with:</p>

                        <ol className={styles.benefitsList} style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                            <li className={styles.paragraph}>Roof installations</li>
                            <li className={styles.paragraph}>Residential roofing projects</li>
                            <li className={styles.paragraph}>
                                <Link href="/commercial-roofing" className={styles.inlineLink}>Commercial roofing projects</Link>
                            </li>
                            <li className={styles.paragraph}>Severe storm damage</li>
                        </ol>

                        <p className={styles.paragraph}>
                            For many property owners, the claim process is the most confusing part of recovering from a storm, which is why we stay involved from your first call until the final cleanup. We assist with meeting the adjuster, providing accurate measurements, and supplying documentation that reflects current material and labor costs. This helps ensure your scope of work matches the real conditions on your home, not just a quick visual estimate.
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