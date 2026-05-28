"use client";
import styles from './StatsBar.module.css';
import Link from "next/link";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";
import { useEffect, useRef, useState } from "react";

// ──────────────────────────────────────────────────────────────
// CONTADOR ESTÁNDAR (Para las Cards 1 y 3)
// ──────────────────────────────────────────────────────────────
const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setHasStarted(true);
            },
            { threshold: 0.3 }
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

// ──────────────────────────────────────────────────────────────
// CONTADOR EFECTO SLOT MACHINE CON PALANCA INTERACTIVA
// ──────────────────────────────────────────────────────────────
const SlotCounter = ({ targetNumber }: { targetNumber: number }) => {
    const [hasStarted, setHasStarted] = useState(false);
    const [isLeverPulled, setIsLeverPulled] = useState(false);
    const [resetTrigger, setResetTrigger] = useState(false); // Fuerza el reinicio de los tambores
    const containerRef = useRef<HTMLDivElement>(null);

    const digitsArray = targetNumber.toLocaleString('en-US').split('');
    const extendedNumbers = Array.from({ length: 6 }, () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).flat();
    const totalItems = extendedNumbers.length;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) setHasStarted(true);
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    // Función mágica para volver a jalar la palanca y "jugar" otra vez
    const handlePullLever = () => {
        if (isLeverPulled) return; // Evita doble clic bugeado mientras gira

        setIsLeverPulled(true);
        setResetTrigger(true); // Regresa los rodillos a 0 de golpe

        // 1. Soltar la palanca (animación de regreso rápido en CSS)
        setTimeout(() => {
            setIsLeverPulled(false);
        }, 400);

        // 2. Apagar el reset e iniciar el giro con furia inmediatamente
        setTimeout(() => {
            setResetTrigger(false);
        }, 50);
    };

    return (
        <div ref={containerRef} className={styles.slotMachineWrapper}>

            {/* Chasis principal que contiene los rodillos */}
            <div className={styles.slotMachineContainer}>
                {digitsArray.map((char, index) => {
                    if (char === ',') {
                        return (
                            <div key={index} className={styles.slotCommaWindow}>
                                <span className={styles.slotCommaItem}>,</span>
                            </div>
                        );
                    }

                    const targetDigit = parseInt(char, 10);
                    const totalPositionsToMove = 40 + targetDigit;
                    const percentageTranslate = (totalPositionsToMove / totalItems) * 100;

                    // Si está en modo reset, se clava en 0%, de lo contrario va al número final si ya arrancó
                    const currentTranslation = resetTrigger ? '0%' : (hasStarted ? `-${percentageTranslate}%` : '0%');

                    return (
                        <div key={index} className={styles.slotDrumWindow}>
                            <div
                                className={`${styles.slotDrumReel} ${resetTrigger ? styles.noTransition : ''}`}
                                style={{
                                    transform: `translateY(${currentTranslation})`,
                                    // Pasamos el delay como una variable CSS limpia o la propiedad nativa individual desglosada
                                    transitionDelay: resetTrigger ? '0ms' : `${index * 100}ms`
                                }}
                            >
                                {extendedNumbers.map((num, numIndex) => (
                                    <span key={numIndex} className={styles.slotDrumDigit}>{num}</span>
                                ))}
                            </div>
                            <div className={styles.slotDrumReflex} />
                        </div>
                    );
                })}
            </div>

            {/* 🕹️ LA PALANCA MECÁNICA (Mover a la derecha del chasis) */}
            <div
                className={`${styles.leverStructure} ${isLeverPulled ? styles.leverPulled : ''}`}
                onClick={handlePullLever}
                title="Pull to spin again!"
            >
                <div className={styles.leverBase} />
                <div className={styles.leverRod} />
                <div className={styles.leverBall} />
            </div>
        </div>
    );
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
                    {/* HERO CARD (20+ Years) */}
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
                                    Providing <strong>Local Expertise</strong> for homeowners and businesses across the <strong>Chicagoland</strong> area.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 - EFECTO RULETA DE FORTUNA DE 16,000 TECHOS */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <div className={`${styles.value} ${styles.valueYellow}`}>
                            <SlotCounter targetNumber={16000} />
                            <span className={styles.plusSign}>+</span>
                        </div>

                        <div className={styles.cardLine}></div>

                        <span className={styles.label}>
                            Roofs Completed
                        </span>

                        <p className={styles.cardDetail}>
                            Residential, commercial, and industrial roofing systems completed
                            with precision craftsmanship and long-term durability.
                        </p>
                    </div>

                    {/* CARD 3 (Since 2004) */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>
                            Since&nbsp;<Counter end={2004} duration={2200} />
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