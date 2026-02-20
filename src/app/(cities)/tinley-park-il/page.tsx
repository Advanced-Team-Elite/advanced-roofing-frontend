import { Metadata } from 'next';
import TinleyParkIlContainer from "@/features/areas-we-serve/tinley-park-il/TinleyParkIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Tinley Park, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Tinley Park, IL. Local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: ['roofing Tinley Park IL', 'roof repair Tinley Park', 'Tinley Park roofing company', 'storm damage repair 60477'],
    openGraph: {
        title: 'Tinley Park Roofing & Storm Damage Services',
        description: 'Premium roofing solutions in Tinley Park. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <TinleyParkIlContainer />;
}