import { Metadata } from 'next';
import RollingMeadowsIlContainer from "@/features/areas-we-serve/rolling-meadows-il/RollingMeadowsIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Rolling Meadows, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Rolling Meadows, IL. Local experts for 24/7 storm damage repair and professional roof replacement.',
    keywords: ['roofing Rolling Meadows IL', 'roof repair Rolling Meadows', 'Rolling Meadows roofing company', 'storm damage repair 60008'],
    openGraph: {
        title: 'Top-Rated Roofing Services in Rolling Meadows, IL',
        description: 'GAF Master Elite® and Owens Corning Preferred roofing solutions for Rolling Meadows homeowners.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <RollingMeadowsIlContainer />;
}