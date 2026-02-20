import { Metadata } from 'next';
import { RoofInspectionsContainer } from "@/features/roofing/roof-inspections/RoofInspectionsContainer";

export const metadata: Metadata = {
    title: 'Certified Roof Inspector Chicago | Free Storm Damage Inspections',
    description: 'Professional roof inspections in Chicago. We detect hidden hail and wind damage, provide insurance documentation, and assess roof lifespan. Schedule your free inspection today.',
    keywords: [
        'roof inspector Chicago',
        'free roof inspection near me',
        'storm damage assessment Illinois',
        'certified roofing inspection',
        'hail damage detection',
        'real estate roof inspection Chicago',
        'roofing health check'
    ],
    openGraph: {
        title: 'Expert Roof Inspections in the Chicagoland Area | Advanced Roofing Team',
        description: 'Don’t wait for a leak. Our expert inspectors identify subtle storm damage and provide full documentation for insurance claims.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <RoofInspectionsContainer />
        </main>
    );
}