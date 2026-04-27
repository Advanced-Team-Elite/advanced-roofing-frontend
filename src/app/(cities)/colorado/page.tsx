import { Metadata } from 'next';
import ColoradoContainer from "@/features/areas-we-serve/colorado/ColoradoContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Colorado | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Colorado. Local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: ['Colorado', 'roof repair Colorado', 'Colorado roofing company', 'storm damage repair 60477'],
    openGraph: {
        title: 'Colorado Roofing & Storm Damage Services',
        description: 'Premium roofing solutions in Colorado. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <ColoradoContainer />;
}