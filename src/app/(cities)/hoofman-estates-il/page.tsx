import { Metadata } from 'next';
import HoffmanEstatesIlContainer from "@/features/areas-we-serve/hoofman-estates-il/HoffmanEstatesIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Hoffman Estates, IL | Advanced Roofing Team',
    description: 'Top-rated roofing, siding, and gutter services in Hoffman Estates, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Hoffman Estates IL',
        'roof repair Hoffman Estates',
        'Hoffman Estates roofing company',
        'storm damage repair Hoffman Estates',
        'certified roofer Hoffman Estates IL',
        'best roofing contractors 60169'
    ],
    openGraph: {
        title: 'Hoffman Estates Roofing & Storm Damage Services | Advanced Roofing Team',
        description: 'Serving Hoffman Estates homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <HoffmanEstatesIlContainer />;
}