"use client";
import React from 'react';
import styles from './RoofingProjects.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const RoofingProjects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Imagen (arriba en mobile) */}
                <div className={styles.imageColumn}>
                    <ScrollReveal direction="right" distance={30}>
                        <img
                            src="/assets/images/features/about-us/content-v11.png"
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

                    <h2 className={styles.title}>Our Roofing Services</h2>

                    <p className={styles.paragraph}>
                        We manage roofing projects from start to finish, whether you're updating an older system,
                        recovering from storm damage, or planning new construction. Every{' '}
                        <Link href="/materials" className={styles.inlineLink}>
                            material and process
                        </Link>{' '}
                        we use is selected to stand up to the Midwest’s harsh winters, hail, wind, and wide temperature swings.
                    </p>

                    <h4 className={styles.listHeader}>Count on our team for the following, and more:</h4>

                    <ul className={styles.clickableList}>
                        <li>
                            <Link href="/roof-installation">Roof installation and replacement</Link>
                        </li>
                        <li>
                            <Link href="/gutters">Gutters</Link>
                        </li>
                        <li>
                            <Link href="/siding">Siding</Link>
                        </li>
                        <li>
                            <Link href="/roofing/storm-damage-repair/">Storm damage solutions</Link>
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our team keeps the process clear and organized, delivering roofing systems
                        designed to perform through the changing seasons.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default RoofingProjects;