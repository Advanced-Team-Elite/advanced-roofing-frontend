import { FinancingContainer } from "@/features/financing/FinancingContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Roofing Financing Options Chicago | Affordable Payment Plans',
    description: 'Protect your home now and pay later. Advanced Roofing Team offers flexible roofing financing solutions, easy applications, and prompt approvals in Chicago.',
    keywords: [
        'roofing financing Chicago',
        'roof payment plans Illinois',
        'finance new roof',
        'affordable roofing solutions',
        'roof replacement financing',
        'emergency roof repair financing'
    ],
    openGraph: {
        title: 'Flexible Financing for Your New Roof | Advanced Roofing Team',
        description: 'Get the roofing services you need with convenient payment structures and fast approval. See our financing options today.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <FinancingContainer />
        </main>
    );
}