"use client";
import React, {useState} from 'react';
import styles from './OurServiceAreas.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import Link from "next/link";

export const OurServiceAreas = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const communities = [
        { name: "Arlington Heights", path: "/arlington-heights-il/" },
        { name: "Barrington", path: "/barrington-il/" },
        { name: "Bolingbrook", path: "/bolingbrook-il/" },
        { name: "Buffalo Grove", path: "/buffalo-grove-il/" },
        { name: "Des Plaines", path: "/des-plaines-il/" },
        { name: "Downers Grove", path: "/downers-grove-il/" },
        { name: "Elmhurst", path: "/elmhurst-il/" },
        { name: "Evanston", path: "/evanston-il/" },
        { name: "Hoffman Estates", path: "/hoofman-estates-il/" },
        { name: "Lake Forest", path: "/lake-forest-il/" },
        { name: "Lake Zurich", path: "/lake-zurich-il/" },
        { name: "Lemont", path: "/lemont-il/" },
        { name: "Lockport", path: "/lockport-il/" },
        { name: "Mount Prospect", path: "/mount-prospect-il/" },
        { name: "Naperville", path: "/naperville-il/" },
        { name: "Northbrook", path: "/northbrook-il/" },
        { name: "Orland Park", path: "/orland-park-il/" },
        { name: "Oak Brook", path: "/oak-brook-il/" },
        { name: "Palatine", path: "/palatine-il/" },
        { name: "Rolling Meadows", path: "/rolling-meadows-il/" },
        { name: "Romeoville", path: "/areas-we-serve/" },
        { name: "Schaumburg", path: "/schaumburg-il/" },
        { name: "Skokie", path: "/skokie-il/" },
        { name: "St. Charles", path: "/st-charles-il/" },
        { name: "Tinley Park", path: "/tinley-park-il/" }
    ];

    return (
        <section className={styles.supportSection}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>
                <h2 className={styles.mainTitle}>Serving Communities Across Chicagoland</h2>

                <p className={styles.introText}>
                    Our work extends beyond Chicago’s city limits. We proudly serve a wide range of suburbs and neighborhoods, providing dependable roofing services for homes, businesses, and multi-family properties.
                </p>

                <h3 className={styles.listHeading}>Our services include:</h3>

                <ul className={styles.citiesGridList}>
                    {communities.map((city) => (
                        <li key={city.path} className={styles.cityItem}>
                            <Link href={city.path} className={styles.linkHighlightBlue}>
                                {city.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <p className={styles.paragraph}>
                    If you’re located nearby but don’t see your community listed, contact us. Our team often works throughout the Chicago Metropolitan Area.
                </p>

                <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                    <h3 className={styles.secondaryTitle}>What We Offer</h3>

                    <p className={styles.paragraph}>
                        Advanced Roofing Team Construction handles roofing projects for both residential and commercial properties. Our focus includes new roof installations, full replacements, and storm damage response.
                    </p>

                    <ul className={styles.benefitsList}>
                        <li className={styles.cityItem}>
                            Asphalt shingle roofing for homes and businesses
                        </li>
                        <li className={styles.cityItem}>
                            Metal, cedar, slate, and synthetic roofing options
                        </li>
                        <li className={styles.cityItem}>
                            Storm damage assessments and insurance claim support
                        </li>
                        <li className={styles.cityItem}>
                            Full roof replacements after hail or wind damage
                        </li>
                        <li className={styles.cityItem}>
                            Free estimates and warranty-backed installations
                        </li>
                        <li className={styles.cityItem}>
                            24/7 emergency response for storm-related roofing needs
                        </li>
                    </ul>

                    <p className={styles.paragraph}>
                        Our team includes trained catastrophe inspectors who handle every step, from detailed inspections to working directly with your insurance adjuster when needed.
                    </p>
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
        </section>
    );
};