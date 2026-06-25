import { Metadata } from 'next';
import { StormDamageRepairContainer } from "@/features/roofing/storm-damage-repair/StormDamageRepairContainer";

// Definimos la URL base oficial con barra final para consistencia
const PAGE_URL = 'https://www.advancedroofingteam.com/roofing/storm-damage-repair/';

export const metadata: Metadata = {
    title: 'Storm Damage Roof Repair | Chicagoland Haag Certified Experts',
    description: 'Expert storm damage roof repair across Chicagoland. Haag Certified inspectors provide free assessments for wind and hail damage. 24/7 emergency service in Chicago and surrounding areas.',
    keywords: [
        'storm damage roof repair Chicagoland',
        'hail damage roof inspection Illinois',
        'wind damage roofing contractor Chicago suburbs',
        'Haag Certified roof inspection Illinois',
        'emergency storm roof repair',
        'residential storm damage restoration'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Storm Damage Repair | Chicagoland Haag Certified Inspections',
        description: 'Did a storm hit your roof? Our Haag Certified inspectors identify hidden damage throughout Chicagoland. Fast 24/7 recovery services.',
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
                        "@type": "ProfessionalService",
                        "name": "Advanced Roofing Team",
                        "url": PAGE_URL,
                        "areaServed": [
                            { "@type": "City", "name": "Chicago" },
                            { "@type": "AdministrativeArea", "name": "Cook County" },
                            { "@type": "AdministrativeArea", "name": "DuPage County" }
                        ],
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Storm Damage Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haag Certified Storm Inspection" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Wind & Hail Repair" } }
                            ]
                        }
                    })
                }}
            />

            <StormDamageRepairContainer />
        </main>
    );
}