import BlogContainer from "@/features/blog/BlogContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Roofing & Storm Recovery Blog | Insights by Advanced Roofing Team',
    description: 'Expert advice on roofing, siding, and insurance claims. Stay updated on how climate change affects hail damage and find the best siding options for your home.',
    keywords: [
        'roofing blog Chicago',
        'hail damage insurance advice',
        'climate change and roofing',
        'siding options 2024',
        'storm recovery tips',
        'home maintenance blog Illinois'
    ],
    openGraph: {
        title: 'Roofing Industry Insights & Homeowner Tips',
        description: 'Read the latest articles from Advanced Roofing Team on storm damage recovery, insurance evolution, and modern roofing materials.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <BlogContainer />
        </main>
    );
}