import { Metadata } from 'next';
import { RoofingInsuranceClaimsContainer } from "@/features/roofing-insurance-claims/RoofingInsuranceClaimsContainer";

export const metadata: Metadata = {
    title: 'Property Report | Hail & Wind Damage',
    description: 'Confused about roof insurance claims? We provide a property evidence report to Chicago. Expert inspections and direct insurance coordination.',
    keywords: [
        'roofing reports Chicago',
        'hail damage insurance claim',
        'wind damage roof repair',
        'insurance adjuster inspection support',
        'storm damage compensation',
        'roofing insurance specialist Illinois'
    ],
    openGraph: {
        title: 'Property Report | Advanced Roofing Team',
        description: 'onfused about roof insurance claims? We provide a property evidence report to Chicago.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <RoofingInsuranceClaimsContainer />
        </main>
    );
}