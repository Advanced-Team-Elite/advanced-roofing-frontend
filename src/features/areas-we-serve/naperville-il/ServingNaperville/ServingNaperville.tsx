'use client';

import Image from 'next/image';
import styles from './ServingNaperville.module.css';
import {useState} from "react";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ServingNaperville = () => {
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

                    <h4 className={styles.question}>How Often Should I Have My Roof Professionally Inspected in Naperville?</h4>
                    <p className={styles.paragraph}>
                        Homeowners in Naperville should schedule a professional roof inspection at least once per year to identify damage caused by the harsh Midwest seasons. The ideal time for a checkup is during the spring to assess the effects of heavy snow loads and the destructive freeze-thaw cycles from the previous winter. You should also request an immediate inspection after any significant weather event with high winds or large hail. Regular monitoring is particularly important for roofs over fifteen years old, as materials begin to lose their natural resistance to moisture and thermal stress.
                    </p>

                    <h4 className={styles.question}>What Type of Roofing Material Is Best Suited for the Heavy Snow in Our Area?</h4>
                    <p className={styles.paragraph}>
                        Metal roofing is widely considered the top choice for snowy climates because its smooth, non-porous surface allows heavy snow and ice to slide off easily. This self-shedding capability significantly reduces the weight load on your home’s structure and prevents the formation of dangerous ice dams in your gutters. High-quality architectural asphalt shingles are also an excellent, more budget-friendly option when reinforced with an ice-and-water shield underlayment. For those seeking long-term durability, synthetic slate and composite shingles offer superior impact resistance and insulation properties that hold up well against sub-zero temperatures.
                    </p>

                    <h4 className={styles.question}>How Long Does a Typical Roof Replacement Project Take from Start to Finish?</h4>
                    <p className={styles.paragraph}>
                        For a standard-sized residential home using asphalt shingles, the actual physical installation typically takes between one and three days. The process begins with a full day dedicated to the removal of old materials and a thorough inspection of the wooden roof decking underneath. While the build-out is fast, the entire project timeline—including the initial consultation, permit approvals, and material delivery—usually spans two to three weeks. Factors such as a steep roof pitch, complex architectural details, or unexpected weather delays can occasionally extend the work by a few extra days.
                    </p>

                    <h4 className={styles.question}>How Can I Maintain My Roof After Repair?</h4>
                    <p className={styles.paragraph}>
                        Keeping your gutters clear of leaves and debris is the most critical maintenance task to ensure that water flows away from your shingles rather than backing up under them. You should also trim any overhanging tree branches to prevent them from scraping against the roof surface or falling during high-wind events. Periodically check your attic for signs of moisture or daylight and verify that your ventilation remains unobstructed to prevent heat buildup and mold growth. Finally, make it a habit to replace the caulk and sealant around your chimney, vents, and flashing every few years to maintain a completely watertight barrier.
                    </p>

                    {/* PARTE EXPANDIBLE */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>

                        {/* Banner CTA (Oculto bajo el botón en el mockup original, pero dentro del div expandible) */}
                        <div className={styles.ctaBanner} style={{ marginTop: '30px' }}>
                            <p style={{ textAlign: 'center', margin: 0 }}>
                                Upgrade your home’s curb appeal and defense with high-quality materials installed by our certified local experts. Contact us at <strong>(847) 262-9774</strong> or {' '}
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