import { Metadata } from 'next';
import LakeForestIlContainer from "@/features/areas-we-serve/lake-forest-il/LakeForestIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Lake Forest, IL | Premium Roofing Services',
    description: 'Advanced Roofing Team provides high-quality roofing, siding, and gutter solutions in Lake Forest, IL. GAF Master Elite certified for premium roof replacement and repair.',
    keywords: [
        'roofing Lake Forest IL',
        'roof repair Lake Forest',
        'Lake Forest roofing company',
        'premium roofing contractors Lake Forest',
        'certified roofer 60045',
        'slate and tile roof repair Lake Forest'
    ],
    openGraph: {
        title: 'Elite Roofing & Exterior Services in Lake Forest, IL',
        description: 'Trusted by Lake Forest homeowners for superior craftsmanship and reliable storm damage restoration. Certified GAF Master Elite contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <LakeForestIlContainer />;
}