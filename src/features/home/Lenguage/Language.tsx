"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Language.module.css';
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

const languages = [
    { name: 'English', flag: '/assets/images/languages/usa.webp', message: 'Speak English? Contact Peter' },
    { name: 'Spanish', flag: '/assets/images/languages/mexico.webp', message: '¿Hablas Español? Contacta a Carlos' },
    { name: 'Polish', flag: '/assets/images/languages/poland.webp', message: 'Mówisz po polsku? Skontaktuj się z Janem' },
    { name: 'Arabic', flag: '/assets/images/languages/saudi.webp', message: 'تحدث العربية؟ اتصل بيوسف' },
    { name: 'Hindi', flag: '/assets/images/languages/india.webp', message: 'हिंदी बोलते हैं? अमित से संपर्क करें' },
    { name: 'Ukrainian', flag: '/assets/images/languages/ukraine.webp', message: 'Розмовляєте українською? Зв’яжіться з Андрієм' },
    { name: 'Russian', flag: '/assets/images/languages/russia.webp', message: 'Говорите по-русски? Свяжитесь с Дмитрием' }
];

export const Language = () => {
    return (
        <section className={styles.section}>
            <ScrollReveal className={styles.container} direction="left" initialOpacity={20} distance={90}>
                <h2 className={styles.title}>We speak your language</h2>

                <div className={styles.grid}>
                    {languages.map((lang, index) => (
                        <div key={index} className={styles.langItem}>
                            <div className={styles.flagWrapper}>
                                <Image
                                    src={lang.flag}
                                    alt={`${lang.name} language representative contact`}
                                    width={120}
                                    height={120}
                                    className={styles.flagImg}
                                    priority={index < 4}
                                />
                            </div>
                            <div className={styles.textContainer}>
                                <span className={styles.langName}>{lang.name}</span>
                                <span className={styles.hoverMessage}>{lang.message}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
};