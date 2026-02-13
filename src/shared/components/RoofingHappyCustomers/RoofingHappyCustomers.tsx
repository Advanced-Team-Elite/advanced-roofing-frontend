import { useState } from 'react';
import styles from './RoofingHappyCustomers.module.css';
import Link from "next/link";

const RoofingHappyCustomers = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            title: "They came out quickly for an emergency roof repair, and did a great job.",
            text: "We have used them in the past for larger projects, and have always been pleased.",
            author: "Darrell T."
        },
        {
            title: "Would definitely recommend them.",
            text: "They finished the work in one day, and the new roof looks great!",
            author: "Melinda T."
        },
        {
            title: "Can't thank you enough!",
            text: "Peter helped me through the whole process and was able to replace my entire roof!",
            author: "Yawar K."
        },
        {
            title: "Very quick at getting back to you and very quick with results!",
            text: "I have already recommended Peter to multiple friends, and they have all been highly satisfied.",
            author: "David"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 === reviews.length ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.mainLayout}>
                    {/* Contenedor del Carrusel */}
                    <div className={styles.carouselContainer}>
                        <div className={styles.carouselWrapper}>
                            <div
                                className={styles.track}
                                style={{ transform: `translateX(-${currentIndex * (100 / reviews.length)}%)` }}
                            >
                                {reviews.map((rev, idx) => (
                                    <div key={idx} className={styles.cardContainer}>
                                        <div className={styles.reviewCard}>
                                            <div className={styles.stars}>★★★★★</div>
                                            <h3 className={styles.cardTitle}>{rev.title}</h3>
                                            <p className={styles.cardText}>“{rev.text}”</p>
                                            <span className={styles.author}>- {rev.author}</span>
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
                            <Link href="/reviews" className={styles.servicesLink}>
                                <button className={styles.viewAllBtn}>View All Reviews</button>
                            </Link>
                        </div>
                    </div>

                    {/* Imagen lateral solo visible en Desktop */}
                    <div className={styles.imageColumn}>
                        <img
                            src="/assets/images/features/about-us/content-v12.png"
                            alt="Happy Customer"
                            className={styles.sideImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofingHappyCustomers;