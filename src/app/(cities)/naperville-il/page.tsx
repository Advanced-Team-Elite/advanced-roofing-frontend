import { Metadata } from 'next';
import NapervilleIlContainer from "@/features/areas-we-serve/naperville-il/NapervilleIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Naperville, IL | Advanced Roofing Team',
    description: 'Top-rated roofing, siding, and gutter services in Naperville, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Naperville IL',
        'roof repair Naperville',
        'Naperville roofing company',
        'storm damage repair Naperville',
        'certified roofer 60540',
        'best roofing contractors Naperville'
    ],
    openGraph: {
        title: 'Naperville Roofing & Storm Damage Services | Advanced Roofing Team',
        description: 'Serving Naperville homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and professional installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <NapervilleIlContainer />;
}