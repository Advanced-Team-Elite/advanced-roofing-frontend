'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './RoofWindDamage.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const RoofWindDamage = () => {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <ScrollReveal direction="right">
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/roofing/content-v7.png"
                                alt="Chicago Roofing"
                                fill
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>


                {/* RIGHT */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        Roof Damage from Wind & Hail: What to Watch For
                    </h2>

                    <p className={styles.paragraph}>
                        In Greater Chicagoland, high winds and hailstorms are part of life. Even when your roof looks intact from the ground, hidden damage can compromise its strength over time. That’s why scheduling a professional inspection after severe weather is always a smart choice.
                    </p>

                    <p className={styles.textBold}>Common storm-related roof damage includes:</p>

                     <br/>

                    <ul className={styles.benefitsList}>
                        <li>Hail impacts that weaken shingles or other roofing materials</li>
                        <li>High winds that displace, lift, or damage roofing sections</li>
                        <li>Hidden structural issues that compromise your roof’s protection</li>
                    </ul>

                    <p className={styles.paragraph}>
                        When damage is minor, targeted storm damage repairs may help restore protection. But in cases of widespread or severe damage, storms can create the need for a full roof replacement to maintain reliable coverage for your home or building.
                    </p>

                </div>

            </div>
        </section>
    );
};
