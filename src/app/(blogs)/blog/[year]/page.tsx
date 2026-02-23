import YearContainer from "@/features/blog/year/YearContainer";

export default async function YearPage({ params }: { params: Promise<{ year: string }> }) {
    const { year } = await params;
    return <YearContainer year={year} />;
}