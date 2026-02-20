import { Metadata } from 'next';
import BolingbrookIlContainer from "@/features/areas-we-serve/bolingbrook-il/BolingbrookIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Bolingbrook, IL | Advanced Roofing Team',
    description: 'Expert roofing, siding, and gutter services in Bolingbrook, IL. Certified local contractors for storm damage repair, new roof installation, and 24/7 emergency help.',
    keywords: [
        'roofing Bolingbrook IL',
        'roof repair Bolingbrook',
        'Bolingbrook roofing company',
        'storm damage repair Bolingbrook',
        'best roofer in Bolingbrook IL',
        'siding installation Bolingbrook'
    ],
    openGraph: {
        title: 'Top-Rated Roofing Services in Bolingbrook, IL',
        description: 'Providing Bolingbrook homeowners with reliable roofing and storm recovery solutions. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <BolingbrookIlContainer />;
}