import { Metadata } from 'next';
import { StormDamageRepairContainer } from "@/features/roofing/storm-damage-repair/StormDamageRepairContainer";

export const metadata: Metadata = {
    title: 'Storm Damage Roof Repair Chicago | Haag Certified Inspectors',
    description: 'Expert wind and hail damage roof repair in Chicago. 24/7 emergency response, Haag Certified inspections, and direct insurance claim assistance since 2004.',
    keywords: [
        'storm damage repair Chicago',
        'hail damage roof inspection',
        'wind damage repair Illinois',
        'Haag Certified roofer Chicago',
        'emergency roof stabilization',
        'insurance claim roofers',
        'Chicagoland storm recovery'
    ],
    openGraph: {
        title: 'Chicago Storm Damage Repair | 24/7 Emergency Roofing Support',
        description: 'Protect your home after a storm. Our Haag Certified inspectors identify hidden hail and wind damage and help you navigate the insurance process.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <StormDamageRepairContainer />
        </main>
    );
}