import { Metadata } from 'next';
import { EmergencyRoofRepairsContainer } from "@/features/roofing/emergency-roof-repairs/EmergencyRoofRepairsContainer";

export const metadata: Metadata = {
    // Título enfocado en la urgencia y el área metropolitana
    title: '24/7 Emergency Roof Repair | Chicagoland Immediate Response',
    // Descripción que invita a la acción inmediata
    description: 'Need fast emergency roof repair in Chicagoland? We offer 24/7 immediate response for leaks, wind, and storm damage. Professional tarping and insurance documentation provided.',
    keywords: [
        'emergency roof repair Chicagoland',
        '24/7 roofer Illinois',
        'emergency roof tarping Chicago suburbs',
        'immediate storm roof repair service',
        'urgent roof leak fix Chicagoland',
        'hail damage emergency repairs',
        'fast response roofing contractor'
    ],
    alternates: {
        canonical: 'https://www.advancedroofingteam.com/roofing/emergency-roof-repairs',
    },
    openGraph: {
        title: 'Emergency Roof Repair | Chicagoland Available 24/7',
        description: 'Prevent further damage to your property. Our team is on call 24/7 to provide emergency tarping and professional repairs after storm or wind damage.',
        url: 'https://www.advancedroofingteam.com/roofing/emergency-roof-repairs',
        type: 'website',
    },
};

export default function Page() {
    return (
        <main>
            {/* Schema Markup enfocado en la disponibilidad 24/7 */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EmergencyService",
                        "name": "Advanced Roofing Team",
                        "url": "https://www.advancedroofingteam.com/roofing/emergency-roof-repairs",
                        "areaServed": [
                            { "@type": "City", "name": "Chicago" },
                            { "@type": "AdministrativeArea", "name": "Cook County" },
                            { "@type": "AdministrativeArea", "name": "DuPage County" }
                        ],
                        "description": "24/7 emergency roofing response for leaks, storm damage, and structural protection.",
                        "openingHours": "Mo-Su 00:00-23:59"
                    })
                }}
            />

            <EmergencyRoofRepairsContainer />
        </main>
    );
}