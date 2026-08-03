// src/app/journals/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllJournalsMeta, fetchJournalPages } from "@/data/journals.data";
import styles from "./journals.module.css";

export const metadata: Metadata = {
    title: "Roofing Journals | Advanced Roofing Team",
    description: "Browse all editions of the Advanced Roofing Team journal.",
};

export default async function JournalsPage() {
    const metas = getAllJournalsMeta();

    // Traer solo la primera imagen de cada tomo para la portada
    const journals = await Promise.all(
        metas.map(async (meta) => {
            const pages = await fetchJournalPages(meta.cloudinaryFolder);
            console.log("PAGES para", meta.slug, "→", pages.length, "páginas");
            console.log("Primera URL:", pages[0]?.image ?? "VACÍA");
            return { ...meta, cover: pages[0]?.image ?? "", pageCount: pages.length - 1 };
        })
    );

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h1 className={styles.title}>Our Journal</h1>
                <p className={styles.subtitle}>
                    Monthly stories, projects &amp; expertise from our team
                </p>
            </header>

            <div className={styles.grid}>
                {journals.map((journal) => (
                    <Link key={journal.slug} href={`/journal/${journal.slug}`} className={styles.card}>
                        <div className={styles.coverWrapper}>
                            <Image
                                src={journal.cover}
                                alt={`${journal.title} cover`}
                                fill
                                className={styles.coverImage}
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                            />
                            <div className={styles.coverOverlay} />
                            <span className={styles.edition}>{journal.edition}</span>
                        </div>
                        <div className={styles.cardBody}>
                            <h2 className={styles.cardTitle}>{journal.title}</h2>
                            {journal.description && (
                                <p className={styles.cardDesc}>{journal.description}</p>
                            )}
                            <div className={styles.cardMeta}>
                                <span>{journal.pageCount} pages</span>
                                <span className={styles.readCta}>Read now →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}