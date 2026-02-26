"use client";
import { useState, useEffect } from 'react';
import styles from './ReviewsPage.module.css';
import { useRouter } from 'next/navigation';

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

interface FormData {
    fullName: string;
    city: string;
    state: string;
    title: string;
    review: string;
    email: string;
}

interface FormErrors {
    rating?: string;
    fullName?: string;
    city?: string;
    state?: string;
    title?: string;
    review?: string;
    email?: string;
}

const ReviewModal = ({ onClose }: { onClose: () => void }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [loading, setLoading] = useState(false);
    const router = useRouter();


    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        city: '',
        state: '',
        title: '',
        review: '',
        email: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (rating === 0)
            newErrors.rating = 'Please select a rating.';

        if (!formData.fullName.trim())
            newErrors.fullName = 'Full name is required.';

        if (!formData.city.trim())
            newErrors.city = 'City is required.';

        if (!formData.state)
            newErrors.state = 'Please select a state/province.';

        if (!formData.title.trim())
            newErrors.title = 'Review title is required.';

        if (!formData.review.trim())
            newErrors.review = 'Review is required.';

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            newErrors.email = 'Enter a valid email address.';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoading(true);

            const response = await fetch("/api/reviews", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    rating,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to submit review");
            }

            console.log("Review saved successfully");

            // Limpia el formulario
            setFormData({
                fullName: "",
                city: "",
                state: "",
                title: "",
                review: "",
                email: "",
            });
            setRating(0);

            router.push('/contact-us/thank-you');

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={styles.dialogOverlay} onClick={onClose}>
            <div className={styles.dialogContainer} style={{ maxWidth: '1000px' }}>
                <button className={styles.closeYellowX} onClick={onClose}>&times;</button>

                <div className={styles.modalWhiteCard} onClick={(e) => e.stopPropagation()}>
                    <form className={styles.modalForm} onSubmit={handleSubmit} noValidate>

                        <div className={styles.field} style={{ marginBottom: '10px' }}>
                            <label className={styles.modalLabel}>Rate Your Experience*</label>
                            <div className={styles.starRating}>
                                {[...Array(5)].map((_, index) => {
                                    const ratingValue = index + 1;
                                    return (
                                        <span
                                            key={index}
                                            className={ratingValue <= (hover || rating) ? styles.starFilled : styles.starEmpty}
                                            onClick={() => {
                                                setRating(ratingValue);
                                                setErrors((prev) => ({ ...prev, rating: undefined }));
                                            }}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        >
                                            ★
                                        </span>
                                    );
                                })}
                            </div>
                            {errors.rating && <span className={styles.error}>{errors.rating}</span>}
                        </div>

                        <div className={styles.formGrid}>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>Full Name*</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>City*</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                {errors.city && <span className={styles.error}>{errors.city}</span>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>State/Province*</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                >
                                    <option value=""></option>
                                    {locations.map((loc, i) => (
                                        typeof loc === 'string'
                                            ? <option key={i} value={loc}>{loc}</option>
                                            : <option key={i} value={loc.value} disabled={loc.disabled}>{loc.label}</option>
                                    ))}
                                </select>
                                {errors.state && <span className={styles.error}>{errors.state}</span>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.modalLabel}>Title of Your Review*</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                                {errors.title && <span className={styles.error}>{errors.title}</span>}
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label className={styles.modalLabel}>Review*</label>
                            <textarea
                                name="review"
                                rows={4}
                                value={formData.review}
                                onChange={handleChange}
                            ></textarea>
                            {errors.review && <span className={styles.error}>{errors.review}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.modalLabel}>
                                Email: <small>Optional, will only be used to communicate with you as needed.</small>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className={styles.error}>{errors.email}</span>}
                        </div>

                        <p className={styles.requiredNote}>*Indicates required field</p>

                        <button
                            type="submit"
                            className={styles.submitReviewBtn}
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Review"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;