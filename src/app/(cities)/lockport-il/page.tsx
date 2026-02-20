import { Metadata } from 'next';
import LockportIlContainer from "@/features/areas-we-serve/lockport-il/LockportIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Lockport, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Lockport, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Lockport IL',
        'roof repair Lockport',
        'Lockport roofing company',
        'storm damage repair Lockport',
        'certified roofer 60441',
        'exterior home remodeling Lockport'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Lockport, IL',
        description: 'Serving Lockport homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <LockportIlContainer />;
}