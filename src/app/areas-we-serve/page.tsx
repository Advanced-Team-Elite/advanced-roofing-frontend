import { AreasWeServeContainer } from "@/features/areas-we-serve/AreasWeServeContainer";
import { Metadata } from "next";
import {CommercialRoofingContainer} from "@/features/commercial-roofing/CommercialRoofingContainer";

export const metadata: Metadata = {
    title: 'Areas We Serve | Roofing Services Across Chicago & Suburbs',
    description: 'Advanced Roofing Team proudly serves Chicago and 25+ suburbs including Naperville, Schaumburg, and Arlington Heights. Professional roofing and storm recovery near you.',
    keywords: [
        'roofing services Chicagoland',
        'roofers in Chicago suburbs',
        'Arlington Heights roofing',
        'Naperville roof repair',
        'Schaumburg roofing contractor',
        'storm damage repair Illinois',
        'local roofing company Chicago'
    ],
    openGraph: {
        title: 'Roofing Services Throughout the Greater Chicagoland Area',
        description: 'From Des Plaines to Naperville, we provide expert residential and commercial roofing. Check if we serve your community.',
        images: [{ url: '/icon.png' }],
    },
};

export default function AreasWeServePage() {
    return (
        <main>
            <AreasWeServeContainer />
        </main>
    );
}