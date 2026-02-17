import Image from "next/image";
import styles from "./Blog.module.css";

interface BlogCardProps {
    title: string;
    date: string;
    image: string;
}

const BlogCard = ({ title, date, image }: BlogCardProps) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Image src={image} alt={title} fill className={styles.blogImage} />
        </div>
        <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDate}>{date}</p>
        </div>
    </div>
);

export default BlogCard;