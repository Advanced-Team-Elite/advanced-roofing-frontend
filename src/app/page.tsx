import { Metadata } from 'next';
import HomeContainer from "@/features/home/HomeContainer";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: 'Advanced Roofing Team | Roofing Services in Des Plaines, IL',
    description: 'Top-rated roofing company in Des Plaines. We offer free inspections, emergency repairs, and full roof replacements. Haag Certified professionals at your service.',
    keywords: ['roofing des plaines', 'roof repair near me', 'emergency roofing Illinois', 'roof inspection free'],
    openGraph: {
        title: 'Advanced Roofing Team | Quality Roofing Solutions',
        description: 'Expert roofing services for residential and commercial properties.',
        images: [
            {
                url: '/banner.png', // O la URL completa: 'https://advanced-roofing-frontend-b0akyjk8n.vercel.app/banner.png'
                width: 1200,
                height: 630,
                alt: 'Advanced Roofing Team - We have got you covered',
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
        <main className="overflow-x-hidden">
            <HomeContainer dbReviews={serializedReviews}/>
        </main>
    );
}