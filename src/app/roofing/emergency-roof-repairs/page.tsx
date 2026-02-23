import { Metadata } from 'next';
import { EmergencyRoofRepairsContainer } from "@/features/roofing/emergency-roof-repairs/EmergencyRoofRepairsContainer";

export const metadata: Metadata = {
    title: '24/7 Emergency Roof Repair Chicago | Immediate Storm Response',
    description: 'Fast emergency roof repair in Chicago. 24/7 immediate response for leaks, wind, and hail damage. We provide emergency tarping and insurance claim documentation.',
    keywords: [
        'emergency roof repair Chicago',
        '24/7 roofer near me',
        'emergency roof tarping Chicago',
        'storm damage roof repair',
        'leaking roof emergency',
        'hail damage repair Chicago',
        'fast roof fix Chicago'
    ],
    openGraph: {
        title: 'Emergency Roof Repair Chicago | Available 24/7',
        description: 'Don’t wait for the damage to get worse. Our team is on call 24/7 to secure your home after storm or wind damage.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <EmergencyRoofRepairsContainer />
        </main>
    );
}