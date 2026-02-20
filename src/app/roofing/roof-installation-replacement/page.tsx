import { Metadata } from 'next';
import { RoofInstallationReplacementContainer } from "@/features/roofing/roof-installation-replacement/RoofInstallationReplacementContainer";

export const metadata: Metadata = {
    title: 'Roof Installation & Replacement Chicago | Professional Roofing Team',
    description: 'Expert roof installation and full replacement in Chicago. GAF Master Elite & Owens Corning Preferred contractors specializing in asphalt shingles and durable roofing systems.',
    keywords: [
        'roof replacement Chicago',
        'new roof installation Illinois',
        'asphalt shingle roofing',
        'full roof replacement cost Chicago',
        'professional roof installers',
        'residential roof replacement',
        'commercial roof installation Chicago'
    ],
    openGraph: {
        title: 'High-Quality Roof Installation & Replacement | Advanced Roofing Team',
        description: 'Upgrade your property with a roofing system built for Chicago weather. Certified installations with industry-leading warranties.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <RoofInstallationReplacementContainer />
        </main>
    );
}