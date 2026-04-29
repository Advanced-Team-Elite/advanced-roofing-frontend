"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './FlatRoofInstallation.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const FlatRoofInstallation = () => {
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

                    <h1 className={styles.mainTitle}>Flat Roof Installation in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>High-Performance Flat Roof Installation for Superior Durability and Weatherproofing</h2>

                    <div className={styles.textContent}>
                        <p>
                            Flat roofs provide lasting performance and a sleek appearance for many buildings in Chicago.
                            At{' '}
                            <Link href="/about-us/" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>
                            , we guide you through each phase of your project—from helping you select suitable roofing materials to explaining what local requirements mean for your new installation. Our team handles every detail with professionalism, delivering a flat roof installation in Chicago that feels simple and worry-free.

                            We know Chicago property owners value quality and reliability—especially when city codes and unpredictable weather can impact roofing projects. Our team stays informed about changing building codes and installation standards, so you always receive workmanship that meets current requirements. Whether you manage a business, home, or multi-unit building, we design solutions around what matters most to you and your property’s needs.

                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Ensure your new construction or roof replacement is installed with maximum durability and a certified, long-term, leak-proof membrane. Contact us at (847) 262-9774 or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    fill out our online form
                                </Link>.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Key Benefits of New Flat Roof Installation in Chicago, IL</h3>

                        <p>
                            A professionally installed flat roof, utilizing modern membrane technology, offers significant advantages for both residential and
                            {' '}
                            <Link href="/commercial-roofing/" className={styles.linkText}>
                                <strong>commercial properties</strong>
                            </Link>{" "} in Chicago and other
                            <Link href="/areas-we-serve" className={styles.linkText}>
                                <strong>nearby areas</strong>
                            </Link>
                            , particularly in light of the city's unique weather conditions and building requirements. Beyond providing basic shelter, a quality flat roof replacement can dramatically enhance your property's energy efficiency, durability, and usable space. Choosing a certified installer ensures the system is tailored to withstand freeze-thaw cycles and prevent common issues, such as ponding water.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Superior Durability and Longevity:</strong> Modern flat roofing materials, such as TPO or EPDM membranes, are highly resilient, offering excellent resistance to thermal shock, UV degradation, and hail damage, often lasting 20–30 years with proper maintenance.
                            </li>
                            <li>
                                <strong>Enhanced Energy Efficiency:</strong> New flat roof installations enable the application of high R-value insulation directly beneath the membrane, significantly reducing heat loss in Chicago winters and minimizing heat gain in the summer, resulting in lower utility bills.
                            </li>
                            <li>
                                <strong>Low Maintenance and Easy Access:</strong> The relatively accessible surface makes routine inspections, maintenance, and repairs much simpler and safer than on steep-slope roofs, allowing minor issues to be addressed quickly.
                            </li>
                            <li>
                                <strong>Opportunity for Usable Rooftop Space:</strong> Flat roofs offer a unique platform for creating functional living spaces, such as rooftop decks, patios, or green roofs, thereby adding valuable outdoor leisure and entertainment areas, particularly in dense urban environments.
                            </li>
                            <li>
                                <strong>Effective Water Management:</strong> When installed correctly with proper tapering and internal drainage (scuppers or internal drains), modern flat roofs ensure water is quickly and efficiently removed, effectively eliminating the risk of destructive ponding water.
                            </li>
                        </ul>

                        <p>
                            Investing in a new, high-performance flat roof installation is a crucial step for protecting your Chicago property, enhancing its energy efficiency, and potentially unlocking valuable outdoor living space that steep-slope roofs cannot provide.
                        </p>

                        <h3 className={styles.sectionHeading}>Why Work with Our Roofing Team for Flat Roofs?</h3>

                        <p>
                            Major upgrades should feel manageable from start to finish. Advanced Roofing Team Construction stands out by guiding you through all stages, rather than focusing solely on the installation itself. Our team understands the unique demands of flat roof installation in Chicago, including city inspections, tough winters, and high winds. We emphasize respectful communication, keep you informed at every step, and maintain a personal approach that supports your decisions.
                            {" "}<Link href="/reviews" className={styles.linkText}>
                            <strong>reputation rests on trust</strong>
                        </Link>
                            , proven results, and clear priorities—your building’s safety and long-term value.

                            Many contractors focus only on the installation day. We believe real value comes from building a relationship long before and after your roof goes on. Whether you own a single-family home or manage

                            {" "}<Link href="/commercial-roofing" className={styles.linkText}>
                            <strong>a commercial property</strong>
                        </Link>
                            , you deserve a partner who communicates clearly, delivers on commitments, and respects your time and investment. That’s how we operate every day.

                        </p>


                    </div>
                </div>

            </div>
        </section>
    );
};