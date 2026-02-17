"use client";
import React, {useState} from 'react';
import styles from './FrequentlyQuestionsCommercial.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";

export const FrequentlyQuestionsCommercial = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className={styles.comercialSection}>
            <div className={styles.container}>
                {/* Contenido a la derecha */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <h3 className={styles.subtitle}>
                        How Often Should My Commercial Facility Undergo A Professional Roof Inspection?
                    </h3>

                    <p className={styles.paragraph}>
                        Industry experts and the National Roofing Contractors Association recommend that commercial facilities undergo a professional inspection at least twice per year. These assessments are best scheduled during the spring and fall to identify damage caused by extreme winter cold or intense summer heat. You should also arrange for an immediate inspection following any major weather event, such as a severe windstorm or heavy hail, to catch subtle membrane punctures. Consistent biannual monitoring helps maintain your manufacturer's warranty and prevents minor leaks from escalating into costly structural failures.
                    </p>

                    <h3 className={styles.subtitle}>
                        How Long Does A Typical Commercial Roof Replacement Take For A Large Warehouse?
                    </h3>

                    <p className={styles.paragraph}>
                        The timeline for replacing a roof on a large warehouse generally spans between three and six weeks, depending on the total square footage and the complexity of the project. This estimation includes the time required for removing the existing layers, repairing any damaged decking, and installing the new membrane system. Advanced materials, such as TPO or EPDM, often allow for faster installation compared to traditional built-up roofing or complex metal systems. Factors such as the number of rooftop HVAC units, weather delays, and the size of the professional crew will also impact the final project duration.
                    </p>

                    <h3 className={styles.subtitle}>
                        Will A Roof Replacement Or Repair Interrupt My Business Operations?
                    </h3>

                    <p className={styles.paragraph}>
                        While a major roofing project involves significant noise and equipment, a professional contractor can often coordinate the work to minimize disruptions to your daily operations. Many businesses choose to remain open by utilizing phased construction or scheduling high-decibel tasks during off-peak hours or weekends. We take proactive measures such as creating safe access points and using debris netting to protect your employees, customers, and inventory. With clear communication and strategic planning, you can maintain your business productivity while your facility receives its necessary upgrades.
                    </p>

                    <h3 className={styles.subtitle}>
                        Can My Employees Repair Or Replace My Business's Roof?
                    </h3>

                    <p className={styles.paragraph}>
                        Attempting to have untrained employees perform roof work is highly discouraged due to the extreme safety risks and potential legal liabilities involved. Roofing is considered high-risk construction work that requires specialized safety equipment, fall protection, and specific technical training to comply with OSHA regulations. Furthermore, amateur repairs can inadvertently void your existing manufacturer warranties and lead to improper seals that cause even more damage. Hiring a licensed and insured commercial roofing specialist ensures the job is completed safely and in accordance with local building codes.
                    </p>

                    <h3 className={styles.subtitle}>
                        How Can We Maintain The Roof After Installation?
                    </h3>

                    <p className={styles.paragraph}>
                        The most effective way to maintain your new roof is to keep the surface clear of all debris, branches, and dirt that can trap moisture and encourage mold growth. You should also ensure that all gutters, drains, and scuppers are inspected monthly to prevent standing water from accumulating and stressing the membrane. It is essential to limit rooftop foot traffic to authorized personnel only to prevent accidental punctures or structural damage from excessive weight. Keeping a detailed maintenance log of all inspections and minor repairs will help you track the system's performance and simplify future insurance or warranty claims.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <div className={styles.ctaBanner}>
                            <p>
                                Extend the lifecycle of your current roof and prevent expensive structural damage with our customized commercial preventative maintenance programs.
                                Contact us <strong>(847) 262-9774</strong> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                to speak with a lead project manager.
                            </p>
                        </div>
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

            </div>
        </section>
    );
};