import { Metadata } from 'next';
import OwensPreferredContainer from "@/features/about-us/owens-corning-preferred-contractor/OwensPreferredContainer";

// URL oficial con trailing slash para consistencia técnica
const PAGE_URL = 'https://www.advancedroofingteam.com/about-us/owens-corning-preferred-contractor/';

export const metadata: Metadata = {
    title: 'Owens Corning Preferred Contractor Chicago | Lifetime Warranties',
    description: 'As an Owens Corning Preferred Contractor in Chicago, we offer exclusive lifetime warranties and top-tier materials. Trust our certified team for superior roof protection.',
    keywords: [
        'Owens Corning Preferred Contractor Chicago',
        'certified roofing contractor Illinois',
        'Owens Corning roofing warranties',
        'lifetime roof warranty Chicago',
        'high-quality roofing materials',
        'certified roof installation'
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: 'Certified Excellence: Owens Corning Preferred Contractor',
        description: 'Advanced Roofing Team is proud to be part of an elite group of roofing professionals. Discover the benefits of choosing a certified contractor.',
        url: PAGE_URL,
        images: [{ url: '/icon.png' }],
        type: 'website',
    },
};

export default function OwensPreferredPage() {
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
                            "name": "Owens Corning Preferred Contractor",
                            "item": PAGE_URL
                        }]
                    })
                }}
            />
            <OwensPreferredContainer />
        </main>
    );
}