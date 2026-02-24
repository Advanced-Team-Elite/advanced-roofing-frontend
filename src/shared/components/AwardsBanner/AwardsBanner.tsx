'use client';
import styles from './AwardsBanner.module.css';
import Image from 'next/image';
import { useState } from 'react';

const awards = [
    { src: '/assets/images/features/home/AngiesList.png', alt: 'Angies List Super Service Award 2015' },
    { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector' },
    { src: '/assets/images/features/home/gaf-certified-logo.png', alt: 'GAF Certified Residential Roofing Contractor' },
    { src: '/assets/images/features/home/PreferredContractor_OwensCorning.png', alt: 'Owens Corning Preferred Contractor' },
    { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector Commercial' },
    { src: '/assets/images/features/home/AngiesList_2019.png', alt: 'Angies List Super Service Award 2019' },
];

export default function AwardsBanner() {
    const [current, setCurrent] = useState(0);

    const prev = (visible: number) => {
        setCurrent(c => (c - 1 + (awards.length - visible + 1)) % (awards.length - visible + 1));
    };

    const next = (visible: number) => {
        setCurrent(c => (c + 1) % (awards.length - visible + 1));
    };

    return (
        <section className={styles.awardsSection}>
            <div className={styles.container}>
                <h2 className={styles.awardsTitle}>Award-Winning Business</h2>

                {/* DESKTOP: grid normal */}
                <div className={styles.awardsGrid}>
                    {awards.map((award, index) => (
                        <div key={index} className={styles.awardItem}>
                            <Image
                                src={award.src}
                                alt={award.alt}
                                width={220}
                                height={160}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>

                {/* TABLET: carrusel 3 visibles */}
                <div className={styles.carouselTablet}>
                    <div className={styles.carouselTrack}
                         style={{ transform: `translateX(calc(-${current} * (100% / 3)))` }}>
                        {awards.map((award, index) => (
                            <div key={index} className={styles.carouselItem}>
                                <Image
                                    src={award.src}
                                    alt={award.alt}
                                    width={220}
                                    height={160}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.carouselControls}>
                        <button onClick={() => prev(3)} className={styles.arrowBtn}>←</button>
                        <button onClick={() => next(3)} className={styles.arrowBtn}>→</button>
                    </div>
                </div>

                {/* MOBILE: carrusel 2 visibles */}
                <div className={styles.carouselMobile}>
                    <div className={styles.carouselTrack}
                         style={{ transform: `translateX(calc(-${current} * (100% / 2)))` }}>
                        {awards.map((award, index) => (
                            <div key={index} className={styles.carouselItemMobile}>
                                <Image
                                    src={award.src}
                                    alt={award.alt}
                                    width={160}
                                    height={120}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.carouselControls}>
                        <button onClick={() => prev(2)} className={styles.arrowBtn}>←</button>
                        <button onClick={() => next(2)} className={styles.arrowBtn}>→</button>
                    </div>
                </div>

            </div>
        </section>
    );
}