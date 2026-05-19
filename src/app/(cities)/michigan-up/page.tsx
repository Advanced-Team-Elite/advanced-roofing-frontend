import { Metadata } from 'next';
import MichiganUpContainer from "@/features/areas-we-serve/michigan-up/MichiganUpContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Michigan | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Michigan. Local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: ['Michigan', 'roof repair Michigan', 'Michigan roofing company', 'storm damage repair 60477'],
    openGraph: {
        title: 'Michigan Roofing & Storm Damage Services',
        description: 'Premium roofing solutions in Michigan. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <MichiganUpContainer />;
}