import Link from "next/link";
import { BreadCrumbsHomeIcon} from "@/shared/Icons/Icons";
import BlogCard from "./BlogCard";
import { BLOG_POSTS} from "@/shared/utils/blogData";
import styles from "./Blog.module.css";
import {Footer} from "@/shared/components/layout/footer/Footer";
import {ContactUsForWeather} from "@/shared/components/ContactUsForWeather/ContactUsForWeather";

const BlogContainer = () => {
    return (
        <div>
            <main className={styles.mainWrapper}>
                {/* Breadcrumb */}
                <nav className={styles.breadcrumb}>
                    <Link href="/" className={styles.homeLink}>
                        <BreadCrumbsHomeIcon size={14}/>
                    </Link>
                    <span>/</span>
                    <Link href="/blog">Blog</Link>
                </nav>
                <div className={styles.separator}/>

                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.titleGroup}>
                        <h1 className={styles.title}>Blog</h1>
                        <p className={styles.categoryLabel}>Uncategorized</p>
                    </div>
                    <Link href="/blog/categories/uncategorized/" className={styles.viewMoreBtn}>
                        View More
                    </Link>
                </header>

                {/* Grid 2x2 */}
                <div className={styles.blogGrid}>
                    {BLOG_POSTS.map((post, index) => (
                        <Link href={post.fullPath} key={index} className={styles.cardLink}>
                            <BlogCard {...post} />
                        </Link>
                    ))}
                </div>
            </main>
            <Footer/>
        </div>

    );
};

export default BlogContainer;