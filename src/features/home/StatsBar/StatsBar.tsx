import styles from './StatsBar.module.css';
import { COMPANY_STATS } from '@/shared/utils/constants';

const StatsBar = () => {
    const stats = [
        { label: 'Years of Experience', value: `${COMPANY_STATS.yearsExperience}+` },
        { label: 'Roofs Completed', value: COMPANY_STATS.roofsCompleted },
        { label: 'Serving Property Owners', value: `Since ${COMPANY_STATS.servingSince}` },
        { label: 'Local Expertise', value: COMPANY_STATS.location },
    ];

    return (
        <section className={styles.section}>
            <div className="container mx-auto px-4">
                <div className={styles.grid}>
                    {stats.map((stat, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`${styles.card} ${isEven ? styles.cardBlue : styles.cardYellow}`}
                            >
                                <span className={`${styles.value} ${isEven ? styles.valueGradient : styles.valueDark}`}>
                                    {stat.value}
                                </span>

                                <span className={`${styles.label} ${isEven ? styles.labelLight : styles.labelDark}`}>
                                    {stat.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;