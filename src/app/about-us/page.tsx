import AboutContainer from "@/features/about-us/AboutContainer";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Advanced Roofing Team',
    description: 'Serving Chicago since 2004. We are Haag Certified, Owens Corning Preferred, and GAF Master Elite contractors specializing in storm damage recovery and roof replacement.',
    keywords: [
        'Chicago roofing company',
        'Haag Certified inspectors',
        'GAF Master Elite Chicago',
        'Owens Corning Preferred Contractor',
        'storm damage specialists Illinois'
    ],
    openGraph: {
        title: 'Meet Chicago’s Trusted Roofing Team | Advanced Roofing Team',
        description: 'Two decades of experience in roof installations and insurance claims assistance. Get to know our professional crew.',
        images: [{ url: '/icon.png' }],
    },
};

export default function AboutPage() {
    return (
        <main>
            <AboutContainer />
        </main>
    );
}