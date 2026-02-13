"use client";
import React from 'react';
import Link from 'next/link';
import styles from './AboutOurServices.module.css';
import {ArrowIcon} from "@/shared/Icons/Icons";

const services = [
    { title: "Commercial Roofing", img: "/assets/images/features/about-us/1.jpg", href: "/commercial-roofing" },
    { title: "Insurance Claims", img: "/assets/images/features/about-us/2.jpg", href: "/roofing-insurance-claims" },
    { title: "Shingle Roofing", img: "/assets/images/features/about-us/3.jpg", href: "/roofing/shingle-roofing" },
    { title: "Roofing Services", img: "/assets/images/features/about-us/4.jpg", href: "/roofing" },
];

const AboutOurServices = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.header}>
                <h2 className={styles.mainTitle}>Our Services</h2>
                <Link href="/services" className={styles.viewAllBtn}>
                    View All Services
                </Link>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <Link href={service.href} key={index} className={styles.serviceCard}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={service.img}
                                alt={service.title}
                                className={styles.serviceImage}
                            />
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
            <br/>

            <div className={styles.viewAllBtnMobileContainer}>
                <Link href="/services" className={styles.viewAllBtn}>
                    View All Services
                </Link>
            </div>


        </section>
    );
};

export default AboutOurServices;