"use client";
import React from 'react';
import Link from 'next/link';
import styles from './FrequentlyQuestions.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const FrequentlyQuestions = () => {
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
                            <h3>What Immediately Constitutes a Roofing Emergency That Requires 24/7 Service?</h3>
                            <p>
                                A roofing emergency is any sudden, severe damage that exposes your home's interior
                                or compromises its structure, requiring immediate intervention. This includes an active,
                                uncontrolled leak where water is pouring into your home, especially near electrical
                                wiring or fixtures. Obvious structural damage, such as a large section of the roof
                                decking being ripped off by high winds or a tree limb puncturing the roof, also
                                warrants an immediate 24/7 call. These situations must be addressed right away to
                                mitigate ongoing water damage, prevent mold, and ensure the safety of the structure.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>What Are the Most Common Signs of Severe Storm or Wind Damage in Chicago Homes?</h4>
                            <p>
                                The most common signs of severe storm or wind damage include missing or displaced roof
                                shingles, particularly on the edges or slopes of the roof. Homeowners often find shingle
                                granules, which look like coarse sand, heavily collecting in the gutters or at the base
                                of the downspouts. You may also notice dented gutters, broken chimney flashing, or
                                damage to your vinyl siding. Inside the home, any visible water stains on ceilings or
                                walls that appear shortly after a storm are a definitive sign of compromised roofing.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>


                {/* COLUMNA DERECHA */}
                <ScrollReveal direction="right">
                    <div className={styles.column}>
                        <div className={styles.questionBlock}>
                            <h3>Is It Safe to Go on My Roof to Inspect the Damage Myself?</h3>
                            <p>
                                No, it is highly unsafe and strongly advised that you do not go onto your roof to
                                inspect the damage yourself. Damaged roofs can have unstable sections and loose
                                materials that are extremely hazardous, especially when wet or covered in snow.
                                Walking on a compromised roof can also cause further damage or void your insurance
                                claim. Instead, perform a safe ground-level inspection using binoculars and check
                                your attic for signs of water intrusion or light shining through.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>How Do I Prevent Water From Leaking Into My Home Before Your Crew Arrives?</h4>
                            <p>
                                To prevent interior water damage, your first step should be to move all valuable
                                items and electronics away from the leak area. Place a large bucket or container
                                directly under the leak to catch the dripping water. If your ceiling is bulging with
                                water, safely poke a small hole in the center of the bulge to release the trapped
                                water into a bucket, preventing a large, uncontrolled collapse. Do not attempt to
                                climb onto the roof to place a tarp, as this is best left to the safety expertise
                                of the professional crew.
                            </p>
                        </div>

                        <div className={styles.questionBlock}>
                            <h4>Contact Us for Emergency Roof Repair in Chicago</h4>
                            <p>
                                If you need emergency roof repair in Chicago,{' '}
                                <Link href="/contact-us" className={styles.inlineLink}>
                                    call Advanced Roofing Team Construction today.
                                </Link>{' '}
                                Our 24/7 team stands ready to handle urgent repairs, guide you through insurance
                                documentation, and restore comfort to your property as quickly as possible.
                                You gain reliable answers, fair assessments, and a friendly, local team—backed
                                by deep experience and a commitment to customer care.
                            </p>
                        </div>

                        {/* BANNER NEGRO */}
                        <div className={styles.blackBanner}>
                            <p>
                                Don't wait until morning to fix a crisis; your home needs protection now.
                                Contact us at <span className={styles.yellowText}>(847) 262-9774</span> or{' '}
                                <Link href="/contact-us" className={styles.yellowLink}>
                                    fill out our online form
                                </Link>{' '}
                                for a rapid response, day or night.
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

export default FrequentlyQuestions;