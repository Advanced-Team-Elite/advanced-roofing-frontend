import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ReviewsPageContainer from "@/features/reviews/ReviewsPageContainer";

export const metadata: Metadata = {
    title: 'Customer Reviews & Testimonials | Advanced Roofing Team Chicago',
    description: 'See what our customers say about Advanced Roofing Team. Top-rated roofing services, storm damage repairs, and professional craftsmanship in the Chicagoland area.',
    keywords: [
        'roofing reviews Chicago',
        'Advanced Roofing Team testimonials',
        'top rated roofers Illinois',
        'reliable roofing company reviews',
        'storm damage repair reviews',
        'best roofing contractors Chicago'
    ],
    openGraph: {
        title: 'Trust & Excellence: Advanced Roofing Team Customer Stories',
        description: 'Read real reviews from homeowners and businesses who trusted us with their roofing and storm recovery projects.',
        images: [{ url: '/icon.png' }],
    },
};

export default async function Page() {
    const reviews = await prisma.review.findMany({
        where: { approved: true },
        orderBy: { createdAt: "desc" },
    });

    const serializedReviews = reviews.map((review) => ({
        ...review,
        createdAt: review.createdAt.toISOString(),
    }));

    return (
        <main>
            <ReviewsPageContainer apiReviews={serializedReviews}/>
        </main>
    );
}