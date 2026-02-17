"use client";
import React from 'react';
import ContactForm from "@/features/roofing/ContactForm/ContactForm";
import styles from './SkylightInstallation.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const SkylightInstallation = () => {
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

                    <h1 className={styles.mainTitle}>Skylight Installation in Chicago, IL</h1>
                    <h2 className={styles.subTitle}>Expert Skylight Installation for Natural Light and Superior Weather Sealing</h2>

                    <div className={styles.textContent}>
                        <p>
                            Adding a skylight transforms any space, delivering abundant natural light and enhancing your home’s comfort year-round. At{' '}
                            <Link href="/about-us/" className={styles.inlineLink}>
                                Advanced Roofing Team Construction
                            </Link>
                            , we make skylight installation in Chicago and other {" "}
                            <Link href="/areas-we-serve/" className={styles.inlineLink}>
                                nearby areas
                            </Link> {" "}
                            simple and reliable. Our skilled team guides you from your first question to the completion of the project, ensuring your new skylight looks great, works seamlessly for your needs, and withstands the harsh Midwest climate.
                        </p>

                        <p>
                            A carefully installed skylight does more than brighten a room—it also helps with ventilation and can regulate indoor temperature, especially in well-insulated homes in Chicago. Homeowners notice a distinct shift in how their rooms feel and use natural light. Whether you are updating a classic bungalow or finishing a modern build in the suburbs, we recommend products and placement that fit both the structure and the neighborhood. Our approach ensures each project blends into your roofline and adds lasting value to your property.
                        </p>

                        {/* Banner de contacto interno (Gris) */}
                        <div className={styles.innerCta}>
                            <p>
                                Transform your dark interior spaces with beautiful natural light and reliable, leak-proof skylight installation from our certified experts.
                                Contact us at <strong>(847) 262-9774</strong> or <span className={styles.blueLink}>fill out our online form.</span>
                            </p>
                        </div>

                        <h3 className={styles.sectionHeading}>Benefits of Professionally Installed Skylights in Your Chicago Home</h3>

                        <p>
                            Installing a high-quality skylight with professional expertise is one of the most transformative and beneficial upgrades you can make to your home. Given the city's seasonal climate, expert installation is crucial to maximize energy savings and prevent the dreaded issue of leaks and heat loss. A certified installation ensures the unit is perfectly integrated into your roofing system, offering both superior performance and lasting value for your property.
                        </p>

                        <ul className={styles.benefitsList}>
                            <li>
                                <strong>Significant Energy Savings:</strong> By maximizing{' '}
                                <strong>daylighting</strong>, skylights drastically reduce your reliance on
                                artificial lighting during the day, lowering electricity bills. Strategically
                                placed units can also provide passive solar heating in the winter.
                            </li>
                            <li>
                                <strong>Guaranteed Leak Prevention:</strong> Professionals utilize advanced
                                flashing systems, precise measurements, and thermal barrier techniques tailored
                                to Chicago's extreme weather conditions to create a permanent, watertight seal
                                that homeowners cannot replicate.
                            </li>
                            <li>
                                <strong>Enhanced Indoor Comfort and Health:</strong> Natural sunlight has been
                                proven to boost mood, increase productivity, and help regulate the circadian
                                rhythm, creating a healthier and more pleasant living environment than
                                artificial light.
                            </li>
                            <li>
                                <strong>Improved Ventilation and Air Quality:</strong> Vented or operable
                                skylights allow stale, warm air to naturally escape, improving air circulation
                                and helping to control humidity and minimize the risk of mold growth,
                                particularly in bathrooms and kitchens.
                            </li>
                            <li>
                                <strong>Increased Home Value and Appeal:</strong> Skylights dramatically
                                enhance a room's aesthetic, making small spaces feel larger and brighter, a
                                highly desirable feature that can significantly boost your home's resale
                                value in the competitive real estate market.
                            </li>
                        </ul>

                        <p>
                            Investing in a professionally installed, ENERGY STAR-rated skylight ensures you receive all these benefits, providing a durable, leak-free product that performs reliably through Chicago's cold winters and hot summers while maximizing your long-term energy efficiency.
                        </p>

                        <h3 className={styles.sectionHeading}>Chicago Codes & Community Considerations for Skylight Projects</h3>

                        <p>
                            When adding a skylight, you need to meet city energy, safety, and weather protection standards to ensure your investment pays off. Our team stays up to date with Chicago’s building codes, providing skylight installation that satisfies all requirements for insulation, structure, and weatherproofing. This careful approach helps your new skylight pass inspections and withstand the region’s tough weather.
                        </p>

                        <p>
                            When adding a skylight, you need to meet city energy, safety, and weather protection standards to ensure your investment pays off. Our team stays up to date with Chicago’s building codes, providing skylight installation that satisfies all requirements for insulation, structure, and weatherproofing. This careful approach helps your new skylight pass inspections and withstand the region’s tough weather.
                        </p>

                        <p>
                            The Chicago Department of Buildings enforces policies for{" "}
                            <Link href="/roofing/" className={styles.inlineLink}>
                                roofing projects
                            </Link>{" "}
                            to address moisture control and fire safety. We monitor updates and follow best practices for sealing and integrating skylights into various roof systems, including considerations for flat or steep roofs. In historical districts, guidelines are even stricter, so we help you select skylights and placements that maintain the original curb appeal. The result is a seamless addition that respects both local ordinances and your home’s architectural charm.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};