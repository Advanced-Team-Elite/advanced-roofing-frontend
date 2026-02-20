// app/contact-us/page.tsx
import { prisma } from "@/lib/prisma";
import ReviewsPageContainer from "@/features/reviews/ReviewsPageContainer";

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