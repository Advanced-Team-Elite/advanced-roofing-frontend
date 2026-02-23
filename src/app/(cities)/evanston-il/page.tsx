import { Metadata } from 'next';
import EvanstonIlContainer from "@/features/areas-we-serve/evanston-il/EvanstonIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Evanston, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Evanston, IL. Certified local contractors for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Evanston IL',
        'roof repair Evanston',
        'Evanston roofing company',
        'storm damage repair Evanston',
        'certified roofer Evanston IL',
        'exterior home remodeling Evanston'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Evanston, IL',
        description: 'Providing Evanston homeowners with reliable roofing and storm recovery solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <EvanstonIlContainer />;
}