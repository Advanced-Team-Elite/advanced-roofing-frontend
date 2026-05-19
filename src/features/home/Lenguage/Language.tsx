"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Language.module.css';
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const languages = [
    { name: 'English', flag: '/assets/images/languages/usa.webp' },
    { name: 'Spanish', flag: '/assets/images/languages/mexico.webp' },
    { name: 'Polish', flag: '/assets/images/languages/poland.webp' },
    { name: 'Arabic', flag: '/assets/images/languages/saudi.webp' },
    { name: 'Hindi', flag: '/assets/images/languages/india.webp' },
];

export const Language = () => {
    return (
        <section className={styles.section}>
            <ScrollReveal className={styles.container} direction="left" initialOpacity={20} distance={90}>
                <h2 className={styles.title}>We speak your language</h2>

                <div className={styles.grid} >
                    {languages.map((lang, index) => (
                        <div key={index} className={styles.langItem}>
                            <div className={styles.flagWrapper}>
                                <Image
                                    src={lang.flag}
                                    alt={lang.name}
                                    width={120}
                                    height={120}
                                    className={styles.flagImg}
                                />
                            </div>
                            <span className={styles.langName}>{lang.name}</span>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};