import Link from "next/link";
import Image from "next/image";
import { BreadCrumbsHomeIcon } from "@/shared/Icons/Icons";
import { ALL_POSTS } from "@/shared/utils/blogData"; // Asegúrate de que ALL_POSTS tenga la data completa
import styles from "../Category.module.css";
import { Footer } from "@/shared/components/layout/footer/Footer";

interface YearContainerProps {
    year: string;
}

const YearContainer = ({ year }: YearContainerProps) => {
    // Filtramos los posts que pertenecen al año de la URL
    // Buscamos el año dentro del fullPath (ej: /blog/2025/...) o por la propiedad date
    const filteredPosts = ALL_POSTS.filter((post) =>
        post.fullPath.includes(`/${year}/`)
    );

    return (
        <div>
            <div className={styles.wrapper}>
                {/* Breadcrumb de 3 niveles: Home / Blog / Año */}
                <nav className={styles.breadcrumb}>
                    <Link href="/" className={styles.homeLink}>
                        <BreadCrumbsHomeIcon size={14}/>
                    </Link>
                    <span className={styles.slash}>/</span>
                    <Link href="/blog">Blog</Link>
                    <span className={styles.slash}>/</span>
                    <span className={styles.active}>{year}</span>
                </nav>

                <div className={styles.separator}/>

                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Most Recent Posts from <span className={styles.categoryHighlight}>{year}</span>
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
                        <p className={styles.noPosts}>No posts found for the year {year}.</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default YearContainer;