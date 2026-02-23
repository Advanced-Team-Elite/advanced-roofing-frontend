import { Metadata } from 'next';
import SchaumburgIlContainer from "@/features/areas-we-serve/schaumburg-il/SchaumburgIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Schaumburg, IL | Advanced Roofing Team',
    description: 'Top-rated roofing, siding, and gutter services in Schaumburg, IL. Certified experts for storm damage restoration and professional roof replacement.',
    keywords: ['roofing Schaumburg IL', 'roof repair Schaumburg', 'Schaumburg roofing company', 'storm damage repair 60173', 'certified roofer Schaumburg'],
    openGraph: {
        title: 'Schaumburg Roofing & Storm Damage Services | Advanced Roofing Team',
        description: 'Reliable repairs and premium installations in Schaumburg. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <SchaumburgIlContainer />;
}