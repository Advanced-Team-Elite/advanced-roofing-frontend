'use client';
import styles from './AwardsBanner.module.css';
import Image from 'next/image';
import { useState } from 'react';

const awards = [
    { src: '/assets/images/features/home/badgets/AngiesList.webp', alt: 'Angie’s List Super Service Award 2015 Badge' },
    { src: '/assets/images/features/home/badgets/master-elite-card.webp', alt: 'GAF Certified Master Elite Card' },
    { src: '/assets/images/features/home/badgets/gaf-certified-logo.webp', alt: 'GAF Certified Residential Roofing Contractor Badge' },
    { src: '/assets/images/features/home/badgets/PreferredContractor_OwensCorning_guide.webp', alt: 'Owens Corning Preferred Contractor Logo' },
    { src: '/assets/images/features/home/badgets/nextdoor-neighborhood-alt.png', alt: 'Nextdoor Neighborhood Fave Award Sello' },
    { src: '/assets/images/features/home/badgets/bbb-accredited.png', alt: 'Better Business Bureau BBB Accredited Business Logo' },
    { src: '/assets/images/features/home/badgets/vsi-certified.png', alt: 'VSI Certified Vinyl Siding Installer Badge' },
    { src: '/assets/images/features/home/badgets/Haag-Commercial-Logo.webp', alt: 'HAAG Certified Commercial Roof Inspector Logo' },
    { src: '/assets/images/features/home/badgets/AngiesList_2019.webp', alt: 'Angie’s List Super Service Award 2019 Badge' },
    { src: '/assets/images/features/home/badgets/iko.webp', alt: 'IKO Certified Roofing Contractor Logo' },
    { src: '/assets/images/features/home/badgets/tribuilt.webp', alt: 'TRI-BUILT Materials Certified Contractor Logo' },
    { src: '/assets/images/features/home/badgets/velux.webp', alt: 'VELUX Certified Skylight Installer Logo' },
    { src: '/assets/images/features/home/badgets/gaf.webp', alt: 'GAF Factory-Certified Roofing Contractor Logo' },
    { src: '/assets/images/features/home/badgets/wrrs.webp', alt: 'WRRS Certified Roofing Specialist Logo' },
    { src: '/assets/images/features/home/badgets/certainTeed.webp', alt: 'CertainTeed Credentialed Roofing Contractor Logo' },
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
                <h2 className={styles.awardsTitle}>Trusted & Certified Professionals</h2>

                <div className={styles.awardsGrid}>
                    {awards.map((award, index) => (
                        <div key={index} className={styles.awardItem}>
                            <Image
                                src={award.src}
                                alt={award.alt}
                                width={220}
                                height={160}
                                style={{ objectFit: 'contain', height: 'auto' }}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

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
                                    style={{ objectFit: 'contain', height: 'auto' }}
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.carouselControls}>
                        <button onClick={() => prev(3)} className={styles.arrowBtn}>←</button>
                        <button onClick={() => next(3)} className={styles.arrowBtn}>→</button>
                    </div>
                </div>

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
                                    style={{ objectFit: 'contain', height: 'auto' }}
                                    unoptimized
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