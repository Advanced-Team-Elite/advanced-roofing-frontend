'use client';
import { useState } from 'react';
import styles from './AdvancedIsHere.module.css';
import { FlairIcon } from '@/shared/Icons/Icons';
import { IllinoisMap } from './IllinoisMap'; // El componente que creamos arriba

const countyData: Record<string, number> = {
    "Cook": 7827, "Kankakee": 1070, "DuPage": 964, "Will": 836,
    // ... resto de tus datos
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
                <div className={styles.flairBg}><FlairIcon size={160} /></div>

                <div className={styles.cardContent}>
                    <div className={styles.infoSide}>
                        {/* Tu contenido de texto igual que antes */}
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