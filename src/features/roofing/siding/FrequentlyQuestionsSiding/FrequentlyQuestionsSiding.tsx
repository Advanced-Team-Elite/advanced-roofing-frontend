"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestionsSiding.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const FrequentlyQuestionsSiding = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>
                <h2 className={styles.mainTitle}>Frequently Asked Questions</h2>
            </div>

            <div className={styles.container}>
                {/* COLUMNA IZQUIERDA */}
                <ScrollReveal direction="left">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>Why Choose Advanced Roofing Team Construction?</h3>
                            <p>
                                With years of industry experience, our skilled professionals have the knowledge and expertise to handle all types of siding installations with precision and care. We offer a wide range of high-quality siding materials in various styles and colors to suit your home’s aesthetic and your personal preferences. Here are other reasons why residents in Chicago choose us when it comes to their siding needs:
                            </p>

                            <br/>

                            <ul className={styles.benefitsList}>
                                <li>
                                    <strong>Expertise in Siding Installation:</strong> Homeowners choose{' '}
                                    <Link href="/roofing/" className={styles.inlineLink}>
                                        Advanced Roofing
                                    </Link>{' '}
                                    for their siding replacement needs because of our team’s extensive experience.
                                    Our skilled professionals have the knowledge and experience to handle all types
                                    of siding projects with precision and care.
                                </li>
                                <li>
                                    <strong>High-Quality Materials:</strong> We offer a wide range of high-quality
                                    siding materials in various styles and colors to suit every homeowner’s preferences.
                                    Our top-notch materials are durable, long-lasting, and able to withstand the elements,
                                    helping ensure a beautiful and functional exterior for your home.
                                </li>
                                <li>
                                    <strong>Customized Solutions:</strong> At Advanced Roofing, we understand that every
                                    home is unique. That’s why we provide customized siding solutions tailored to your
                                    specific needs and budget. Whether you’re looking for a specific style, color, or
                                    material, we work with you to create a solution that meets your requirements.
                                </li>
                                <li>
                                    <strong>Attention to Detail:</strong> Our team pays close attention to detail in
                                    every siding installation project we undertake. From precise measurements to
                                    seamless finishes, we help ensure your new siding is installed with care and
                                    precision, enhancing your home's overall look and value.
                                </li>
                                <li>
                                    <strong><Link href="/reviews/" className={styles.inlineLink}>Customer Satisfaction</Link>:</strong>{' '}
                                    Advanced Roofing is committed to providing exceptional customer service and
                                    ensuring that our clients are fully satisfied with the results of their siding
                                    replacement. From transparent communication to reliable service, we strive to
                                    exceed your expectations and deliver a superior siding installation experience.
                                </li>
                            </ul>

                            <p>Throughout your project, we maintain one primary point of contact so you always know who to call with questions or changes. We provide clear timelines, explain any unexpected findings, and review your options before moving forward with additional work. After completion, we remain available to address follow-up questions and review maintenance recommendations, so you get lasting value from your investment and feel supported well beyond the final cleanup.</p>

                        </div>
                    </div>
                </ScrollReveal>

                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>Frequently Asked Questions</h3>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Do I Know When It’s Time to Replace My Siding?</h4>
                            <p>
                                Homeowners often wonder when their siding needs to be replaced. Common signs include Cracks, warping, or rotting boards. It could also exhibit peeling paint or fading of color, drafts and increased energy bills, and mold, mildew, or pest damage. If you notice any of these issues, it may be time to contact our team for a siding inspection.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What Type of Siding Is Best for Chicago Homes?</h4>
                            <p>Chicago’s climate demands durable siding. Vinyl siding is cost-effective and low maintenance, while fiber cement offers excellent resistance to extreme weather. Our team will guide you in selecting the right option for long-term protection and style.</p>
                            <p>
                                Many homes in the {' '}
                                <Link href="/areas-we-serve/" className={styles.inlineLink}>
                                    Chicago area
                                </Link>{' '}
                                face repeated freeze-thaw cycles, strong winds, and driving rain, which can cause lesser materials to crack, buckle, or lose their finish prematurely. When we recommend products, we look at how they have performed on similar homes in the region and how they meet local building requirements. We also help you weigh factors like color retention, manufacturer warranties, and ongoing maintenance so you can choose a siding solution that fits your budget and holds up over time in our climate. We also offer
                                {' '}<Link href="/financing/" className={styles.inlineLink}>
                                flexible financing solutions
                            </Link>{' '}to ensure you get the perfect siding solution for your home.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Long Does a Typical Siding Installation Take?</h4>
                            <p>
                                Most residential siding projects are completed within several days once work begins, depending on the size of the home, the condition of the existing exterior, and the type of material you choose. Weather can also affect the schedule, especially during colder months in the Chicago area. Before starting, we provide a projected timeline and keep you updated if anything changes, so you can plan around the work.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Do I Need a Permit for New Siding?</h4>
                            <p>
                                Many municipalities in and around Chicago require permits for full siding replacement to help ensure work meets local building codes. We help you understand what your specific city or village requires and factor any permitting steps into the project timeline. Handling these details correctly helps avoid delays and supports proper inspections when required.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Can I Live in My Home During Siding Replacement?</h4>
                            <p>
                                Homeowners can usually remain in their homes while siding is being replaced, since most work is completed from the outside. There will be some noise and activity around the property, but we plan access routes and daily cleanup so you can continue your normal routine as much as possible. We also review any special considerations in advance, such as pets, parking, or limited entry points.
                            </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Upgrade to modern materials that won't warp in the summer or crack during a sub-zero Chicago deep freeze.
                                Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className={styles.footerBtn}>
                <Link href="/contact-us" className={styles.contactLink}>
                    <button className={styles.contactBtn}>Contact Us</button>
                </Link>
            </div>
        </section>
    );
};