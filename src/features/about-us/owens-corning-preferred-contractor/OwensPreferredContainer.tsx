"use client";
import React from 'react';
import SharedBanner from "@/features/about-us/SharedBanner";
import styles from '../SharedBanner.module.css';

const OwensPreferredContainer = () => {
    return (
        <div className={styles.mainWrapper}>
            {/* Usamos el SharedBanner con la ciudad visible */}
            <SharedBanner
                title="Owens Preferred Contractor"
                isCityVisible={true}
            />

            {/* Contenido principal que respira debajo de la imagen */}
            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <div style={{ padding: '60px 0', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', color: '#0056b3', marginBottom: '20px' }}>
                            Commitment to Quality Roofing
                        </h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Being an Owens Corning® Preferred Contractor isn’t just a title—it’s a commitment.
                            This status is only awarded to roofing professionals who meet strict standards
                            for professionalism, business stability, and customer service.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OwensPreferredContainer;