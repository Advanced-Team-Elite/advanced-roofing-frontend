"use client";
import React, {useState} from 'react';
import styles from './WorkDirectly.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

export const WorkDirectly = () => {

    return (
        <section className={styles.servingSection}>
            <div className={styles.container}>

                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>The Professional Standard for Property Restoration</h2>
                    <h3 className={styles.subtitle}>
                        WE PROVIDE THE UNDENIABLE PROOF NEEDED TO RESTORE YOUR PROPERTY
                    </h3>

                    <p className={styles.paragraph}>
                        When your home is affected by a storm, the most valuable asset you can have is a Property Evidence Report. At Advanced Roofing Team, we don't just provide a quick estimate; we deliver a comprehensive, high-level documentation package that captures every detail of your home’s condition. Our reports are designed to be as thorough as they get, providing a solid foundation for your restoration project.
                    </p>

                    <h3 className={styles.subtitle}>
                        WHAT’S INSIDE YOUR EVIDENCE REPORT?
                    </h3>

                    <div className={styles.contentColumn}>
                        <p className={styles.paragraph}>
                            We’ve perfected a reporting process that speaks the language of the industry to give you a professional roadmap for your restoration. Our Property Evidence Report includes forensic photo documentation with GPS-tagged imagery, industry-standard precision pricing for transparent estimates, and a detailed Illinois building code analysis. We provide a complete line-by-line scope of work for every material and labor hour required to return your property to its true pre-storm condition.
                        </p>
                    </div>

                    <h3 className={styles.subtitle}>
                        PRECISE. PROFESSIONAL. READY.
                    </h3>

                    <p className={styles.paragraph}>
                        Our Property Evidence Report gives you the confidence to move forward. By providing a factual, "ready-to-go" documentation suite, we ensure that you are the most informed person in the room when it comes to your home’s restoration journey.
                    </p>

                </div>

                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/images/features/about-us/content-v13.webp"
                                alt="Professional roofers in Chicago"
                                className={styles.mainImage}
                            />
                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
};