import styles from './StatsBar.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const StatsBar = () => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container mx-auto`}>

                {/* Lado Izquierdo: Header y Botones */}
                <div className={styles.headerSide}>
                    <h2 className={styles.mainTitle}>We only provide quality.</h2>
                    <p className={styles.description}>
                        Providing top-tier roofing solutions and storm recovery with the reliability your property deserves.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/our-services" className={styles.servicesLink}>
                            <button className={styles.btnPrimary}>View More</button>
                        </Link>
                    </div>
                </div>

                {/* Lado Derecho: Grid de Stats con anchos equitativos */}
                <ScrollReveal className={styles.gridSide} direction="zoom" initialOpacity={20} distance={90} >
                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>20+</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Years of Experience</span>
                    </div>

                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Thousands</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Roofs Completed</span>
                    </div>

                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Since 2004</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Serving Property Owners</span>
                    </div>

                    <div className={`${styles.card} ${styles.cardBlue}`}>
                        <span className={`${styles.value} ${styles.valueYellow}`}>Chicagoland</span>
                        <span className={`${styles.label} ${styles.labelLight}`}>Local Expertise</span>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};

export default StatsBar;