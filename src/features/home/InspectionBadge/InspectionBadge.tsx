import styles from './InspectionBadge.module.css';
import { Clock } from 'lucide-react';

export const InspectionBadge = () => {
    return (
        // Aplicamos la clase base y la clase de palpitación
        <div className={`${styles.badgeContainer} ${styles.pulseEffect}`}>
            {/* Contenedor del Icono */}
            <div className={styles.iconContainer}>
                {/* Opcional: iconPulse si quieres que el reloj también se mueva */}
                <Clock className={styles.icon} />
            </div>

            {/* Textos Hardcodeados */}
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