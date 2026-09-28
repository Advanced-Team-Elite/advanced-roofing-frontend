'use client';

import Image from 'next/image';
import styles from './TankSection.module.css';
import Link from "next/link";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

export const TankSection = () => {
    return (
        <section className={styles.tankSection}>
            <div className={styles.fullWidthContainer}>

                {/* IZQUIERDA — Imagen a sangre */}
                <ScrollReveal direction="left" className={styles.imageColumnWrapper}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/home/tank_content.webp"
                                alt="Advanced Roofing truck next to military tank"
                                width={1000}
                                height={1000}
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>

                {/* DERECHA — Texto */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>At Advanced,<br />we declared war<br />on every leak.</h2>
                    <h3 className={styles.subtitle}>No leak survives. No storm wins. No excuses.</h3>

                    <p className={styles.paragraph}>
                        We bring the same relentless attitude to every job — no leak is too small,
                        no storm damage too complex. When your roof is under attack,{' '}
                        <Link href="/about-us" className={styles.highlight}>
                            Advanced Roofing Team Construction
                        </Link>{' '}
                        is your first line of defense.
                    </p>

                    <p className={styles.paragraph}>
                        Whether it's emergency storm response or a full roof replacement,
                        our team is mobilized and ready. We don't back down — and neither should your roof.
                    </p>

                    <div className={styles.ctaBanner}>
                        <p>
                            Call <strong>(877) 945-6565</strong> today or{' '}
                            <Link href="/contact-us" className={styles.yellowLink} title="Go to our contact page">
                                contact us online
                            </Link>{' '}
                            to schedule your free roof inspection with our experienced Chicago team.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};