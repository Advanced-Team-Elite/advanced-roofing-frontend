import { Metadata } from 'next';
import RoofingContainer from "@/features/roofing/RoofingContainer";
import AboutContainer from "@/features/about-us/AboutContainer";

export const metadata: Metadata = {
    title: 'Roofing Services Chicago | Installation & Storm Repair | Advanced Roofing Team',
    description: 'Expert residential and commercial roofing in Chicago. GAF Master Elite & Owens Corning Preferred contractors. 24/7 emergency response, storm damage repairs, and full replacements.',
    keywords: [
        'Chicago roofing services',
        'commercial roofing Chicago',
        'residential roof replacement',
        'emergency roof repair Chicago',
        'storm damage roofing',
        'shingle roofing experts'
    ],
    openGraph: {
        title: 'Professional Roofing Solutions in Chicago | Advanced Roofing Team',
        description: 'From flat roofs to shingles, we provide full-service roofing support including insurance claims assistance and 24/7 emergency repairs.',
        images: [{ url: '/icon.png' }],
    },
};

export default function RoofingPage() {
    return (
        <main>
            <RoofingContainer />
        </main>
    );
}