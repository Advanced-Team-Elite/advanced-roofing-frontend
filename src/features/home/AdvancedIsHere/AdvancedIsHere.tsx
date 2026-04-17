'use client';
import { useState } from 'react';
import styles from './AdvancedIsHere.module.css';
import { FlairIcon } from '@/shared/Icons/Icons';
import { IllinoisMap } from './IllinoisMap';

interface Office {
    city: string;
    county: string;
    // Coordenadas estimadas en el viewBox "0 0 42 76" del SVG de Illinois
    pinX: number;
    pinY: number;
}

interface CountyData {
    county: string;   // debe coincidir exactamente con el id del path SVG
    label: string;    // nombre legible
    cities: string[];
}

export const COUNTIES_DATA: CountyData[] = [
    {
        county: "Cook",
        label: "Cook County",
        cities: ["Calumet City", "Chicago", "Evanston"],
    },
    {
        county: "DuPage",
        label: "DuPage County",
        cities: ["Naperville"],
    },
    {
        county: "Will",
        label: "Will County",
        cities: ["Naperville"],
    },
    {
        county: "Lake",
        label: "Lake County",
        cities: ["Hammond", "Gurnee"],
    },
    {
        county: "DeKalb",
        label: "DeKalb County",
        cities: ["DeKalb"],
    },
    {
        county: "Winnebago",
        label: "Winnebago County",
        cities: ["Rockford"],
    },
    {
        county: "Champaign",
        label: "Champaign County",
        cities: ["Champaign"],
    },
    {
        county: "Livingston",
        label: "Livingston County",
        cities: ["Pontiac"],
    },
];

// Set de IDs de counties activos para pasarle al SVG
export const ACTIVE_COUNTY_IDS = new Set(COUNTIES_DATA.map(c => c.county));

// Pins estimados en el viewBox "0 0 42 76"
// Illinois ocupa aprox x: 18-42, y: 0-76
const OFFICES: Office[] = [
    { city: "Chicago",      county: "Cook",       pinX: 36.8, pinY: 9.2  },
    { city: "Evanston",     county: "Cook",       pinX: 36.5, pinY: 7.8  },
    { city: "Calumet City", county: "Cook",       pinX: 36.2, pinY: 11.0 },
    { city: "Naperville",   county: "DuPage",     pinX: 34.0, pinY: 11.2 },
    { city: "Naperville",   county: "Will",       pinX: 35.2, pinY: 15.2 },
    { city: "Hammond",      county: "Lake",       pinX: 36.8, pinY: 6.2  },
    { city: "Gurnee",       county: "Lake",       pinX: 35.8, pinY: 4.5  },
    { city: "DeKalb",       county: "DeKalb",     pinX: 28.3, pinY: 10.2 },
    { city: "Rockford",     county: "Winnebago",  pinX: 25.2, pinY: 4.8  },
    { city: "Champaign",    county: "Champaign",  pinX: 33.2, pinY: 33.0 },
    { city: "Pontiac",      county: "Livingston", pinX: 30.8, pinY: 23.5 },
];

export default function AdvancedIsHere() {
    const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
    const [pinTooltip, setPinTooltip] = useState<{
        visible: boolean; x: number; y: number; city: string; county: string;
    }>({ visible: false, x: 0, y: 0, city: '', county: '' });

    const selectedData = COUNTIES_DATA.find(c => c.county === selectedCounty) ?? null;

    // Pins visibles: solo los del county seleccionado
    const visiblePins = selectedCounty
        ? OFFICES.filter(o => o.county === selectedCounty)
        : [];

    const handleCountyClick = (countyId: string) => {
        setSelectedCounty(prev => prev === countyId ? null : countyId);
    };

    return (
        <section className={styles.outerContainer}>
            <div className={styles.mapCard}>
                <div className={styles.flairBg}>
                    <FlairIcon size={2100} />
                </div>

                <div className={styles.cardContent}>
                    {/* LADO IZQUIERDO */}
                    <div className={styles.infoSide}>
                        <div className={styles.textContent}>
                            <p className={styles.label}>Our Offices</p>
                            <h2 className={styles.title}>
                                Advanced <br /><span className={styles.highlight}>Is Here</span>
                            </h2>
                            <p className={styles.description}>
                                From multiple counties to entire regions, our presence reflects where we've delivered results—bringing precision, reliability, and{' '}
                                <strong>proven roofing solutions to every project we take on.</strong>
                            </p>
                        </div>

                        {/* Reemplaza el <ul className={styles.countyList}> completo por esto */}
                        <div className={styles.accordion}>
                            <div className={styles.accordionLabel}>Our Offices</div>
                            {COUNTIES_DATA.map(({ county, label, cities }) => (
                                <div key={county} className={styles.accordionItem}>
                                    <button
                                        className={`${styles.accordionHeader} ${selectedCounty === county ? styles.accordionHeaderActive : ''}`}
                                        onClick={() => handleCountyClick(county)}
                                    >
                                        <span className={styles.accordionDot} />
                                        <span className={styles.accordionName}>{label}</span>
                                        <svg
                                            className={`${styles.accordionChevron} ${selectedCounty === county ? styles.accordionChevronOpen : ''}`}
                                            width="14" height="14" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2.5"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    {selectedCounty === county && (
                                        <div className={styles.accordionBody}>
                                            {cities.map(c => (
                                                <span key={c} className={styles.accordionCity}>
                            <span className={styles.accordionCityDot} />
                                                    {c}
                        </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LADO DERECHO — MAPA */}
                    <div className={styles.mapSide}>
                        <div className={styles.mapWrapper}>
                            {/* SVG del mapa */}
                            <div className={styles.mapRelative}>
                                <IllinoisMap
                                    className={styles.svgMap}
                                    activeId={selectedCounty}
                                    highlightedIds={ACTIVE_COUNTY_IDS}
                                    onCountyClick={handleCountyClick}
                                />

                                {/* Pins superpuestos usando SVG overlay */}
                                <svg
                                    className={styles.pinOverlay}
                                    viewBox="0 0 42 76"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    {visiblePins.map((pin, i) => (
                                        <g
                                            key={`${pin.city}-${i}`}
                                            transform={`translate(${pin.pinX}, ${pin.pinY})`}
                                            className={styles.pinGroup}
                                            onMouseEnter={(e) => setPinTooltip({ visible: true, x: e.clientX, y: e.clientY, city: pin.city, county: pin.county })}
                                            onMouseLeave={() => setPinTooltip(prev => ({ ...prev, visible: false }))}
                                            onMouseMove={(e) => setPinTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }))}
                                        >
                                            <path
                                                d="M 0,-1.2 C -0.6,-1.2 -0.9,-0.7 -0.9,-0.2 C -0.9,0.5 0,1.3 0,1.3 C 0,1.3 0.9,0.5 0.9,-0.2 C 0.9,-0.7 0.6,-1.2 0,-1.2 Z"
                                                fill="#f5a623"
                                            />
                                            <circle cx="0" cy="-0.2" r="0.32" fill="#00589e" />
                                        </g>
                                    ))}
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tooltip de pins */}
            {pinTooltip.visible && (
                <div
                    className={styles.pinTooltip}
                    style={{ top: pinTooltip.y - 70, left: pinTooltip.x + 16, position: 'fixed' }}
                >
                    <div className={styles.pinTooltipCity}>{pinTooltip.city}</div>
                    <div className={styles.pinTooltipCounty}>{pinTooltip.county} County</div>
                </div>
            )}
        </section>
    );
}