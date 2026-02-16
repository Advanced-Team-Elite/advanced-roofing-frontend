"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './SidingServices.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const SidingServices = () => {
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

                    <h1 className={styles.mainTitle}>Siding Services in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Combat Extreme Windy City Weather with Thermally Efficient Insulated Siding</h2>

                    <div className={styles.textContent}>
                        <p>
                            At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we understand the importance of a well-maintained exterior for your home’s curb appeal and protection.
                            That’s why we prioritize using top-notch materials and providing exceptional workmanship to ensure a durable, long-lasting siding installation. From vinyl to fiber cement to wood siding, we offer customized solutions tailored to your specific needs and budget. Enhance the beauty and value of your home with our reliable siding installation services today.
                        </p>

                        <p >
                            For many homeowners in the Chicago area, siding projects are also an opportunity to improve performance, not just appearance. We take time to assess your current exterior, identify problem areas, and explain how different siding systems will perform through harsh winters, summer heat, and heavy storms. By walking you through options step by step, we help you choose a solution that balances durability, style, and long-term maintenance needs for your specific property.
                        </p>

                        <p className={styles.boldText}>When you work with our team for Chicago siding services, you can expect:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Clear communication throughout</strong> so you always understand timelines, next steps, and any changes that arise during the project.
                            </li>
                            <li>
                                <strong>Respect for your property</strong> as we protect landscaping, manage debris, and keep the job site as orderly as possible each day.
                            </li>
                            <li>
                                <strong>Knowledgeable guidance</strong> on materials and design choices that fit your goals, budget, and the character of your neighborhood.
                            </li>
                            <li>
                                <strong>Careful final review</strong> to confirm that details, finishes, and cleanup align with the standards we set at the beginning of the job.
                            </li>
                        </ul>

                        <p>Transform the look and feel of your home with our expert siding installation services from Advanced Roofing Team. Whether you’re looking to upgrade your home’s exterior due to damage, wear and tear, or simply for a fresh new look, our team is here to help.</p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Protect your home from lake-effect moisture and rising heating costs with our high-performance insulated siding systems.
                                Contact us at{' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    (847) 262-9774
                                </a>{' '}
                                or{' '}
                                <Link href="/contact-us/" className={styles.inlineLink}>
                                    fill out our online form.
                                </Link>{' '}
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Our Siding Installation Process</h3>

                        <p>
                            Understanding what will happen during your project can make planning much easier. Our siding installation process is designed to be clear, organized, and respectful of your home and schedule from the first visit through final cleanup. By outlining each step in advance, we help you know what to expect and how long work is likely to take, so there are fewer surprises along the way.
                            We are also
                            {' '}
                            <Link href="/roofing/emergency-roof-repairs/" className={styles.inlineLink}>
                                available 24/7.
                            </Link>

                        </p>

                        <p>
                            We start with a detailed consultation at your home, during which we review your goals, inspect the exterior, and take accurate measurements. After that visit, we provide a written proposal that explains recommended materials, timelines, and project phases in plain language. Once you are comfortable moving forward, we schedule the job, order materials, and confirm dates so you can prepare for when crews will be on-site.
                        </p>

                        <p>
                            During installation, our team protects landscaping and walkways, removes old materials in stages, and installs new siding in accordance with manufacturer guidelines and applicable local building codes for the Chicago area. We keep you informed of our progress, address any conditions uncovered beneath the old siding, and adjust the plan only after discussing options with you. At the end of the project, we conduct a thorough walkthrough, complete a final cleanup, and ensure all areas around your home are left neat and ready to enjoy.
                        </p>


                    </div>
                </div>

            </div>
        </section>
    );
};