"use client";
import React, {useState} from 'react';
import styles from './ChoosingRoof.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const ChoosingRoof = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Imagen (arriba en mobile) */}
                <ScrollReveal direction="right" distance={30}>
                    <div className={styles.imageColumn}>
                        <img
                            src="/assets/images/features/about-us/content-v11.png"
                            alt="Roofing Project Installation"
                            className={styles.mainImage}
                        />
                    </div>
                </ScrollReveal>


                {/* Lado Derecho: Contenido */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Choosing the Right Roof for Chicago Properties</h2>

                    <p className={styles.paragraph}>
                        Not every roofing system is built to handle the Midwest. At Advanced Roofing Team Construction, we help homeowners, businesses, and property managers choose materials that perform well in Chicago’s conditions.
                    </p>

                    <ul className={styles.clickableList}>
                        <li>
                            <Link href="/roof-types/shingle-roofing/">
                                <strong>Asphalt shingle roofing.</strong>
                            </Link>
                            {' '} A popular, cost-effective option for homes and businesses. It provides reliable protection with plenty of color and style choices.
                        </li>
                        <li>
                            <strong>Cedar roofing.</strong> Adds natural character and insulating strength. Over time, cedar develops a distinctive patina, perfect for homes wanting classic appeal with dependable performance.
                        </li>
                    </ul>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <ul className={styles.clickableList}>
                            <li>
                                <strong>Metal roofing</strong>. A durable, low-maintenance choice that stands up to wind, hail, and fire. Metal roofing works well for both residential and commercial properties exposed to harsh weather conditions.
                            </li>
                            <li>
                                <strong>Slate roofing</strong>. Known for refined curb appeal and long-term strength. Slate offers excellent weather resistance and is ideal for homeowners seeking durability with a sophisticated finish.
                            </li>
                            <li>
                                <strong>Davinci synthetic roofing</strong>. Combines the look of slate or cedar with modern, low-maintenance durability. These engineered tiles handle impact and storms with less upkeep than natural materials.
                            </li>
                        </ul>
                    </div>

                    {/* Botón Continue Reading con línea superior como en image_2dd7d7.jpg */}
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