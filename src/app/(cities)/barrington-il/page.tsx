import { Metadata } from 'next';
import BarringtonIlContainer from "@/features/areas-we-serve/barrington-il/BarringtonIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Barrington, IL | Expert Local Services',
    description: 'Advanced Roofing Team offers premium roofing, siding, and gutter services in Barrington, IL. 24/7 emergency storm damage repair and certified installations.',
    keywords: [
        'roofing Barrington IL',
        'roof repair Barrington',
        'Barrington roofing company',
        'storm damage repair Barrington',
        'certified roofer Barrington IL',
        'gutter installation Barrington'
    ],
    openGraph: {
        title: 'Professional Roofing & Exterior Services in Barrington, IL',
        description: 'Trust your home to GAF Master Elite and Owens Corning Preferred contractors serving the Barrington community.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <BarringtonIlContainer />;
}