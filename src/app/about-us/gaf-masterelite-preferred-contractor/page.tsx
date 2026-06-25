import { Metadata } from 'next';
import GAFMastereliteContainer from "@/features/about-us/gaf-masterelite-preferred-contractor/GAFMastereliteContainer";

// URL oficial con trailing slash
const PAGE_URL = 'https://www.advancedroofingteam.com/about-us/gaf-masterelite-preferred-contractor/';

export const metadata: Metadata = {
    title: 'GAF Master Elite Roofer Chicago | Golden Pledge® Warranty',
    description: 'Top 2% of contractors nationwide. As a GAF Master Elite® contractor in Chicago, we offer the strongest roof warranties and factory-certified installations.',
    keywords: [
        'GAF Master Elite contractor Chicago',
        'certified GAF roofer Illinois',
        'GAF Golden Pledge warranty',
        'factory-certified roofing installation',
        'best roofing warranty Chicago',
        'professional roofers Chicago'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Advanced Roofing Team: GAF Master Elite® Certified',
        description: 'Only 2% of roofers qualify. Discover why our GAF Master Elite® status means better protection and better warranties for your Chicago home.',
        url: PAGE_URL,
        images: [{ url: '/icon.png' }],
        type: 'website',
    },
};

export default function GAFMasterelitePage() {
    return (
        <main>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.advancedroofingteam.com/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "GAF Master Elite Contractor",
                            "item": PAGE_URL
                        }]
                    })
                }}
            />
            <GAFMastereliteContainer />
        </main>
    );
}