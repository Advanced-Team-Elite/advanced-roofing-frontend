import { Metadata } from 'next';
import { FlatRoofRepairContainer } from "@/features/roofing/flat-roof-repair/FlatRoofRepairContainer";

export const metadata: Metadata = {
    title: 'Flat Roof Repair Chicago | TPO, EPDM & Rubber Roof Specialists',
    description: 'Expert flat roof repair in Chicago. We fix ponding water, membrane leaks, and storm damage for TPO, EPDM, and modified bitumen systems. 24/7 emergency service.',
    keywords: [
        'flat roof repair Chicago',
        'TPO roofing contractors',
        'EPDM roof repair Illinois',
        'commercial flat roof leak',
        'ponding water repair',
        'modified bitumen roofing',
        'rubber roof repair Chicago'
    ],
    openGraph: {
        title: 'Specialized Flat Roof Repair in Chicago | Advanced Roofing Team',
        description: 'Protect your property from Chicago’s freeze-thaw cycles. Specialized repair for flat roofing systems with insurance claim support.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <FlatRoofRepairContainer />
        </main>
    );
}