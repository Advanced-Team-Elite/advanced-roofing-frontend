"use client";
import React from 'react';
import styles from './Support.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

const Support = () => {
    return (
        <section className={styles.supportSection}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>
                <h2 className={styles.mainTitle}>Full-Service Roofing Support from Start to Finish</h2>

                <p className={styles.introText}>
                    We provide more than roofing installation, we guide property owners through every stage of the process, offering clear communication, dependable service, and support when storms cause damage.
                </p>

                <h3 className={styles.listHeading}>Our services include:</h3>

                <div className={styles.servicesGrid}>
                    <ul className={styles.serviceList}>
                        <li>Roof installation using materials from trusted manufacturers</li>
                        <li>Complete roof replacement for homes, businesses, and multi-family properties</li>
                        <li>Emergency response for storm-related damage</li>
                    </ul>
                    <ul className={styles.serviceList}>
                        <li>
                            <Link href="/roofing-insurance-claims/" className={styles.linkHighlight}>
                                Insurance claims assistance
                            </Link>{" "}
                            when severe weather impacts your roof
                        </li>
                        <li>Free estimates to help you plan ahead</li>
                        <li>Insured service with warranty coverage</li>
                    </ul>
                </div>

                <h3 className={styles.listHeading}>Our commitment to quality is reflected through respected industry recognitions:</h3>

                <ul className={styles.recognitionList}>
                    <li>
                        <Link href="/about-us/owens-corning-preferred-contractor/" className={styles.linkHighlight}>
                            Owens Corning Preferred Contractor
                        </Link>
                    </li>
                    <li>
                        <Link href="/about-us/gaf-masterelite-preferred-contractor/" className={styles.linkHighlight}>
                            GAF Master Elite Roofing Contractor
                        </Link>
                    </li>
                </ul>

                <p className={styles.paragraph}>
                    With over two decades of local experience, Advanced Roofing Team Construction delivers roofing solutions built for the demands of Chicago’s climate.
                </p>

                <h2 className={styles.secondaryTitle}>Roofing Solutions Built for Chicago Weather</h2>

                <p className={styles.paragraph}>
                    In Chicago, roofs face it all. Hail, high winds, lake-effect snow, and freeze-thaw cycles all take their toll over time. Understanding how those forces impact a property makes a real difference in how a roof is designed, installed, and maintained.
                </p>

                <p className={styles.paragraph}>
                    Advanced Roofing Team Construction installs systems built to withstand Midwest weather — materials and methods chosen for durability, not trends. With more than two decades of local experience and catastrophe training, our team helps property owners navigate storm recovery and strengthen their roofs for what’s ahead.
                </p>
            </div>
        </section>
    );
};

export default Support;