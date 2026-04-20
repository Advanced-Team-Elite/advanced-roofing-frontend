'use client';
import React, { useState } from 'react';
import styles from './StormDamageCheck.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const damageOptions = [
    { id: 'shingles', label: 'Missing or lifted shingles' },
    { id: 'hail', label: 'Hail impact marks' },
    { id: 'granule', label: 'Granule loss' },
    { id: 'leaks', label: 'Leaks stains inside' },
    { id: 'flashing', label: 'Damaged flashing' },
];

const StormDamageCheck = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const toggleOption = (id: string) => {
        setSelectedOptions((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const isButtonEnabled = selectedOptions.length > 0;

    return (

        <ScrollReveal className={styles.mainContainer} direction="zoom">
            <div className={styles.contentWrapper}>
                {/* Lado Izquierdo: Textos */}
                <div className={styles.textSide}>
                    <p className={styles.toolLabel}>Storm Damage Checker</p>
                    <h2 className={styles.title}>
                        Think you might <br /> have storm <br /> damage?
                    </h2>
                    <p className={styles.description}>
                        Not all storm damage is obvious right away. Check these 5 common
                        signs to spot issues before they turn into costly repairs.
                    </p>
                </div>

                {/* Lado Derecho: Interactivo */}
                <div className={styles.interactiveSide}>
                    <div className={styles.optionsGrid}>
                        {damageOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`${styles.optionItem} ${selectedOptions.includes(option.id) ? styles.active : ''}`}
                                onClick={() => toggleOption(option.id)}
                            >
                                <div className={styles.checkboxCircle}>
                                    {selectedOptions.includes(option.id) && <div className={styles.innerDot} />}
                                </div>
                                <span className={styles.optionLabel}>{option.label}</span>
                            </div>
                        ))}

                        <div className={styles.ctaWrapper}>
                            {/* Redirige a la página completa de contacto */}
                            <Link href="/contact-us" className={styles.linkWrapper}>
                                <button
                                    className={`${styles.contactBtn} ${isButtonEnabled ? styles.enabled : styles.disabled}`}
                                    disabled={!isButtonEnabled}
                                >
                                    Report Damage
                                </button>
                            </Link>

                            {/* Vía de escape: Scroll suave al formulario en la misma página */}
                            <div className={styles.notSureWrapper}>
                                <p>
                                    Not sure? {" "}
                                    <button
                                        className={styles.linkBtn}
                                        onClick={() => {
                                            const formElement = document.getElementById('contact-form-section');
                                            formElement?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Schedule a free inspection
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default StormDamageCheck;