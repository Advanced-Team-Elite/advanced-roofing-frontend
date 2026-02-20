import { Metadata } from 'next';
import { SkylightInstallationContainer } from "@/features/roofing/skylight-installation/SkylightInstallationContainer";

export const metadata: Metadata = {
    title: 'Skylight Installation Chicago | Leak-Proof Natural Lighting',
    description: 'Brighten your home with professional skylight installation in Chicago. We specialize in VELUX systems, leak-proof sealing, and energy-efficient daylighting solutions.',
    keywords: [
        'skylight installation Chicago',
        'skylight repair near me',
        'VELUX skylight installers Illinois',
        'leak-proof skylight sealing',
        'residential skylight replacement',
        'commercial skylight services',
        'vented skylights Chicago'
    ],
    openGraph: {
        title: 'Expert Skylight Installation & Replacement | Advanced Roofing Team',
        description: 'Transform your space with natural light. Our certified team ensures a watertight seal and energy-efficient performance for every skylight project.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <SkylightInstallationContainer />
        </main>
    );
}