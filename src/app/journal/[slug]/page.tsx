// src/app/journal/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getJournalMeta, fetchJournalPages } from "@/data/journals.data";
import { MagazineFlip } from "@/shared/components/MagazineFlip/MagazineFlip";
import styles from "./journal.module.css";
import Link from "next/link";

interface Props {
    params: Promise<{ slug: string }>;  // ← Promise ahora
}

export async function generateStaticParams() {
    return getAllSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;      // ← await aquí
    const meta = getJournalMeta(slug);
    if (!meta) return { title: "Journal Not Found" };
    return {
        title: `${meta.title} | Advanced Roofing Journal`,
        description: meta.description,
    };
}

export default async function JournalPage({ params }: Props) {
    const { slug } = await params;      // ← await aquí
    const meta = getJournalMeta(slug);
    if (!meta) notFound();

    const pages = await fetchJournalPages(meta.cloudinaryFolder);

    return (
        <main className={styles.main}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                <Link href="/journals">← All Journals</Link>
                <span>/</span>
                <span>{meta.title}</span>
            </nav>
            <MagazineFlip pages={pages} />
        </main>
    );
}