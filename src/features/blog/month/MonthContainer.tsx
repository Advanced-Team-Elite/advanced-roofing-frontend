import Link from "next/link";
import Image from "next/image";
import { BreadCrumbsHomeIcon } from "@/shared/Icons/Icons";
import { ALL_POSTS } from "@/shared/utils/blogData";
import styles from "../Category.module.css";
import { Footer } from "@/shared/components/layout/footer/Footer";

interface MonthContainerProps {
    year: string;
    month: string;
}

const MonthContainer = ({ year, month }: MonthContainerProps) => {
    const filteredPosts = ALL_POSTS.filter((post) =>
        post.fullPath.includes(`/${year}/${month}/`)
    );

    const monthLabel = month.charAt(0).toUpperCase() + month.slice(1);

    return (
        <div>
            <div className={styles.wrapper}>
                <nav className={styles.breadcrumb}>
                    <Link href="/" className={styles.homeLink}>
                        <BreadCrumbsHomeIcon size={14}/>
                    </Link>
                    <span className={styles.slash}>/</span>
                    <Link href="/blog">Blog</Link>
                    <span className={styles.slash}>/</span>
                    <Link href={`/blog/${year}`}>{year}</Link>
                    <span className={styles.slash}>/</span>
                    <span className={styles.active}>{monthLabel}</span>
                </nav>

                <div className={styles.separator}/>

                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Most Recent Posts from <span className={styles.categoryHighlight}>{monthLabel} {year}</span>
                    </h1>
                </header>

                <div className={styles.blogGrid}>
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <Link href={post.fullPath} key={index} className={styles.cardLink}>
                                <article className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.blogImage}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h3 className={styles.cardTitle}>{post.title}</h3>
                                        <p className={styles.cardDate}>{post.date}</p>
                                    </div>
                                </article>
                            </Link>
                        ))
                    ) : (
                        <p className={styles.noPosts}>No posts found for {monthLabel} {year}.</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MonthContainer;