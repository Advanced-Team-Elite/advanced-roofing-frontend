"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './MetalRoofInstallation.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const MetalRoofInstallation = () => {
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

                    <h1 className={styles.mainTitle}>Metal Roofing in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Get a Durable Roof Built for the Chicago Climate</h2>

                    <div className={styles.textContent}>
                        <p>
                            Choosing a metal roof provides unmatched durability and long-term peace of mind. Whether you live in the heart of the city or one of Chicago's historic neighborhoods, you need a roof that handles harsh winters, strong winds, and heavy storms. Metal roofing installed by
                            {' '}
                            <Link href="/about-us/" className={styles.linkText}>
                                <strong>Advanced Roofing Team Construction</strong>
                            </Link>{' '}
                            delivers more than just curb appeal—it endures the elements year after year and helps protect your property from seasonal changes unique to the region.

                        </p>

                        <p>
                            Chicago’s weather tests every roof. Steel and aluminum panels, popular options for local homeowners, withstand heavy snow loads and freeze-thaw cycles—common challenges throughout
                            {' '}
                            <Link href="/areas-we-serve/" className={styles.linkText}>
                                <strong>Cook County.</strong>
                            </Link>
                            {' '}

                            These metal roofing choices work well for the city’s classic homes in neighborhoods where property owners seek proven performance and value. With a wide range of colors and styles, you can select a

                            {' '}
                            <Link href="/roofing/" className={styles.linkText}>
                                <strong>roof</strong>
                            </Link>
                            {' '}
                            that enhances both your property’s appearance and strength in Chicago’s climate.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Upgrade to a metal roof that can withstand Chicago's snow, ice, and high winds. Contact us at (847) 262-9774 or{' '}
                                <Link href="/contact-us" className={styles.blueLink}>
                                    fill out our online form
                                </Link>{" "}
                                for a free estimate.
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Comprehensive Services & Benefits of Metal Roofing in Chicago</h3>

                        <p>
                            When researching a metal roofing company in Chicago, durability and reliability matter most. Our team understands the region’s unpredictable climate and tailors recommendations for each home or
                            {' '}
                            <Link href="/commercial-roofing/" className={styles.linkText}>
                                <strong>commercial properties</strong>
                            </Link>.{" "}
                            We help you evaluate all available metal roof choices and offer insights into what works best for your building and needs.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Durability that works for Chicago:</strong> Metal roofs resist hail, heavy snow, and high winds. Your property stays protected as the Midwest weather changes.
                            </li>
                            <li>
                                <strong>Long-term savings:</strong> Metal roofing often lasts far longer than asphalt or wood materials and requires less maintenance, minimizing future headaches and expenses.
                            </li>
                            <li>
                                <strong>Energy efficiency:</strong> Many metal roof options reflect the sun’s rays, keeping cooling bills manageable during hot and humid summers.
                            </li>
                            <li>
                                <strong>Fire safety:</strong> Metal roofing adds a layer of defense for your home or business.
                            </li>
                            <li>
                                <strong>Style options:</strong> Choose from modern standing seam panels or metal shingles to fit both contemporary and historic architecture.
                            </li>
                        </ul>

                        <p>
                            Our company adapts solutions for every property type in the Chicago area, including flat roofs common on two-flats and pitched options in the suburbs. We stay current on
                            {' '}
                            <Link href="https://www.chicago.gov/city/en.html" className={styles.linkText}>
                                <strong>City of Chicago</strong>
                            </Link>.{" "}
                            building codes, industry trends, and best practices, so you receive guidance that fits your project and local regulations. Our team communicates details clearly, so you can weigh the true benefits of each roofing option available in the city. Do not hesitate to call the experts when it comes to metal roofing Chicago residents trust.
                        </p>

                        <h3 className={styles.sectionHeading}>Metal Roofing Options for Chicago Homes and Businesses</h3>


                        <p>
                            Different properties across Chicago call for different metal systems, and we help you match the right material to your building. For many single-family homes and two-flats, standing seam panels offer a clean, modern look with concealed fasteners that perform well in heavy lake-effect snow and strong winds off Lake Michigan. Metal shingles can be a smart choice for bungalows, historic graystones, or properties in older neighborhoods where owners want the texture of traditional roofing with the added durability of metal.
                        </p>

                        <p>
                            Commercial and mixed-use buildings in areas like the Loop, West Loop, and along key corridors such as Milwaukee Avenue often benefit from heavier-gauge panels and systems designed for low-slope or flat roofs. In those cases, we look at how drainage, rooftop equipment, and existing insulation will interact with a new metal system. By walking you through how each option behaves through Chicago’s freeze-thaw cycles and summer heat, we make it easier to choose a design that fits both your architecture and long-term maintenance plans.
                        </p>


                    </div>
                </div>

            </div>
        </section>
    );
};