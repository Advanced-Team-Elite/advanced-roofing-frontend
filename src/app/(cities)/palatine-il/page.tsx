import { Metadata } from 'next';
import PalatineIlContainer from "@/features/areas-we-serve/palatine-il/PalatineIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Palatine, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Palatine, IL. Expert local contractors for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Palatine IL',
        'roof repair Palatine',
        'Palatine roofing company',
        'storm damage repair Palatine',
        'certified roofer 60067',
        'gutter replacement Palatine'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Palatine, IL',
        description: 'Providing Palatine homeowners with reliable roofing and exterior solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <PalatineIlContainer />;
}