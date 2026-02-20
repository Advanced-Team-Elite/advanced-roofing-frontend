import { Metadata } from 'next';
import { SkylightRepairContainer } from "@/features/roofing/skylight-repair/SkylightRepairContainer";

export const metadata: Metadata = {
    title: 'Skylight & Storm Damage Repair Chicago | 24/7 Emergency Service',
    description: 'Fast repair for leaking skylights and storm-damaged roofs in Chicago. Haag Certified inspectors for hail and wind damage. 24/7 emergency response and insurance help.',
    keywords: [
        'skylight repair Chicago',
        'storm damage roof repair',
        'hail damage inspection Chicago',
        'leaking skylight fix',
        'wind damage roofing Illinois',
        'Haag Certified roof inspector',
        'emergency skylight repair'
    ],
    openGraph: {
        title: 'Emergency Storm & Skylight Repair | Advanced Roofing Team',
        description: 'Expert repairs for wind and hail damage. Our Haag Certified team handles inspections and insurance claims to restore your home fast.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return (
        <main>
            <SkylightRepairContainer />
        </main>
    );
}