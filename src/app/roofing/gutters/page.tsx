import { Metadata } from 'next';
import { GuttersContainer } from "@/features/roofing/gutters/GuttersCotainer";

export const metadata: Metadata = {
    title: 'Gutter Installation & Replacement Chicago | Seamless Aluminum & Copper',
    description: 'Protect your foundation with professional gutter services in Chicago. We offer seamless aluminum gutters, copper systems, and gutter guards. Free estimates available.',
    keywords: [
        'gutter installation Chicago',
        'seamless gutters Illinois',
        'copper gutters Chicago',
        'gutter replacement near me',
        'gutter guards installation',
        'commercial gutter services',
        'rain gutter repair Chicago'
    ],
    openGraph: {
        title: 'Durable Gutter Solutions in Chicago | Advanced Roofing Team',
        description: 'Expert gutter installation and replacement to protect your home from water damage. Serving the Greater Chicagoland Area since 2004.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <GuttersContainer />
        </main>
    );
}