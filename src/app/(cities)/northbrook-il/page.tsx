import { Metadata } from 'next';
import NorthbrookIlContainer from "@/features/areas-we-serve/northbrook-il/NorthbrookIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Northbrook, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Northbrook, IL. Certified local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: [
        'roofing Northbrook IL',
        'roof repair Northbrook',
        'Northbrook roofing company',
        'storm damage repair Northbrook',
        'certified roofer 60062',
        'siding installation Northbrook'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Northbrook, IL',
        description: 'Serving Northbrook homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Professional repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <NorthbrookIlContainer />;
}