import { Metadata } from 'next';
import { StormDamageRepairContainer } from "@/features/roofing/storm-damage-repair/StormDamageRepairContainer";

export const metadata: Metadata = {
    // Cambiamos 'Chicago' por 'Chicago & Suburbs' o 'Chicagoland'
    title: 'Storm Damage Roof Repair | Chicagoland Haag Certified Experts',
    description: 'Expert storm damage roof repair across Chicagoland. Haag Certified inspectors provide free assessments for wind and hail damage. 24/7 emergency service in Chicago and surrounding areas.',
    keywords: [
        'storm damage roof repair Chicagoland',
        'hail damage roof inspection Illinois',
        'wind damage roofing contractor Chicago suburbs',
        'Haag Certified roof inspection Illinois',
        'emergency storm roof repair near me',
        'residential storm damage restoration'
    ],
    alternates: {
        canonical: 'https://www.advancedroofingteam.com/roofing/storm-damage-repair',
    },
    openGraph: {
        title: 'Storm Damage Repair | Chicagoland Haag Certified Inspections',
        description: 'Did a storm hit your roof? Our Haag Certified inspectors identify hidden damage throughout Chicagoland. Fast 24/7 recovery services.',
        url: 'https://www.advancedroofingteam.com/roofing/storm-damage-repair',
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
                        "url": "https://www.advancedroofingteam.com/roofing/storm-damage-repair",
                        // AQUÍ ESTÁ EL CAMBIO CLAVE: Usamos 'AdministrativeArea' para cubrir Chicago y alrededores
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