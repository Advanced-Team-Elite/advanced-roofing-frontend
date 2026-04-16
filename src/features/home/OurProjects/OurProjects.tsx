'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './OurProjects.module.css';
import { Clock, Home, Camera } from 'lucide-react';
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: 'Lakeside Distribution Center',
        type: 'Warehouse',
        size: '85,000 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/slider/roof1-after.png',
        system: 'EPDM Roofing System',
    },
    {
        id: 2,
        title: 'Northview Corporate Plaza',
        type: 'Office Building',
        size: '52,000 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/slider/roof2-before.png',
        system: 'EPDM Roofing System',
    },
    {
        id: 3,
        title: 'Riverpoint Retail Center',
        type: 'Retail Complex',
        size: '40,500 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/slider/roof3-after.png',
        system: 'EPDM Roofing System',
    },
    {
        id: 4,
        title: 'Oakridge Multifamily Residences',
        type: 'Residential Complex',
        size: '68,000 sq. ft.',
        time: '3 weeks',
        image: '/assets/images/slider/roof1-before.png',
        system: 'EPDM Roofing System',
    },
];

const OurProjects = () => {
    const [activeId, setActiveId] = useState<number>(2);
    // Estado para saber qué icono de qué proyecto tiene el hover
    const [hoveredIcon, setHoveredIcon] = useState<{projectId: number, iconType: string} | null>(null);

    return (
        <section className={styles.container}>
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
                <button className={styles.moreBtn}>View All Projects</button>
            </Link>


        </section>
    );
};

export default OurProjects;