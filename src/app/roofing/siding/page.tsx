import { Metadata } from 'next';
import { SidingContainer } from "@/features/roofing/siding/SidingContainer";

export const metadata: Metadata = {
    title: 'Siding Installation Chicago | Vinyl, Fiber Cement & Wood Siding',
    description: 'Upgrade your home with durable, energy-efficient siding in Chicago. Expert installation of vinyl, fiber cement, and insulated siding. 24/7 service and free estimates.',
    keywords: [
        'siding installation Chicago',
        'vinyl siding repair Illinois',
        'fiber cement siding Chicago',
        'James Hardie siding installers',
        'insulated siding Chicago',
        'siding replacement near me',
        'exterior home remodeling Chicago'
    ],
    openGraph: {
        title: 'Expert Siding Services in Chicago | Advanced Roofing Team',
        description: 'Protect your home from the Windy City weather with high-performance siding. From wood to fiber cement, we offer customized exterior solutions.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <SidingContainer />
        </main>
    );
}