"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './SkylightRepair.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const SkylightRepair = () => {
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

                    <h1 className={styles.mainTitle}>Skylight Repair in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Expert Skylight Repair For Guaranteed Watertight Sealing</h2>

                    <div className={styles.textContent}>
                        <p>
                            Natural light adds comfort and value to your property—until damaged skylights compromise this benefit. When leaks, cracks, or foggy panes disrupt your space, choosing the right team for skylight repair in Chicago restores your environment and peace of mind. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we help you regain the benefits of your skylight quickly, with clear communication and solutions tailored to your needs and schedule.
                        </p>

                        <p>
                            We know a damaged skylight can interfere with day-to-day living and may affect your property’s interior. Acting quickly helps protect your home and keep its value. In a city like Chicago, sudden shifts from freezing temperatures to muggy summers mean that professional skylight repair needs to withstand the demanding local conditions. Our local experience helps us select durable repair solutions that suit your property, safeguard your investment, and keep your living space bright year-round.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                See leaks or condensation around your skylight frame? Get fast, professional repair service to prevent serious interior damage.
                                Contact us at <strong>(847) 262-9774</strong> or <span className={styles.blueLink}>fill out our online form.</span>
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Key Signs Your Skylight Needs Expert Repair</h3>

                        <p>
                            Skylights are a common source of roof leaks because they represent a major penetration through the roof plane, creating multiple points where water can infiltrate. In Chicago and other{' '}
                            <Link href="/areas-we-serve/" className={styles.inlineLink}>
                                nearby areas
                            </Link>
                            , the persistent freeze-thaw cycles and heavy snow loads put immense stress on the seals and flashing around these fixtures. If you notice any of the following signs, it indicates the weatherproof barrier has been compromised and needs immediate, professional repair to prevent catastrophic water damage.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Water Stains on Ceiling or Walls:</strong> The most obvious sign is{' '}
                                <strong>the appearance of yellow or brown water stains</strong> on the drywall
                                or ceiling directly surrounding the skylight frame. This confirms that water
                                has penetrated the roof and underlayment, typically due to a failed exterior
                                flashing system.
                            </li>
                            <li>
                                <strong>Persistent Fogging Between the Glass Panes:</strong> If the glass
                                itself is constantly foggy or has visible moisture trapped between the sealed
                                layers (not just on the room-side surface), the{' '}
                                <strong>Insulated Glass Unit (IGU) seal has failed.</strong> This significantly
                                reduces the skylight's energy efficiency and may require replacement of the
                                pane or unit.
                            </li>
                            <li>
                                <strong>Mold, Mildew, or Musty Odors:</strong> The presence of mold growth or
                                a persistent <strong>musty smell</strong> near the skylight is a clear indicator
                                of long-term moisture saturation. This suggests water has been slowly seeping
                                into the insulation and drywall, creating a serious health hazard that needs
                                immediate attention.
                            </li>
                            <li>
                                <strong>Cracked, Yellowing, or Brittle Plastic:</strong> Look for visible
                                cracks, chips, or spiderweb patterns on the glazing, especially on acrylic
                                or plastic dome skylights. Older plastic skylights may also exhibit
                                significant <strong>yellowing</strong>, a sign that the material has degraded
                                due to UV exposure and is no longer structurally sound.
                            </li>
                            <li>
                                <strong>Drafts, Rattling, or Ice Dams:</strong> Feeling cold drafts or hearing
                                a whistling noise suggests the perimeter seals or gaskets have failed.
                                Furthermore, consistent <strong>ice buildup/dams</strong> on your eaves that
                                lead to leaks around the skylight during the winter are a red flag for
                                insulation and flashing problems.
                            </li>
                        </ul>

                        <p>
                            Do not attempt a quick fix with sealant, as leaks often originate underneath the roof's surface where caulk cannot reach. Immediate, professional repair by a specialist ensures the source of the leak is properly identified, the flashing is secured, and your home is protected.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};