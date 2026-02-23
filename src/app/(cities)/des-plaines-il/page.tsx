import { Metadata } from 'next';
import DesPlainesIlContainer from "@/features/areas-we-serve/des-plaines-il/DesPlainesIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Des Plaines, IL | Advanced Roofing Team',
    description: 'Top-rated roofing, siding, and gutter services in Des Plaines, IL. Certified local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Des Plaines IL',
        'roof repair Des Plaines',
        'Des Plaines roofing company',
        'storm damage repair Des Plaines',
        'certified roofer Des Plaines IL',
        'best roofing contractors Des Plaines'
    ],
    openGraph: {
        title: 'Des Plaines Roofing & Storm Damage Services | Advanced Roofing Team',
        description: 'Serving the Des Plaines community with GAF Master Elite® and Owens Corning Preferred contractors. Reliable repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <DesPlainesIlContainer />;
}