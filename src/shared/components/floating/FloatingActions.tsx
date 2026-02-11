// src/shared/components/floating/FloatingActions.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FloatingActions.module.css';

interface IconProps {
    size?: number;
}

const AccessibilityIcon = ({ size = 28 }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" />
        <path d="m6 8 6 2 6-2" />
        <path d="M12 10v4" />
    </svg>
);


export const FloatingActions = () => {
    const [showTop, setShowTop] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current > 300 && current > lastScrollY.current) {
                setShowTop(true);
            } else if (current < lastScrollY.current) {
                setShowTop(false);
            }

            lastScrollY.current = current;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Accesibilidad */}
            <button className={styles.accessibilityBtn} aria-label="Accessibility">
                <AccessibilityIcon size={35} />
            </button>

            {/* Top */}
            <button
                className={`${styles.topBtn} ${
                    showTop ? styles.topVisible : styles.topHidden
                }`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Top
            </button>

            {/* Contact widget */}
            <div className={styles.contactContainer}>
                <div className={styles.chatWrapper}>
                    <div className={styles.chatBubble}>
                        <button className={styles.closeBtn}>×</button>
                        <strong>Welcome to Advanced Roofing Team Construction</strong>
                        <p>I&apos;m here if you have any questions or need help!</p>
                        {/* El pequeño triángulo indicador */}
                        <div className={styles.bubbleTriangle}></div>
                    </div>

                    <div className={styles.actionGrid}>
                        <button className={styles.actionItem}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>
                            <span>Text</span>
                        </button>
                        <button className={styles.actionItem}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <span>Call</span>
                        </button>
                        <button className={styles.actionItem}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <span>Email</span>
                        </button>
                        <button className={styles.actionItem}>
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
                            <span>Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
