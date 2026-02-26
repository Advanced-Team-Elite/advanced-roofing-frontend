"use client";
import React, {useState} from 'react';
import styles from './GetCompensation.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const GetCompensation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Imagen (arriba en mobile) */}
                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right" distance={20}>
                        <img
                            src="/assets/images/features/about-us/content-v11.webp"
                            alt="Roofing Project Installation"
                            className={styles.mainImage}
                        />
                    </ScrollReveal>

                </div>

                {/* Lado Derecho: Contenido */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>ENSURING YOU GET THE COMPENSATION YOU DESERVE</h2>

                    <p className={styles.paragraph}>
                        After you have filed your claim, an insurance adjuster will be assigned to assess the damage to your home and determine the amount of compensation you are eligible to receive. It’s important to have a knowledgeable and experienced contractor, like Advanced Roofing Team, present during the adjuster’s inspection to ensure that all aspects of the damage are accurately assessed and documented.
                    </p>

                    <h3 className={styles.subtitle}>
                        NEGOTIATING IS OUR STRONG SUIT
                    </h3>

                    <p className={styles.paragraph}>
                        Once the insurance adjuster has completed their assessment, they will provide you with a settlement offer outlining the amount of compensation you will receive for the repairs to your home. It’s important to review this offer carefully and ensure that it covers all necessary repairs to restore your home to its pre-loss condition. If you have any questions or concerns about the settlement offer, our team at Advanced Roofing Team can help you review and negotiate with your insurance company to ensure you receive a fair and timely settlement.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>


                        <h3 className={styles.subtitle}>KEEPING YOU INFORMED EVERY STEP OF THE WAY</h3>

                        <p className={styles.paragraph}>After the settlement offer has been accepted, the final step in the insurance claim process is to schedule the repairs to your home. Our team at Advanced Roofing Team will work closely with you to coordinate the repair process, ensuring that the necessary repairs are completed efficiently and effectively. We will keep you informed every step of the way and ensure that your home is restored to its original condition as quickly as possible.</p>

                        <p className={styles.paragraph}>
                            Navigating the insurance claim process after your home has been damaged by hail or wind can be a complex and challenging task. With the help of Advanced Roofing Team, you can rest assured that you have a knowledgeable and experienced partner by your side to guide you through the process and ensure that you receive the compensation you deserve. Contact us today to learn more about our services and how we can assist you with your insurance claim after a hail or wind event.
                        </p>
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