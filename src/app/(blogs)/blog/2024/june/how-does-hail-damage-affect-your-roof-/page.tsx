import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function HailDamageRoofBlogPage() {
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
                    <Link href="/blog/2024/june" className={styles.breadcrumbLink}>June</Link>
                    <span className={styles.breadcrumbSep}>/</span>
                    <span className={styles.breadcrumbCurrent}>How Does Hail Damage ...</span>
                </nav>

                <hr className={styles.breadcrumbDivider} />

                {/* TÍTULO + META */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        How Does Hail Damage Affect Your Roof?
                    </h1>
                    <div className={styles.metaInfo}>
                        <span>June 13, 2024</span>
                        <span className={styles.separator}>|</span>
                        <span>By Adrian</span>
                    </div>
                </header>

                {/* 2 COLUMNAS */}
                <div className={styles.twoCol}>

                    <div className={styles.imageCol}>
                        <Image
                            src="/assets/images/features/blog/r7daqr5l_1q.png"
                            alt="Hail damage affecting a residential roof"
                            width={1000}
                            height={700}
                            priority
                            className={styles.featuredImage}
                        />
                    </div>

                    <div className={styles.contentCol}>
                        <section className={styles.content}>
                            <p>
                                Living in Chicago, we are no strangers to severe weather conditions. From brutal winters to scorching summers, our homes are constantly subjected to nature's wrath. However, one type of extreme weather that often goes unnoticed but can cause significant damage to our roofs is hailstorms. In this blog, we will discuss the impact of hail damage on your roof and why it is crucial to address it immediately.
                            </p>

                            <h2 className={styles.subTitle}>Understanding Hail Damage</h2>
                            <p>
                                Hail is a type of frozen precipitation that falls from the sky during thunderstorms or tornadoes. It can range in size from small pellets to large golf balls and can have devastating effects on our roofs. When hail hits the roof, it can cause dents, cracks, and even punctures in the shingles. The damage may not be visible at first glance, but over time it can weaken the structure of your roof and lead to leaks and other issues.
                            </p>

                            <h2 className={styles.subTitle}>Effects on Asphalt and Metal Roofs</h2>
                            <p>
                                Most residential roofs in Chicago are made of asphalt shingles, which are susceptible to hail damage. When hail hits these shingles, it loosens the granules that protect them from UV rays and other elements. As a result, the underlying material is exposed and vulnerable to further damage. This can lead to premature aging of your roof and reduce its lifespan significantly.
                            </p>
                            <p>
                                Metal roofs are known for their durability and ability to withstand harsh weather conditions. However, even they are not immune to hail damage. When hit by large hailstones, metal roofs can dent and crack, compromising their structural integrity. These damages not only affect the aesthetics of your home but also increase the risk of water infiltration.
                            </p>

                            <h2 className={styles.subTitle}>Signs of Hail Damage</h2>
                            <p>
                                It is essential to inspect your roof after a hailstorm for any signs of damage. Some common signs include:
                            </p>
                            <ul className={styles.list}>
                                <li>Missing or cracked shingles</li>
                                <li>Dented metal panels</li>
                                <li>Granule loss on asphalt shingles</li>
                                <li>Water stains on your ceiling or in the attic</li>
                            </ul>
                            <p>
                                If you spot any of these signs, it is crucial to contact a professional roofing company immediately.
                            </p>

                            <h2 className={styles.subTitle}>The Importance of Timely Repairs</h2>
                            <p>
                                Ignoring hail damage can have severe consequences for your roof and your home. Any holes or cracks in the roof can allow water to penetrate and lead to mold growth, structural damage, and even compromise the safety of your family. Moreover, insurance companies may deny your claim if they find out that you did not address the issue promptly. Therefore, it is essential to act fast and get your roof repaired by a reputable roofing company.
                            </p>

                            <div className={styles.conclusion}>
                                <p>
                                    <strong>Final Thoughts:</strong> Hailstorms may seem harmless at first glance but can cause significant damage to our roofs over time. Regular maintenance and inspections by a professional roofing company can identify any weak spots in your roof and make necessary repairs before they become more significant issues. Whether you have an asphalt shingle or metal roof, it is crucial to inspect for any signs of hail damage after a storm and address them promptly. Don't wait until it's too late — protect your home from nature's fury with timely repairs and preventive measures.
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