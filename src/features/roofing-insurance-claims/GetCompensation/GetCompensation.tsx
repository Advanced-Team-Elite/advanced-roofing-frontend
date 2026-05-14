"use client";
import React, {useState} from 'react';
import styles from './GetCompensation.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const GetCompensation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Imagen (arriba en mobile) */}
                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right" distance={20}>
                        <img
                            src="/assets/images/features/about-us/content-v11.webp"
                            alt="Roofing Project Installation"
                            className={styles.mainImage}
                        />
                    </ScrollReveal>

                </div>

                {/* Lado Derecho: Contenido */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Ensuring No Damage Goes Unnoticed</h2>

                    <p className={styles.paragraph}>
                        Once your property evaluation is underway, a representative will visit your home to assess the condition of your exterior. It is vital to have a knowledgeable and experienced contractor, like Advanced Roofing Team, present during this walk-through. We provide essential on-site support, pointing out the subtle signs of hail and wind impact that we’ve already documented in your Property Evidence Report. Our goal is to ensure that the final evaluation is as thorough and accurate as possible.
                    </p>

                    <h3 className={styles.subtitle}>
                        Technical Accuracy is Our Core Strength
                    </h3>

                    <p className={styles.paragraph}>
                        After the initial assessment is complete, you will receive a scope of work outlining the proposed repairs for your home. It is crucial to review this document carefully to ensure it covers every necessary component to restore your property to its true pre-storm condition. If there are discrepancies between our findings and the proposed plan, our team at Advanced Roofing Team provides the supplemental data, building code requirements, and manufacturer specifications needed to correct the record. We advocate for technical precision to ensure your restoration project is fully and accurately documented.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>


                        <h3 className={styles.subtitle}>Keeping You Informed Every Step of the Way</h3>

                        <p className={styles.paragraph}>Once the restoration plan is finalized and the scope of work is confirmed, we move into the most important phase: your roof, rebuilt the right way. Our team will work closely with you to coordinate the entire construction process, ensuring that every repair is completed with the highest level of craftsmanship. We maintain open communication throughout the project, ensuring a smooth transition from "damage identified" to "property restored" as quickly and efficiently as possible.</p>

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