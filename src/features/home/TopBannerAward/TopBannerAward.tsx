"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import styles from "./TopBannerAward.module.css";

export const TopBannerAward = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasFired = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasFired.current) {
                        hasFired.current = true;

                        const duration = 1.5 * 1000;
                        const end = Date.now() + duration;

                        (function frame() {
                            confetti({
                                particleCount: 3,
                                angle: 60,
                                spread: 55,
                                origin: { x: 0, y: 0.8 },
                                colors: ["#00589e", "#ffd700", "#ffffff"]
                            });
                            confetti({
                                particleCount: 3,
                                angle: 120,
                                spread: 55,
                                origin: { x: 1, y: 0.8 },
                                colors: ["#00589e", "#ffd700", "#ffffff"]
                            });

                            if (Date.now() < end) {
                                requestAnimationFrame(frame);
                            }
                        }());
                    }
                });
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={styles.awardSection}>
            <div className={styles.container}>

                {/* Contenedor del título con tus imágenes PNG de laureles */}
                <div className={styles.titleWrapper}>
                    <div className={`${styles.laurelContainer} ${styles.laurelLeft}`}>
                        <Image
                            src="/assets/images/features/home/laurel-left.webp"
                            alt="Laurel Left"
                            width={120}
                            height={160}
                            priority
                        />
                    </div>

                    <h2 className={styles.title}>
                        Ranked #1 Roofing Contractor <br className={styles.desktopBreak} />
                        in Des Plaines for 2026
                    </h2>

                    <div className={`${styles.laurelContainer} ${styles.laurelRight}`}>
                        <Image
                            src="/assets/images/features/home/laurel-right.webp"
                            alt="Laurel Right"
                            width={120}
                            height={160}
                            priority
                        />
                    </div>
                </div>

                <p className={styles.description}>
                    At <strong>Advanced Roofing Team</strong>, excellence is earned, respected, and recognized. We are proud to share that our team has achieved the top ranking by{" "}
                    <a
                        href="https://businessrate.com/awards/presentation/v2?cc=M9LSN6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.awardLink}
                        title="Verify our official ranking"
                    >
                        BusinessRate
                    </a>
                    , a distinction powered entirely by the volume, quality, and consistency of our actual customer feedback. This recognition reflects our unwavering commitment to technical precision and professional restoration—proving that when it comes to protecting your property, your community trusts us to build it the right way.
                </p>

                <span className={styles.subtext}>
                    Verified & Certified via Google Reviews
                </span>
            </div>
        </section>
    );
};