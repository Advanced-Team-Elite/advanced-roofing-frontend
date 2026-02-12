"use client";
import styles from './SharedBanner.module.css';

interface SharedBannerProps {
    title: string;
    isCityVisible?: boolean;
}

const SharedBanner = ({ title, isCityVisible = true }: SharedBannerProps) => {
    return (
        <>
            <section
                className={styles.bannerBackground}
                style={{ backgroundImage: `url('/assets/images/features/about-us/banner-v1.jpg')` }}
            >
                <div className={styles.overlay}>
                    <h1 className={`${styles.title} ${!isCityVisible ? styles.noCityMargin : ''}`}>{title}</h1>
                </div>
            </section>

            {isCityVisible && (
                <div className={styles.cityWrapper}>
                    <img
                        src="/assets/images/features/about-us/bg-3.jpg"
                        alt="City Landscape"
                        className={styles.cityImage}
                    />
                </div>
            )}
        </>
    );
};

export default SharedBanner;