"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './NowServing.module.css';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';

const states = [
    { id: 'wisconsin', name: 'Wisconsin', img: '/assets/images/features/serving/wisconsin.webp' },
    { id: 'indiana', name: 'Indiana', img: '/assets/images/features/serving/indiana.webp' },
    { id: 'areas-we-serve', name: 'Illinois', img: '/assets/images/features/serving/colorado.webp' },
    { id: 'michigan-up', name: 'Michigan', img: '/assets/images/features/serving/michigan.webp' },
];

export const NowServing = () => {
    const router = useRouter();
    const containerRef = useRef(null);

    // Detectamos el scroll específicamente en esta sección
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

        // ... dentro de tu componente NowServing
    // Eje X: El Truck empieza más a la derecha y los demás le siguen de cerca
    const xTruck    = useTransform(scrollYProgress, [0, 1], ["60%", "-140%"]);
    const xVan      = useTransform(scrollYProgress, [0, 1], ["100%", "-95%"]);   // +45% de diferencia
    const xBoxTruck = useTransform(scrollYProgress, [0, 1], ["140%", "-50%"]);   // +45% de diferencia
    const xCrane    = useTransform(scrollYProgress, [0, 1], ["170%", "-5%"]);    // +45% de diferencia

    // Eje Y: Mantenemos el escalonado descendente (Truck arriba -> Grúa abajo)
    // He ajustado los valores finales para que al terminar el scroll sigan alineados
    const yTruck    = useTransform(scrollYProgress, [0, 1], [0, 0]);     // Bajó significativamente
    const yVan      = useTransform(scrollYProgress, [0, 1], [25, 25]);   // Bajó para seguir al truck
    const yBoxTruck = useTransform(scrollYProgress, [0, 1], [45, 45]);   // Casi a nivel de la grúa
    const yCrane    = useTransform(scrollYProgress, [0, 1], [60, 60]);   // Se queda donde estaba

    return (
        <section className={styles.section} ref={containerRef}>
            <h2 className={styles.title}>Serving in</h2>

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

                {/* --- FLOTA ANIMADA --- */}
                <div className={styles.fleetContainer}>

                    {/* Camión Original */}
                    <motion.div style={{ x: xTruck, y: yTruck }} className={styles.vehicleWrapper}>
                        <Image
                            src="/assets/images/features/serving/advance-truck-alt.webp"
                            alt="Truck" width={1536} // Resolución real
                            height={1024}
                            quality={100} className={styles.vehicleImg}
                        />
                    </motion.div>

                    {/* Van */}
                    <motion.div style={{ x: xVan, y: yVan }} className={styles.vehicleWrapper}>
                        <Image
                            src="/assets/images/features/serving/advance-van-alt.webp"
                            alt="Van" width={1536} // Resolución real
                            height={1024}
                            quality={100} className={styles.vehicleImg}
                        />
                    </motion.div>

                    {/* Box Truck */}
                    <motion.div style={{ x: xBoxTruck, y: yBoxTruck }} className={styles.vehicleWrapper}>
                        <Image
                            src="/assets/images/features/serving/advance-box-truck-alt.webp"
                            alt="Box Truck" width={1536} // Resolución real
                            height={1024}
                            quality={100} className={styles.vehicleImg}
                        />
                    </motion.div>

                    {/* Grúa (Crane) con Banderas */}
                    <motion.div style={{ x: xCrane, y: yCrane }} className={styles.vehicleWrapper}>
                        <Image
                            src="/assets/images/features/serving/advance-crane-alt.webp"
                            alt="Crane" width={1536} // Resolución real
                            height={1024}
                            quality={100} className={styles.vehicleImg}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};