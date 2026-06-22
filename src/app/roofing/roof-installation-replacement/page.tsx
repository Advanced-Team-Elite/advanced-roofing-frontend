import { Metadata } from 'next';
import { RoofInstallationReplacementContainer } from "@/features/roofing/roof-installation-replacement/RoofInstallationReplacementContainer";

export const metadata: Metadata = {
    title: 'Chicago Insurance Restoration & Roofing Experts',
    description: 'Premier roof installation and full replacement across Chicagoland. GAF Master Elite & Owens Corning Preferred contractors providing durable roofing systems for homes and businesses.',
    keywords: [
        'roof replacement Chicagoland',
        'new roof installation Illinois',
        'asphalt shingle roofing contractor',
        'full roof replacement cost Chicagoland',
        'professional commercial and residential roof installers',
        'certified roofing systems Chicago suburbs'
    ],
    alternates: {
        canonical: 'https://www.advancedroofingteam.com/roofing/roof-installation-replacement',
    },
    openGraph: {
        title: 'Roof Installation & Replacement | Chicagoland Roofing Experts',
        description: 'Upgrade your property with a roofing system engineered for Chicagoland weather. Certified installations backed by industry-leading warranties.',
        url: 'https://www.advancedroofingteam.com/roofing/roof-installation-replacement',
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
                        "@type": "RoofingContractor",
                        "name": "Advanced Roofing Team",
                        "url": "https://www.advancedroofingteam.com/roofing/roof-installation-replacement",
                        "telephone": "877-945-6565",
                        "priceRange": "$$",
                        "openingHours": "Mo-Sa 08:00-18:00",
                        "areaServed": [
                            { "@type": "City", "name": "Chicago" },
                            { "@type": "AdministrativeArea", "name": "Cook County" },
                            { "@type": "AdministrativeArea", "name": "DuPage County" }
                        ],
                        "description": "Professional residential and commercial roof installation and full replacement services.",
                        "hasCredential": [
                            "GAF Master Elite",
                            "Owens Corning Preferred Contractor"
                        ]
                    })
                }}
            />

            <RoofInstallationReplacementContainer />
        </main>
    );
}