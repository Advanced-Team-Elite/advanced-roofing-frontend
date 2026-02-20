import { Metadata } from 'next';
import { RoofingInsuranceClaimsContainer } from "@/features/roofing-insurance-claims/RoofingInsuranceClaimsContainer";

export const metadata: Metadata = {
    title: 'Roofing Insurance Claims Assistance Chicago | Hail & Wind Damage',
    description: 'Confused about roof insurance claims? We help Chicago homeowners get fair compensation for hail and wind damage. Expert inspections and direct insurance coordination.',
    keywords: [
        'roofing insurance claims Chicago',
        'hail damage insurance claim',
        'wind damage roof repair',
        'insurance adjuster inspection support',
        'storm damage compensation',
        'roofing insurance specialist Illinois'
    ],
    openGraph: {
        title: 'Hassle-Free Roofing Insurance Claims | Advanced Roofing Team',
        description: 'We work directly with your insurance provider to ensure your home is restored after a storm. Expert assessment and negotiation support.',
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