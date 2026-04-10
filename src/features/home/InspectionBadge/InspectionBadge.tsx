import styles from './InspectionBadge.module.css';
import { Clock } from 'lucide-react';

export const InspectionBadge = () => {
    return (
        <div className={styles.badgeContainer}>
            <div className={styles.iconContainer}>
                <Clock className={styles.icon} />
            </div>

            <div className={styles.textContainer}>
                <span className={styles.title}>
                    24-Hour Inspection
                </span>
                <span className={styles.subtitle}>
                    Priority Scheduling
                </span>
            </div>
        </div>
    );
};

export default InspectionBadge;