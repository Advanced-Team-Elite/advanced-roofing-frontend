import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function CedarVsSyntheticBlogPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        Cedar Roofing Vs Synthetic Roofing
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
                        alt="Cedar vs Synthetic roofing comparison"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido */}
                <section className={styles.content}>
                    <p>
                        Roofing is an essential component of any home, providing protection from external elements and ensuring
                        the safety and comfort of those inside. In recent years, there has been a growing debate between two
                        popular roofing materials: <strong>cedar and synthetic</strong>.
                    </p>

                    <h2 className={styles.subTitle}>What is Cedar Roofing?</h2>
                    <p>
                        Cedar roofing has been around for centuries and is known for its natural beauty and durability.
                        It is made from wood taken from cedar trees native to North America, popular among homeowners
                        who prefer a more rustic and timeless look.
                    </p>

                    <div className={styles.columns}>
                        <div className={styles.proBox}>
                            <h3>Pros of Cedar</h3>
                            <ul>
                                <li><strong>Natural Aesthetics:</strong> Adds character with warm color tones.</li>
                                <li><strong>Eco-Friendly:</strong> Renewable resource with natural insulating properties.</li>
                                <li><strong>Durability:</strong> Natural oils resist rot and insects; lasts up to 30 years.</li>
                                <li><strong>Flexibility:</strong> Can be cut into different sizes and shapes.</li>
                            </ul>
                        </div>
                        <div className={styles.conBox}>
                            <h3>Cons of Cedar</h3>
                            <ul>
                                <li><strong>Lifespan:</strong> Shorter than synthetic materials or metal.</li>
                                <li><strong>Maintenance:</strong> Requires regular treatments to prevent decay.</li>
                                <li><strong>Initial Cost:</strong> High quality material and skilled labor required.</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className={styles.subTitle}>What is Synthetic Roofing?</h2>
                    <p>
                        Synthetic roofing (composite roofing) is made from a combination of plastic, rubber, and polymers.
                        It has gained popularity due to its incredible ability to mimic natural materials with much higher resilience.
                    </p>

                    <div className={styles.columns}>
                        <div className={styles.proBox}>
                            <h3>Pros of Synthetic</h3>
                            <ul>
                                <li><strong>Longevity:</strong> Can last up to 50 years or more.</li>
                                <li><strong>Low Maintenance:</strong> Does not require frequent repairs or treatments.</li>
                                <li><strong>Cost-Effective:</strong> Saves money over time due to low upkeep.</li>
                                <li><strong>Variety:</strong> Wide range of styles and colors available.</li>
                            </ul>
                        </div>
                        <div className={styles.conBox}>
                            <h3>Cons of Synthetic</h3>
                            <ul>
                                <li><strong>Aesthetics:</strong> Some prefer the real look of wood over "artificial" tiles.</li>
                                <li><strong>Environmental Impact:</strong> Production can be less eco-friendly than wood.</li>
                                <li><strong>Heat Sensitivity:</strong> Some materials may warp in extreme temperatures.</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.conclusion}>
                        <h3>Key Takeaway</h3>
                        <p>
                            Ultimately, the decision depends on your priorities. <strong>Cedar</strong> offers a natural beauty
                            that cannot be replicated but requires more maintenance. <strong>Synthetics</strong> offer superior
                            longevity and minimal upkeep at a higher initial cost.
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>

    );
}