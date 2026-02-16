"use client";
import React from 'react';
import styles from './RoofingBanner.module.css';

interface RoofingBannerProps {
    imagePath: string;
}

const RoofingBanner = ({ imagePath }: RoofingBannerProps) => {
    return (
        <section className={styles.bannerContainer}>
            <div className={styles.imageWrapper}>
                <img
                    src={imagePath}
                    alt="Roofing Services Banner"
                    className={styles.bannerImage}
                />
            </div>
        </section>
    );
};

export default RoofingBanner;