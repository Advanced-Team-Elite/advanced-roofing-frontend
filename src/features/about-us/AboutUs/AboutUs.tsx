"use client";
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>About Us</h2>

                <div className={styles.contentWrapper}>
                    {/* Contenedor de la imagen con float */}
                    <div className={styles.imageFloatContainer}>
                        <div className={styles.imageBorderBox}>
                            <img
                                src="/assets/images/features/about-us/content-v6.png"
                                alt="Advanced Roofing Team Truck"
                                className={styles.aboutImage}
                            />
                        </div>
                    </div>

                    {/* El texto fluirá alrededor del contenedor anterior */}
                    <h3 className={styles.subTitle}>Chicago’s Trusted Roofing & Storm Recovery Team</h3>

                    <p className={styles.paragraph}>
                        Since 2004, Advanced Roofing Team Construction has helped homeowners and businesses across Chicago protect their properties with dependable <span className={styles.highlight}>roof installations and full replacements</span>, as well as <span className={styles.highlight}>storm recovery support</span>. From aging systems that need an upgrade to roofs impacted by severe weather, the work is built around long-term performance — not shortcuts.
                    </p>

                    <p className={styles.paragraph}>
                        Navigating storm damage and insurance claims can feel overwhelming. Our role is to simplify what comes next. With trained specialists, clear communication, and the resources to move quickly, we guide each project from inspection to completion without unnecessary friction.
                    </p>

                    <h4 className={styles.sectionHeading}>The People You’ll Work With</h4>
                    <p className={styles.paragraph}>
                        Roofing is a big job, and it’s important to have a team you can trust by your side. At Advanced Roofing Team Construction, you’ll work with experienced professionals who you can rely on from the first inspection to the final walkthrough. We keep you in the loop, answer questions along the way, and explain options in plain language so you can make decisions with confidence.
                    </p>

                    <p className={styles.paragraph}>
                        We take pride in being easy to work with. Our crews are respectful, reliable, and attentive to the details. When we say we’ll be there, we show up — and we stand behind the work long after the job is done.
                    </p>

                    <h4 className={styles.sectionHeading}>When the Weather Doesn’t Wait, Neither Do We</h4>
                    <p className={styles.paragraph}>
                        In Chicago, severe weather doesn’t come with much warning, and roofing problems rarely wait for a convenient time. That reality shapes how we operate. Preparation, responsiveness, and experience under pressure are simply part of the job.
                    </p>

                    <p className={styles.paragraph}>
                        From emergency repairs to full storm recovery, Advanced Roofing Team Construction is built to move quickly without sacrificing quality. Our goal is simple: stabilize the situation, handle the details, and help you move forward with confidence.
                    </p>
                </div>

                <p className={styles.footerContact}>
                    Call <strong>(847) 262-9774</strong> or <a href="/contact" className={styles.contactLink}>contact us online</a> today for a free estimate and discover how we help property owners across Chicago.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;