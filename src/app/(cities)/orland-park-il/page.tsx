import { Metadata } from 'next';
import OrlandParkIlContainer from "@/features/areas-we-serve/orland-park-il/OrlandParkIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Orland Park, IL | Advanced Roofing Team',
    description: 'Trusted roofing, siding, and gutter services in Orland Park, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Orland Park IL',
        'roof repair Orland Park',
        'Orland Park roofing company',
        'storm damage repair 60462',
        'certified roofer Orland Park',
        'best roofing contractors Orland Park'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Orland Park, IL',
        description: 'Serving Orland Park homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <OrlandParkIlContainer />;
}