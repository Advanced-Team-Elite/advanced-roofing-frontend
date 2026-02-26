"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './AboutOurServices.module.css';
import {ArrowIcon} from "@/shared/Icons/Icons";

const services = [
    { title: "Commercial Roofing", img: "/assets/images/features/about-us/1.webp", href: "/commercial-roofing" },
    { title: "Insurance Claims", img: "/assets/images/features/about-us/2.webp", href: "/roofing-insurance-claims" },
    { title: "Shingle Roofing", img: "/assets/images/features/about-us/3.webp", href: "/roof-types/shingle-roofing/" },
    { title: "Roofing Services", img: "/assets/images/features/about-us/4.webp", href: "/roofing" },
];

const AboutOurServices = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(c => (c - 1 + services.length) % services.length);
    const next = () => setCurrent(c => (c + 1) % services.length);

    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <h2 className={styles.mainTitle}>Our Services</h2>
                <Link href="/our-services" className={styles.viewAllBtn}>
                    View All Services
                </Link>
            </div>

            {/* DESKTOP: grid normal */}
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <Link href={service.href} key={index} className={styles.serviceCard}>
                        <div className={styles.imageWrapper}>
                            <img src={service.img} alt={service.title} className={styles.serviceImage} />
                            <div className={styles.overlay}></div>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.serviceTitle}>{service.title}</span>
                            <div className={styles.arrowCircle}>
                                <ArrowIcon size={50} className={styles.arrowIcon} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* TABLET + MOBILE: carrusel 1 item visible */}
            <div className={styles.carousel}>
                <div className={styles.carouselTrack}
                     style={{ transform: `translateX(-${current * 100}%)` }}>
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className={styles.carouselCard}>
                            <div className={styles.imageWrapper}>
                                <img src={service.img} alt={service.title} className={styles.serviceImage} />
                                <div className={styles.overlay}></div>
                            </div>
                            <div className={styles.cardContent}>
                                <span className={styles.serviceTitle}>{service.title}</span>
                                <div className={styles.arrowCircle}>
                                    <ArrowIcon size={50} className={styles.arrowIcon} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className={styles.carouselControls}>
                    <button onClick={prev} className={styles.arrowBtn}>←</button>
                    <button onClick={next} className={styles.arrowBtn}>→</button>
                </div>
            </div>

            <div className={styles.viewAllBtnMobileContainer}>
                <Link href="/our-services" className={styles.viewAllBtn}>
                    View All Services
                </Link>
            </div>
        </section>
    );
};

export default AboutOurServices;