import { Metadata } from 'next';
import { EmergencyRoofRepairsContainer } from "@/features/roofing/emergency-roof-repairs/EmergencyRoofRepairsContainer";

// Definimos la URL base oficial con barra final
const PAGE_URL = 'https://www.advancedroofingteam.com/roofing/emergency-roof-repairs/';

export const metadata: Metadata = {
    title: '24/7 Emergency Roof Leak Repair | Chicagoland Immediate Response',
    description: 'Need fast emergency roof repair in Chicagoland? We offer 24/7 immediate response for leaks, wind, and storm damage. Professional tarping and insurance documentation provided.',
    keywords: [
        'emergency roof leak repair Chicagoland',
        '24/7 roofer Illinois',
        'emergency roof tarping Chicago suburbs',
        'immediate storm roof repair service',
        'urgent roof leak fix Chicagoland',
        'fast response roofing contractor'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Emergency Roof Leak Repair | Chicagoland Available 24/7',
        description: 'Prevent further damage to your property. Our team is on call 24/7 to provide emergency tarping and professional repairs.',
        url: PAGE_URL,
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
                        "@type": "EmergencyService",
                        "name": "Advanced Roofing Team",
                        "url": PAGE_URL, // Usamos la constante aquí también
                        "areaServed": [
                            { "@type": "City", "name": "Chicago" },
                            { "@type": "AdministrativeArea", "name": "Cook County" },
                            { "@type": "AdministrativeArea", "name": "DuPage County" }
                        ],
                        "description": "24/7 emergency roofing response for leaks, storm damage, and structural protection.",
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                            "opens": "00:00",
                            "closes": "23:59"
                        }
                    })
                }}
            />

            <EmergencyRoofRepairsContainer />
        </main>
    );
}