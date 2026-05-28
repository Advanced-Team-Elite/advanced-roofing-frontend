import { Metadata } from "next";
import {MagazineFlip} from "@/shared/components/MagazineFlip/MagazineFlip";

export const metadata: Metadata = {
    title: 'Roofing Journal | Industry Insights & Expert Craftsmanship',
    description: 'Explore the Advanced Roofing Team journal. Discover our latest projects, professional roofing insights, and the precision behind every layer of our installations.',
    keywords: [
        'roofing industry journal',
        'roofing project showcase',
        'professional roofing insights',
        'roofing craftsmanship',
        'construction industry news',
        'Advanced Roofing Team journal'
    ],
    openGraph: {
        title: 'Roofing Journal | Insights from Advanced Roofing Team',
        description: 'Read our latest insights on roofing durability, protection, and expert craftsmanship in every project we deliver.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <MagazineFlip />
        </main>
    );
}