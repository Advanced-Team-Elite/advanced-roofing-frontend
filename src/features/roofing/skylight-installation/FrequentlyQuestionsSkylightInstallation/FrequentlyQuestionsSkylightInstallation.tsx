"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsSkylightInstallation.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const FrequentlyQuestionsSkylightInstallation = () => {
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
                            <h3>How Long Does a Typical Residential Skylight Installation Take?</h3>
                            <p>
                                For a straightforward replacement of an existing skylight, the installation can often take a professional crew just a few hours to a half day. However, a brand-new installation, which involves cutting the opening in the roof and ceiling, creating an interior light shaft, and ensuring a watertight seal, is more complex. On average, you can expect the full installation process, including interior finishing work, to take anywhere from one to three days. Factors like the roof pitch, the size of the skylight, and unexpected weather conditions can influence the final timeline.
                            </p>
                        </div>
                        <div className={styles.questionBlock}>
                            <h4>Do I Need a Permit for Skylight Installation or Replacement in Chicago?</h4>
                            <p>
                                Generally, if you are simply replacing a skylight in the exact same existing opening and size, you do not need a building permit from the City of Chicago. However, a permit is required if you are creating a new opening in your roof for a skylight or if you are significantly enlarging an existing opening. Permits are also necessary if the work involves structural modifications or must comply with strict Chicago Energy Transformation Codes for energy efficiency. Always consult with a licensed professional installer, as they are responsible for ensuring all work and documentation meet current local codes and regulations.
                            </p>
                        </div>
                        <div className={styles.questionBlock}>
                            <h4>Can Skylights Be Installed on Flat Roofs or Only Sloped Roofs?</h4>
                            <p>
                                Yes, skylights can absolutely be installed on both sloped roofs and flat roofs; different skylight types are designed specifically for each application. For flat or low-slope roofs, installers typically use curb-mounted skylights, where a wooden frame (the curb) is built to raise the skylight off the roof surface. This raised curb is essential for proper water drainage and to prevent rainwater or melting snow from pooling on the glass. Manufacturers also offer specialized flat-roof skylights featuring curved glass or polycarbonate domes, which help water run off easily.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>What Do I Need to Consider When Installing a Skylight?</h3>
                            <p>
                                You must first consider the skylight type—choosing between a fixed unit or an operable (venting) model for fresh air and humidity control. Crucially, select an ENERGY STAR-rated model with low-E glass and appropriate glazing to minimize heat loss in Chicago winters and reduce heat gain in the summer. Consider the placement and size carefully to maximize natural light without causing excessive heat or glare in the room. Finally, ensure your installer uses a high-quality, weather-tight flashing system specifically designed to prevent leaks and withstand local weather extremes.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Can I Maintain My Skylight After Installation?</h4>
                            <p>
                                The most important maintenance task is to regularly clean the exterior and interior glass using a mild, non-abrasive cleaner and a soft cloth to maximize light transmission. Periodically, inspect the flashing and sealant around the exterior frame for signs of cracking, peeling, or deterioration, which may indicate a potential leak risk. If you have a venting skylight, check that the hardware, such as hinges and cranks, moves smoothly, and keep the insect screen clean. You should also ensure surrounding gutters are clear of debris to prevent water from backing up onto the roof and around the skylight edges.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Contact Us for Skylight Installation Guidance & Support</h4>
                            <p>
                                If you want to make your home brighter and more inviting, contact Advanced Roofing Team Construction for a friendly and informative consultation on skylight installation. Our team will walk you through your options, explain each stage, and focus on your needs from start to finish. We believe in clear communication, efficient schedules, and detailed documentation so you feel confident at every turn. Get in touch to learn how a carefully installed skylight can increase comfort, value, and natural light in your property.
                            </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Don't settle for less; ensure your skylight meets all local building codes.
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