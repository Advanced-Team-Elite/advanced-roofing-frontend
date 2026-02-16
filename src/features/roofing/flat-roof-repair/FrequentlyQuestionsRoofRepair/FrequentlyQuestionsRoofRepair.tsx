"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsRoofRepair.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

const FrequentlyQuestions = () => {
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
                        <h3>What Are the Most Common Causes of Flat Roof Leaks in the Chicago Climate?</h3>
                        <p>
                            The most common cause of flat roof leaks in Chicago is membrane failure due to persistent exposure to extreme weather and temperature fluctuations. The severe freeze-thaw cycles cause the roofing material to expand and contract, leading to splits, cracks, and seam separation in the membrane. Ponding water, which occurs when rain or melted snow remains standing for more than 48 hours, accelerates the material degradation and forces water into microscopic openings. Leaks also frequently occur at vulnerable points where the membrane meets flashing around vents, pipes, and parapet walls due to inadequate sealing or structural movement.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>How Long Does a Typical Flat Roof Repair Job Take?</h4>
                        <p>
                            A typical flat roof repair job for an isolated leak or damaged section usually takes a professional crew between four hours and one full day to complete. The duration depends on the severity and accessibility of the damage, as well as the specific type of membrane being repaired. Complex issues, such as replacing a large section of saturated insulation or fully reapplying flashing around several penetrations, will naturally require more time. Extensive repairs or those that involve structural elements may require longer, multi-day service.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>What Are the Signs That My Flat Roof Needs Repair Versus a Complete Replacement?</h4>
                        <p>
                            You should opt for repair if the damage is isolated to a specific area, such as a single leak or
                            a patch of blistering membrane, and the rest of the roof is in good condition. Complete
                            replacement is necessary when the roof membrane is widespread or severely deteriorated, showing
                            extensive cracking, multiple leaks, or pervasive blistering across the surface. Replacement is
                            also the better choice if the roof is reaching the end of its projected lifespan, typically
                            15 to 25 years, or if the underlying insulation is saturated with water. A{' '}
                            <Link href="/free-inspection" className={styles.inlineLink}>
                                professional inspection
                            </Link>{' '}
                            and core sample will determine the extent of the damage to guide this crucial decision.
                        </p>
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <h3>Can Flat Roof Repairs Be Done During the Cold Winter Months?</h3>
                        <p>
                            Yes, flat roof repairs can be performed during the cold winter months, but the process requires specialized materials and careful execution. Reputable Chicago roofing contractors use cold-weather adhesives, specialized sealants, and torch-down methods that are formulated to cure properly in low temperatures. Extreme cold or heavy snow may require postponing the work for safety and to ensure a durable bond is achieved, but essential emergency patches can almost always be done. It is crucial to hire a specialized contractor who has experience with winter roofing conditions to guarantee the repair is effective and long-lasting.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>How Often Should I Have My Commercial or Residential Flat Roof Inspected?</h4>
                        <p>
                            You should have your commercial or residential flat roof professionally inspected at least twice per year: once in the fall and once in the spring. The fall inspection prepares the roof for the heavy rain and snow loads of the Chicago winter, while the spring inspection checks for any damage caused by ice, freeze-thaw cycles, and winter debris. Regular, proactive inspections help identify minor issues like pooling water or small cracks before they turn into major leaks. This routine preventative measure is key to maintaining your roof's warranty and maximizing its lifespan.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>Contact Us for Flat Roof Repair in Chicago</h4>
                        <p>
                            Do not postpone taking care of your flat roof or sorting out your insurance claim questions. Reach out to
                            {' '}
                            <Link href="/free-inspection" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>{' '}
                            to connect with a Chicago roofing team that keeps your best interests at the center of every decision. You receive straightforward guidance, reliable communication, and a clear plan designed for your situation. Contact us now to restore your peace of mind and protect your property with confidence.
                        </p>
                    </div>

                    {/* BANNER NEGRO */}
                    <div className={styles.blackBanner}>
                        <p>
                            Ensure your flat roof meets all necessary Chicago building codes and comes with a reliable warranty on both the materials and the repair workmanship. Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
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

export default FrequentlyQuestions;