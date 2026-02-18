'use client';

import Image from 'next/image';
import styles from './HandleRoofingProjectSection.module.css';
interface StormRecoveryProps {
    city: string;
}

export const HandleRoofingProjectSection = ({ city }: StormRecoveryProps) => {
    return (
        <section className={styles.recoverySection}>
            <div className={styles.container}>

                {/* Bloque de Imagen con Marco y Logo */}
                <div className={styles.imageContainer}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/home/content-v15.png"
                                alt="Roofing worker repairing storm damage"
                                width={600}
                                height={500}
                                className={styles.mainImage}
                            />
                        </div>
                    </div>
                </div>

                {/* Bloque de Texto */}
                <div className={styles.textContent}>
                    <h2 className={styles.title}>
                        We Handle Your Roofing Project From Start to Finish
                    </h2>

                    <div className={styles.bodyText}>
                        <p>
                            At Advanced Roofing, we understand each customer’s needs and projects are unique. Our knowledgeable and licensed roofers have the skills to handle any situation, including the big problems. We specialize in insurance claims and catastrophe damage. If a storm has severely damaged your home, we can help you estimate the damage and retain coverage for your project.
                        </p>

                        <p>
                            Seek our {city} roofing company if you need assistance with:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                Roof installations
                            </li>
                            <li className={styles.benefitItem}>
                                Residential roofing projects
                            </li>
                            <li className={styles.benefitItem}>
                                Commercial roofing projects
                            </li>
                            <li className={styles.benefitItem}>
                                Severe storm damage
                            </li>
                        </ul>

                        <p>
                            Are you a first-time client? Reach out to our licensed and certified roofers and we can set you up with a free estimate. Don’t settle for another roofing company when our expert roofing team is ready to assist.
                        </p>
                        <p>
                            Give us a call at (847) 262-9774 or schedule an appointment online to get started on your roofing project!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};