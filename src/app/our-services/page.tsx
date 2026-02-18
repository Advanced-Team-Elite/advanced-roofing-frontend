// app/our-services/page.tsx
import OurServicesContainer from "@/features/our-services/OurServicesContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Our Services | Chicago Roofers',
    description: 'Explore our professional roofing, siding, and gutter services. We provide high-quality installations and repairs tailored to Chicago’s weather.',
};

export default function OurServicesPage() {
    return (
        <main>
            <OurServicesContainer/>
        </main>
    );
}