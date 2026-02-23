import { Metadata } from 'next';
import { TileRoofRepairContainer } from "@/features/roofing/tile-roof-repair/TileRoofRepairContainer";

export const metadata: Metadata = {
    title: 'Tile Roof Repair Chicago | Specialist for Clay & Concrete Tiles',
    description: 'Specialized tile roof repair in Chicago. We fix cracked clay tiles, mortar deterioration, and underlayment leaks. Expert service for Spanish and concrete tile roofs.',
    keywords: [
        'tile roof repair Chicago',
        'clay tile roofing specialists',
        'concrete tile repair Illinois',
        'Spanish tile roof leak',
        'tile roof underlayment repair',
        'cracked roof tile replacement',
        'tile roofing contractors Chicago'
    ],
    openGraph: {
        title: 'Expert Tile Roofing Repair & Restoration | Advanced Roofing Team',
        description: 'Protect your premium tile roof from Chicago’s freeze-thaw cycles. Specialized repair, thorough inspections, and insurance claim support.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <TileRoofRepairContainer />
        </main>
    );
}