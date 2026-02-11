import { Review } from './constants';
import styles from './ReviewsPage.module.css';

interface Props {
    review: Review;
    onReadMore: (review: Review) => void; // Esta es la prop necesaria aquí
}

const ReviewCard = ({ review, onReadMore }: Props) => {
    return (
        <div className={styles.card}>
            <div className={styles.stars}>
                {"★".repeat(review.rating)}
            </div>
            <h3 className={styles.reviewTitle}>{review.title}</h3>
            <p className={styles.reviewText}>"{review.text.substring(0, 120)}..."</p>
            <span className={styles.author}>- {review.name}</span>
            <button
                className={styles.readMoreBtn}
                onClick={() => onReadMore(review)}
            >
                Read More
            </button>
        </div>
    );
};

export default ReviewCard;