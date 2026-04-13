'use client';
import { useState } from 'react';
import styles from './AdvancedIsHere.module.css';
import { FlairIcon } from '@/shared/Icons/Icons';
import { IllinoisMap } from './IllinoisMap'; // El componente que creamos arriba

const countyData: Record<string, number> = {
    "Cook": 7827,
    "Kankakee": 1070,
    "DuPage": 964,
    "Will": 836,
    "McHenry": 602,
    "Lake": 468,
    "Livingston": 435,
    "Kane": 368,
    "Madison": 67,
    "McLean": 100,
    "Vermilion": 84,
    "Iroquois": 42,
    "Alexander": 12,
    "Pulaski": 8,
    "Massac": 15,
    "Hardin": 5,
    "Pope": 9,
    "Johnson": 18,
    "Union": 22,
    "Gallatin": 7,
    "Saline": 31,
    "Williamson": 115,
    "Jackson": 98,
    "Monroe": 54,
    "Randolph": 41,
    "Perry": 33,
    "Franklin": 76,
    "Hamilton": 14,
    "White": 19,
    "Jefferson": 102,
    "Washington": 28,
    "Clinton": 45,
    "St._Clair": 312,
    "Bond": 24,
    "Marion": 63,
    "Wayne": 16,
    "Wabash": 12,
    "Edwards": 9,
    "Lawrence": 21,
    "Richland": 26,
    "Clay": 18,
    "Jasper": 15,
    "Crawford": 22,
    "Clark": 19,
    "Cumberland": 14,
    "Effingham": 88,
    "Fayette": 31,
    "Shelby": 38,
    "Montgomery": 42,
    "Jersey": 29,
    "Macoupin": 56,
    "Calhoun": 7,
    "Greene": 18,
    "Christian": 64,
    "Coles": 92,
    "Edgar": 24,
    "Douglas": 36,
    "Moultrie": 21,
    "Macon": 184
};

export default function AdvancedIsHere() {
    const [tooltip, setTooltip] = useState({
        visible: false, x: 0, y: 0, county: '', projects: 0,
    });

    const handleMouseOver = (e: React.MouseEvent) => {
        const target = e.target as SVGPathElement;
        if (target.tagName !== 'path') return;

        const countyId = target.id;
        if (!countyId) return;

        const projects = countyData[countyId] ?? Math.floor(Math.random() * 20) + 5;

        setTooltip({
            visible: true,
            x: e.clientX,
            y: e.clientY,
            county: countyId.replace(/_/g, ' '),
            projects,
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (tooltip.visible) {
            setTooltip(prev => ({ ...prev, x: e.clientX, y: e.clientY }));
        }
    };

    return (
        <section className={styles.outerContainer}>
            <div className={styles.mapCard}>
                <div className={styles.flairBg}>
                    <FlairIcon size={2000} />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.infoSide}>
                        <div className={styles.searchContainer}>
                            <input type="text" placeholder="Search your location" className={styles.mapSearch} />
                            <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>

                        <div className={styles.textContent}>
                            <p className={styles.label}>Counties</p>
                            <h2 className={styles.title}>
                                ADVANCED <br /><span className={styles.highlight}>IS HERE</span>
                            </h2>
                            <p className={styles.description}>
                                From multiple counties to entire regions, our presence reflects where we’ve delivered results—bringing precision, reliability, and <strong>proven roofing solutions to every project we take on.</strong>
                            </p>
                        </div>
                    </div>

                    <div
                        className={styles.mapSide}
                        onMouseOver={handleMouseOver}
                        onMouseMove={handleMouseMove}
                        onMouseOut={() => setTooltip(prev => ({ ...prev, visible: false }))}
                    >
                        {/* Inyectamos el SVG como componente para que el CSS de abajo funcione */}
                        <div className={styles.mapWrapper}>
                            <IllinoisMap className={styles.svgMap} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tu Tooltip estilizado */}
            {tooltip.visible && (
                <div
                    className={styles.tooltip}
                    style={{
                        top: tooltip.y - 80,
                        left: tooltip.x + 20,
                        position: 'fixed' // Importante para que siga al mouse
                    }}
                >
                    <div className={styles.tooltipNumber}>{tooltip.projects.toLocaleString()}</div>
                    <div className={styles.tooltipLabel}>Projects in {tooltip.county}</div>
                </div>
            )}
        </section>
    );
}