import { Metadata } from 'next';
import MountProspectIlContainer from "@/features/areas-we-serve/mount-prospect-il/MountProspectIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Mount Prospect, IL | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Mount Prospect, IL. Local experts for 24/7 emergency storm damage repair and professional roof replacement.',
    keywords: [
        'roofing Mount Prospect IL',
        'roof repair Mount Prospect',
        'Mount Prospect roofing company',
        'storm damage repair Mount Prospect',
        'certified roofer 60056',
        'siding installation Mount Prospect'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Mount Prospect, IL',
        description: 'Providing Mount Prospect homeowners with reliable roofing and exterior solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <MountProspectIlContainer />;
}