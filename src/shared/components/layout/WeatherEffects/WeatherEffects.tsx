"use client";
import React, { useMemo } from "react";
import styles from "./WeatherEffects.module.css";

export const WeatherEffects = () => {
    // Generamos las propiedades de los copos una sola vez
    const flakes = useMemo(() => {
        return [...Array(50)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            fallDelay: `${Math.random() * 10}s`,
            shakeDelay: `${Math.random() * 5}s`,
            fallDuration: `${10 + Math.random() * 10}s`, // Caída entre 10s y 20s
            size: `${0.8 + Math.random() * 1.2}rem`, // Tamaños variados
            opacity: 0.3 + Math.random() * 0.7,
            content: ["❅", "❆", "❄"][Math.floor(Math.random() * 3)] // Tipo de copo aleatorio
        }));
    }, []);

    return (
        <div className={styles.snowflakes} aria-hidden="true">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className={styles.snowflake}
                    style={{
                        left: flake.left,
                        fontSize: flake.size,
                        opacity: flake.opacity,
                        "--fall-delay": flake.fallDelay,
                        "--shake-delay": flake.shakeDelay,
                        "--fall-duration": flake.fallDuration,
                    } as React.CSSProperties}
                >
                    {flake.content}
                </div>
            ))}
        </div>
    );
};