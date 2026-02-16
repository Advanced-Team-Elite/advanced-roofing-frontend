"use client";
import React from 'react';
import Link from 'next/link';
import styles from './StormDamage.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

const StormDamage = () => {
    return (
        <section className={styles.stormSection}>
            <div className={styles.container}>
                {/* ENCABEZADO CON FLAIR */}
                <div className={styles.header}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={160} />
                    </div>
                    <h2 className={styles.mainTitle}>
                        Storm Damage? Full Roof Replacement May Be the Best Option
                    </h2>
                </div>

                {/* CONTENIDO PRINCIPAL */}
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        Severe weather can leave your roof with significant damage, sometimes beyond what
                        patchwork can fix. In those situations, a full roof replacement is often the best
                        way to restore protection for your home or building.
                    </p>

                    <p className={styles.paragraph}>
                        Our trained team can assess the conditions, document damage, and help you understand
                        your replacement options. We also coordinate directly with insurance adjusters to
                        support your storm claim and help streamline the process.
                    </p>

                    <h3 className={styles.subTitle}>Get a Free Roofing Estimate Today</h3>

                    <p className={styles.paragraph}>
                        If your property needs a new roof or a full replacement, Advanced Roofing Team
                        Construction is ready to help. We provide durable materials, dependable service,
                        and decades of experience installing roofs across Chicago and the Greater Chicagoland Area.
                    </p>
                </div>

                {/* BANNER AZUL FINAL */}
                <div className={styles.blueBanner}>
                    <p>
                        Call <span className={styles.whiteText}>(847) 262-9774</span> today or{' '}
                        <Link href="/contact-us/" className={styles.yellowLink}>
                            contact us online
                        </Link>{' '}
                        to schedule a service.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StormDamage;