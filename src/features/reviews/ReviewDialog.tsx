"use client";
import { Review } from './constants';
import styles from './ReviewsPage.module.css';

interface Props {
    review: Review | null;
    isOpen: boolean;
    onClose: () => void;
}

const ReviewDialog = ({ review, isOpen, onClose }: Props) => {
    if (!isOpen || !review) return null;

    return (
        <div className={styles.dialogOverlay} onClick={onClose}>
            <div className={styles.dialogContainer}>
                {/* Botón de cierre amarillo con rotación */}
                <button className={styles.closeYellowX} onClick={onClose}>
                    &times;
                </button>

                <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
                    <h2 className={styles.dialogTitle}>{review.title}</h2>

                    <p className={styles.dialogText}>
                        "{review.text}"
                    </p>

                    <span className={styles.dialogAuthor}>
                        - {review.name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReviewDialog;