"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsSkylightRepair.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

export const FrequentlyQuestionsSkylightRepair = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>
                <h2 className={styles.mainTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.container}>
                {/* COLUMNA IZQUIERDA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <h3>Can skylight repair prevent leaks and drafts?</h3>
                        <p>
                            Addressing broken seals, glass, and surrounding roof material during repairs helps prevent water and cold air from entering, restoring efficiency and comfort to your space.
                        </p>
                    </div>
                    <div className={styles.questionBlock}>
                        <h4>Should I repair or replace my skylight?</h4>
                        <p>
                            Repairs work well for isolated damage or minor leaks, while extensive issues or older installations may require replacement. We assess your skylight to recommend the most practical solution.
                        </p>
                    </div>
                    <div className={styles.questionBlock}>
                        <h4>How long does skylight repair typically take?</h4>
                        <p>
                            Most repairs are completed within a day, but weather conditions, material delivery, and insurance approval can impact the schedule. We always keep you informed of progress and next steps.
                        </p>
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <h3>Will insurance cover skylight repairs after a storm?</h3>
                        <p>
                            Insurance may cover storm-related skylight damage if your policy includes such events. We support you by documenting the issue and helping you navigate the claims process, so you maximize your benefits.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>Contact Our Skyline Repair Professionals in Chicago</h4>
                        <p>
                            When you reach out to Advanced Roofing Team Construction, you connect with people who understand skylight repair in Chicago and what works best for your property. When you notice leaks, condensation, or glass problems, we help you find the right solution fast. Our team welcomes questions and provides clarity, so you feel confident throughout the process.
                        </p>
                    </div>

                    {/* BANNER NEGRO */}
                    <div className={styles.blackBanner}>
                        <p>
                            Avoid the risk of roof damage with immediate, professional skylight repair. Secure fast service from licensed roofers who specialize in skylight sealing.
                            Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                            <Link href="/contact-us" className={styles.yellowLink}>
                                fill out our online form
                            </Link>{' '}
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.footerBtn}>
                <button className={styles.contactBtn}>Contact Us</button>
            </div>
        </section>
    );
};