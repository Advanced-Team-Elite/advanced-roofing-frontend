import Link from "next/link";
import Image from "next/image";
import { BreadCrumbsHomeIcon} from "@/shared/Icons/Icons";
import { ALL_POSTS} from "@/shared/utils/blogData";
import styles from "./Category.module.css";

interface CategoryContainerProps {
    category: string;
}

const CategoryContainer = ({ category }: CategoryContainerProps) => {
    const safeCategory = category || "Uncategorized";

    const categoryName = safeCategory.charAt(0).toUpperCase() + safeCategory.slice(1);

    return (
        <div className={styles.wrapper}>
            {/* Breadcrumb con 3 niveles */}
            <nav className={styles.breadcrumb}>
                <Link href="/" className={styles.homeLink}>
                    <BreadCrumbsHomeIcon size={14}/>
                </Link>
                <span className={styles.slash}>/</span>
                <Link href="/blog">Blog</Link>
                <span className={styles.slash}>/</span>
                <span className={styles.active}>Categories</span>
                <span className={styles.slash}>/</span>
                <span className={styles.active}>{categoryName}</span>
            </nav>

            <div className={styles.separator}/>

            <header className={styles.header}>
                <h1 className={styles.title}>
                    Most Recent Posts in <span className={styles.categoryHighlight}>{categoryName}</span>
                </h1>
            </header>

            {/* Grid sin límite de filas */}
            <div className={styles.blogGrid}>
                {ALL_POSTS.map((post, index) => (
                    <Link href={post.fullPath} key={index} className={styles.cardLink}>
                        <article className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.cardDate}>{post.date}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryContainer;