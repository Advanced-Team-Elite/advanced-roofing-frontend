'use client';

import Image from 'next/image';
import styles from './ServingHoffman.module.css';
import {useState} from "react";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ServingHoffman = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right" distance={30}>
                                <Image
                                    src="/assets/images/features/home/content-v15.png"
                                    alt="Roofing worker repairing storm damage"
                                    width={600}
                                    height={500}
                                    className={styles.mainImage}
                                />
                            </ScrollReveal>

                        </div>
                    </div>
                </div>

                {/* Bloque de Texto */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Serving Hoffman Estates with Reliable Roofing Solutions
                    </h2>

                    <div className={styles.bodyText}>
                        <p className={styles.paragraph}>
                            From homes near Poplar Creek to businesses along Golf Road and Barrington Road, Advanced Roofing Team Construction delivers roofing services designed for local weather. We proudly serve property owners across Cook and Kane counties with full replacements, new installations, and storm recovery support built to withstand harsh Midwest conditions.
                        </p>

                        <p className={styles.paragraph}>
                            Because Hoffman Estates sits in an area that experiences frequent freeze-thaw cycles, snow, and strong summer storms, we closely monitor how roofs withstand temperature swings and heavy precipitation over time. Our crews review factors such as roof pitch, drainage patterns, and surrounding trees to recommend replacement options that perform well in this part of the Chicago suburbs. Whether you own a single-family home, multi-unit building, or commercial facility, we tailor material and installation recommendations to how your property is actually used and how the weather typically affects your structure.
                        </p>

                        <p className={styles.paragraph}>
                            We also stay mindful of local permitting and inspection requirements for roofing work in Hoffman Estates and nearby communities. Our team coordinates with the appropriate village or county offices as needed to help avoid unnecessary delays once your project is ready to move forward. By planning your roof replacement with local conditions and rules in mind from the beginning, we aim to deliver a finished roof that not only looks good but also aligns with area standards.
                        </p>
                    </div>

                    {/* PARTE EXPANDIBLE */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>

                        <h3 className={styles.subtitle} style={{ marginTop: '20px' }}>
                            Our Roof Replacement Process in Hoffman Estates
                        </h3>
                        <p className={styles.paragraph}>
                            Planning a roof replacement can feel like a big project, so we break it into clear steps that are easy to follow. We begin with a detailed inspection to document storm damage, existing wear, and any issues that could affect a new roofing system. After that visit, we put together a written scope of work that outlines recommended materials, estimated timelines, and how we expect the project to move from start to finish. This helps you see how each decision fits into the bigger picture for your home or business.
                        </p>
                        <p className={styles.paragraph}>
                            Once you review the plan, we coordinate with your insurance carrier so our measurements and documentation line up with what they need to process the claim. Our team schedules your project with Hoffman Estates weather in mind, aiming for conditions that support a smooth installation. On installation day, crews arrive with all necessary materials, set up protection for landscaping and walkways, and remove the old roofing in sections so your property stays as covered as possible. At the end of the job, we complete a final walkthrough with you to confirm that the work matches the scope and that the site is cleaned up.
                        </p>

                        <h3 className={styles.title} style={{ marginTop: '20px' }}>
                            Frequently Asked Questions
                        </h3>

                        <h4 className={styles.question}>How Long Does a Typical Roof Replacement Take?</h4>
                        <p className={styles.paragraph}>
                            Most standard residential roof replacements can be completed in a few days once work begins, depending on the size and complexity of the roof. Weather in the Hoffman Estates area can affect scheduling, especially during periods of heavy rain, snow, or extreme temperatures. Your written scope of work includes an estimated timeline so you know how to plan around the project.
                        </p>

                        <h4 className={styles.question}>Do I Need to Be Home During the Roof Replacement?</h4>
                        <p className={styles.paragraph}>
                            You do not need to be home for the entire installation, but many people prefer to be available at the start or end of the day for updates. There will be noise and activity around the property while crews are working, so it can help to move vehicles and secure outdoor items in advance. Clear communication before the project starts makes it easier to decide what works best for your schedule.
                        </p>

                        <h4 className={styles.question}>What Should I Do If I Suspect Storm Damage but Cannot See It from the Ground?</h4>
                        <p className={styles.paragraph}>
                            If you think your roof may have been damaged by hail or high winds, it is safer to schedule a professional inspection than to climb onto the roof yourself. A trained team can assess shingles, flashing, and other components from the roof level and document what they find for you and your insurance carrier. This approach is especially helpful in areas like Hoffman Estates, where repeated storms can cause damage that is not obvious from the yard or driveway.
                        </p>

                        <p className={styles.paragraph}>
                            If your home or business needs a new roof or storm damage support, Advanced Roofing Team Construction is ready to help. We provide inspections, thorough assessments, and reliable roofing solutions designed for Hoffman Estates weather.
                        </p>

                        {/* Banner dentro de la parte expandible */}
                        <div className={styles.ctaBanner} style={{ marginTop: '30px' }}>
                            <p style={{ textAlign: 'center', margin: 0 }}>
                                Upgrade to premium, wind-rated roofing systems that provide long-lasting beauty and superior protection for your family. Contact us at <strong>(847) 262-9774</strong> or {' '}
                                <Link href="/contact" className={styles.yellowLink}>
                                    fill out our online form.
                                </Link>
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