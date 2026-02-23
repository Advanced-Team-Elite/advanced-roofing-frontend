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
                            <Link href="/">
                                <Image
                                    src="/assets/brand/logo-light.png"
                                    alt="Advanced Roofing Team"
                                    width={250}
                                    height={80}
                                    className={styles.footerLogo}
                                />
                            </Link>
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
                            <Link
                                href="https://www.google.com/maps?cid=5324934304242062101"
                                className={styles.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Map & Directions
                            </Link>
                        </div>

                        {/* Social */}
                        <div className={styles.footerColumn}>
                            <h3 className={styles.columnTitle}>Follow Us</h3>
                            <div className={styles.socialIcons}>
                                <Link
                                    href="https://www.facebook.com/advancedroofingteam"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon />
                                </Link>

                                <Link
                                    href="https://x.com/advancedroofs"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <XIcon />
                                </Link>

                                <Link
                                    href="https://www.yelp.com/biz/advanced-roofing-team-construction-des-plaines-2"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <YelpIcon />
                                </Link>

                                <Link
                                    href="https://www.houzz.com/hznb/professionals/roofing-and-gutters/advanced-roofing-team-construction-pfvwus-pf~314416282"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <HouzzIcon />
                                </Link>

                                <Link
                                    href="https://www.google.com/maps/place/Advanced+Roofing+Team/@42.0550959,-87.9011083,17z/data=!3m1!4b1!4m6!3m5!1s0x880fa526c3541823:0x49e5f78978a3d315!8m2!3d42.0550959!4d-87.9011083!16s%2Fg%2F11b6tylkft?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D"
                                    className={styles.socialIcon}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GoogleBusinessIcon />
                                </Link>
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
                        <span className={styles.scorpionLogo}>ADVANCE</span>
                    </div>
                </div>
            </section>
        </footer>
    );
};
