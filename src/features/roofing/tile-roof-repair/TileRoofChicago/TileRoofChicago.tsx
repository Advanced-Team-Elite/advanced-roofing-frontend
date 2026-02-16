"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './TileRoofChicago.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const TileRoofChicago = () => {
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

                    <h1 className={styles.mainTitle}>Tile Roof Repair in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Specialized Tile Roof Repair For Lasting Leak Solutions</h2>

                    <div className={styles.textContent}>
                        <p>
                            A tile roof brings lasting beauty and reliable protection to your home, but severe weather or years of exposure can compromise that strength. When you need tile roof repair in Chicago, you want a team that simplifies the process and stands with you from the first inspection through every detail of restoration. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we focus on what matters most—clear communication, thorough assessments, and genuine support. You get peace of mind, a dependable roof, and the confidence that comes from working with an experienced local company.
                        </p>

                        <p>
                            Many property owners in the {" "}
                            <Link href="/areas-we-serve/" className={styles.inlineLink}>
                                Chicago area
                            </Link>{" "}
                            appreciate the classic appearance and durability of tile roofing. Unique local factors—such as intense freeze-thaw cycles, strong winds off Lake Michigan, or city permits—mean a successful repair demands the right skills and processes. Our approach addresses each Chicago-specific challenge with timely responses and the knowledge to keep your project on track throughout the year. We give you accurate answers and prompt assistance when you need it most.
                        </p>

                        <div className={styles.innerCta}>
                            <p>
                                Spot a cracked tile or suspect a leak compromising your roof integrity? Get prompt, specialized repair from our experienced tile roofers today.
                                Contact us at{' '}
                                <a href="tel:8472629774" className={styles.inlineLink}>
                                    <strong>(847) 262-9774</strong>
                                </a>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    fill out our online form
                                </Link>{' '}
                            </p>
                        </div>


                        <h2 className={styles.subTitle}>Indicators Your Tile Roof Needs Specialized Repair</h2>

                        <p>For Chicago homeowners with tile roofs, the long-term integrity of the {" "}
                            <Link href="/roofing/" className={styles.inlineLink}>
                                roofing system
                            </Link>{" "}
                            depends entirely on catching damage early. Unlike asphalt, tile failure usually happens not in the tile itself, but in the underlayment, flashing, or mortar. Ignoring these signs in a climate with intense snow loads, freeze-thaw cycles, and high winds will quickly lead to structural wood rot and costly interior water damage. When you see any of these indicators, professional tile repair is necessary to maintain your roof's promised century-long lifespan.</p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Cracked, Chipped, or Missing Tiles:</strong> Although durable, individual clay
                                or concrete tiles can crack due to hail impact, falling debris, or careless foot
                                traffic. Missing or broken tiles must be replaced immediately, as the underlying
                                waterproof layers are directly exposed to rain and freezing moisture.
                            </li>
                            <li>
                                <strong>Visible Water Stains or Leaks Indoors:</strong> Yellowish-brown water stains
                                on ceilings or walls on the top floor are the clearest sign that water has
                                penetrated the roofing system. This usually indicates a failing underlayment or
                                cracked flashing around a chimney or vent, rather than a broken tile.
                            </li>
                            <li>
                                <strong>Damaged or Missing Flashing:</strong> Flashing seals the critical transition
                                points where the roof meets vertical surfaces, such as chimneys, skylights, or walls.
                                If the metal is warped, lifted, or showing gaps, water intrusion is guaranteed and
                                requires specialized metalwork repair by a tile roofer.
                            </li>
                            <li>
                                <strong>Mortar or Cement Deterioration:</strong> On clay or Spanish tile roofs, the
                                mortar used along the ridges or rake edges can crack and crumble due to age and
                                freeze-thaw cycles. This breakdown allows water to seep into the roof structure and
                                requires precise re-pointing or resealing.
                            </li>
                            <li>
                                <strong>Debris in Gutters and Downspouts:</strong> Finding an unusual amount of small,
                                fine granules or sand-like debris in your gutters often signals that the underlying
                                concrete tiles are deteriorating. If the debris looks like small, flaky chunks, it
                                could be a result of mortar failure or a broken edge piece.
                            </li>
                        </ul>
                        <p>
                            Tile roof repair is a highly specialized task; walking on the tiles incorrectly can cause more breakage than the original damage. Addressing any of these signs promptly with a qualified tile roofer ensures the small repair remains small and your roof continues to deliver the superior protection you invested in.
                        </p>


                    </div>
                </div>

            </div>
        </section>
    );
};