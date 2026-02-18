'use client';
import { useState, useRef } from 'react';
import styles from './VideoBanner.module.css';
import { PlayIcon, DescriptionIcon } from '@/shared/Icons/Icons';
import Link from 'next/link';

interface VideoBannerProps {
    showSubtitle?: boolean;
}

export default function VideoBanner({ showSubtitle = true }: VideoBannerProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <section className={styles.heroSection}>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.videoBg}
                    poster="/assets/images/features/home/hero-mobile-bg.jpg"
                >
                    <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
                </video>

                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    <svg className={styles.flairSvg} viewBox="0 0 24 24">
                        <path
                            d="M23.996 13.743C23.982 13.798 23.933 13.833 23.879 13.833C23.869 13.833 23.86 13.832 23.85 13.829L12 10.814L0.151 13.829C0.087 13.846 0.021 13.808 0.004 13.743C-0.013 13.68 0.024 13.613 0.088 13.595L11.967 10.17C11.989 10.164 12.012 10.164 12.034 10.17L23.913 13.595C23.976 13.613 24.013 13.68 23.996 13.743Z"
                            fill="white"
                        />
                    </svg>

                    <h1 className={styles.heroTitle}>We&apos;ve Got You Covered</h1>
                    {showSubtitle && (
                        <p className={styles.heroSubtitle}>
                            Chicago&apos;s Trusted Roofing & Storm Recovery Team
                        </p>
                    )}
                    <Link href="/contact-us">
                        <button className={styles.contactBtn}>Contact Us</button>
                    </Link>
                </div>

                <div className={styles.videoControls}>
                    <button className={styles.controlBtn} aria-label="Play/Pause" onClick={togglePlay}>
                        <span className="material-icons">
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </span>
                    </button>
                    <button
                        className={styles.controlBtn}
                        onClick={() => setIsDialogOpen(true)}
                        aria-label="Process info"
                    >
                        <span className="material-icons"><DescriptionIcon /></span>
                    </button>
                </div>
            </section>

            {isDialogOpen && (
                <div className={styles.dialogOverlay} onClick={() => setIsDialogOpen(false)}>
                    <div className={styles.dialogWrapper} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.dialogCloseBtn} onClick={() => setIsDialogOpen(false)}>✕</button>
                        <div className={styles.dialogContent}>
                            <h2>Commercial roof installation process</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const PauseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
);