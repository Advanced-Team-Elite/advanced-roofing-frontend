'use client';

import Image from 'next/image';
import styles from './ServingOrland.module.css';
import {useState} from "react";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ServingOrland = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right" distance={40}>
                                <Image
                                    src="/assets/images/features/home/content-v15.png"
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
                    <h3 className={styles.title} style={{ marginTop: '20px' }}>
                        Frequently Asked Questions
                    </h3>

                    <h4 className={styles.question}>How Do I Identify Storm Damage That Requires Professional Repair?</h4>
                    <p className={styles.paragraph}>
                        Visible signs of storm damage often include missing, lifted, or curled shingles that have been pulled away by high wind gusts. You should also check your gutters and downspouts for excessive shingle granules, which indicate that hail or heavy rain has compromised the protective surface of your roof. Dents on metal flashing, vents, or soft metal fixtures are another clear signal that high-impact hail has struck your property. Even if no shingles are missing, internal water stains on your ceiling or damp insulation in the attic can point to hidden leaks that require immediate expert attention.
                    </p>

                    <h4 className={styles.question}>What Roofing Materials Are Best For The Orland Park Climate?</h4>
                    <p className={styles.paragraph}>
                        Asphalt shingles are the most popular choice for Orland Park homeowners because they provide a cost-effective and durable barrier against the region's heavy snowfall and spring thunderstorms. Metal roofing is an elite alternative that offers superior longevity and a high wind-resistance rating, making it ideal for the unpredictable Midwestern weather. For those seeking maximum durability, slate and clay tiles excel at withstanding extreme freeze-thaw cycles without degrading, unlike traditional organic materials. Impact-resistant architectural shingles are also highly recommended to help protect your home from the frequent hail events common in the <Link href="/areas-we-serve" className={styles.inlineLink}>Chicagoland area.</Link>
                    </p>

                    <h4 className={styles.question}>How Often Should I Have My Roof Inspected In Chicagoland?</h4>
                    <p className={styles.paragraph}>
                        In the Chicagoland area, the gold standard for maintenance is a professional inspection twice a year, ideally in the spring and fall. The spring check-up allows you to identify any damage caused by ice dams or heavy snow loads, while the fall visit ensures your roof is sealed and ready for the winter. You should also schedule an immediate inspection after any major weather event involving wind gusts over fifty miles per hour or significant hail. Consistent biannual monitoring helps identify minor issues, such as cracked flashing or loose shingles, before they escalate into expensive structural repairs.
                    </p>

                    <h4 className={styles.question}>How Long Does A Typical Roof Repair Or Replacement Take?</h4>
                    <p className={styles.paragraph}>
                        A standard residential roof replacement in Orland Park typically takes between one and three days, depending on the size and steepness of the home. Minor repairs, such as patching a leak or replacing a small section of damaged shingles, are often completed in just a few hours. The total timeline can be influenced by the complexity of the roof's architecture and the specific <Link href="/roof-types" className={styles.inlineLink}>type</Link> of material being installed, such as slate or metal. Our crews work efficiently to ensure the project is finished quickly while maintaining a clean and safe workspace around your property.
                    </p>

                    {/* PARTE EXPANDIBLE */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>

                        {/* Banner dentro de la parte expandible con los 2 links solicitados */}
                        <div className={styles.ctaBanner} style={{ marginTop: '30px' }}>
                            <p style={{ textAlign: 'center', margin: 0 }}>
                                Our local roofing specialists provide high-performance materials and meticulous installations to ensure your property remains leak-free. Contact us at {' '}
                                <Link href="tel:(847) 262-9774" className={styles.yellowLink}>
                                    <strong>(847) 262-9774</strong>
                                </Link>
                                {' '} or {' '}
                                <Link href="/contact" className={styles.yellowLink}>
                                    fill out our online form.
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className={styles.readMoreWrapper}>
                        <button
                            className={styles.readMoreBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Continue Reading'}
                            <span className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ''}`}>∨</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};