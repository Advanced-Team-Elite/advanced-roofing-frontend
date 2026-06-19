import { Metadata } from 'next';
import { SidingContainer } from "@/features/roofing/siding/SidingContainer";

export const metadata: Metadata = {
    // Enfoque en protección térmica y estética regional
    title: 'Professional Siding Installation & Replacement | Chicagoland',
    // Descripción enfocada en valor a largo plazo
    description: 'Protect your home with high-performance siding in Chicagoland. Expert installation of vinyl, fiber cement (James Hardie), and insulated siding to improve energy efficiency and curb appeal.',
    keywords: [
        'siding installation Chicagoland',
        'vinyl siding repair Illinois',
        'fiber cement siding Chicagoland',
        'James Hardie siding contractors',
        'insulated siding installation',
        'energy efficient home siding',
        'exterior remodeling services Chicagoland'
    ],
    alternates: {
        canonical: 'https://www.advancedroofingteam.com/roofing/siding',
    },
    openGraph: {
        title: 'Premium Siding Solutions | Chicagoland Exterior Experts',
        description: 'Upgrade your home’s exterior with durable, weather-resistant siding. From fiber cement to insulated options, we offer expert installation and customized solutions.',
        url: 'https://www.advancedroofingteam.com/roofing/siding',
        type: 'website',
    },
};

export default function Page() {
    return (
        <main>
            {/* Schema Markup para 'HomeAndConstructionBusiness' */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HomeAndConstructionBusiness",
                        "name": "Advanced Roofing Team",
                        "url": "https://www.advancedroofingteam.com/roofing/siding",
                        "areaServed": [
                            { "@type": "City", "name": "Chicago" },
                            { "@type": "AdministrativeArea", "name": "Cook County" },
                            { "@type": "AdministrativeArea", "name": "DuPage County" }
                        ],
                        "description": "Professional exterior remodeling, including premium siding installation, replacement, and energy-efficient insulation solutions.",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Siding Services",
                            "itemListElement": [
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vinyl Siding Installation" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fiber Cement Siding" } },
                                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insulated Siding" } }
                            ]
                        }
                    })
                }}
            />
            <SidingContainer />
        </main>
    );
}