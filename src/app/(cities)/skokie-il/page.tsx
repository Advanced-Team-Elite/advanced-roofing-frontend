import { Metadata } from 'next';
import SkokieIlContainer from "@/features/areas-we-serve/skokie-il/SkokieIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Skokie, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Skokie, IL. 24/7 local contractors for storm damage repair and professional roof replacement.',
    keywords: ['roofing Skokie IL', 'roof repair Skokie', 'Skokie roofing company', 'certified roofer 60076', 'siding installation Skokie'],
    openGraph: {
        title: 'Top-Rated Roofing Services in Skokie, IL',
        description: 'Providing Skokie homeowners with reliable exterior solutions and GAF Master Elite® certified craftsmanship.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <SkokieIlContainer />;
}