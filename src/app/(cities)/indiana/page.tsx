import { Metadata } from 'next';
import TinleyParkIlContainer from "@/features/areas-we-serve/tinley-park-il/TinleyParkIlContainer";
import WisconsinContainer from "@/features/areas-we-serve/wisconsin/WisconsinContainer";
import IndianaContainer from "@/features/areas-we-serve/indiana/IndianaContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Indiana | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Indiana. Local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: ['Indiana', 'roof repair Indiana', 'Indiana roofing company', 'storm damage repair 60477'],
    openGraph: {
        title: 'Indiana Roofing & Storm Damage Services',
        description: 'Premium roofing solutions in Indiana. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <IndianaContainer />;
}