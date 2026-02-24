"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsTileRoof.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const FrequentlyQuestionsTileRoof = () => {
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
                <ScrollReveal direction="left">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>How do I know if my tile roof needs repair?</h3>
                            <p className={styles.paragraph}>
                                Visible cracks, slipping or missing tiles, leaks, or water stains inside suggest
                                the need for roof repairs. Sometimes,{' '}
                                <Link href="/roofing/storm-damage-repair/" className={styles.inlineLink}>
                                    storm damage
                                </Link>{' '}
                                can only be detected through a professional{' '}
                                <Link href="/roofing/tile-roof-repair/" className={styles.inlineLink}>
                                    inspection
                                </Link>.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What makes tile roof repairs different in Chicago?</h4>
                            <p>
                                The city experiences severe winters, rapid temperature swings, and strict building codes. These factors require a thorough approach to repair and compliance to ensure lasting results and valid
                                {" "}<Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                                insurance claims
                            </Link>.

                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Can a repair match the style of my existing roof?</h4>
                            <p>
                                Repair teams can often source matching materials and shapes by carefully selecting from approved suppliers. Request recommendations that balance both aesthetics and code compliance.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>How disruptive are tile roof repairs?</h3>
                            <p>
                                Most tile roof repairs are scheduled to minimize interference with your routine. Crews set clear expectations for timing and communication so you know what to expect during the process.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What should I expect during a roof inspection?</h4>
                            <p>
                                You’ll receive a detailed assessment and supporting documentation for insurance or repair purposes, ensuring that no issues remain unaddressed or overlooked during the process.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Contact Our Tile Roof Repair Company in Chicago Today</h4>
                            <p>
                                When you choose Advanced Roofing Team Construction, you gain straightforward support and clear guidance from a friendly crew who understands the unique needs of tile roofing in Chicago. Your questions always get prompt, thorough answers, and the steps ahead are explained in plain language—no confusion, just honest service you can trust. We are ready to help restore your roof and your peace of mind.
                            </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Protect your home from water damage with meticulous tile repair and flashing restoration. Request a free repair estimate and secure your roof's future.
                                Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className={styles.footerBtn}>
                <Link href="/contact-us" className={styles.contactLink}>
                    <button className={styles.contactBtn}>Contact Us</button>
                </Link>
            </div>
        </section>
    );
};