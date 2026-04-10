import styles from './StatsBar.module.css';

const StatsBar = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container mx-auto`}>

                {/* Lado Izquierdo: Header y Botones opcionales */}
                <div className={styles.headerSide}>
                    <h2 className={styles.mainTitle}>We only provide quality.</h2>
                    <p className={styles.description}>
                        Providing top-tier roofing solutions and storm recovery with the reliability your property deserves.
                    </p>
                    <div className={styles.actions}>
                        <button className={styles.btnPrimary}>View More</button>
                    </div>
                </div>

                {/* Lado Derecho: Grid de Stats */}
                <div className={styles.gridSide}>
                    {/* Card 1 - Azul */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>20+</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Years of Experience</span>
                    </div>

                    {/* Card 2 - Amarilla */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Thousands</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Roofs Completed</span>
                    </div>

                    {/* Card 3 - Azul */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Since 2004</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Serving Property Owners</span>
                    </div>

                    {/* Card 4 - Amarilla */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Chicagoland</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Local Expertise</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StatsBar;