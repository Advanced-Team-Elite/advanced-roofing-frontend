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

                    <h1 className={styles.mainTitle}>Premium Siding Installation & Replacement</h1>
                    <h2 className={styles.subTitle}>Durable, Thermally Efficient Exteriors Engineered for the Chicagoland Climate</h2>

                    <div className={styles.textContent}>
                        <p>
                            At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we recognize that your home’s exterior is its primary defense against the elements. We combine high-performance materials with master-level craftsmanship to ensure a durable, long-lasting siding installation across Chicagoland. Whether you are exploring vinyl, fiber cement, or premium wood siding, we provide customized, professional solutions tailored to the architectural integrity and specific budget of your property.
                        </p>

                        <p>
                            For property owners across the Greater Chicago area, a siding project is an essential investment in both performance and aesthetics. We perform a thorough structural assessment of your exterior to identify underlying vulnerabilities, ensuring that our recommended siding systems not only improve curb appeal but also maximize thermal efficiency against harsh winters and intense summer heat. We guide you through the process, balancing modern durability with the unique design character of your home.
                        </p>

                        <p className={styles.boldText}>Why property owners choose our team for Chicagoland siding services:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Transparent Process:</strong> Clear, professional communication regarding project timelines, technical milestones, and any structural adjustments identified during installation.
                            </li>
                            <li>
                                <strong>Property Protection:</strong> Strict job-site management, including protective measures for your landscaping and methodical debris removal to maintain a clean, safe environment.
                            </li>
                            <li>
                                <strong>Technical Expertise:</strong> Consultative guidance on materials that meet your performance goals and enhance the long-term value of your property.
                            </li>
                            <li>
                                <strong>Quality Assurance:</strong> A comprehensive final walkthrough to verify that every detail, finish, and trim element meets our rigorous quality standards.
                            </li>
                        </ul>

                        <p>Whether you are addressing storm-related wear and tear or seeking a complete exterior transformation, our team delivers the professional-grade results your property deserves.</p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Ready to reduce heating costs and improve your home's exterior resilience?
                                Contact us at{' '}
                                <a href="tel:8779456565" className={styles.inlineLink}>
                                    <strong>(877) 945-6565</strong>
                                </a>{' '}
                                or{' '}
                                <Link href="/contact-us/" className={styles.inlineLink}>
                                    fill out our online form
                                </Link>{' '}
                                for a professional consultation.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Our Professional Siding Installation Methodology</h3>

                        <p>
                            We believe that professional results require a structured, transparent approach. Our installation methodology is designed to provide complete peace of mind, from our initial site assessment through to the final inspection.
                        </p>

                        <p>
                            We begin with a detailed, on-site consultation to review your objectives, perform a technical inspection, and capture precise measurements. Following this, we present a comprehensive proposal outlining recommended materials, project phases, and estimated timelines in clear, professional detail.
                        </p>

                        <p>
                            During the installation phase, our crews strictly adhere to manufacturer specifications and all local building codes across Chicagoland. We handle the removal of existing materials in controlled stages, prioritize the structural integrity of the substrate, and maintain constant communication if we identify any underlying issues. We conclude every project with a meticulous cleanup and a final walkthrough, ensuring your home is fully restored and ready for immediate enjoyment.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};