"use client";
import React, {useState} from 'react';
import styles from './WorkDirectly.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

export const WorkDirectly = () => {

    return (
        <section className={styles.servingSection}>
            <div className={styles.container}>

                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>We Work Directly With Your Insurance</h2>
                    <h3 className={styles.subtitle}>
                        HELPING YOU GET THE COMPENSATION YOU DESERVE
                    </h3>

                    <p className={styles.paragraph}>
                        When your home is damaged by hail or wind, navigating the insurance claim process can be a daunting and overwhelming task. At Advanced Roofing Team, we understand the challenges that homeowners face when dealing with insurance companies after a catastrophic event. That’s why we are here to guide you through the insurance claim process and ensure that you receive the compensation you deserve to repair and restore your home.
                    </p>

                    <h3 className={styles.subtitle}>
                        ACCURATE ASSESMENT OF DAMAGES
                    </h3>

                    <p className={styles.paragraph}>
                        The first step in the insurance claim process is to assess the damage to your home. After a hailstorm or high winds, it’s important to inspect your roof, siding, windows, and other exterior features for any signs of damage. At Advanced Roofing Team, our team of experts can conduct a thorough inspection of your property to identify and document any damage caused by hail or wind.
                    </p>

                    <h3 className={styles.subtitle}>
                        FILING A CLAIM WAS NEVER EASIER
                    </h3>

                    <p className={styles.paragraph}>
                        Once the damage has been assessed, the next step is to file a claim with your insurance company. This involves contacting your insurance provider and providing them with the necessary information and documentation to support your claim. Our team at Advanced Roofing Team can assist you with this process, including preparing and submitting the required documentation, such as reports, photographs, and estimates for the necessary repairs.
                    </p>

                </div>

                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right">
                        <div className={styles.imageWrapper}>
                            <img
                                src="/assets/images/features/about-us/content-v13.webp"
                                alt="Professional roofers in Chicago"
                                className={styles.mainImage}
                            />
                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
};