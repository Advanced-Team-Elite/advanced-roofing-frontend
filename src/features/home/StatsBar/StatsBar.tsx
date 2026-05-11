import styles from './StatsBar.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";
import {useEffect, useRef, useState} from "react";

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 } // Se dispara cuando el 30% del número es visible
        );

        if (elementRef.current) observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    }, [hasStarted, end, duration]);

    return <span ref={elementRef}>{count}</span>;
};

const StatsBar = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container mx-auto`}>

                {/* Lado Izquierdo: Header y Botones */}
                <div className={styles.headerSide}>
                    <h2 className={styles.mainTitle}>We only provide quality.</h2>
                    <p className={styles.description}>
                        Providing top-tier roofing solutions and storm recovery with the reliability your property deserves.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/our-services" className={styles.servicesLink}>
                            <button className={styles.btnPrimary}>View More</button>
                        </Link>
                    </div>
                </div>

                <ScrollReveal
                    className={styles.gridSide}
                    direction="zoom"
                    initialOpacity={20}
                    distance={90}
                >
                    {/* HERO CARD */}
                    <div className={styles.cardHero}>
                        <div className={styles.heroTop}>
                            <span className={styles.heroBadge}>TRUSTED EXPERIENCE</span>
                        </div>

                        <div className={styles.heroContent}>
                            <div className={styles.heroNumberWrapper}>
                <span className={`${styles.heroNumber} ${styles.shakeAnim}`}>
                    <Counter end={20} duration={1500} />+
                </span>
                            </div>

                            <div className={styles.heroText}>
                <span className={styles.heroLabel}>
                    Years of Roofing Excellence
                </span>

                                <div className={styles.heroLine}></div>

                                <p className={styles.heroDescription}>
                                    Providing <strong>Local Expertise</strong> for homeowners and
                                    businesses across the <strong>Chicagoland</strong> area.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
    <span className={`${styles.value} ${styles.valueYellow}`}>
        <Counter end={1000} duration={1500} />
            &nbsp;s
    </span>
                        <div className={styles.cardLine}></div>

                        <span className={styles.label}>
        Roofs Completed
    </span>

                        <p className={styles.cardDetail}>
                            Residential, commercial, and industrial roofing systems completed
                            with precision craftsmanship and long-term durability.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
    <span className={`${styles.value} ${styles.valueYellow}`}>
        Since&nbsp;
            <Counter end={2004} duration={2200} />
    </span>

                        <div className={styles.cardLine}></div>

                        <span className={styles.label}>
        Insurance Restorations
    </span>

                        <p className={styles.cardDetail}>
                            Trusted restoration contractor for insurance losses —
                            documented, inspected, and rebuilt across Chicagoland.
                        </p>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};

export default StatsBar;