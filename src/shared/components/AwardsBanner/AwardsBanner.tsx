import styles from './AwardsBanner.module.css';
import Image from 'next/image';

const awards = [
    { src: '/assets/images/features/home/AngiesList.png', alt: 'Angies List Super Service Award 2015' },
    { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector' },
    { src: '/assets/images/features/home/gaf-certified-logo.png', alt: 'GAF Certified Residential Roofing Contractor' },
    { src: '/assets/images/features/home/PreferredContractor_OwensCorning.png', alt: 'Owens Corning Preferred Contractor' },
    { src: '/assets/images/features/home/Haag-Commercial-Logo.png', alt: 'Haag Certified Inspector Commercial' },
    { src: '/assets/images/features/home/AngiesList_2019.png', alt: 'Angies List Super Service Award 2019' },
];

export default function AwardsBanner() {
    return (
        <section className={styles.awardsSection}>
            <div className={styles.container}>
                <h2 className={styles.awardsTitle}>Award-Winning Business</h2>
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
            </div>
        </section>
    );
}