"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsInspections.module.css';
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
                        <h3>How Often Should I Have My Roof Inspected In Chicago?</h3>
                        <p>
                            Due to the intense and variable weather in Chicago, professional roofing experts strongly recommend having your roof inspected at least once a year. Ideally, you should schedule inspections twice a year, once in the spring and once in the fall. The spring inspection assesses any damage caused by winter snow loads, ice dams, and freeze-thaw cycles. The fall inspection ensures your roof is sealed and ready before the severe winter weather arrives. More frequent checks are also necessary if your roof is older than 15 years or after any major storm event.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>What Is the Best Time of Year to Schedule a Roof Inspection in the Chicago Area?</h4>
                        <p>
                            The best times to schedule a roof inspection in Chicago are during the fall and the spring. Fall inspections, ideally in September or October, are critical for finding any minor damage sustained during the hot summer and preparing your roof for the harsh winter. Spring inspections, usually between March and May, are essential for evaluating the roof’s integrity after it has endured the stress of snow, ice, and freezing temperatures. These mild seasons are also safer for inspectors and make it easier to spot subtle damage.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>Why Is an Inspection Necessary After a Major Chicago Storm?</h4>
                        <p>
                            A professional inspection is necessary after a major Chicago storm because not all damage is visible from the ground. High winds can lift, crack, or dislodge shingles and compromise flashing around chimneys and vents, creating hidden vulnerabilities. Hail can leave subtle impact marks that weaken the shingles, making them prone to future leaks. A certified inspector uses specialized training and tools to uncover these issues, which may otherwise lead to expensive water damage months later. Timely inspection and documentation are also vital for a successful insurance claim.
                        </p>
                    </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className={styles.column}>
                    <div className={styles.questionBlock}>
                        <h3>How Long Does a Standard Residential Roof Inspection Take?</h3>
                        <p>
                            A standard residential roof inspection by a professional typically takes between 45 minutes to two hours. The time required depends on the size and complexity of your roof, such as the number of slopes, valleys, and features like skylights or chimneys. The inspector will not only examine the exterior shingles and flashing but will also check the interior of your attic for signs of water intrusion or improper ventilation. A thorough assessment ensures all components are evaluated and the final report is accurate.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>What Is the Difference Between a Roof Inspection and a Home Inspection?</h4>
                        <p>
                            A general home inspection provides a broad overview of the entire property, covering the electrical, plumbing, HVAC systems, foundation, and roof. A home inspector is a generalist who checks for major, obvious roofing issues like missing shingles or visible leaks. Conversely, a dedicated roof inspection is performed by a roofing specialist who focuses exclusively on the roof's structure, materials, and drainage systems in intricate detail. The specialist will look for subtle damage and deterioration that a general home inspector may easily overlook.
                        </p>
                    </div>

                    <div className={styles.questionBlock}>
                        <h4>Contact Our Roof Inspection Team in Chicago Today</h4>
                        <p>
                            When you need a roof inspection in Chicago, our experienced team at Advanced Roofing Team Construction is ready to help. We start by listening to your concerns and answering your questions with honesty and clarity. With years of experience in neighborhoods across the city, we know what inspectors, insurers, and property owners are looking for in this market. Our approach focuses on your needs, your timeline, and your property’s long-term condition.
                        </p>
                    </div>

                    {/* BANNER NEGRO */}
                    <div className={styles.blackBanner}>
                        <p>
                            Ensure your roof is ready for any weather with a professional evaluation.
                            Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                            <Link href="/contact-us" className={styles.yellowLink}>
                                fill out our online form
                            </Link>{' '}
                            to get started.
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