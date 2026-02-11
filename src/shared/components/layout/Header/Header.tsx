"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.headerContainer}>
            {/* TOP BAR - Solo Desktop */}
            <div className={styles.topBar}>
                <span>Serving the Des Plaines Community</span>
                <div className="flex items-center gap-6">
                    <Link href="/areas">Areas We Serve</Link>
                    <Link href="/financing">Financing</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/reviews">Reviews</Link>
                    <span className="text-black text-lg ml-4">847-262-9774</span>
                </div>
            </div>

            {/* MAIN NAV */}
            <nav className={styles.mainNav}>
                {/* Menu Hamburguesa - Solo Tablet/Mobile */}
                <button className={styles.menuToggle} onClick={() => setIsOpen(true)}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.logoContainer}>
                    <Image
                        src="/assets/brand/logo-light.png"
                        alt="Advanced Roofing Logo"
                        width={250}
                        height={80}
                        priority
                    />
                </div>

                {/* Desktop Links */}
                <ul className={styles.desktopMenu}>
                    <li><Link href="/" className={styles.navLink}>Home</Link></li>
                    <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
                    <li><Link href="/roofing" className={styles.navLink}>Roofing</Link></li>
                    <li><Link href="/commercial" className={styles.navLink}>Commercial Roofing</Link></li>
                    <li><Link href="/insurance" className={styles.navLink}>Roofing Insurance Claims</Link></li>
                    <li><Link href="/contact" className={styles.navLink}>Contact Us</Link></li>
                    <li>
                        <button className={styles.quoteBtn}>Request a Quote</button>
                    </li>
                    <li>
                        <Link href="/search" className="text-[#f7d000]">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </Link>
                    </li>
                </ul>

                {/* Icono Teléfono - Solo Tablet/Mobile */}
                <div className="hidden max-[1100px]:block bg-[#00aeef] p-2 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                </div>
            </nav>

            {/* OVERLAY DRAWER (Tablet/Mobile) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="flex-1 bg-black/50" onClick={() => setIsOpen(false)} />
                    <div className="w-[300px] bg-[#00589e] h-full p-6 text-white overflow-y-auto">
                        <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-4">
                            <span className="text-[#f7d000] font-bold">MENU</span>
                            <button onClick={() => setIsOpen(false)} className="text-[#f7d000]">Close ✕</button>
                        </div>
                        <ul className="flex flex-col gap-5 font-bold">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/roofing">Roofing</Link></li>
                            <li><Link href="/commercial">Commercial Roofing</Link></li>
                            {/* ... Agrega el resto de links aquí */}
                        </ul>
                        <div className="mt-10 flex flex-col gap-4">
                            <button className="bg-[#00aeef] py-3 font-bold">Contact Us</button>
                            <button className="bg-white text-black py-3 font-bold">Call Us Today!</button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};