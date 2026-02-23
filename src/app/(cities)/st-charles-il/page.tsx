import { Metadata } from 'next';
import StCharlesIlContainer from "@/features/areas-we-serve/st-charles-il/StCharlesIlContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in St. Charles, IL | Advanced Roofing Team',
    description: 'Professional roofing, siding, and gutter services in St. Charles, IL. Certified local experts for storm damage repair and roof replacement.',
    keywords: ['roofing St. Charles IL', 'roof repair St. Charles', 'St. Charles roofing company', 'storm damage repair 60174'],
    openGraph: {
        title: 'St. Charles Roofing & Exterior Restoration | Advanced Roofing Team',
        description: 'Trusted by St. Charles homeowners for quality roofing and reliable storm damage services.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <StCharlesIlContainer />;
}