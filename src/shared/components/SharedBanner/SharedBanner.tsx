"use client";
import styles from './SharedBanner.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";
import React from "react";

interface SharedBannerProps {
    title: string;
    isCityVisible?: boolean;
    isIconVisible?: boolean;
    backgroundImage?: string; // Nueva prop opcional
}

const SharedBanner = ({
                          title,
                          isCityVisible = true,
                          isIconVisible = false,
                          backgroundImage = '/assets/images/features/about-us/banner-v1.webp' // Valor por defecto
                      }: SharedBannerProps) => {
    return (
        <>
            <section
                className={styles.bannerBackground}
                style={{ backgroundImage: `url('${backgroundImage}')` }}
            >
                <div className={styles.overlay}>
                    <div className={styles.titleWrapper}>
                        {isIconVisible && (
                            <div className={`${styles.iconWrapper} ${!isIconVisible ? styles.hidden : ''}`}>
                                <FlairIcon size={150} />
                            </div>
                        )}
                        <h1 className={`${styles.title} ${!isCityVisible ? styles.noCityMargin : ''}`}>{title}</h1>
                    </div>
                </div>
            </section>

            {isCityVisible && (
                <div className={styles.cityWrapper}>
                    <img
                        src="/assets/images/features/about-us/bg-3.webp"
                        alt="City Landscape"
                        className={styles.cityImage}
                    />
                </div>
            )}
        </>
    );
};

export default SharedBanner;