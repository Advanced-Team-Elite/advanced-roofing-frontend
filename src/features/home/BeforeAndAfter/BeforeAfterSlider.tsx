'use client';
import React, { useState } from 'react';
import styles from './BeforeAfterSlider.module.css';

interface Props {
    before: string;
    after: string;
}

const BeforeAfterSlider = ({ before, after }: Props) => {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const updatePosition = (clientX: number) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;

        setSliderPos(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseDown = () => {
        const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = () => {
        const handleTouchMove = (e: TouchEvent) => {
            updatePosition(e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };

        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    };

    return (
        <div
            ref={containerRef}
            className={styles.container}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            {/* AFTER */}
            <div
                className={styles.afterImage}
                style={{ backgroundImage: `url(${after})` }}
            />

            {/* BEFORE */}
            <div
                className={styles.beforeImage}
                style={{
                    backgroundImage: `url(${before})`,
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
            />

            {/* LINE + HANDLE */}
            <div
                className={styles.sliderLine}
                style={{ left: `${sliderPos}%` }}
            >
                <div className={styles.sliderButton}>
                    <div className={styles.dotsIcon}></div>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterSlider;