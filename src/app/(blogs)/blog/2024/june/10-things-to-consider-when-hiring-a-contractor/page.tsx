import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function HiringContractorBlogPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        10 Things to Consider When Hiring a Contractor
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
                        alt="Contractor discussing roofing project"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido */}
                <section className={styles.content}>
                    <p>
                        As a homeowner, there may come a time when you need to hire a contractor for your roofing needs.
                        It’s important to choose the right professional to ensure that your roof is installed or repaired properly.
                        With so many options out there, we’ve compiled a list of 10 essential things to consider.
                    </p>

                    <div className={styles.tipsGrid}>
                        <div className={styles.tipItem}>
                            <h3>1. Reputation & Experience</h3>
                            <p>Look for online reviews and ask for references. A reputable contractor will have a track record of satisfied customers and years of experience in the industry.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>2. Licensing & Insurance</h3>
                            <p>It’s crucial to ensure your contractor is licensed and insured. This protects you from liability in case of accidents or damages during the project.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>3. Specialization</h3>
                            <p>Find a contractor who specializes in roofing specifically, rather than a generalist. They will have deeper knowledge of roofing systems and materials.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>4. Local Presence</h3>
                            <p>Local contractors are familiar with Chicago's climate and building codes. Plus, they are easier to reach if you need follow-up service.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>5. Written Estimates</h3>
                            <p>Always get detailed written estimates from multiple providers. This allows you to compare pricing and the scope of services accurately.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>6. Communication Skills</h3>
                            <p>Your contractor should be responsive and keep you updated throughout the process. Good communication prevents misunderstandings.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>7. Quality Materials</h3>
                            <p>Discuss the brands and types of materials they use. High-quality shingles and underlayment are essential for a long-lasting roof.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>8. Warranty</h3>
                            <p>A reputable contractor stands behind their work. Ask about both the manufacturer's warranty and the contractor's workmanship warranty.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>9. Timeline</h3>
                            <p>Ensure you have a realistic start and completion date. A professional should be able to manage the project within a reasonable timeframe.</p>
                        </div>

                        <div className={styles.tipItem}>
                            <h3>10. Payment Terms</h3>
                            <p>Avoid paying the full amount upfront. Reputable contractors typically ask for a small deposit and offer flexible payment terms upon milestones.</p>
                        </div>
                    </div>

                    <div className={styles.conclusion}>
                        <p>
                            Take your time to research and consider these factors before making your final decision.
                            Don’t hesitate to ask questions or clarify doubts before signing a contract.
                            With the right professional by your side, your home is in good hands.
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>
    );
}