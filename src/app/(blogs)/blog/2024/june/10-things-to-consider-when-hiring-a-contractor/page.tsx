import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer";

export default function HiringContractorBlogPage() {
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
                    <span className={styles.breadcrumbCurrent}>10 Things to ...</span>
                </nav>

                <hr className={styles.breadcrumbDivider} />

                {/* TÍTULO + META */}
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

                {/* 2 COLUMNAS */}
                <div className={styles.twoCol}>

                    <div className={styles.imageCol}>
                        <Image
                            src="/assets/images/features/blog/r7daqr5l_1q.png"
                            alt="Hiring a roofing contractor"
                            width={1000}
                            height={700}
                            priority
                            className={styles.featuredImage}
                        />
                    </div>

                    <div className={styles.contentCol}>
                        <section className={styles.content}>
                            <p>
                                As a homeowner, there may come a time when you need to hire a contractor for your roofing needs. It's important to choose the right contractor for the job to ensure that your roof is installed or repaired properly. With so many contractors out there, it can be overwhelming to know who to trust with such an important task. That's why we've compiled a list of 10 things to consider when hiring a contractor.
                            </p>

                            <ul className={styles.list}>
                                <li>
                                    <strong>Reputation & Experience:</strong> The first thing you should consider when choosing a contractor is their reputation and experience in the industry. Look for reviews online and ask for references from previous clients. A reputable and experienced contractor will have a track record of satisfied customers.
                                </li>
                                <li>
                                    <strong>Licensing & Insurance:</strong> It's crucial to make sure that the contractor you hire is licensed and insured. This protects both you and the contractor in case of any accidents or damages during the project.
                                </li>
                                <li>
                                    <strong>Specialization:</strong> When looking for a roofing contractor, it's essential to find one who specializes in roofing rather than a general contractor who offers various services. A specialized roofing contractor will have more knowledge and expertise in this specific area.
                                </li>
                                <li>
                                    <strong>Local Presence:</strong> Hiring a local contractor has its advantages, as they are more familiar with the climate and building codes in your area. They will also have easier access to materials and resources needed for your project.
                                </li>
                                <li>
                                    <strong>Written Estimates:</strong> Before starting any work, make sure to get written estimates from multiple contractors. This will give you an idea of the market rate for your project, as well as help you compare contractors based on pricing and services offered.
                                </li>
                                <li>
                                    <strong>Communication Skills:</strong> Good communication is key when working with any professional service provider, including contractors. Make sure that the contractor you hire has good communication skills, is responsive to your inquiries, and keeps you updated throughout the project.
                                </li>
                                <li>
                                    <strong>Quality Materials:</strong> The quality of materials used for your roofing project is crucial in determining its durability and lifespan. Make sure to discuss with the contractor the materials they will be using and ensure that they are of good quality.
                                </li>
                                <li>
                                    <strong>Warranty:</strong> A reputable contractor will provide a warranty for their work. This ensures that they stand behind the quality of their work and are willing to fix any issues that may arise after completion of the project.
                                </li>
                                <li>
                                    <strong>Timeline:</strong> It's important to discuss the timeline for your project with the contractor before starting any work. A good contractor will be able to give you a realistic timeline and stick to it, ensuring that your project is completed within a reasonable time frame.
                                </li>
                                <li>
                                    <strong>Payment Terms:</strong> Before hiring a contractor, make sure to discuss payment terms. Avoid paying the full amount upfront, as this can be risky. A reputable contractor will have flexible payment options and will only require a small deposit upfront.
                                </li>
                            </ul>

                            <div className={styles.conclusion}>
                                <p>
                                    <strong>Final Thoughts:</strong> Take your time to research and consider these ten factors before making your final decision. Don't hesitate to ask questions and clarify any doubts or concerns you may have before signing any contracts or starting any work. With the right contractor by your side, you can rest assured that your roof is in good hands.
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