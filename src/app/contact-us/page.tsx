// app/contact-us/page.tsx
import ContactUsPage from "@/features/contact-us/ContactUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | Chicago Roofers',
    description: 'Contact Chicago’s expert roofing team for a free estimate on roof repairs, siding, and storm damage inspections.',
};

export default function Page() {
    return (
        <main>
            <ContactUsPage />
        </main>
    );
}