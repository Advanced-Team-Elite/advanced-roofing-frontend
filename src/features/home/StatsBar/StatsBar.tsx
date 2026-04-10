import styles from './StatsBar.module.css';

const StatsBar = () => {
    return (
        <section className={styles.section}>
            <div className="container mx-auto">
                <h2 className={styles.mainTitle}>Our Impact</h2>

                <div className={styles.grid}>
                    {/* Card 1 - Azul */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>
                            20+
                        </span>
                        <span className={`${styles.label} ${styles.labelLight}`}>
                            Years of Experience
                        </span>
                    </div>

                    {/* Card 2 - Amarilla */}
                    <div className={`${styles.card} ${styles.cardYellow}`}>
                        <span className={`${styles.value} ${styles.valueDark}`}>
                            Thousands
                        </span>
                        <span className={`${styles.label} ${styles.labelDark}`}>
                            Roofs Completed
                        </span>
                    </div>

                    {/* Card 3 - Azul */}
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>
                            Since 2004
                        </span>
                        <span className={`${styles.label} ${styles.labelLight}`}>
                            Serving Property Owners
                        </span>
                    </div>

                    {/* Card 4 - Amarilla */}
                    <div className={`${styles.card} ${styles.cardYellow}`}>
                        <span className={`${styles.value} ${styles.valueDark}`}>
                            Chicagoland
                        </span>
                        <span className={`${styles.label} ${styles.labelDark}`}>
                            Local Expertise
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsBar;