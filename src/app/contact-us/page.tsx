import ContactUsPage from "@/features/contact-us/ContactUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | Chicago Roofers',
    description: 'Looking for expert Chicago roofers? Contact Advanced Roofing Team for 24/7 storm damage support, free roof inspections, and professional estimates in the Chicagoland area.',
    keywords: [
        'Chicago roofers contact',
        'roofing estimate Chicago',
        'emergency roof repair contact',
        'roofing company phone number Des Plaines',
        'storm damage inspection request',
        'local roofing contractors Chicago'
    ],
    openGraph: {
        title: 'Work with the Best Chicago Roofers | Advanced Roofing Team',
        description: 'Get your free roofing or storm damage estimate today. Our team is ready to help you restore and protect your property.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <ContactUsPage />
        </main>
    );
}