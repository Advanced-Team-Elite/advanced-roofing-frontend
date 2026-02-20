import { Metadata } from 'next';
import ArlingtonHeightsIlContainer from "@/features/areas-we-serve/arlington-heights-il/ArlingtonHeightsIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Arlington Heights, IL | Advanced Roofing Team',
    description: 'Top-rated roofing services in Arlington Heights. From storm damage repair to full roof replacement, we provide certified local expertise and 24/7 support.',
    keywords: [
        'roofing Arlington Heights IL',
        'roof repair Arlington Heights',
        'Arlington Heights roofing company',
        'storm damage repair 60004',
        'best roofer in Arlington Heights',
        'local roofing contractors Illinois'
    ],
    openGraph: {
        title: 'Reliable Roofing Services in Arlington Heights, IL',
        description: 'Serving Arlington Heights homeowners with expert roofing, siding, and gutter solutions. Certified GAF and Owens Corning contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <ArlingtonHeightsIlContainer />;
}