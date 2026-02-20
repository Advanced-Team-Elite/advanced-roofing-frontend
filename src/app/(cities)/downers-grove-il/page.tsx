import { Metadata } from 'next';
import DownersGroveIlContainer from "@/features/areas-we-serve/downers-grove-il/DownersGroveIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Downers Grove, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Downers Grove, IL. 24/7 storm damage repair and professional roof replacement by local experts.',
    keywords: [
        'roofing Downers Grove IL',
        'roof repair Downers Grove',
        'Downers Grove roofing company',
        'storm damage repair Downers Grove',
        'certified roofer Downers Grove IL',
        'siding installation Downers Grove'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Downers Grove, IL',
        description: 'Providing Downers Grove homeowners with reliable roofing and exterior solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <DownersGroveIlContainer />;
}