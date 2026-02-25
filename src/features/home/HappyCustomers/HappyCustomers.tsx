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

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) {
                setVisibleCards(1);
            } else {
                setVisibleCards(3);
            }
        };

        const TOTAL = 9;
        const staticNeeded = Math.max(0, TOTAL - dbReviews.length);
        const selectedStatic = [...reviewsData]
            .sort(() => 0.5 - Math.random())
            .slice(0, staticNeeded);

        const combined = [...dbReviews, ...selectedStatic].slice(0, TOTAL);

        const fullyShuffled = combined.sort(() => 0.5 - Math.random());

        setReviews(fullyShuffled);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [dbReviews]);

    const maxIndex = reviews.length - visibleCards;

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
                            transform: `translateX(-${currentIndex * (100 / reviews.length)}%)`
                        }}
                    >
                        {reviews.map((rev) => (
                            <div
                                key={rev.id}
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