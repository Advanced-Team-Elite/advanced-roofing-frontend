'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './OurProjects.module.css';
import { Clock, Home } from 'lucide-react';
import Link from "next/link";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

const projects = [
    { id: 1, title: 'Industrial Logistics Hub',      type: 'Commercial Flat Roof',    size: '59,500 sq. ft.', time: '3 weeks', image: '/assets/images/projects/industrial-logistics.webp',                        system: 'Roofing Membrane + 5.2" Insulation' },
    { id: 2, title: 'Modern Family Estate',          type: 'Residential Shingle Roof', size: '3,450 sq. ft.',  time: '3 weeks', image: '/assets/images/projects/modern-family.webp',                              system: 'Timberline GAF shingle' },
    { id: 3, title: 'Suburban Heritage Home',        type: 'Residential Shingle Roof', size: '4,222 sq. ft.',  time: '3 weeks', image: '/assets/images/projects/suburban-heritage-alt.webp',                      system: 'Timberline GAF shingle' },
    { id: 4, title: 'Classic Residential Villa',     type: 'Residential Shingle Roof', size: '1,602 sq. ft.',  time: '2 weeks', image: '/assets/images/projects/residential-villa.webp',                          system: 'Timberline GAF shingle' },
    { id: 5, title: 'Classic Suburban Ranch',        type: 'Residential Shingle Roof', size: '2,800 sq. ft.',  time: '2 weeks', image: '/assets/images/projects/2c6e3db0-709a-46cb-8e9f-0a6180d5c8ee.jpg',        system: 'Timberline GAF shingle' },
    { id: 6, title: 'Historic Village Home',         type: 'Residential Shingle Roof', size: '2,150 sq. ft.',  time: '2 weeks', image: '/assets/images/projects/faf544b3-307f-473f-b8e5-5e6fc2dbdb66.jpg',        system: 'Timberline GAF shingle' },
    { id: 7, title: 'Contemporary Brick Residence',  type: 'Residential Shingle Roof', size: '3,200 sq. ft.',  time: '3 weeks', image: '/assets/images/projects/4d76dd46-2c88-4a8b-bc42-c872077b00ae.jpg',        system: 'Timberline GAF shingle' },
];

// Cuántas cards se ven al mismo tiempo según breakpoint
const getVisible = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth <= 768)  return 1;
    if (window.innerWidth <= 1280) return 2;
    return 4;
};

const GAP = 20; // px — debe coincidir con el gap del CSS

const OurProjects = () => {
    const [baseIndex, setBaseIndex]         = useState(0);
    const [offset, setOffset]               = useState(0);          // px que se mueve el track
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isDragging, setIsDragging]       = useState(false);
    const [dragStart, setDragStart]         = useState(0);
    const [dragDelta, setDragDelta]         = useState(0);
    const [activeId, setActiveId]           = useState(projects[0].id);
    const [hoveredIcon, setHoveredIcon]     = useState<{ projectId: number; iconType: string } | null>(null);
    const [cardWidth, setCardWidth]         = useState(0);  // ancho real de 1 card en px
    const [visible, setVisible]             = useState(4);  // cards visibles

    const viewportRef  = useRef<HTMLDivElement>(null);
    const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null);

    // ── Calcular ancho real de card ──────────────────────────
    const measureCard = useCallback(() => {
        if (!viewportRef.current) return;
        const vis  = getVisible();
        const total = viewportRef.current.offsetWidth;
        // ancho de 1 card = (total del viewport - gaps entre cards visibles) / visible
        const w = (total - GAP * (vis - 1)) / vis;
        setCardWidth(w);
        setVisible(vis);
    }, []);

    useEffect(() => {
        measureCard();
        window.addEventListener('resize', measureCard);
        return () => window.removeEventListener('resize', measureCard);
    }, [measureCard]);

    // ── Slide ────────────────────────────────────────────────
    const slideNext = useCallback(() => {
        if (isTransitioning || cardWidth === 0) return;
        setIsTransitioning(true);

        // Mover el track 1 card + 1 gap a la izquierda
        setOffset(-(cardWidth + GAP));

        setTimeout(() => {
            // Rotar index y resetear offset sin transición
            setBaseIndex(prev => (prev + 1) % projects.length);
            setOffset(0);
            setIsTransitioning(false);
        }, 520);
    }, [isTransitioning, cardWidth]);

    // ── Autoplay ─────────────────────────────────────────────
    const startInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(slideNext, 3500);
    }, [slideNext]);

    useEffect(() => {
        startInterval();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [startInterval]);

    // ── Sync activeId ────────────────────────────────────────
    useEffect(() => {
        setActiveId(projects[baseIndex].id);
    }, [baseIndex]);

    // ── Cards renderizadas: visible + 1 (la que entra) ──────
    const visibleProjects = Array.from({ length: visible + 1 }, (_, i) =>
        projects[(baseIndex + i) % projects.length]
    );

    // ── Drag / Touch ─────────────────────────────────────────
    const onDragStart = (clientX: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsDragging(true);
        setDragStart(clientX);
    };
    const onDragMove = (clientX: number) => {
        if (!isDragging) return;
        setDragDelta(clientX - dragStart);
    };
    const onDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (dragDelta < -60) slideNext();
        setDragDelta(0);
        startInterval();
    };

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

            <div
                ref={viewportRef}
                className={styles.carouselViewport}
                onMouseDown={e => onDragStart(e.clientX)}
                onMouseMove={e => onDragMove(e.clientX)}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                onTouchStart={e => onDragStart(e.touches[0].clientX)}
                onTouchMove={e => onDragMove(e.touches[0].clientX)}
                onTouchEnd={onDragEnd}
            >
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(calc(${offset}px + ${dragDelta}px))`,
                        transition: isTransitioning
                            ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                            : 'none',
                        cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                >
                    {visibleProjects.map((project, i) => (
                        <div
                            key={`${project.id}-${i}`}
                            className={`${styles.card} ${activeId === project.id ? styles.active : ''}`}
                            style={{
                                // Ancho exacto calculado en JS → la card extra queda FUERA del viewport
                                flex: cardWidth > 0 ? `0 0 ${cardWidth}px` : undefined,
                            }}
                            onMouseEnter={() => {
                                setActiveId(project.id);
                                if (intervalRef.current) clearInterval(intervalRef.current);
                            }}
                            onMouseLeave={() => startInterval()}
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
                                    draggable={false}
                                />

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
                                    </div>
                                )}

                                <div className={styles.iconBar}>
                                    <div
                                        className={styles.iconCircle}
                                        onMouseEnter={() => setHoveredIcon({ projectId: project.id, iconType: 'time' })}
                                        onMouseLeave={() => setHoveredIcon(null)}
                                    >
                                        <Clock size={16} />
                                    </div>
                                    <div
                                        className={styles.iconCircle}
                                        onMouseEnter={() => setHoveredIcon({ projectId: project.id, iconType: 'home' })}
                                        onMouseLeave={() => setHoveredIcon(null)}
                                    >
                                        <Home size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
                {projects.map((_, i) => (
                    <button
                        key={i}
                        className={`${styles.dot} ${i === baseIndex ? styles.dotActive : ''}`}
                        onClick={() => {
                            if (isTransitioning) return;
                            setBaseIndex(i);
                            setActiveId(projects[i].id);
                            startInterval();
                        }}
                        aria-label={`Go to project ${i + 1}`}
                    />
                ))}
            </div>

            <Link href="/our-services" className={styles.servicesLink}>
                <button className={styles.moreBtn}>View All Services</button>
            </Link>
        </ScrollReveal>
    );
};

export default OurProjects;