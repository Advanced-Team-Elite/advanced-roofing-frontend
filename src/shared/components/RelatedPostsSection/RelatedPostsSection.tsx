"use client";

import { usePathname } from 'next/navigation';
import { ALL_POSTS } from "@/shared/utils/blogData";
import BlogCard from "@/features/blog/BlogCard";
import styles from './RelatedPostsSection.module.css';
import Link from "next/link";

export default function RelatedPostsSection() {
    const pathname = usePathname();

    const getRelatedPosts = (currentPath: string, allPosts: any[]) => {
        return allPosts
            .filter(post => post.fullPath !== currentPath)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
    };

    const related = getRelatedPosts(pathname, ALL_POSTS);

    if (related.length === 0) return null;

    return (
        <section className={styles.relatedSection}>
            <div className={styles.container}>
                <h2 className={styles.relatedTitle}>Related Posts</h2>
                <div className={styles.relatedGrid}>
                    {related.map((post, index) => (
                        <Link
                            href={post.fullPath}
                            key={index}
                            className={styles.cardWrapper}
                        >
                            <BlogCard {...post} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}