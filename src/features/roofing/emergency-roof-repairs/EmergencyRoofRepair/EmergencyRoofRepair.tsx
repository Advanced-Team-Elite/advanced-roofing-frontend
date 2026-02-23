"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './EmergencyRoofRepair.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

const EmergencyRoofRepair = () => {
    return (
        <section className={styles.mainSection}>
            <div className={styles.container}>

                <div className={styles.formColumn}>
                    <ContactForm />
                </div>

                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h1 className={styles.mainTitle}>Emergency Roof <br/> Repair in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>24/7 Immediate Response for Roofing Emergencies</h2>

                    <div className={styles.textContent}>
                        <p>
                            When severe weather damages your{' '}
                            <Link href="/roofing" className={styles.linkText}>
                                <strong>roof</strong>
                            </Link>
                            , you need help fast. At{' '}
                            <Link href="/about-us" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>
                            , we handle every step of emergency roof repair in Chicago so you can feel secure.
                            Our dedicated team responds day or night, providing immediate support when hail,
                            high winds, or sudden leaks impact your property. We help protect your home
                            and handle insurance communications, giving you peace of mind through each
                            phase of the process.
                        </p>

                        <p>
                            Our experience with Chicago’s unpredictable weather means we know how quickly roof damage can disrupt your daily life. Whether a storm strikes in spring or harsh winter conditions hit, you can count on us for rapid, local support. We’ve built strong roots in the community by offering dependable response when families need it most. Rest easy knowing we’ll be there to help restore your property as soon as a crisis strikes.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Has a storm compromised your roof and exposed your home? Contact us at{' '}
                                <Link href="tel:8472629774" className={styles.linkText}>
                                    <strong>(847) 262-9774</strong>
                                </Link>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    fill out our online form
                                </Link>{' '}
                                for 24/7 emergency repair and stabilization.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Key Benefits of Professional Emergency Roof Repair</h3>

                        <p>
                            In a city with unpredictable and severe weather like Chicago, a sudden roof leak or storm breach is a serious threat to your home or
                            {' '}<Link href="/commercial-roofing" className={styles.linkText}>
                                <strong>business</strong>
                            </Link>{' '}
                            . When you face an emergency, every minute counts to prevent extensive interior damage, structural compromise, and the expensive nightmare of mold growth. Hiring a professional service immediately is the single most effective way to secure your property and ensure a quick, correct, and lasting solution to your roofing crisis.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Rapid Damage Mitigation:</strong> Professionals provide immediate, safe response, often within hours, to install temporary, secure tarping that stops water penetration and protects your home's structure and contents.
                            </li>
                            <li>
                                <strong>Safety and Expertise:</strong> Working on a damaged roof is extremely dangerous; licensed roofers have the training and specialized safety equipment to secure the area and work without risking injury.
                            </li>
                            <li>
                                <strong>Prevents Secondary Damage:</strong> Quick action prevents water from reaching insulation, electrical wiring, and drywall, which drastically reduces the risk of long-term mold and expensive structural rot.
                            </li>
                            <li>
                                <strong>Streamlines Insurance Claims:</strong> Emergency crews provide essential, detailed documentation and photographic evidence of the storm-related damage, which is critical for a smooth and successful claim process.
                            </li>
                            <li>
                                <strong>Guaranteed, Lasting Fixes:</strong> Unlike temporary DIY attempts that often fail, professional emergency repairs are executed with quality materials and workmanship, providing a reliable solution that lasts until permanent repairs can be scheduled.
                            </li>
                        </ul>

                        <p>
                            A roofing emergency demands the speed and precision that only a professional can offer. By choosing a licensed expert for your emergency repair, you are investing in immediate protection, peace of mind, and the long-term integrity of your home against Chicago's demanding weather.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EmergencyRoofRepair;