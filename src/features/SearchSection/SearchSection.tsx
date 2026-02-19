"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './SearchSection.module.css';

const SearchSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState<any[]>([]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (searchTerm.trim().length > 0) {
                try {
                    const res = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);

                    if (!res.ok) {
                        throw new Error(`Server error: ${res.status}`);
                    }

                    const data = await res.json();
                    setResults(Array.isArray(data) ? data : []);
                } catch (err) {
                    console.error("Fetch error:", err);
                    setResults([]);
                }
            } else {
                setResults([]);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>How Can We Help You?</h2>

                <div className={styles.searchBox}>
                    <label className={styles.label}>Search by keyword</label>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Type to search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className={styles.searchButton}>Search</button>
                    </div>
                </div>

                {results.length > 0 && (
                    <div className={styles.resultsArea}>
                        <h3 className={styles.resultsTitle}>Found Sections</h3>
                        <div className={styles.grid}>
                            {results.map((result, index) => (
                                <div key={index} className={styles.card}>
                                    <h4 className={styles.cardTitle}>{result.title}</h4>
                                    {result.description && (
                                        <p className={styles.cardDescription}>{result.description}</p>
                                    )}
                                    <Link href={result.link} className={styles.visitBtn}>
                                        Visit Page
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SearchSection;