import { Metadata } from 'next';
import HomeContainer from "@/features/home/HomeContainer";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
    title: 'Advanced Roofing Team | Roofing Services in Des Plaines, IL',
    description: 'Top-rated roofing company in Des Plaines. We offer free inspections, emergency repairs, and full roof replacements. Haag Certified professionals at your service.',
    keywords: ['roofing des plaines', 'roof repair near me', 'emergency roofing Illinois', 'roof inspection free'],
    openGraph: {
        title: 'Advanced Roofing Team | Quality Roofing Solutions',
        description: 'Expert roofing services for residential and commercial properties.',
        images: [
            {
                url: '/icon.png',
                width: 512,
                height: 512,
                alt: 'Advanced Roofing Team Icon',
            },
        ],
    },
};

export default async function MainPage() {

    const reviewsFromDb = await prisma.review.findMany({
        where: {
            approved: true,
            rating: 5
        },
        orderBy: { createdAt: "desc" },
        take: 10,
    });

    const serializedReviews = reviewsFromDb.map(r => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
    }));

    return (
        <main>
            <HomeContainer dbReviews={serializedReviews}/>
        </main>
    );
}