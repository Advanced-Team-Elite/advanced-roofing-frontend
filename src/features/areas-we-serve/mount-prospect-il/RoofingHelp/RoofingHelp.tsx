'use client';

import Image from 'next/image';
import styles from './RoofingHelp.module.css';
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const RoofingHelp = () => {
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right" distance={40}>
                                <Image
                                    src="/assets/images/features/home/content-v15.webp"
                                    alt="Roofing worker repairing storm damage"
                                    width={600}
                                    height={500}
                                    className={styles.mainImage}
                                />
                            </ScrollReveal>

                        </div>
                    </div>
                </div>

                {/* Bloque de Texto */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        24/7 Roofing Help After Storms
                    </h2>

                    <div className={styles.bodyText}>
                        <p>
                            Storm damage isn’t always easy to spot, but leaving problems unaddressed can lead to costly issues later. That’s why Advanced Roofing Team Construction provides around-the-clock roofing support after hail, wind, or severe storms.
                        </p>

                        <p>
                            Our Haag Certified inspectors have undergone advanced training to thoroughly assess storm damage, identifying both obvious and hidden impacts. With accurate evaluations and clear recommendations, you’ll know the next steps to take.
                        </p>

                        <h3 className={styles.subtitle}>Request a Free Roofing Estimate Today</h3>

                        <p>
                            If your property shows signs of storm damage or it’s time for a roof replacement, Advanced Roofing Team Construction is ready to assist. We provide full installations, storm assessments, and durable roofing options designed to handle Illinois weather.
                        </p>

                        <p>
                            Are you a first-time client? Reach out to our licensed and certified roofers and we can set you up with a free estimate. Don’t settle for another roofing company when our expert roofing team is ready to assist.
                        </p>
                        <p className={styles.ctaBanner}>
                            Call (847) 262-9774 today to schedule your free estimate or storm inspection in Mount Prospect.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};