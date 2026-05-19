'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './OurProjects.module.css';
import { Clock, Home, Camera } from 'lucide-react';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const projects = [
    {
        id: 1,
        title: 'Industrial Logistics Hub',
        type: 'Commercial Flat Roof',
        size: '59,500 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/industrial-logistics.webp',
        system: 'Roofing Membrane + 5.2" Insulation',
    },
    {
        id: 2,
        title: 'Modern Family Estate',
        type: 'Residential Shingle Roof',
        size: '3,450 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/modern-family.webp',
        system: 'Timberline GAF shingle',
    },
    {
        id: 3,
        title: 'Suburban Heritage Home',
        type: 'Residential Shingle Roof',
        size: '4,222 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/projects/suburban-heritage-alt.webp',
        system: 'Timberline GAF shingle',
    },
    {
        id: 4,
        title: 'Classic Residential Villa',
        type: 'Residential Shingle Roof',
        size: '1,602 sq. ft.',
        time: '2 weeks',
        image: '/assets/images/projects/residential-villa.webp',
        system: 'Timberline GAF shingle',
    },
];

const OurProjects = () => {
    const [activeId, setActiveId] = useState<number>(2);
    // Estado para saber qué icono de qué proyecto tiene el hover
    const [hoveredIcon, setHoveredIcon] = useState<{projectId: number, iconType: string} | null>(null);

    return (
        <ScrollReveal className={styles.container} direction="right">
            <header className={styles.header}>
                <h2 className={styles.title}>Our projects</h2>
                <p className={styles.description}>
                    Explore our portfolio of completed roofing projects, showcasing quality
                    craftsmanship, durable solutions, and exceptional results across every
                    commercial property.
                </p>
            </header>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`${styles.card} ${activeId === project.id ? styles.active : ''}`}
                        onMouseEnter={() => setActiveId(project.id)}
                    >
                        <div className={styles.cardContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectMeta}>
                                {project.type} <br /> {project.size}
                            </p>
                        </div>

                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className={styles.projectImage}
                            />

                            {/* Tooltips Dinámicos según el Icono */}
                            {activeId === project.id && hoveredIcon?.projectId === project.id && (
                                <div className={styles.tooltipContainer}>
                                    {hoveredIcon.iconType === 'time' && (
                                        <div className={styles.systemBadge}>
                                            <span>Project Timeline:</span>
                                            <strong>{project.time || 'N/A'}</strong>
                                        </div>
                                    )}
                                    {hoveredIcon.iconType === 'home' && project.system && (
                                        <div className={styles.systemBadge}>
                                            <span>Roofing System Used:</span>
                                            <strong>{project.system}</strong>
                                        </div>
                                    )}
                                    {hoveredIcon.iconType === 'camera' && (
                                        <div className={styles.systemBadge}>
                                            <span>View Gallery</span>
                                            <strong>{project.title}</strong>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className={styles.iconBar}>
                                <div
                                    className={styles.iconCircle}
                                    onMouseEnter={() => setHoveredIcon({projectId: project.id, iconType: 'time'})}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                >
                                    <Clock size={16} />
                                </div>
                                <div
                                    className={styles.iconCircle}
                                    onMouseEnter={() => setHoveredIcon({projectId: project.id, iconType: 'home'})}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                >
                                    <Home size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link href="/our-services" className={styles.servicesLink}>
                <button className={styles.moreBtn}>View All Services</button>
            </Link>


        </ScrollReveal>
    );
};

export default OurProjects;