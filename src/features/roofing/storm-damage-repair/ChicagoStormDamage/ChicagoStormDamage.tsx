"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './ChicagoStormDamage.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const ChicagoStormDamage = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.container}>

                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h1 className={styles.mainTitle}>Professional Storm Damage Repair & Roof Restoration</h1>
                    <h2 className={styles.subTitle}>Providing 24/7 Emergency Support for Wind, Hail, and Storm Damage Across Chicagoland</h2>

                    <div className={styles.textContent}>
                        <p>
                            In the Chicagoland area, severe weather can strike quickly, bringing high winds and hail that leave your roofing system vulnerable. While some damage is immediately visible, other issues may silently compromise your roof’s integrity over time. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we specialize in comprehensive storm damage assessments, expert insurance claim guidance, and precision-engineered{' '}
                            <Link href="/roofing/roof-installation-replacement/" className={styles.inlineLink}>
                                <strong>roof replacements</strong>
                            </Link>
                            {' '}when severe weather impacts your property.
                        </p>

                        <p className={styles.textBold}>Why homeowners and businesses across Illinois trust our team:</p>

                        <ul className={styles.benefitsList}>
                            <li>Decades of dedicated roofing experience serving Chicago, Cook County, and the greater Chicagoland metropolitan area since 2004</li>
                            <li>Haag Certified Roof Inspectors trained in the latest industry standards to accurately identify complex wind and hail damage</li>
                            <li>
                                <Link href="/about-us/gaf-masterelite-preferred-contractor/" className={styles.inlineLink}>GAF Master Elite</Link>
                                {' '}and{' '}
                                <Link href="/about-us/owens-corning-preferred-contractor/" className={styles.inlineLink}>Owens Corning Preferred Contractor</Link>
                                {' '}status, ensuring top-tier material installation
                            </li>
                            <li>Fully insured operations with robust warranty coverage for your peace of mind</li>
                            <li>
                                Rapid, <Link href="/roofing/emergency-roof-repairs/" className={styles.inlineLink}><strong>around-the-clock emergency response</strong></Link> to secure your property
                            </li>
                            <li>Direct insurance claim advocacy to simplify the documentation and approval process</li>
                            <li>Comprehensive, no-obligation roof inspections</li>
                        </ul>

                        <h3 className={styles.sectionHeading}>Why Haag Certified Inspections Provide Greater Security</h3>

                        <p>
                            Not all storm damage is obvious from the ground. Hidden vulnerabilities, if left unaddressed, can lead to costly structural failures. Our approach relies on trained storm damage inspectors who understand how different materials react to severe Chicagoland weather events.
                        </p>

                        <p>
                            At Advanced Roofing Team Construction, our team combines extensive hands-on experience with rigorous national certifications to provide detailed, objective roof evaluations. Whether you are dealing with recent storm impacts or need a professional assessment after a severe weather season, we deliver expert insights backed by over 20 years of industry leadership.
                        </p>

                        <h3 className={styles.sectionHeading}>Identifying Hidden Storm Damage</h3>

                        <p>
                            Early detection is key to preventing long-term damage. Common indicators that your roof requires professional evaluation include:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>Damaged, missing, or lifted shingles</li>
                            <li>Unexpected water stains on interior ceilings or walls</li>
                            <li>Excessive shingle granules collecting in gutter systems</li>
                            <li>Impact dents or cracks on roof materials from hail</li>
                            <li>Increased drafts or moisture inside attic spaces</li>
                        </ul>

                        <h3 className={styles.sectionHeading}>Immediate Steps After a Severe Storm</h3>

                        <p>
                            Your safety is the priority. Once the weather clears, consider these steps:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>Perform a visual inspection from ground level—do not climb on the roof</li>
                            <li>Document any visible damage with photographs for your insurance records</li>
                            <li>
                                <Link href="/contact-us/" className={styles.inlineLink}><strong>Contact Advanced Roofing Team Construction</strong></Link>
                                {' '}to schedule a professional, thorough inspection. If you have active leaks, ask about our emergency stabilization services.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
};