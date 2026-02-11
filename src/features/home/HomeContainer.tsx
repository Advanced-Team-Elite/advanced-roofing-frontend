'use client';
import { useState } from 'react';
import styles from './Home.module.css';
import {
    PlayIcon,
    DescriptionIcon
} from "@/shared/Icons/Icons";
import Image from 'next/image';
import {AboutHome} from "@/features/home/AboutHome/AboutHome";
import {StormRecovery} from "@/features/home/StormRecovery/StormRecovery";
import WhyChooseUs from "@/features/home/WhyChooseUs/WhyChooseUs";
import OurServices from "@/features/home/OurServices/OurServices";
import MoreThanRoofing from "@/features/home/MoreThanRoofing/MoreThanRoofing";
import HappyCustomers from "@/features/home/HappyCustomers/HappyCustomers";
import ContactUs from "@/features/home/ContactUs/ContactUs";
import Link from 'next/link';

export default function HomeContainer() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const awards = [
        { src: '/assets/images/features/home/AngiesList.png', alt: 'Angies List Super Service Award 2015' },
        { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector' },
        { src: '/assets/images/features/home/gaf-certified-logo.png', alt: 'GAF Certified Residential Roofing Contractor' },
        { src: '/assets/images/features/home/PreferredContractor_OwensCorning.png', alt: 'Owens Corning Preferred Contractor' },
        { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector Commercial' },
        { src: '/assets/images/features/home/AngiesList_2019.png', alt: 'Angies List Super Service Award 2019' },
    ];
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <main className={styles.mainWrapper}>
            {/* --- HERO SECTION --- */}
            <section className={styles.heroSection}>
                {/* Video Background (Solo visible en Desktop) */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoBg}
                    poster="/assets/images/features/home/hero-mobile-bg.jpg"
                >
                    <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Overlay azul (visible en tablet/mobile mediante CSS) */}
                <div className={styles.heroOverlay}></div>

                {/* Contenido Central */}
                <div className={styles.heroContent}>
                    <svg className={styles.flairSvg} viewBox="0 0 24 24">
                        <path d="M23.996 13.743C23.982 13.798 23.933 13.833 23.879 13.833C23.869 13.833 23.86 13.832 23.85 13.829L12 10.814L0.151 13.829C0.087 13.846 0.021 13.808 0.004 13.743C-0.013 13.68 0.024 13.613 0.088 13.595L11.967 10.17C11.989 10.164 12.012 10.164 12.034 10.17L23.913 13.595C23.976 13.613 24.013 13.68 23.996 13.743Z" fill="white" />
                    </svg>

                    <h1 className={styles.heroTitle}>We&apos;ve Got You Covered</h1>
                    <p className={styles.heroSubtitle}>
                        Chicago&apos;s Trusted Roofing & Storm Recovery Team
                    </p>
                    <Link href="/contact-us">
                        <button className={styles.contactBtn}>Contact Us</button>
                    </Link>
                </div>

                {/* Botones inferiores izquierda (Solo Desktop) */}
                <div className={styles.videoControls}>
                    <button className={styles.controlBtn} aria-label="Play/Pause">
                        <span className="material-icons"><PlayIcon /></span>
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={() => setIsDialogOpen(true)}
                        aria-label="Process info"
                    >
                        <span className="material-icons"><DescriptionIcon /></span>
                    </button>
                </div>
            </section>

            {/* Diálogo del Proceso */}
            {isDialogOpen && (
                <div className={styles.dialogOverlay} onClick={() => setIsDialogOpen(false)}>
                    <div className={styles.dialogContent} onClick={e => e.stopPropagation()}>
                        <h2>Commercial roof installation process</h2>
                        <button onClick={() => setIsDialogOpen(false)}>Close</button>
                    </div>
                </div>
            )}


            <OurServices />

            <AboutHome />
            <StormRecovery />

            <section className={styles.awardsSection}>
                <div className={styles.container}>
                    <h2 className={styles.awardsTitle}>Award-Winning Business</h2>
                    <div className={styles.awardsGrid}>
                        {awards.map((award, index) => (
                            <div key={index} className={styles.awardItem}>
                                <Image
                                    src={award.src}
                                    alt={award.alt}
                                    width={220} /* Ajuste según el tamaño real de tus assets */
                                    height={160}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyChooseUs />
            <MoreThanRoofing />
            <HappyCustomers />
            <ContactUs />



        </main>
    );
}