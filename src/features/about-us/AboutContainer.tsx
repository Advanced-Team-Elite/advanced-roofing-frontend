"use client";
import SharedBanner from "./SharedBanner";
import styles from './SharedBanner.module.css';

const AboutContainer = () => {
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

                    <div className={styles.aboutContent}>
                        {/* Aquí puedes empezar a maquetar las secciones de texto */}
                        <h2 className={styles.subTitle}>Committed to Excellence</h2>
                        <p className={styles.description}>
                            As an Owens Preferred Contractor, we maintain the highest standards in the roofing industry...
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutContainer;