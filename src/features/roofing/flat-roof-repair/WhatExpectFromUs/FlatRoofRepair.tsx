"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './FlatRoofRepair.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

const FlatRoofRepair = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.container}>

                {/* Columna del Formulario: Primero en el DOM para que salga arriba en Tablet/Mobile */}
                <div className={styles.formColumn}>
                    <ContactForm />
                </div>

                {/* Columna de Texto: Contenido Exacto del Mockup */}
                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h1 className={styles.mainTitle}>Flat Roof Repair <br/> in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Expert Flat Roof Repair for Guaranteed Leak Prevention and Durability</h2>

                    <div className={styles.textContent}>
                        <p>
                            When heavy storms or high winds damage your flat roof, you need a repair team that not only completes the work efficiently but also supports you at every stage. At <strong>Advanced Roofing Team Construction</strong>, we help homeowners and property managers throughout Chicago protect their properties and simplify what can feel like an overwhelming process. Our team works directly with you and your insurance provider, streamlining your experience and setting clear expectations from your very first call about flat roof repair in Chicago.
                        </p>

                        <p>
                            Flat roofing systems in Chicago require special attention due to the region's harsh winters, heavy snow accumulation, and the freeze-thaw cycle that is common in this area. Our knowledge of local building requirements, as well as how Chicago’s property codes impact flat roof repairs, enables us to deliver work that addresses immediate needs while also planning for future weather extremes. We approach every repair as if we are protecting our own home or business, ensuring your property remains secure through every season.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Don't let ponding water or cracks compromise your commercial building; call our flat roof specialists for a rapid inspection and guaranteed repair solution. Contact us at <strong>(847) 262-9774</strong> or <span className={styles.blueLink}>fill out our online form</span>
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Critical Signs Your Flat Roof Needs Repair in Chicago</h3>

                        <p>
                            Flat roofs on homes and <strong>commercial buildings</strong>. in Chicago face unique challenges from the city's intense temperature swings, heavy snow loads, and persistent rain. Because these roofs rely on precise drainage, even minor flaws can quickly turn into major leaks and structural damage, often going unnoticed until water stains appear inside. Recognizing the following key indicators early is vital for preserving your roof's lifespan and avoiding costly interior damage.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Ponding Water That Persists:</strong> The most common sign of failure is water that remains standing or "ponding" on the roof surface for more than 48 hours after rainfall, indicating a structural sag or blocked drainage that degrades the membrane.
                            </li>
                            <li>
                                <strong>Membrane Blisters, Cracks, or Tears:</strong> Visible cracks, splits, or bubble-like blisters (called "alligatoring") on the surface membrane are direct signs of material deterioration and loss of waterproofing, often caused by UV exposure or trapped moisture.
                            </li>
                            <li>
                                <strong>Separated or Damaged Flashing:</strong> Leaks frequently originate where the roof material meets vents, pipes, skylights, or parapet walls; damaged, lifting, or corroded metal flashing in these areas means the seal is broken.
                            </li>
                            <li>
                                <strong>Interior Water Stains or Musty Odors:</strong> Water stains on the ceiling or walls, especially after rain or melting snow, are undeniable proof that the roof barrier has been breached, while a persistent musty smell can signal hidden moisture and mold growth.
                            </li>
                            <li>
                                <strong>Clogged Drains or Scuppers:</strong> Excessive debris, leaves, or plant growth blocking internal drains or scuppers prevents efficient water runoff, leading to backups that strain the membrane and can contribute to ice dam formation in winter.
                            </li>
                        </ul>

                        <p>
                            If you observe any of these problems, especially given Chicago's harsh freeze-thaw cycles, scheduling a professional flat roof inspection immediately is necessary to pinpoint the exact source of the damage and implement a durable, leak-proof repair solution.
                        </p>

                        <h3 className={styles.sectionHeading}>Local Knowledge Makes a Difference in Flat Roof Restoration</h3>

                        <p>Chicago's extreme weather, strict local codes, and evolving insurance standards all contribute to the outcomes of flat roof repairs. Our team actively monitors local regulatory updates that could affect project timing or the approval process. When the Chicago Department of Buildings revises its roofing requirements, we review the changes and adjust our procedures to ensure you remain in full compliance. We complete your flat roof repairs in a manner that withstands both Chicago's weather and city building reviews.</p>

                        <p>With years of experience working in neighborhoods throughout the city and surrounding Cook County, we are attuned to the factors that distinguish local flat roofs. Our crews attend city-approved training and stay in communication with permit offices across Chicago. This focus on ongoing education enables us to deliver flat roof repairs that consistently meet official standards and keep your property well-protected year-round.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FlatRoofRepair;