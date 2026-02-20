"use client";
import React from 'react';
import { useEffect, useState } from "react";
import styles from './ProductRecommendation.module.css';
import { getRandomReview, Review} from "@/shared/utils/getReviews";
import {
    HammerIcon,
    HouseIcon,
    InspectionIcon,
    ProfessionalIcon
} from '@/shared/Icons/Icons';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const ProductRecommendation = () => {
    const [review, setReview] = useState<Review | null>(null);

    useEffect(() => {
        // Asignamos la review aleatoria solo en el cliente
        setReview(getRandomReview());
    }, []);

    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Testimonio */}
                <div className={styles.testimonialSection}>
                    <ScrollReveal direction="left">
                        {review ? (
                            <>
                                <h2 className={styles.quote}>"{review.title}"</h2>
                                <p className={styles.author}>{review.author}</p>
                            </>
                        ) : (
                            // Placeholder para evitar saltos visuales mientras carga
                            <div className={styles.loader} />
                        )}

                        <Link href="/reviews/" className={styles.reviewsBtn}>
                            All Reviews
                        </Link>
                    </ScrollReveal>

                </div>

                {/* Lado Derecho: Características (UNA SOLA COLUMNA) */}
                <ScrollReveal direction="right" className={styles.featuresList}>

                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><HammerIcon /></div>
                        <div className={styles.featureText}>
                            <h3>Quality Products & Solutions</h3>
                            <p>We use only top-quality products and deliver lasting roofing solutions built to protect your home for years to come.</p>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><HouseIcon /></div>
                        <div className={styles.featureText}>
                            <h3>Customer Care Focused</h3>
                            <p>We put customers first, offering attentive service, clear communication, and support every step of the way.</p>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><InspectionIcon /></div>
                        <div className={styles.featureText}>
                            <h3>Free Inspections & Estimates</h3>
                            <p>We offer free estimates and inspections to help you make informed roofing decisions—no pressure, no obligation.</p>
                        </div>
                    </div>

                    <div className={styles.featureItem}>
                        <div className={styles.iconCircle}><ProfessionalIcon /></div>
                        <div className={styles.featureText}>
                            <h3>Experienced & Professional</h3>
                            <p>Experienced and professional, we deliver reliable roofing solutions with quality craftsmanship and trusted service.</p>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
};

export default ProductRecommendation;