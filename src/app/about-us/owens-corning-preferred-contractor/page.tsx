import { Metadata } from 'next';
import OwensPreferredContainer from "@/features/about-us/owens-corning-preferred-contractor/OwensPreferredContainer";

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
    openGraph: {
        title: 'Certified Excellence: Owens Corning Preferred Contractor',
        description: 'Advanced Roofing Team is proud to be part of an elite group of roofing professionals. Discover the benefits of choosing a certified contractor.',
        images: [{ url: '/icon.png' }],
    },
};

export default function OwensPreferredPage() {
    return <OwensPreferredContainer />;
}