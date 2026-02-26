"use client";
import React from 'react';
import Image from 'next/image';
import styles from './ImageGalleryRow.module.css';

import imgLeft from '@/../public/assets/images/features/roofing/content-v2.webp';
import imgCenter from '@/../public/assets/images/features/roofing/content-v3.webp';
import imgRight from '@/../public/assets/images/features/roofing/content-v4.webp';

const ImageGalleryRow = () => {
    return (
        <section className={styles.galleryWrapper}>
            <div className={styles.imageItem}>
                <Image
                    src={imgLeft}
                    alt="Roofing work detail"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div className={styles.imageItem}>
                <Image
                    src={imgCenter}
                    alt="Chicago Skyline"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
            <div className={styles.imageItem}>
                <Image
                    src={imgRight}
                    alt="Finished residential roof"
                    layout="responsive"
                    objectFit="cover"
                />
            </div>
        </section>
    );
};

export default ImageGalleryRow;