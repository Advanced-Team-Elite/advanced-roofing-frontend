"use client";
import React, {useState} from 'react';
import styles from './ChicagoRoofingServices.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";

export const ChicagoRoofingServices = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.servingSection}>
            <div className={styles.container}>

                {/* Bloque de Texto: Izquierda en Desktop, Abajo en Mobile */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Commercial Roofing in Chicago, IL </h2>
                    <h3 className={styles.subtitle}>
                        Maximize Your Operational Longevity With Advanced Roof Technology
                    </h3>

                    <p className={styles.paragraph}>
                        Running a business comes with enough challenges; your {' '}
                        <Link href="/roofing" className={styles.inlineLink}>
                            roof
                        </Link> {' '}
                        shouldn’t be one of them. At{' '}
                        <Link href="/about-us" className={styles.inlineLink}>
                            Advanced Roofing Team Construction
                        </Link> {' '}
                        Advanced Roofing Team Construction
                        , we provide dependable commercial roofing services to property owners throughout Chicago and the surrounding areas, including full{' '}
                        <Link href="/roofing/roof-installation-replacement" className={styles.inlineLink}>
                            roof installation
                        </Link> {' '}
                        , replacement, androofing{' '}
                        <Link href="/roofing/storm-damage-repair/" className={styles.inlineLink}>
                            storm damage recovery.
                        </Link> {' '}
                    </p>

                    <p className={styles.paragraph}>
                        If your building needs a new roof or has been impacted by wind or hail, we’re ready to help. We work with businesses, property managers, and building owners to deliver roofing systems designed to withstand Chicago’s demanding weather conditions.
                    </p>

                    <p className={styles.paragraph}>
                        Many of the properties we work on are occupied daily, so we plan work schedules, staging areas, and safety precautions to minimize disruptions to your operations. Our team works closely with on-site managers to minimize disruptions for tenants, guests, and employees, while keeping entrances, parking areas, and loading zones as accessible as possible. We explain material options in clear terms—including lifespan, maintenance needs, and typical costs—so you can choose a system that fits your budget and long-term plans for the building.
                    </p>

                    <div className={styles.contactBanner}>
                        <p className={styles.contactText}>
                            Call <a href="tel:8472629774"><strong>(847) 262-9774</strong></a> or <Link href="/contact"><strong className={styles.contactUs}>contact us online</strong></Link> to schedule a service and get a free estimate.
                        </p>
                    </div>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <h3 className={styles.subtitle}>
                            Roofing Solutions for Chicago Businesses
                        </h3>
                        <p className={styles.paragraph}>
                            Whether you’re constructing a new building or updating an existing roof, it’s important to work with a team that understands the specific demands of commercial roofing in Chicago. We install roofing systems that meet building codes and perform in the region’s extreme weather conditions.
                        </p>

                        <p className={styles.textBold}>Our services include:</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <Link href="/roof-types/flat-roofs/" className={styles.inlineLink}>
                                    Flat roofing systems
                                </Link>
                            </li>
                            <li>TPO and PVC membranes</li>
                            <li>
                                <Link href="/roof-types/metal-roofs/" className={styles.inlineLink}>
                                    Metal roofing options
                                </Link>
                            </li>
                            <li>
                                <Link href="/roof-types/shingle-roofing/" className={styles.inlineLink}>
                                    Asphalt-based commercial shingles
                                </Link>
                            </li>
                            <li>Storm-resistant roof replacements after wind or hail damage</li>
                        </ul>

                        <p className={styles.paragraph}>
                            <Link href="/reviews/" className={styles.inlineLink}>
                                We partner with businesses of all sizes
                            </Link>
                            , from local shops to large commercial facilities, delivering roofing solutions focused on performance and durability.
                        </p>

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

                {/* Bloque de Imagen: Derecha en Desktop, Arriba en Mobile */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/images/features/roofing/content-v16.png"
                            alt="Chicago Roofing Services"
                            className={styles.mainImage}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};