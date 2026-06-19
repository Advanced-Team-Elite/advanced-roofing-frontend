import { Metadata } from 'next';
import { CommercialRoofingContainer } from "@/features/commercial-roofing/CommercialRoofingContainer";

export const metadata: Metadata = {
    // Título optimizado: Máximo 60 caracteres, la palabra clave al inicio.
    title: 'Commercial Roofing Chicago | Flat Roof & Industrial Repairs',
    // Descripción: Incluimos llamada a la acción y servicios clave.
    description: 'Expert commercial roofing contractors in Chicago. Specializing in TPO, EPDM, roof replacement, and insurance storm damage repair. Get a free inspection for your business today.',
    keywords: [
        'commercial roofing contractors Chicago',
        'flat roof repair Chicago',
        'industrial roof replacement Illinois',
        'commercial insurance roof claims Chicago',
        'emergency commercial roof repair',
        'TPO roofing contractor near me'
    ],
    // Canonical URL para evitar problemas de indexación duplicada
    alternates: {
        canonical: 'https://www.advancedroofingteam.com/commercial-roofing',
    },
    openGraph: {
        title: 'Professional Commercial Roofing in Chicago | Advanced Roofing Team',
        description: 'Trusted commercial roofing solutions. Minimize business downtime with our 24/7 storm recovery and expert insurance claim assistance.',
        url: 'https://www.advancedroofingteam.com/commercial-roofing',
        type: 'website',
    },
};

export default function CommercialRoofingPage() {
    return (
        <main>
            {/* Estructura de Datos JSON-LD para Google
                Esto ayuda a que Google entienda que eres una empresa de servicios locales
            */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RoofingContractor",
                        "name": "Advanced Roofing Team",
                        "url": "https://www.advancedroofingteam.com/commercial-roofing",
                        "areaServed": "Chicago, IL",
                        "description": "Expert commercial roofing services including TPO, EPDM, and insurance storm damage recovery."
                    })
                }}
            />

            <CommercialRoofingContainer />
        </main>
    );
}