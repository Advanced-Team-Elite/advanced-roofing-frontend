"use client";
import React from 'react';
import styles from './ComercialSolutions.module.css';
import { FlairIcon } from "@/shared/Icons/Icons";
import Link from "next/link";

const ComercialSolutions = () => {
    return (
        <section className={styles.comercialSection}>
            <div className={styles.container}>
                {/* Contenido a la derecha */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={150} />
                    </div>

                    <h2 className={styles.title}>Commercial Roofing Solutions</h2>
                    <p className={styles.paragraph}>
                        We work with businesses throughout the Greater Chicagoland Area to install
                        and replace durable roofing systems that help protect properties year-round.
                    </p>

                    <h4 className={styles.listHeader}>
                        Our{' '}
                        <Link href="/commercial-roofing">
                            commercial services
                        </Link>
                        {' '}cover:
                    </h4>
                    <ul className={styles.benefitList}>
                        <li>Flat roof systems for office buildings, retail stores, and industrial properties</li>
                        <li>Full roof replacements for commercial spaces</li>
                        <li>Storm inspections and replacement recommendations after hail, wind, or severe weather</li>
                    </ul>

                    <p className={styles.paragraph}>
                        When your roof helps safeguard your business, downtime can be costly.
                        We focus on efficient, high-quality work to keep your property covered.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default ComercialSolutions;