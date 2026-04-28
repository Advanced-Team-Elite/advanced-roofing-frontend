"use client";

import React, { useMemo, useEffect, useState } from "react";
import styles from "./WeatherEffects.module.css";

type Season = "winter" | "summer" | "fall" | "spring" | null;

export const WeatherEffects = () => {
    const [season, setSeason] = useState<Season>(null);

    useEffect(() => {
        const month = new Date().getMonth();
        if ([11, 0, 1].includes(month)) setSeason("winter");
        else if ([5, 6, 7].includes(month)) setSeason("summer");
        else if ([8, 9, 10].includes(month)) setSeason("fall");
        else setSeason("spring");

        // Forzar para probar:
         setSeason("spring");
    }, []);

    /*useEffect(() => {
        const seasons: Season[] = ["winter", "summer", "fall", "spring"];

        // Función para cambiar clima
        const changeWeather = () => {
            setSeason(prev => {
                // Opcional: Evitar que salga la misma estación dos veces seguidas
                const otherSeasons = seasons.filter(s => s !== prev);
                return otherSeasons[Math.floor(Math.random() * otherSeasons.length)];
            });
        };

        // Cambiar inmediatamente al montar
        changeWeather();

        // Configurar intervalo (ejemplo: cada 15 segundos)
        const interval = setInterval(changeWeather, 5000);

        // Limpiar intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);*/

    // GRANIZO (winter) - partículas pequeñas que caen rápido
    const hailstones = useMemo(() => {
        return [...Array(5)].map((_, i) => ({ // Reducimos cantidad
            id: i,
            left: `${Math.random() * 120}%`,
            fallDelay: `${Math.random() * -5}s`, // Delay negativo para que empiece "vivo"
            // Caída veloz (duración corta)
            fallDuration: `${0.8 + Math.random() * 0.6}s`,
            // 🔥 Mucho más grandes (esféricos)
            size: `${18 + Math.random() * 12}px`,
            opacity: 0.8 + Math.random() * 0.2,
            // Eliminamos el ángulo de inclinación, caen recto
        }));
    }, []);

    // VIENTO (spring) - ráfagas horizontales
    const windGusts = useMemo(() => {
        return [...Array(18)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 4}s`,
            width: `${200 + Math.random() * 300}px`,       // más largo
            opacity: 0.12 + Math.random() * 0.18,
            duration: `${2.5 + Math.random() * 2}s`,
            thickness: `${4 + Math.random() * 8}px`,       // más grueso
            startX: `-${150 + Math.random() * 100}px`,
        }));
    }, []);

    // LLUVIA (fall) - gotas finas y densas
    const raindrops = useMemo(() => {
        const drops = [];
        let increment = 0;
        while (increment < 100) {
            const randoHundo = Math.floor(Math.random() * 97 + 1);
            const randoFiver = Math.floor(Math.random() * 3 + 2);
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
    }, []);

    if (!season) return null;

    return (
        <div className={styles.container} aria-hidden="true">

            {/* INVIERNO - GRANIZO */}
            {season === "winter" && (
                <div className={styles.hailContainer}>
                    {hailstones.map((stone) => (
                        <div
                            key={stone.id}
                            className={styles.hailstone}
                            style={{
                                left: stone.left,
                                width: stone.size,
                                height: stone.size, // Ancho = Alto → Perfectamente Redondo
                                opacity: stone.opacity,
                                "--fall-delay": stone.fallDelay,
                                "--fall-duration": stone.fallDuration,
                            } as React.CSSProperties}
                        >
                            {/* 🔥 NUEVO: Efecto de explosión/Splat */}
                            <div className={styles.hailSplat} />  {/* 👈 renombrado */}
                        </div>
                    ))}
                </div>
            )}

            {/* VERANO - SOL (sin cambios) */}
            {season === "summer" && (
                <div className={styles.sunContainer}>
                    <div className={styles.sun}>
                        <div className={styles.rayBox}>
                            <div className={`${styles.ray} ${styles.ray1}`}></div>
                            <div className={`${styles.ray} ${styles.ray2}`}></div>
                            <div className={`${styles.ray} ${styles.ray3}`}></div>
                            <div className={`${styles.ray} ${styles.ray4}`}></div>
                            <div className={`${styles.ray} ${styles.ray5}`}></div>
                            <div className={`${styles.ray} ${styles.ray6}`}></div>
                            <div className={`${styles.ray} ${styles.ray7}`}></div>
                            <div className={`${styles.ray} ${styles.ray8}`}></div>
                            <div className={`${styles.ray} ${styles.ray9}`}></div>
                            <div className={`${styles.ray} ${styles.ray10}`}></div>
                        </div>
                    </div>
                </div>
            )}

            {/* OTOÑO - LLUVIA */}
            {season === "fall" && (
                <div className={styles.rainContainer}>
                    <div className={styles.rainFront}>
                        {raindrops.map((drop) => (
                            <div
                                key={drop.id}
                                className={styles.drop}
                                style={{
                                    left: drop.left,
                                    bottom: drop.bottom,
                                    animationDelay: drop.animDelay,
                                    animationDuration: drop.animDuration,
                                }}
                            >
                                <div
                                    className={styles.stem}
                                    style={{
                                        animationDelay: drop.animDelay,
                                        animationDuration: drop.animDuration,
                                    }}
                                />
                                <div
                                    className={styles.splat}
                                    style={{
                                        animationDelay: drop.animDelay,
                                        animationDuration: drop.animDuration,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.rainBack}>
                        {raindrops.map((drop) => (
                            <div
                                key={drop.id}
                                className={styles.drop}
                                style={{
                                    right: drop.left,
                                    bottom: drop.bottom,
                                    animationDelay: drop.animDelay,
                                    animationDuration: drop.animDuration,
                                }}
                            >
                                <div
                                    className={styles.stem}
                                    style={{
                                        animationDelay: drop.animDelay,
                                        animationDuration: drop.animDuration,
                                    }}
                                />
                                <div
                                    className={styles.splat}
                                    style={{
                                        animationDelay: drop.animDelay,
                                        animationDuration: drop.animDuration,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* PRIMAVERA - VIENTO */}
            {season === "spring" && (
                <div className={styles.windContainer}>
                    {windGusts.map((gust) => (
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