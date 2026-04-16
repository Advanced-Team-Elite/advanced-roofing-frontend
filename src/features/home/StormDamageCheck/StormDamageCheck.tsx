'use client';
import React, { useState } from 'react';
import styles from './StormDamageCheck.module.css';

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
        <section className={styles.mainContainer}>
            <div className={styles.contentWrapper}>
                {/* Lado Izquierdo: Textos alineados a la derecha (hacia el centro) */}
                <div className={styles.textSide}>
                    <h2 className={styles.title}>
                        You Might <br /> Have Storm <br /> Damage?
                    </h2>
                    <p className={styles.description}>
                        Not all storm damage is obvious right away. Use this quick visual check
                        to spot common warning signs before small issues turn into costly repairs.
                    </p>
                </div>

                {/* Lado Derecho: Checklist alineado a la izquierda (hacia el centro) */}
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
                        <button
                            className={`${styles.contactBtn} ${isButtonEnabled ? styles.enabled : styles.disabled}`}
                            disabled={!isButtonEnabled}
                        >
                            Contact Us
                        </button>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default StormDamageCheck;