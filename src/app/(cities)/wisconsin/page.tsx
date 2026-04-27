import { Metadata } from 'next';
import TinleyParkIlContainer from "@/features/areas-we-serve/tinley-park-il/TinleyParkIlContainer";
import WisconsinContainer from "@/features/areas-we-serve/wisconsin/WisconsinContainer";

export const metadata: Metadata = {
    title: 'Roofing Contractor in Wisconsin | Advanced Roofing Team',
    description: 'Certified roofing, siding, and gutter services in Wisconsin. Local experts for 24/7 storm damage repair and premium roof replacement.',
    keywords: ['Wisconsin', 'roof repair Wisconsin', 'Wisconsin roofing company', 'storm damage repair 60477'],
    openGraph: {
        title: 'Wisconsin Roofing & Storm Damage Services',
        description: 'Premium roofing solutions in Wisconsin. GAF Master Elite and Owens Corning Preferred contractors.',
        images: [{ url: '/icon.png' }],
    },
};

export default function Page() {
    return <WisconsinContainer />;
}