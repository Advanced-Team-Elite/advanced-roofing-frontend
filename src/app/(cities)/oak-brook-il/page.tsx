import { Metadata } from 'next';
import OakBrookIlContainer from "@/features/areas-we-serve/oak-brook-il/OakBrookIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Oak Brook, IL | Premium Exterior Services',
    description: 'Top-rated roofing, siding, and gutter solutions in Oak Brook, IL. Certified GAF Master Elite contractors specializing in premium roof replacement and storm repair.',
    keywords: [
        'roofing Oak Brook IL',
        'roof repair Oak Brook',
        'Oak Brook roofing company',
        'premium roofing contractors 60523',
        'certified roofer Oak Brook',
        'luxury home roofing Illinois'
    ],
    openGraph: {
        title: 'Elite Roofing & Storm Damage Services in Oak Brook, IL',
        description: 'Providing Oak Brook homeowners and businesses with superior roofing solutions and professional storm damage restoration.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <OakBrookIlContainer />;
}