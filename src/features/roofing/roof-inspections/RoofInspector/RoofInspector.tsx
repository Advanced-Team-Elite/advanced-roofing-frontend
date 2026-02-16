"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './RoofInspector.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const RoofInspector = () => {
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

                    <h1 className={styles.mainTitle}>Roof Inspector in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Get Peace of Mind with a Comprehensive Roof Inspection</h2>

                    <div className={styles.textContent}>
                        <p>
                            When you need a roof inspector in Chicago, you deserve a thorough, reliable assessment—especially after storms or before buying or selling a property. At{' '}
                            {' '}<Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>{' '}
                            we make roof inspections simple, clear, and tailored to the unique demands of Chicago homes and
                            {' '}<Link href="/commercial-roofing/" className={styles.inlineLink}>
                                businesses
                            </Link>{' '}
                            Our experienced team delivers detailed evaluations and documentation, so you always know where you stand.
                        </p>

                        <p >
                            Our inspections reflect a deep understanding of the weather extremes found in Chicago and{' '}
                            <Link href="/areas-we-serve/" className={styles.inlineLink}>
                                nearby areas
                            </Link>{' '}
                            , from severe winter cold to intense summer storms. We stay on top of new local construction trends and building codes, ensuring our roof inspection reports meet the current standards that matter most to you. This attention to detail helps protect your investment and keeps you informed about the real condition of your
                            {' '}
                            <Link href="/roofing/" className={styles.inlineLink}>
                                roof
                            </Link>{' '}
                            before you make important property decisions.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Protect your property and budget from hidden roof damage. Contact us at
                                Call {' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    (847) 262-9774
                                </a>{' '}
                                or{' '} or{' '}
                                <Link href="/contact-us/" className={styles.inlineLink}>
                                    fill out our online form
                                </Link>{' '}
                                to schedule your thorough inspection today.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Key Benefits of a Professional Roof Inspection for Chicago Homes</h3>

                        <p>
                            In Chicago, your roof takes a constant beating from harsh winters, heavy snow loads, and high winds off Lake Michigan, making annual inspections a necessity, not a luxury. A professional inspection goes far beyond what a homeowner can see from the ground, identifying subtle signs of damage before they lead to structural problems. Investing in this proactive service protects your home, your finances, and your family from the unpredictable nature of the Midwest climate.
                        </p>

                        <ul className={styles.processList}>
                            <li>
                                <strong>Early Detection of Storm Damage:</strong> Chicago's strong winds and
                                freeze-thaw cycles can loosen flashing or crack shingles, and an inspector
                                catches this hidden damage before it turns into a major leak in the spring thaw.
                            </li>
                            <li>
                                <strong>Maximizing Roof Lifespan:</strong> By addressing minor issues like loose
                                seals or missing granules early, you prevent premature aging and deterioration,
                                significantly extending the functional life of your existing roof.
                            </li>
                            <li>
                                <strong>Securing a Fair{' '}
                                    <Link href="/roofing-insurance-claims/" className={styles.inlineLink}>
                                        Insurance Claim
                                    </Link>:</strong>{' '}
                                A detailed, certified inspection report provides the objective evidence and
                                documentation required by your insurer to confirm storm-related damage and
                                expedite a fair settlement.
                            </li>
                            <li>
                                <strong>Preventing Interior Damage and Mold:</strong> Identifying small roof
                                vulnerabilities prevents water intrusion into your attic, which stops mold
                                growth, wood rot, and water stains from appearing on your ceilings and walls.
                            </li>
                            <li>
                                <strong>Enhancing Home Value and Energy Efficiency:</strong> A clean bill of
                                health on your roof instills confidence in potential buyers, and fixing issues
                                like poor ventilation improves energy efficiency, lowering your heating and
                                cooling costs.
                            </li>
                        </ul>

                        <p>
                            A comprehensive roof inspection is your best defense against the specific challenges posed by the Chicago climate. Don't wait for the first sign of a leak on your ceiling; proactive inspection is the most responsible way to maintain the integrity and longevity of your most important home asset. Don't hesitate to call the roof inspector Chicago residents trust.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};