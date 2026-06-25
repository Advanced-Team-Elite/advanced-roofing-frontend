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

                <div className={styles.textColumn}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h1 className={styles.mainTitle}>24/7 Emergency Roof <br/> Repair in Chicagoland</h1>
                    <h2 className={styles.subTitle}>Immediate Response for Roofing Emergencies Across the Greater Chicago Area</h2>

                    <div className={styles.textContent}>
                        <p>
                            When severe weather damages your{' '}
                            <Link href="/roofing" className={styles.linkText}>
                                <strong>roof</strong>
                            </Link>
                            , you need an expert response immediately. At{' '}
                            <Link href="/about-us" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>
                            , we handle every step of emergency roof repair across the Chicagoland area to ensure your property remains secure.
                            Our dedicated team responds day or night, providing rapid support when hail,
                            high winds, or sudden leaks impact your home or business. We protect your property
                            and manage insurance documentation, providing peace of mind throughout the recovery process.
                        </p>

                        <p>
                            Our deep experience with Chicagoland’s unpredictable weather means we understand how quickly roof damage can disrupt your life. Whether a storm strikes in spring or harsh winter conditions hit the region, you can count on us for rapid, professional support. We’ve built strong roots in the community by offering dependable service when families and business owners need it most. Rest easy knowing we’ll be there to restore your property as soon as a crisis strikes.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Has a storm compromised your roof and exposed your property? Contact us at{' '}
                                <Link href="tel:8779456565" className={styles.linkText}>
                                    <strong>(877) 945-6565</strong>
                                </Link>{' '}
                                or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    fill out our online form
                                </Link>{' '}
                                for 24/7 emergency repair and structural stabilization.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Key Benefits of Professional Emergency Roof Repair</h3>

                        <p>
                            In a region with unpredictable and severe weather like the Chicagoland area, a sudden roof leak or storm breach is a serious threat to your home or
                            {' '}<Link href="/commercial-roofing" className={styles.linkText}>
                            <strong>business</strong>
                        </Link>{' '}
                            . When you face an emergency, every minute counts to prevent interior damage, structural compromise, and the expensive nightmare of mold growth. Hiring a professional service immediately is the single most effective way to secure your property and ensure a lasting, correct solution to your roofing crisis.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Rapid Damage Mitigation:</strong> Our professionals provide immediate, safe response, often within hours, to install temporary, secure tarping that stops water penetration and protects your property's structure and contents.
                            </li>
                            <li>
                                <strong>Safety and Expertise:</strong> Working on a damaged roof is extremely dangerous; our licensed team possesses the training and specialized safety equipment to secure the area without risking injury.
                            </li>
                            <li>
                                <strong>Prevents Secondary Damage:</strong> Quick action prevents water from reaching insulation, electrical wiring, and drywall, which drastically reduces the risk of long-term mold and expensive structural rot.
                            </li>
                            <li>
                                <strong>Streamlines Insurance Claims:</strong> Our emergency crews provide essential, detailed documentation and photographic evidence of storm-related damage, critical for a smooth and successful claim process.
                            </li>
                            <li>
                                <strong>Guaranteed, Lasting Fixes:</strong> Unlike temporary DIY attempts, professional emergency repairs are executed with quality materials and workmanship, providing a reliable solution that lasts until permanent repairs are completed.
                            </li>
                        </ul>

                        <p>
                            A roofing emergency demands the speed and precision that only a licensed professional can offer. By choosing our expert team for your emergency repair, you are investing in immediate protection, peace of mind, and the long-term integrity of your property against the Chicagoland area's demanding weather.
                        </p>
                    </div>
                </div>

                <div className={styles.formColumn}>
                    <ContactForm />
                </div>

            </div>
        </section>
    );
};

export default EmergencyRoofRepair;