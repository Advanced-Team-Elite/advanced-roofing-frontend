"use client";
import React from 'react';
import Image from 'next/image';
import styles from './NowServing.module.css';
import { ScrollReveal } from "@/shared/animations/ScrollReveal";
import { useRouter } from 'next/navigation';

const states = [
    { id: 'wisconsin', name: 'Wisconsin', img: '/assets/images/features/serving/wisconsin.webp' },
    { id: 'indiana', name: 'Indiana', img: '/assets/images/features/serving/indiana.webp' },
    { id: 'colorado', name: 'Colorado', img: '/assets/images/features/serving/colorado.webp' },
    { id: 'michigan-up', name: 'Michigan', img: '/assets/images/features/serving/michigan.webp' },
];

export const NowServing = () => {
    const router = useRouter();

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Now Serving</h2>

            <div className={styles.container}>
                <div className={styles.accordion}>
                    {states.map((state) => (
                        <div
                            key={state.id}
                            className={styles.card}
                            onClick={() => router.push(`/${state.id}`)}
                        >
                            <Image
                                src={state.img}
                                alt={state.name}
                                fill
                                className={styles.image}
                                priority
                            />
                            <div className={styles.overlay}>
                                <span className={styles.stateName}>{state.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <ScrollReveal direction="right" initialOpacity={1} distance={150} className={styles.truckWrapper}>
                    <Image
                        src="/assets/images/features/serving/advance-truck.webp"
                        alt="Advanced Roofing Truck"
                        width={800}
                        height={400}
                        className={styles.truck}
                    />
                    <div className={styles.truckShadow}></div>
                </ScrollReveal>
            </div>
        </section>
    );
};