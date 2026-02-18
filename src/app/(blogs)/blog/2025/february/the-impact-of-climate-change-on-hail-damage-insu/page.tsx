import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function ClimateChangeBlogPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        The Impact of Climate Change on Hail Damage Insurance Policies
                    </h1>
                    <div className={styles.metaInfo}>
                        <span>February 06, 2025</span>
                        <span className={styles.separator}>|</span>
                        <span>By Adrian</span>
                    </div>
                </header>

                {/* Imagen Principal */}
                <div className={styles.featuredImageWrapper}>
                    <Image
                        src="/assets/images/features/blog/r7daqr5l_1q.png"
                        alt="Storm clouds and roof protection"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido */}
                <section className={styles.content}>
                    <p>
                        Hailstorms have long been recognized as one of the most damaging weather events, capable of wreaking havoc on rooftops, vehicles, and property.
                        However, as climate change drives an increase in the frequency and severity of hailstorms, the insurance industry is facing new challenges.
                    </p>

                    <h2 className={styles.subTitle}>Rising Hailstorm Frequency and Intensity</h2>
                    <p>
                        Data from the National Oceanic and Atmospheric Administration (NOAA) reveals a steady rise in extreme weather events.
                        With larger hailstones and longer storm durations becoming commonplace, the financial impact has surged.
                        A single hailstorm in 2022 caused an estimated $2 billion in property damage in the U.S.
                    </p>

                    <h2 className={styles.subTitle}>How Insurance Policies Are Changing</h2>
                    <ul className={styles.list}>
                        <li>
                            <strong>Higher Deductibles:</strong> Introduction of separate percentages (e.g., 2% of home value) specifically for wind and hail.
                        </li>
                        <li>
                            <strong>Premium Rate Adjustments:</strong> Higher costs for homeowners in "Hail Alley" regions due to sophisticated risk modeling.
                        </li>
                        <li>
                            <strong>Material-Based Policies:</strong> Incentives for installing impact-resistant materials like Class 4 shingles.
                        </li>
                        <li>
                            <strong>Coverage Limitations:</strong> Stricter rules on "cosmetic damage" (like dings on metal roofs) that don't affect structural integrity.
                        </li>
                    </ul>

                    {/* Bloque de Caso de Estudio */}
                    <div className={styles.caseStudy}>
                        <h3>Case Study: Comparing Policies in Hail-Prone Regions</h3>
                        <p>
                            <strong>Homeowner A:</strong> Traditional policy, flat $1,000 deductible. High annual premiums due to regional risk.
                        </p>
                        <p>
                            <strong>Homeowner B:</strong> Higher hail-specific deductible but uses impact-resistant roofing. Lower annual premiums, making it more cost-effective over time.
                        </p>
                    </div>

                    <h2 className={styles.subTitle}>How to Protect Yourself</h2>
                    <p>Practical steps to safeguard your property and finances:</p>
                    <ul className={styles.list}>
                        <li><strong>Review Your Policy:</strong> Check for exclusions on cosmetic damage.</li>
                        <li><strong>Understand Your Deductible:</strong> Know your out-of-pocket costs before a storm hits.</li>
                        <li><strong>Invest in Prevention:</strong> Upgrade to impact-resistant materials.</li>
                        <li><strong>Consult an Expert:</strong> Work with agents to explore hail-specific add-ons.</li>
                    </ul>

                    <div className={styles.conclusion}>
                        <p>
                            <strong>Final Thoughts:</strong> Climate change is reshaping the insurance landscape.
                            Staying informed and proactive is the best way to ensure your home remains protected
                            against nature's unpredictability.
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>

    );
}