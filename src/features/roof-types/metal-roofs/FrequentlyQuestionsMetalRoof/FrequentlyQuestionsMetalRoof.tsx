"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsMetalRoof.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

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
                <ScrollReveal direction="left">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>What Is the Average Lifespan of a Metal Roof in Illinois?</h3>
                            <p>
                                The average lifespan of a quality metal roof in Illinois is significantly longer than traditional materials, typically ranging from 40 to 70 years. The longevity depends heavily on the type of metal used, with options like steel and aluminum lasting for decades. Proper installation by a certified contractor is also a critical factor in ensuring your roof endures Chicago's harsh climate and freeze-thaw cycles. With minimal maintenance, a metal roof is often the last roof you will ever need to install on your home.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Can a Metal Roof Be Installed Over an Existing Shingle Roof?</h4>
                            <p>
                                Yes, a metal roof can often be installed directly over an existing asphalt shingle roof, though this depends on local Chicago building codes and the condition of the underlying deck. Local codes generally prohibit more than two total layers of roofing material, so a tear-off is required if you already have two shingle layers. This "roof-over" method saves time, labor, and disposal costs by avoiding the shingle removal process. However, a professional should always inspect the wood deck underneath to make sure it is structurally sound and free of rot before proceeding.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Can I Prepare My Home for a Metal Roof Installation?</h4>
                            <p>
                                The most important step is to clear the immediate work area, including the driveway and yard, to allow easy access for materials and a dumpster. Remove all valuable or fragile items, such as wall decorations and shelves, from the interior walls and attic, as the hammering can cause vibrations. You should also trim back any overhanging tree branches that could interfere with the roofers or scratch the new metal panels. Informing your neighbors about the schedule is also helpful, as the installation process can be noisy.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>


                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>How Long Does the Metal Roofing Installation Process Typically Take?</h3>
                            <p>
                                For an average-sized residential home, a metal roof installation typically takes between one to three days. This is a remarkably fast process, especially when compared to the time it takes to replace asphalt shingles. The exact duration depends on the complexity of your roofline and whether a full tear-off of the old material is necessary. However, unforeseen issues like rotten decking or poor weather could extend the project timeline.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What Kind of Maintenance Does a Metal Roof Require?</h4>
                            <p>
                                Metal roofs are renowned for being extremely low-maintenance, but they are not entirely maintenance-free. The most essential tasks involve keeping your gutters and roof valleys clean of leaves and debris to prevent water from pooling and causing corrosion. You should also periodically check for and tighten any loose exposed fasteners, especially on screw-down panel systems. Annual professional inspections are recommended to check the condition of the flashing, seals, and paint coating to ensure the roof's continued watertight integrity.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Connect With Our Chicago Metal Roofing Team Today</h4>
                            <p>
                                Ready to explore durable metal roofing for your Chicago property? Call Advanced Roofing Team Construction for straightforward answers and support through every stage. Our team guides you through your options, addresses your concerns, and helps you choose confidently. If you value service designed for Chicago’s climate, steady communication, and honest guidance, schedule your consultation today.
                            </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Ensure expert installation of your metal roof by a certified specialist. Contact us at{' '}
                                <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to get started on your project.
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

export default FrequentlyQuestions;