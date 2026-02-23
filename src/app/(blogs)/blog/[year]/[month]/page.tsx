import MonthContainer from "@/features/blog/month/MonthContainer";

export default async function MonthPage({ params }: { params: Promise<{ year: string; month: string }> }) {
    const { year, month } = await params;
    return <MonthContainer year={year} month={month} />;
}