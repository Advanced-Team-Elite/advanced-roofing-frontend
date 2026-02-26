"use client";
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import {FacebookIcon, GoogleBusinessIcon, HouzzIcon, XIcon, YelpIcon} from "@/shared/Icons/Icons";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState('main');

    const closeDrawer = () => {
        setIsOpen(false);
        setView('main'); // Resetear al cerrar
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <header className={styles.headerContainer}>
            {/* TOP BAR - Desktop */}
            <div className={styles.topBar}>
                <span>Serving the Des Plaines Community</span>
                <div className="flex items-center gap-6">
                    <Link href="/areas-we-serve" className={styles.topBarNavLink}>Areas We Serve</Link>
                    <Link href="/financing" className={styles.topBarNavLink}>Financing</Link>
                    <Link href="/blog" className={styles.topBarNavLink}>Blog</Link>
                    <Link href="/reviews" className={styles.topBarNavLink}>Reviews</Link>
                    <span className={styles.telf} >847-262-9774</span>
                </div>
            </div>

            {/* MAIN NAV */}
            <nav className={styles.mainNav}>
                {/* Menu Hamburguesa - Tablet/Mobile */}
                <button className={styles.menuToggle} onClick={() => setIsOpen(true)} aria-label="Open navigation menu">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.logoContainer}>

                    <Link href="/">
                        <Image
                            src="/assets/brand/logo-light.png"
                            alt="Advanced Roofing Logo"
                            width={250}
                            height={80}
                            priority
                        />
                    </Link>

                </div>

                {/* Desktop Links */}
                <ul className={styles.desktopMenu}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    {/* Item with Dropdown */}
                    <li className={styles.hasDropdown}>
                        <Link href="/about-us" className={styles.navLink}>About Us</Link>
                        <ul className={styles.dropdownMenu}>
                            <li>
                                <Link href="/about-us/owens-corning-preferred-contractor" >Owens Corning Preferred Contractor</Link>
                            </li>
                            <li>
                                <Link href="/about-us/gaf-masterelite-preferred-contractor">GAF Masterelite Preferred Contractor</Link>
                            </li>
                            <li>
                                <Link href="/roofing-insurance-claims">Insurance Claims</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.hasDropdown}>
                        <Link href="/roofing" className={styles.navLink}>Roofing</Link>
                        <ul className={styles.dropdownMenu}>
                            <li><Link href="/roofing/emergency-roof-repairs">Emergency Roof Repairs</Link></li>
                            <li><Link href="/roofing/flat-roof-repair">Flat Roof Repair</Link></li>
                            <li><Link href="/roofing/roof-installation-replacement">Roof Installation & Replacement</Link></li>
                            <li><Link href="/roofing/roof-inspections">Roof Inspections</Link></li>
                            <li><Link href="/roofing/gutters">Gutters</Link></li>
                            <li><Link href="/roofing/siding">Siding</Link></li>
                            <li><Link href="/roofing/skylight-repair">Skylight Repair</Link></li>
                            <li><Link href="/roofing/skylight-installation">Skylight Installation</Link></li>
                            <li><Link href="/roofing/storm-damage-repair">Storm Damage Repair</Link></li>
                            <li><Link href="/roofing/tile-roof-repair">Tile Roof Repair</Link></li>
                            <li><Link href="/roof-types">Roof Types</Link></li>
                        </ul>
                    </li>
                    <li><Link href="/commercial-roofing" className={styles.navLink}>Commercial Roofing</Link></li>
                    <li><Link href="/roofing-insurance-claims" className={styles.navLink}>Roofing Insurance Claims</Link></li>
                    <li><Link href="/contact-us" title="Go to our contact page" className={styles.navLink}>Contact Us</Link></li>
                    <li>
                        <Link href="/contact-us/" className={styles.quoteBtnLink} title="Go to our contact page">
                            <button className={styles.quoteBtn}>Request a Quote</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/site-search" className={styles.searchIcon} aria-label="Search our website">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </Link>
                    </li>
                </ul>

                {/* Icon phone - Tablet/Mobile */}
                <a href="tel:8472629774" className={styles.phoneToggle} aria-label="Call Advanced Roofing Team at 847-262-9774">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
                    </svg>
                </a>
            </nav>

            {/* OVERLAY DRAWER (Tablet/Mobile) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className={styles.drawerContainer}>
                        {/* HEADER DRAWER */}
                        <div className={styles.drawerHeader}>
                            {view === 'main' ? (
                                <>
                                    <Link href="/site-search/" onClick={closeDrawer} className={styles.searchLinkWrapper}>
                                        <div className={styles.searchIconYellow}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                            </svg>
                                        </div>
                                    </Link>
                                    <button onClick={closeDrawer} className={styles.closeBtn}>
                                        Close ✕
                                    </button>
                                </>
                            ) : (
                                <button onClick={() => setView('main')} className={styles.backBtn}>
                                    ← Main Menu
                                </button>
                            )}
                        </div>

                        {/* CONTENIDO DESLIZABLE */}
                        <div className={styles.drawerContentWrapper}>
                            {/* VISTA PRINCIPAL */}
                            <div className={`${styles.viewPane} ${view === 'main' ? styles.activePane : styles.hiddenLeft}`}>
                                <ul className={styles.mobileList}>
                                    <li><Link href="/" onClick={closeDrawer}>Home</Link></li>
                                    <li className={styles.linkWithArrow}>
                                        <Link href="/about-us" onClick={closeDrawer}>About Us</Link>
                                        <div className={styles.arrowContainer} onClick={(e) => { e.preventDefault(); setView('about'); }}>
                                            <i className={styles.arrow}>→</i>
                                        </div>
                                    </li>
                                    <li className={styles.linkWithArrow}>
                                        <Link href="/roofing" onClick={closeDrawer}>Roofing</Link>
                                        <div className={styles.arrowContainer} onClick={(e) => { e.preventDefault(); setView('roofing'); }}>
                                            <i className={styles.arrow}>→</i>
                                        </div>
                                    </li>
                                    <li><Link href="/commercial-roofing" onClick={closeDrawer}>Commercial Roofing</Link></li>
                                    <li><Link href="/roofing-insurance-claims" onClick={closeDrawer}>Roofing Insurance Claims</Link></li>

                                    <li className={styles.linkWithArrow}>
                                        <Link href="/areas-we-serve" onClick={closeDrawer}>Areas We Serve</Link>
                                        <div className={styles.arrowContainer} onClick={(e) => { e.preventDefault(); setView('areas'); }}>
                                            <i className={styles.arrow}>→</i>
                                        </div>
                                    </li>

                                    <li><Link href="/financing" onClick={closeDrawer}>Financing</Link></li>

                                    <li className={styles.linkWithArrow}>
                                        <Link href="/blog" onClick={closeDrawer}>Blog</Link>
                                        <div className={styles.arrowContainer} onClick={(e) => { e.preventDefault(); setView('blog'); }}>
                                            <i className={styles.arrow}>→</i>
                                        </div>
                                    </li>

                                    <li><Link href="/reviews" onClick={closeDrawer}>Reviews</Link></li>
                                    <li><Link href="/contact-us" title="Go to our contact page" onClick={closeDrawer}>Contact Us</Link></li>
                                </ul>
                                <div className={styles.drawerFooter}>
                                    <div className={styles.buttonsWrapper}>
                                        <Link href="/contact-us" title="Go to our contact page" onClick={closeDrawer} className={styles.mobileContactBtn}>Contact Us</Link>
                                        <a href="tel:8472629774" className={styles.mobileCallBtn}>Call Us Today!</a>
                                    </div>

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
                            </div>

                            {/* ROOFING */}
                            <div className={`${styles.viewPane} ${view === 'roofing' ? styles.activePane : styles.hiddenRight}`}>
                                <ul className={styles.mobileList}>
                                    <li><Link href="/roofing/emergency-roof-repairs" onClick={closeDrawer}>Emergency Roof Repairs</Link></li>
                                    <li><Link href="/roofing/flat-roof-repair" onClick={closeDrawer}>Flat Roof Repair</Link></li>
                                    <li><Link href="/roofing/roof-installation-replacement" onClick={closeDrawer}>Roof Installation & Replacement</Link></li>
                                    <li><Link href="/roofing/roof-inspections" onClick={closeDrawer}>Roof Inspections</Link></li>
                                    <li><Link href="/roofing/gutters" onClick={closeDrawer}>Gutters</Link></li>
                                    <li><Link href="/roofing/siding" onClick={closeDrawer}>Siding</Link></li>
                                    <li><Link href="/roofing/skylight-repair" onClick={closeDrawer}>Skylight Repair</Link></li>
                                    <li><Link href="/roofing/skylight-installation" onClick={closeDrawer}>Skylight Installation</Link></li>
                                    <li><Link href="/roofing/storm-damage-repair" onClick={closeDrawer}>Storm Damage Repair</Link></li>
                                    <li><Link href="/roofing/tile-roof-repair" onClick={closeDrawer}>Tile Roof Repair</Link></li>
                                    <li><Link href="/roof-types" onClick={closeDrawer}>Roof Types</Link></li>
                                </ul>
                            </div>

                            {/* ABOUT US */}
                            <div className={`${styles.viewPane} ${view === 'about' ? styles.activePane : styles.hiddenRight}`}>
                                <ul className={styles.mobileList}>
                                    <li><Link href="/about-us/owens-corning-preferred-contractor" onClick={closeDrawer}>Owens Corning Preferred Contractor</Link></li>
                                    <li><Link href="/about-us/gaf-masterelite-preferred-contractor" onClick={closeDrawer}>GAF Masterelite Preferred Contractor</Link></li>
                                    <li><Link href="/roofing-insurance-claims" onClick={closeDrawer}>Insurance Claims</Link></li>
                                </ul>
                            </div>

                            {/* AREAS WE SERVE */}
                            <div className={`${styles.viewPane} ${view === 'areas' ? styles.activePane : styles.hiddenRight}`}>
                                <ul className={styles.mobileList}>
                                    <li><Link href="/arlington-heights-il" onClick={closeDrawer}>Arlington Heights</Link></li>
                                    <li><Link href="/des-plaines-il" onClick={closeDrawer}>Des Plaines</Link></li>
                                    <li><Link href="/evanston-il" onClick={closeDrawer}>Evanston</Link></li>
                                    <li><Link href="/hoofman-estates-il" onClick={closeDrawer}>Hoffman Estates</Link></li>
                                    <li><Link href="/mount-prospect-il" onClick={closeDrawer}>Mount Prospect</Link></li>
                                    <li><Link href="/naperville-il" onClick={closeDrawer}>Naperville</Link></li>
                                    <li><Link href="/palatine-il" onClick={closeDrawer}>Palatine</Link></li>
                                    <li><Link href="/schaumburg-il" onClick={closeDrawer}>Schaumburg</Link></li>
                                    <li><Link href="/skokie-il" onClick={closeDrawer}>Skokie</Link></li>
                                </ul>
                            </div>

                            {/* BLOG YEARS SUB-MENU */}
                            <div className={`${styles.viewPane} ${view === 'blog' ? styles.activePane : styles.hiddenRight}`}>
                                <ul className={styles.mobileList}>
                                    <li>
                                        <Link href="/blog/2025" onClick={closeDrawer}>
                                            2025
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog/2024" onClick={closeDrawer}>
                                            2024
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* BUTTONS DOWN */}

                    </div>
                    <div className="flex-1 bg-black/50" onClick={closeDrawer} />
                </div>
            )}
        </header>
    );
};