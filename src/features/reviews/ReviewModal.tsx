"use client";
import { useState, useEffect } from 'react';
import styles from './ReviewsPage.module.css';

const locations = [
    { label: "--- UNITED STATES ---", value: "", disabled: true },
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming",
    { label: "--- CANADA ---", value: "", disabled: true },
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
    "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
];

const ReviewModal = ({ onClose }: { onClose: () => void }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Bloqueo de scroll al abrir
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className={styles.dialogOverlay} onClick={onClose}>
            <div className={styles.dialogContainer} style={{maxWidth: '1000px'}}>
                {/* Botón X Amarilla fuera del recuadro */}
                <button className={styles.closeYellowX} onClick={onClose}>&times;</button>

                <div className={styles.modalWhiteCard} onClick={(e) => e.stopPropagation()}>
                    <form className={styles.modalForm} onSubmit={(e) => e.preventDefault()}>

                        <div className={styles.field} style={{marginBottom: '10px'}}>
                            <label className={styles.modalLabel}>Rate Your Experience*</label>
                            <div className={styles.starRating}>
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <span
                                            key={index}
                                            className={ratingValue <= (hover || rating) ? styles.starFilled : styles.starEmpty}
                                            onClick={() => setRating(ratingValue)}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        >
                                            ★
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>Full Name*</label>
                                <input type="text" required />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>City*</label>
                                <input type="text" required />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>State/Province*</label>
                                <select required>
                                    <option value=""></option>
                                    {locations.map((loc, i) => (
                                        typeof loc === 'string'
                                            ? <option key={i} value={loc}>{loc}</option>
                                            : <option key={i} value={loc.value} disabled={loc.disabled}>{loc.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>Title of Your Review*</label>
                                <input type="text" required />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.modalLabel}>Review*</label>
                            <textarea rows={4} required></textarea>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.modalLabel}>Email: <small>Optional, will only be used to communicate with you as needed.</small></label>
                            <input type="email" />
                        </div>

                        <p className={styles.requiredNote}>*Indicates required field</p>

                        <button type="submit" className={styles.submitReviewBtn}>
                            Submit Review
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;