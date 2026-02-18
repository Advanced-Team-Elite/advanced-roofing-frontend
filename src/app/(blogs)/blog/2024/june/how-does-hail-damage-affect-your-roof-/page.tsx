import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function HailDamageEffectsPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera */}
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

                {/* Imagen Principal */}
                <div className={styles.featuredImageWrapper}>
                    <Image
                        src="/assets/images/features/blog/r7daqr5l_1q.png"
                        alt="Hail damage on roof shingles"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido */}
                <section className={styles.content}>
                    <p>
                        Living in Chicago, we are no strangers to severe weather conditions. From brutal winters to scorching summers,
                        our homes are constantly subjected to nature’s wrath. However, one type of extreme weather that often goes
                        unnoticed but can cause significant damage to our roofs is hailstorms.
                    </p>

                    <h2 className={styles.subTitle}>Understanding Hail Damage</h2>
                    <p>
                        Hail can range in size from small pellets to large golf balls. When hail hits the roof, it can cause dents,
                        cracks, and even punctures in the shingles. The damage may not be visible at first glance, but over time
                        it can weaken the structure of your roof and lead to leaks.
                    </p>



                    <h2 className={styles.subTitle}>Effects on Asphalt and Metal Roofs</h2>
                    <div className={styles.comparisonGrid}>
                        <div>
                            <h3>Asphalt Shingles</h3>
                            <p>
                                Hail hits these shingles and loosens the granules that protect them from UV rays.
                                This leads to premature aging and reduces the lifespan of the roof significantly.
                            </p>
                        </div>
                        <div>
                            <h3>Metal Roofs</h3>
                            <p>
                                Known for durability, but large hailstones can still cause dents and cracks,
                                compromising structural integrity and increasing the risk of water infiltration.
                            </p>
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>Signs of Hail Damage</h2>
                    <p>It is essential to inspect your roof after a hailstorm. Watch for these common signs:</p>
                    <ul className={styles.list}>
                        <li>Missing or cracked shingles.</li>
                        <li>Dented metal panels or gutters.</li>
                        <li>Granule loss (looks like dark sand in your gutters).</li>
                        <li>Water stains on your ceiling or in the attic.</li>
                    </ul>

                    <h2 className={styles.subTitle}>The Importance of Timely Repairs</h2>
                    <p>
                        Ignoring hail damage can have severe consequences. Any holes or cracks can allow water to penetrate
                        and lead to mold growth and structural damage. Moreover, insurance companies may deny your claim
                        if they find out that you did not address the issue promptly.
                    </p>

                    <div className={styles.conclusion}>
                        <p>
                            <strong>Don’t wait until it’s too late.</strong> Regular maintenance and inspections by a professional
                            roofing company can identify weak spots and protect your home from nature’s fury.
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>

    );
}