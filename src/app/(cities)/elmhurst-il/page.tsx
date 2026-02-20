import { Metadata } from 'next';
import ElmhurstIlContainer from "@/features/areas-we-serve/elmhurst-il/ElmhurstIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Elmhurst, IL | Advanced Roofing Team',
    description: 'Top-rated roofing, siding, and gutter services in Elmhurst, IL. Certified local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: [
        'roofing Elmhurst IL',
        'roof repair Elmhurst',
        'Elmhurst roofing company',
        'storm damage repair Elmhurst',
        'certified roofer Elmhurst IL',
        'best roofing contractors 60126'
    ],
    openGraph: {
        title: 'Elmhurst Roofing & Storm Damage Services | Advanced Roofing Team',
        description: 'Providing Elmhurst homeowners with GAF Master Elite® and Owens Corning Preferred roofing solutions. Reliable repairs and installations.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <ElmhurstIlContainer />;
}