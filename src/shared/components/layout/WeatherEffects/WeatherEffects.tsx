// WeatherEffects.tsx — corregir el Forced Reflow
"use client";
import React, { useMemo, useEffect, useState, useRef } from "react";
import styles from "./WeatherEffects.module.css";

type Season = "winter" | "summer" | "fall" | "spring";

interface Props {
    forcedSeason: Season;
}

// ✅ Generar partículas FUERA del componente con seed fija
// Así no hay Math.random() en cada render ni forced reflow
function generateParticles(seed: number, count: number) {
    const rng = (i: number) => ((Math.sin(seed + i) * 43758.5453) % 1 + 1) % 1;
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${rng(i * 3) * 120}%`,
        fallDelay: `${rng(i * 3 + 1) * -5}s`,
        fallDuration: `${0.8 + rng(i * 3 + 2) * 0.6}s`,
        size: `${18 + rng(i * 5) * 12}px`,
        opacity: 0.8 + rng(i * 7) * 0.2,
    }));
}

function generateWind(seed: number, count: number) {
    const rng = (i: number) => ((Math.sin(seed + i * 1.7) * 43758.5453) % 1 + 1) % 1;
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${rng(i) * 100}%`,
        width: `${200 + rng(i + 1) * 300}px`,
        thickness: `${5 + rng(i + 2) * 7}px`,
        opacity: 0.1 + rng(i + 3) * 0.2,
        delay: `${rng(i + 4) * 5}s`,
        duration: `${2 + rng(i + 5) * 3}s`,
        startX: `${-250 + rng(i + 6) * 100}px`,
    }));
}

function generateRain(seed: number) {
    const drops = [];
    let increment = 0;
    const rng = (i: number) => ((Math.sin(seed + i * 2.3) * 43758.5453) % 1 + 1) % 1;
    let i = 0;
    while (increment < 100) {
        const randoFiver = Math.floor(rng(i++) * 3 + 2);
        const randoHundo = Math.floor(rng(i++) * 97 + 1);
        increment += randoFiver;
        drops.push({
            id: increment,
            left: `${increment}%`,
            bottom: `${randoFiver * 2 - 1 + 100}%`,
            animDelay: `0.${randoHundo}s`,
            animDuration: `0.5${randoHundo}s`,
        });
    }
    return drops;
}

// ✅ Partículas estáticas generadas una sola vez al módulo cargarse
const HAIL = generateParticles(42, 5);
const WIND = generateWind(99, 20);
const RAIN = generateRain(7);

export const WeatherEffects = ({ forcedSeason }: Props) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={styles.container} aria-hidden="true">

            {forcedSeason === "winter" && (
                <div className={styles.hailContainer}>
                    {HAIL.map((stone) => (
                        <div
                            key={stone.id}
                            className={styles.hailstone}
                            style={{
                                left: stone.left,
                                width: stone.size,
                                height: stone.size,
                                opacity: stone.opacity,
                                "--fall-delay": stone.fallDelay,
                                "--fall-duration": stone.fallDuration,
                            } as React.CSSProperties}
                        >
                            <div className={styles.hailSplat} />
                        </div>
                    ))}
                </div>
            )}

            {forcedSeason === "summer" && (
                <div className={styles.sunContainer}>
                    <div className={styles.sun}>
                        <div className={styles.rayBox}>
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                                <div key={n} className={`${styles.ray} ${styles[`ray${n}`]}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {forcedSeason === "fall" && (
                <div className={styles.rainContainer}>
                    {["rainFront", "rainBack"].map((side) => (
                        <div key={side} className={styles[side]}>
                            {RAIN.map((drop) => (
                                <div
                                    key={drop.id}
                                    className={styles.drop}
                                    style={{
                                        [side === "rainFront" ? "left" : "right"]: drop.left,
                                        bottom: drop.bottom,
                                        animationDelay: drop.animDelay,
                                        animationDuration: drop.animDuration,
                                    }}
                                >
                                    <div className={styles.stem} style={{ animationDelay: drop.animDelay, animationDuration: drop.animDuration }} />
                                    <div className={styles.splat} style={{ animationDelay: drop.animDelay, animationDuration: drop.animDuration }} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            {forcedSeason === "spring" && (
                <div className={styles.windContainer}>
                    {WIND.map((gust) => (
                        <div
                            key={gust.id}
                            className={styles.windGust}
                            style={{
                                top: gust.top,
                                width: gust.width,
                                height: gust.thickness,
                                opacity: gust.opacity,
                                "--gust-delay": gust.delay,
                                "--gust-duration": gust.duration,
                                "--start-x": gust.startX,
                            } as React.CSSProperties}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};