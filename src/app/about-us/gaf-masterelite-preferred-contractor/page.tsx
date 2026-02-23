import { Metadata } from 'next';
import GAFMastereliteContainer from "@/features/about-us/gaf-masterelite-preferred-contractor/GAFMastereliteContainer";

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
    openGraph: {
        title: 'Advanced Roofing Team: GAF Master Elite® Certified',
        description: 'Only 2% of roofers qualify. Discover why our GAF Master Elite® status means better protection and better warranties for your Chicago home.',
        images: [{ url: '/icon.png' }],
    },
};

export default function GAFMasterelitePage() {
    return <GAFMastereliteContainer />;
}