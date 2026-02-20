import { Metadata } from 'next';
import BuffaloGroveIlContainer from "@/features/areas-we-serve/buffalo-grove-il/BuffaloGroveIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Buffalo Grove, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Buffalo Grove, IL. We specialize in storm damage repair and professional roof replacement with 24/7 support.',
    keywords: [
        'roofing Buffalo Grove IL',
        'roof repair Buffalo Grove',
        'Buffalo Grove roofing company',
        'storm damage repair Buffalo Grove',
        'certified roofer Buffalo Grove IL',
        'siding contractors Buffalo Grove'
    ],
    openGraph: {
        title: 'Trusted Buffalo Grove Roofing & Exterior Services',
        description: 'Protecting Buffalo Grove homes with GAF Master Elite® certified roofing and high-quality storm damage restoration.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <BuffaloGroveIlContainer />;
}