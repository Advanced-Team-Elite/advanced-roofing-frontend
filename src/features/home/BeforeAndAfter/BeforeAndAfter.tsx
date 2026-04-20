'use client';
import React from 'react';
import Slider from 'react-slick';
import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './BeforeAndAfter.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

// --- Componentes de Flechas Personalizadas ---
const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customArrow} ${styles.next}`} onClick={onClick}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
            </svg>
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} ${styles.customArrow} ${styles.prev}`} onClick={onClick}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
            </svg>
        </div>
    );
};

const comparisonSlides = [
    {
        id: 1,
        before: '/assets/images/slider/roof1-before.png',
        after: '/assets/images/slider/roof1-after.png',
    },
    {
        id: 2,
        before: '/assets/images/slider/roof2-before.png',
        after: '/assets/images/slider/roof2-after.png',
    },
    {
        id: 3,
        before: '/assets/images/slider/roof3-before.png',
        after: '/assets/images/slider/roof3-after.png',
    },
];

const BeforeAndAfter = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // Pasamos las flechas personalizadas
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        swipe: false,
        draggable: false,
        touchMove: false,

        dotsClass: `slick-dots ${styles.customDots}`,
    };

    return (
        <ScrollReveal className={styles.mainContainer} direction="left">
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Before & After</h2>
                    <p className={styles.description}>
                        See how we restore aging commercial roofs into durable, high-performance systems.
                    </p>
                </div>

                <div className={styles.carouselContainer}>
                    <Slider {...sliderSettings}>
                        {comparisonSlides.map((slide) => (
                            <div key={slide.id} className={styles.slideItem}>
                                <div className={styles.compareWrapper}>
                                    <BeforeAfterSlider
                                        before={slide.before}
                                        after={slide.after}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default BeforeAndAfter;