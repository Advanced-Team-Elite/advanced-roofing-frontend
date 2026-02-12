"use client";
import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import {
    FacebookIcon,
    XIcon,
    YelpIcon,
    HouzzIcon,
    GoogleBusinessIcon
} from "@/shared/Icons/Icons";

interface FooterProps {
    upperSection?: ReactNode;
}

export const Footer = ({ upperSection }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            {/* SECCIÓN PRINCIPAL CON BACKGROUND IMAGE */}
            <div className={styles.footerMainBg}>
                <div className={styles.footerContentWrapper}>

                    {/* Renderiza upperSection solo si existe */}
                    {upperSection && (
                        <div className={styles.dynamicUpperContainer}>
                            {upperSection}
                        </div>
                    )}

                    {/* 2. GRID */}
                    <div className={styles.footerGrid}>
                        {/* Logo */}
                        <div className={`${styles.footerColumn} ${styles.logoColumn}`}>
                            <Image
                                src="/assets/brand/logo-light.png"
                                alt="Advanced Roofing Team"
                                width={250}
                                height={80}
                                className={styles.footerLogo}
                            />
                        </div>

                        {/* Quick Links */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.columnTitle}>Quick Links</h3>

                            <div className={styles.linksSubgrid}>
                                <ul className={styles.linkList}>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/roofing">Roofing</Link></li>
                                    <li><Link href="/roofing-insurance-claims">Roofing Insurance Claims</Link></li>
                                    <li><Link href="/reviews">Reviews</Link></li>
                                </ul>

                                <ul className={styles.linkList}>
                                    <li><Link href="/about-us">About Us</Link></li>
                                    <li><Link href="/commercial-roofing">Commercial Roofing</Link></li>
                                    <li><Link href="/financing">Financing</Link></li>
                                    <li><Link href="/contact-us">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Location */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.columnTitle}>Location</h3>
                            <p className={styles.addressText}>
                                975 Rand Rd<br />
                                Des Plaines, IL 60016
                            </p>
                            <Link href="#" className={styles.mapLink}>
                                Map & Directions
                            </Link>
                        </div>

                        {/* Social */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.columnTitle}>Follow Us</h3>
                            <div className={styles.socialIcons}>
                                <a className={styles.socialIcon}><FacebookIcon /></a>
                                <a className={styles.socialIcon}><XIcon /></a>
                                <a className={styles.socialIcon}><YelpIcon /></a>
                                <a className={styles.socialIcon}><HouzzIcon /></a>
                                <a className={styles.socialIcon}><GoogleBusinessIcon /></a>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className={styles.footerBottomLine}>
                        <div className={styles.phoneWrapper}>
                            <span>Call Us Today!</span>
                            <a href="tel:8472629774" className={styles.phoneNumber}>
                                847-262-9774
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. LEGAL */}
            <section className={styles.footerLegal}>
                <div className={styles.legalContent}>
                    <div className={styles.legalLeft}>
                        <span>License #: 104.015756</span>
                        <p>© {currentYear} All Rights Reserved.</p>

                        <div className={styles.legalLinks}>
                            <Link href="/site-map">Site Map</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                            <Link href="/site-search">Site Search</Link>
                        </div>
                    </div>

                    <div className={styles.legalRight}>
                        <span className={styles.scorpionLogo}>SCORPION</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};
