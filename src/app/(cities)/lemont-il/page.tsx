import { Metadata } from 'next';
import LemontIlContainer from "@/features/areas-we-serve/lemont-il/LemontIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Lemont, IL | Advanced Roofing Team',
    description: 'Trusted roofing, siding, and gutter services in Lemont, IL. Certified local experts for 24/7 storm damage repair and high-quality roof replacement.',
    keywords: [
        'roofing Lemont IL',
        'roof repair Lemont',
        'Lemont roofing company',
        'storm damage repair Lemont',
        'certified roofer 60439',
        'best roofing contractors Lemont'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Lemont, IL',
        description: 'Serving Lemont homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and professional installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <LemontIlContainer />;
}