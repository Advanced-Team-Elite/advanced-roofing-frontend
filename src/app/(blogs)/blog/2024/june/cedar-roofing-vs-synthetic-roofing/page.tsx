import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function CedarVsSyntheticRoofingBlogPage() {
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
                    <span className={styles.breadcrumbCurrent}>Cedar Roofing Vs ...</span>
                </nav>

                <hr className={styles.breadcrumbDivider} />

                {/* TÍTULO + META */}
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

                {/* 2 COLUMNAS */}
                <div className={styles.twoCol}>

                    <div className={styles.imageCol}>
                        <Image
                            src="/assets/images/features/blog/r7daqr5l_1q.png"
                            alt="Cedar roofing vs synthetic roofing comparison"
                            width={1000}
                            height={700}
                            priority
                            className={styles.featuredImage}
                        />
                    </div>

                    <div className={styles.contentCol}>
                        <section className={styles.content}>
                            <p>
                                Roofing is an essential component of any home, providing protection from external elements and ensuring the safety and comfort of those inside. When it comes to choosing a roofing material, homeowners are often faced with several options, each with its own unique set of benefits and drawbacks. In recent years, there has been a growing debate between two popular roofing materials — cedar and synthetic. In this blog, we will delve deeper into the differences between cedar roofing and synthetic roofing to help you make an informed decision.
                            </p>

                            <h2 className={styles.subTitle}>What is Cedar Roofing?</h2>
                            <p>
                                Cedar roofing has been around for centuries and is known for its natural beauty and durability. It is made from wood taken from cedar trees, which are native to North America. This type of roofing is popular among homeowners who prefer a more rustic look for their homes.
                            </p>

                            <h2 className={styles.subTitle}>Pros of Cedar Roofing</h2>
                            <ul className={styles.list}>
                                <li>Cedar roofing provides a timeless, natural look that adds character to any home. The wood has a warm color tone that can enhance the overall appearance of your property.</li>
                                <li>Since cedar is a renewable resource, it is considered an environmentally-friendly option for roofing. It also has natural insulating properties, helping to reduce energy consumption in your home.</li>
                                <li>Cedar wood contains natural oils that make it resistant to rot, decay, and insect infestations. With proper maintenance, cedar roofs can last up to 30 years or more.</li>
                                <li>Cedar shakes or shingles can be cut into different sizes and shapes, allowing for more flexibility in design options.</li>
                            </ul>

                            <h2 className={styles.subTitle}>Cons of Cedar Roofing</h2>
                            <ul className={styles.list}>
                                <li>While cedar roofs may last longer than other types of wood roofing, they still have a shorter lifespan compared to synthetic materials such as asphalt shingles or metal roofs.</li>
                                <li>The initial cost of installing a cedar roof can be high due to the quality of the material and skilled labor required for installation.</li>
                            </ul>

                            <h2 className={styles.subTitle}>What is Synthetic Roofing?</h2>
                            <p>
                                Synthetic roofing, also known as artificial or composite roofing, is made from a combination of materials such as plastic, rubber, and polymers. This type of roofing has gained popularity in recent years due to its durability and versatility.
                            </p>

                            <h2 className={styles.subTitle}>Pros of Synthetic Roofing</h2>
                            <ul className={styles.list}>
                                <li>Synthetic roofs can last up to 50 years or more, making them a long-term investment for homeowners.</li>
                                <li>Unlike cedar roofs that require regular maintenance, synthetic roofs are low maintenance and do not require frequent repairs or treatments.</li>
                                <li>While the initial cost of installing a synthetic roof may be higher than cedar roofing, it can save homeowners money in the long run due to its longevity and low maintenance requirements.</li>
                                <li>With synthetic roofing, you have a variety of styles and colors to choose from, allowing you to achieve your desired aesthetic for your home.</li>
                            </ul>

                            <h2 className={styles.subTitle}>Cons of Synthetic Roofing</h2>
                            <ul className={styles.list}>
                                <li>Some homeowners may prefer the natural look of cedar over the artificial appearance of synthetic roofing.</li>
                                <li>The production process of synthetic roofing materials can be harmful to the environment. However, some manufacturers offer eco-friendly options made from recycled materials.</li>
                                <li>Depending on the type of material used, synthetic roofing may be prone to fading or warping when exposed to high temperatures or direct sunlight for extended periods.</li>
                            </ul>

                            <div className={styles.conclusion}>
                                <p>
                                    <strong>Key Takeaway:</strong> Both cedar and synthetic roofing have their own set of advantages and disadvantages. Ultimately, the decision between the two will depend on personal preferences and specific needs. Cedar offers a natural beauty that cannot be replicated by any synthetic material but requires more maintenance and has a shorter lifespan. On the other hand, while synthetics may not have the same natural charm as cedar, they offer superior longevity and minimal upkeep requirements at a higher initial cost.
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