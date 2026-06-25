import { Metadata } from 'next';
import { SkylightInstallationContainer } from "@/features/roofing/skylight-installation/SkylightInstallationContainer";

// URL oficial con trailing slash para consistencia
const PAGE_URL = 'https://www.advancedroofingteam.com/roofing/skylight-installation/';

export const metadata: Metadata = {
    title: 'Skylight Installation Chicago | Leak-Proof Natural Lighting',
    description: 'Brighten your home with professional skylight installation in Chicago. We specialize in VELUX systems, leak-proof sealing, and energy-efficient daylighting solutions.',
    keywords: [
        'skylight installation Chicago',
        'VELUX skylight installers Illinois',
        'leak-proof skylight sealing',
        'residential skylight replacement',
        'commercial skylight services',
        'vented skylights Chicago',
        'energy-efficient skylights'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Expert Skylight Installation & Replacement | Advanced Roofing Team',
        description: 'Transform your space with natural light. Our certified team ensures a watertight seal and energy-efficient performance for every skylight project.',
        url: PAGE_URL,
        images: [{ url: '/icon.png' }],
        type: 'website',
    },
};

export default function Page() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Skylight Installation",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "Advanced Roofing Team"
                        },
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Chicagoland"
                        },
                        "description": "Professional installation of VELUX skylight systems with guaranteed leak-proof sealing and energy-efficient performance."
                    })
                }}
            />
            <SkylightInstallationContainer />
        </main>
    );
}