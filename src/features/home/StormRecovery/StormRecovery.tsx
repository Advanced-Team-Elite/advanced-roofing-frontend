'use client';

import Image from 'next/image';
import styles from './StormRecovery.module.css';

export const StormRecovery = () => {
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/home/content-v15.png"
                                alt="Roofing worker repairing storm damage"
                                width={600}
                                height={500}
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                </div>

                {/* Bloque de Texto */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Storm Damage? We Help You Recover
                    </h2>

                    <div className={styles.bodyText}>
                        <p>
                            Severe weather can often cause more than surface level issues. High winds, hail,
                            and extreme conditions can lead to significant roof damage that may require
                            full replacement.
                        </p>
                        <p>
                            Our team is experienced in identifying storm impacts and helping property owners take
                            the next steps. We provide 24/7 emergency services for storm-related situations and
                            assist you through the insurance process when applicable.
                        </p>
                        <p>
                            Our trained catastrophe team knows how to document damage thoroughly, so nothing
                            gets overlooked.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};