import { Metadata } from 'next';
import { SkylightRepairContainer } from "@/features/roofing/skylight-repair/SkylightRepairContainer";

// URL oficial con trailing slash para consistencia
const PAGE_URL = 'https://www.advancedroofingteam.com/roofing/skylight-repair/';

export const metadata: Metadata = {
    title: 'Skylight Repair Chicago | Fix Leaking Skylights 24/7',
    description: 'Expert repair for leaking skylights and storm-damaged roofs in Chicago. 24/7 emergency response, Haag Certified inspections, and insurance claim assistance.',
    keywords: [
        'skylight repair Chicago',
        'fix leaking skylight',
        'skylight storm damage repair',
        'hail damage inspection Chicago',
        'emergency skylight repair service',
        'professional roofers Chicago'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Emergency Skylight & Roof Repair | Advanced Roofing Team',
        description: 'Expert repairs for leaking skylights and storm damage. Our Haag Certified team handles inspections and insurance claims to restore your home fast.',
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
                        "serviceType": "Skylight Repair",
                        "provider": {
                            "@type": "ProfessionalService",
                            "name": "Advanced Roofing Team"
                        },
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Chicagoland"
                        },
                        "description": "24/7 emergency repair for leaking skylights and storm-damaged roofs including wind and hail assessment."
                    })
                }}
            />
            <SkylightRepairContainer />
        </main>
    );
}