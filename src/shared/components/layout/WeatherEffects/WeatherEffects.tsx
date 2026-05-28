"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./WeatherEffects.module.css";

type Season = "winter" | "summer" | "fall" | "spring";

interface Props {
    forcedSeason: Season;
}

// ✅ Generador estático de Partículas de Granizo
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

// ✅ Ráfagas de viento mejoradas (Más visibles, más opacas y con inclinación)
function generateWind(seed: number, count: number) {
    const rng = (i: number) => ((Math.sin(seed + i * 1.7) * 43758.5453) % 1 + 1) % 1;
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        top: `${rng(i) * 100}%`,
        width: `${400 + rng(i + 1) * 400}px`, // Ráfagas mucho más largas
        thickness: `${6 + rng(i + 2) * 10}px`, // Líneas más gruesas
        opacity: 0.25 + rng(i + 3) * 0.35,     // Incrementamos opacidad
        delay: `${rng(i + 4) * 6}s`,
        duration: `${1.5 + rng(i + 5) * 2}s`,  // Más veloces para simular ráfagas fuertes
        startX: `${-600 + rng(i + 6) * 100}px`,
        skewY: `${-5 + rng(i + 7) * 10}deg`,   // Inclinación variable del viento
    }));
}

// ✅ NUEVO: Generador estático de hojas físicas para el viento de Primavera
function generateLeaves(seed: number, count: number) {
    const rng = (i: number) => ((Math.sin(seed + i * 3.1) * 43758.5453) % 1 + 1) % 1;
    return Array.from({ length: count }, (_, i) => {
        // Alternamos entre la hoja izquierda y derecha que tienes en el proyecto
        const leafSide = rng(i) > 0.5 ? "left" : "right";
        return {
            id: i,
            side: leafSide,
            top: `${10 + rng(i + 1) * 80}%`,       // Distribuido verticalmente
            size: `${24 + rng(i + 2) * 20}px`,     // Tamaños variados (proporción física)
            delay: `${rng(i + 3) * 7}s`,           // Delay escalonado
            duration: `${2.5 + rng(i + 4) * 3}s`,  // Velocidad de arrastre
            rotateStart: `${rng(i + 5) * 360}deg`, // Ángulo inicial único
            swayIntensity: `${15 + rng(i + 6) * 25}px` // Qué tanto cabecea de arriba a abajo
        };
    });
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

// ✅ Inicialización estática única en memoria
const HAIL = generateParticles(42, 5);
const WIND = generateWind(99, 15);
const LEAVES = generateLeaves(1337, 12); // Creamos 12 hojas voladoras
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
                    {/* Render de las Ráfagas de Viento */}
                    {WIND.map((gust) => (
                        <div
                            key={gust.id}
                            className={styles.windGust}
                            style={{
                                top: gust.top,
                                width: gust.width,
                                height: gust.thickness,
                                opacity: gust.opacity,
                                transform: `skewY(${gust.skewY})`,
                                "--gust-delay": gust.delay,
                                "--gust-duration": gust.duration,
                                "--start-x": gust.startX,
                            } as React.CSSProperties}
                        />
                    ))}

                    {/* Render Dinámico de Hojas Voladoras */}
                    {LEAVES.map((leaf) => (
                        <div
                            key={leaf.id}
                            className={styles.leafWrapper}
                            style={{
                                top: leaf.top,
                                width: leaf.size,
                                height: leaf.size,
                                "--leaf-delay": leaf.delay,
                                "--leaf-duration": leaf.duration,
                                "--sway-amount": leaf.swayIntensity,
                            } as React.CSSProperties}
                        >
                            <div
                                className={styles.leaf3D}
                                style={{
                                    transform: `rotateZ(${leaf.rotateStart})`,
                                }}
                            >
                                <Image
                                    src={`/assets/images/features/home/leave-${leaf.side}.webp`}
                                    alt="Flying leaf"
                                    width={100}
                                    height={100}
                                    className={styles.leafImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};