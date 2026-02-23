import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function TopSidingOptionsBlogPage() {
    return (
        <div>
            <article className={styles.container}>

                {/* BREADCRUMB */}
                <nav className={styles.breadcrumb}>
                    <Link href="/" className={styles.breadcrumbLink}>
                        <span className={styles.homeIcon}>⌂</span>
                    </Link>
                    <span className={styles.breadcrumbSep}>/</span>
                    <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
                    <span className={styles.breadcrumbSep}>/</span>
                    <Link href="/blog/2024" className={styles.breadcrumbLink}>2024</Link>
                    <span className={styles.breadcrumbSep}>/</span>
                    <Link href="/blog/2024/october" className={styles.breadcrumbLink}>October</Link>
                    <span className={styles.breadcrumbSep}>/</span>
                    <span className={styles.breadcrumbCurrent}>Top Siding Options ...</span>
                </nav>

                <hr className={styles.breadcrumbDivider} />

                {/* TÍTULO + META */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        Top Siding Options for Your Home in 2024
                    </h1>
                    <div className={styles.metaInfo}>
                        <span>October 01, 2024</span>
                        <span className={styles.separator}>|</span>
                        <span>By Adrian</span>
                    </div>
                </header>

                {/* 2 COLUMNAS */}
                <div className={styles.twoCol}>

                    <div className={styles.imageCol}>
                        <Image
                            src="/assets/images/features/blog/r7daqr5l_1q.png"
                            alt="Home siding options in 2024"
                            width={1000}
                            height={700}
                            priority
                            className={styles.featuredImage}
                        />
                    </div>

                    <div className={styles.contentCol}>
                        <section className={styles.content}>
                            <p>
                                As we step into 2024, the world of home siding is evolving with exciting innovations and trends. That is why we want to help you choose the right siding for your home.
                            </p>

                            <h2 className={styles.subTitle}>Vinyl Siding</h2>
                            <p>
                                Vinyl siding continues to be a popular choice for homeowners because it is affordable and low maintenance. Over the years, advancements have enhanced its durability and aesthetic appeal. Today's vinyl options come with UV protection, ensuring they retain color longer, and offer a wide range of textures and styles that mimic wood and stone. For those on a budget looking for versatile design options, vinyl is a fantastic choice.
                            </p>

                            <h2 className={styles.subTitle}>Fiber Cement</h2>
                            <p>
                                Fiber cement siding is renowned for its durability and resistance to the elements, making it an excellent choice for homeowners in areas prone to harsh weather. Made from a mix of cement, sand, and cellulose fibers, it mimics the look of wood but without the susceptibility to rot and pests. While its installation costs are higher than vinyl, its longevity and low maintenance often make it a cost-effective option over time. Plus, its fire-resistant properties add an extra layer of safety for your home!
                            </p>

                            <h2 className={styles.subTitle}>Wood Siding</h2>
                            <p>
                                If you love natural aesthetics, wood siding offers a classic and timeless appeal. Available in several styles like shingles, clapboard, and board-and-batten, wood can bring warmth and charm to any home. However, it does require regular maintenance to prevent rot and insect damage. Treat it as an investment in your home's beauty — sustainable options like reclaimed wood are gaining popularity, offering an eco-friendly choice that adds character to your home.
                            </p>

                            <h2 className={styles.subTitle}>Metal Siding</h2>
                            <p>
                                Metal siding, often made from aluminum or steel, is gaining traction for its sleek, modern look. It is incredibly durable, resistant to fire, and can withstand extreme weather conditions. Metal can be an excellent choice for contemporary-style homes, offering a unique aesthetic that stands out. While the initial cost can be high, its low maintenance requirements and long lifespan make it a worthwhile consideration for homeowners looking for a bold statement and a modern aesthetic.
                            </p>

                            <h2 className={styles.subTitle}>Eco-Friendly Options</h2>
                            <p>
                                As sustainability becomes a priority for many homeowners, eco-friendly siding options are trending in 2024. Materials like bamboo, reclaimed wood, and recycled metal are being used more frequently, offering environmentally conscious choices that don't compromise on style or durability. These materials not only reduce your home's carbon footprint but often provide excellent insulation, contributing to energy savings.
                            </p>

                            <h2 className={styles.subTitle}>Choosing The Right Siding</h2>
                            <p>
                                When selecting siding, consider your local climate, home style, and budget. For instance, if you live in a region with high humidity or frequent storms, materials like fiber cement or metal may be more appropriate due to their resistance to moisture and impact. Conversely, in drier climates, wood or vinyl can be excellent choices.
                            </p>
                            <p>
                                Your home's architectural style is also crucial. Modern homes pair well with metal or fiber cement, while traditional designs might benefit from the classic look of wood or vinyl. Lastly, always factor in your budget, considering not only the upfront costs but also long-term maintenance and energy efficiency.
                            </p>

                            <div className={styles.conclusion}>
                                <p>
                                    <strong>In conclusion,</strong> 2024 is bursting with siding options, each one bringing its own flair and fun to the table! So, take a moment to weigh your choices, and get ready to pick the perfect siding that'll not only boost your home's beauty but also make it the envy of the neighborhood for years to come. Let the siding adventure begin!
                                </p>
                            </div>
                        </section>
                    </div>

                </div>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>
    );
}