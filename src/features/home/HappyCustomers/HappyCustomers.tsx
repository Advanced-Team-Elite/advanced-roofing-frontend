"use client";
import { useState, useEffect } from 'react';
import styles from './HappyCustomers.module.css';
import { Review, reviewsData } from "@/features/reviews/constants";
import Link from "next/link";

interface Props {
    dbReviews?: Review[];
}

const HappyCustomers = ({ dbReviews = [] }: Props) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // 1. Manejo de Resize (Limpio)
    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(window.innerWidth <= 1280 ? 1 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Mezcla de datos (Corregido para evitar bucle infinito)
    useEffect(() => {
        const TOTAL_DISPLAY = 9;

        // Calculamos cuántas reviews estáticas necesitamos
        const staticNeeded = Math.max(0, TOTAL_DISPLAY - dbReviews.length);

        // Clonamos y mezclamos solo una vez al montar o cuando dbReviews cambie de tamaño real
        const selectedStatic = [...reviewsData]
            .sort(() => 0.5 - Math.random())
            .slice(0, staticNeeded);

        const combined = [...dbReviews, ...selectedStatic]
            .slice(0, TOTAL_DISPLAY)
            .sort(() => 0.5 - Math.random());

        setReviews(combined);

        // El truco aquí es usar la longitud como disparador si dbReviews viene de un padre
        // que no usa memoización, evitando el bucle de referencia [].
    }, [dbReviews.length]);

    const maxIndex = Math.max(0, reviews.length - visibleCards);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    if (reviews.length === 0) return null;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Hear From Our Happy Customers</h2>

                <div className={styles.carouselWrapper}>
                    <div
                        className={styles.track}
                        style={{
                            width: `${(100 / visibleCards) * reviews.length}%`,
                            transform: `translateX(-${currentIndex * (100 / reviews.length)}%)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        {reviews.map((rev, idx) => (
                            <div
                                key={`${rev.id}-${idx}`}
                                className={styles.cardContainer}
                                style={{ width: `${100 / reviews.length}%` }}
                            >
                                <div className={styles.reviewCard}>
                                    <div className={styles.stars}>{"★".repeat(rev.rating)}</div>
                                    <h3 className={styles.cardTitle}>{rev.title}</h3>
                                    <p className={styles.cardText}>“{rev.review}”</p>
                                    <span className={styles.author}>- {rev.fullName}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.controlsRow}>
                    <div className={styles.arrows}>
                        <button onClick={prevSlide} className={styles.arrowBtn}>←</button>
                        <button onClick={nextSlide} className={styles.arrowBtn}>→</button>
                    </div>
                    <Link href="/reviews">
                        <button className={styles.viewAllBtn}>View All Reviews</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomers;