import { Metadata } from 'next';
import { CommercialRoofingContainer } from "@/features/commercial-roofing/CommercialRoofingContainer";

export const metadata: Metadata = {
    title: 'Commercial Roofing Chicago | Industrial Roof Replacement & Repair',
    description: 'Expert commercial roofing services in Chicago. We specialize in TPO, EPDM, flat roofs, and storm damage recovery for businesses and property managers. Minimize downtime with our professional team.',
    keywords: [
        'commercial roofing Chicago',
        'flat roof repair Illinois',
        'industrial roofing contractor',
        'TPO roofing Chicago',
        'EPDM roof installation',
        'property management roofing support',
        'commercial storm damage inspection'
    ],
    openGraph: {
        title: 'Dependable Commercial Roofing Solutions | Advanced Roofing Team',
        description: 'Protect your business with advanced roof technology. Full installations, replacements, and 24/7 storm recovery for commercial properties in Chicago.',
        images: [{ url: '/icon.png' }],
    },
};

export default function CommercialRoofingPage() {
    return (
        <main>
            <CommercialRoofingContainer />
        </main>
    );


}