"use client";
import { useState, useEffect } from "react";
import styles from './ReviewsPage.module.css';
import {Review, reviewsData} from './constants';
import ReviewCard from './ReviewCard';
import {BreadCrumbsHomeIcon} from "@/shared/Icons/Icons";
import ReviewDialog from './ReviewDialog';
import Link from "next/link";
import ReviewModal from "@/features/reviews/ReviewModal";
import {Footer} from "@/shared/components/layout/footer/Footer";

const ReviewsPageContainer = () => {
    const [apiReviews, setApiReviews] = useState<Review[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const allReviews = [...reviewsData, ...apiReviews];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentReviews = allReviews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allReviews.length / itemsPerPage);


    const [selectedReview, setSelectedReview] = useState<Review | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await fetch("/api/reviews");
                if (!res.ok) throw new Error("Failed to fetch reviews");

                const data = await res.json();

                setApiReviews(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchReviews();
    }, []);

    const handleOpenReview = (review: Review) => {
        setSelectedReview(review);
        setIsDialogOpen(true);
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);

        setTimeout(() => {
            const headerElement = document.getElementById('reviews-header');
            if (headerElement) {
                headerElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    return (
        <>
            <div className={styles.container}>
                {/* Breadcrumb Section */}
                <nav className={styles.breadcrumb}>
                    <Link href="/" className={styles.homeLink}>
                        <BreadCrumbsHomeIcon size={14}/>
                    </Link>
                    <span>/</span>
                    <a href="/reviews">Reviews</a>
                </nav>
                <div className={styles.separator}/>

                <header id="reviews-header" className={styles.header}>
                    <h1 className={styles.title}>Reviews</h1>
                    <button className={styles.addReviewBtn} onClick={() => setIsModalOpen(true)}>
                        Add Review
                    </button>
                </header>

                <div className={styles.reviewsGrid}>
                    {currentReviews.map((review) => (
                        <ReviewCard
                            key={review.id}
                            review={review}
                            onReadMore={handleOpenReview}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className={styles.pagination}>
                    <button
                        className={styles.navArrow}
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>
                    <span>{currentPage} / {totalPages}</span>
                    <button
                        className={styles.navArrow}
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>

                <ReviewDialog
                    review={selectedReview}
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}/>

                {isModalOpen && <ReviewModal onClose={() => setIsModalOpen(false)}/>}
            </div>
            <Footer/>
        </>
    );
};

export default ReviewsPageContainer;