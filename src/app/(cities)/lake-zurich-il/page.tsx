import { Metadata } from 'next';
import LakeZurichIlContainer from "@/features/areas-we-serve/lake-zurich-il/LakeZurichIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Lake Zurich, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Lake Zurich, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Lake Zurich IL',
        'roof repair Lake Zurich',
        'Lake Zurich roofing company',
        'storm damage repair Lake Zurich',
        'certified roofer 60047',
        'gutter installation Lake Zurich'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Lake Zurich, IL',
        description: 'Providing Lake Zurich homeowners with reliable roofing and exterior solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <LakeZurichIlContainer />;
}