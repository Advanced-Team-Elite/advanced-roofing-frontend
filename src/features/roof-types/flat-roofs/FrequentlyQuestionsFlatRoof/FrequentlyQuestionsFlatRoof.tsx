"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsFlatRoof.module.css';
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
                            <h3>How Long Does a Typical New Flat Roof Installation or Replacement Take?</h3>
                            <p>
                                A typical new flat roof installation or replacement on a residential or commercial building usually takes a professional crew between two to four days to complete. This timeline outlines the necessary steps, including the complete removal of the old roofing material, inspection of the decking, installation of new insulation, and application of the modern membrane system. Factors like the size of the roof, the amount of existing layers to be removed, and the complexity of flashing around penetrations can influence the duration. Inclement Chicago weather, especially snow or heavy rain, will also directly impact the completion time.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What Do I Need to Consider When Installing a Flat Roof?</h4>
                            <p>
                                The most important consideration is the slope and drainage plan, which must be adequate to prevent ponding water from standing on the roof for more than 48 hours. You must select a durable membrane material, such as TPO or EPDM, with high resistance to the Chicago climate's temperature extremes and UV exposure. Ensure the insulation (R-value) is sufficient to meet current energy codes and maximize your building's thermal performance. Finally, choose a certified installer who provides a comprehensive warranty on both the membrane material and the installation workmanship.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Do I Need a Permit for Flat Roof Installation or Replacement in the City of Chicago?</h4>
                            <p>
                                Yes, you generally do need a permit for a full flat roof installation or replacement in the City of Chicago to ensure compliance with local building and energy codes. While simple repairs limited to less than 25% of the roof area often qualify for streamlined permits or exemptions, a full tear-off and replacement requires a building permit. The permit process ensures proper structural requirements and adherence to insulation and fire resistance standards. Your licensed roofing contractor is responsible for filing the necessary applications and coordinating the required inspections with the city.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>


                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>How Do I Know When to Repair or Replace My Flat Roof?</h3>
                            <p>
                                You should opt for repair if the roof is relatively new and the damage is isolated to a small area, such as a single puncture or localized flashing failure. Replacement becomes necessary when the membrane shows widespread cracking, blistering, or saturation, indicating pervasive system failure and the end of its lifespan. If the underlying insulation is wet and saturated, a full tear-off and replacement is required to prevent structural damage and mold growth. As a general guideline, if the repair cost exceeds 50% of the replacement cost, or the roof is over 20 years old, full replacement is the wiser investment.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Can I Maximize the Lifespan of My Newly Installed Flat Roof?</h4>
                            <p>
                                To maximize the lifespan of your new flat roof, schedule professional inspections at least twice a year, typically in the spring and fall, to catch minor issues early. Keep the roof surface and drainage system (including drains, scuppers, and gutters) completely free of debris to prevent ponding water and clogged outlets. Avoid unnecessary foot traffic on the roof, as this can easily puncture or compromise the membrane. You may also consider applying a reflective protective coating to reduce UV damage and thermal stress on the membrane.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Get Started with Flat Roof Installation in Chicago</h4>
                            <p>
                                For a dependable and straightforward process for your flat roof installation in Chicago, contact
                                {' '}
                                <Link href="/about-us" className={styles.inlineLink}>
                                    Advanced Roofing Team Construction
                                </Link>
                                {' '}
                                today. We bring in-depth knowledge of local regulations, stay transparent about project pricing, and deliver attentive support from consultation to completion.
                                Do not postpone taking care of your flat roof or sorting out your insurance claim questions
                                </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Don't compromise on quality; choose our licensed team for expert installation. Contact us at <span className={styles.yellowText}>(877) 945-6565</span> or{' '}
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

export default FrequentlyQuestions;