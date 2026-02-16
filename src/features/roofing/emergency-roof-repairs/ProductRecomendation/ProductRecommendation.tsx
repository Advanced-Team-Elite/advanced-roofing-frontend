"use client";
import React from 'react';
import styles from './ProductRecommendation.module.css';
import {
    HammerIcon,
    HouseIcon,
    InspectionIcon,
    ProfessionalIcon
} from '@/shared/Icons/Icons';

const ProductRecommendation = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>

                {/* Lado Izquierdo: Testimonio */}
                <div className={styles.testimonialSection}>
                    <h2 className={styles.quote}>"They came out quickly for an emergency roof repair, and did a great job."</h2>
                    <p className={styles.author}>Darrell T.</p>
                    <button className={styles.reviewsBtn}>All Reviews</button>
                </div>

                {/* Lado Derecho: Características (UNA SOLA COLUMNA) */}
                <div className={styles.featuresList}>

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

                </div>
            </div>
        </section>
    );
};

export default ProductRecommendation;