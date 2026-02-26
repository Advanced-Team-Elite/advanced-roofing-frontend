'use client';

import Image from 'next/image';
import styles from './RoofingServicesSection.module.css';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

interface RoofingServicesSectionProps {
    title: string;
    imageSrc: string;
}

export const RoofingServicesSection = ({ title, imageSrc }: RoofingServicesSectionProps) => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                <div className={styles.textContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <h3 className={styles.subtitle}>EXPERIENCED ROOFING PROFESSIONALS</h3>

                    <p className={styles.paragraph}>
                        When your home's roof has received some wear-and-tear, whether over the years or from a recent event, you don't have to panic. Advanced Roofing can assist with your roofing, siding, and gutter needs and leave your home better than before. Backed by over 20 years of experience, our reputable roofing company is the obvious choice for all of your roofing repair and installation needs.
                    </p>

                    <p className={styles.paragraph}>
                        You can feel assured that your needs will be met by our team and that we will do the job correctly the first time.
                    </p>

                    <ul className={styles.benefitsList}>
                        <li className={styles.benefitItem}>
                            We offer 50-year inclusive manufacturer-back warranties.
                        </li>
                        <li className={styles.benefitItem}>
                            We have 24/7 emergency services available to clients in need.
                        </li>
                        <li className={styles.benefitItem}>
                            We are a GAF MasterElite Roofing Contractor and Owens Corner Preferred Contractor.
                        </li>
                        <li className={styles.benefitItem}>
                            We specialize in insurance claims assistance and catastrophe repairs.
                        </li>
                    </ul>

                    <div className={styles.ctaBanner}>
                        <p>
                            If you are facing major repairs or roofing needs, don't wait! {' '}
                            <Link href="/contact" className={styles.yellowLink}>
                                Contact our office today
                            </Link>{' '}
                            at <strong>(847) 262-9774</strong> and schedule a service.
                        </p>
                    </div>
                </div>

                <div className={styles.imageColumn}>
                    <div className={styles.yellowFrame}>
                        <div className={styles.imageWrapper}>
                            <ScrollReveal direction="right">
                                <Image
                                    src={imageSrc}
                                    alt="Advanced Roofing Service"
                                    width={1000}
                                    height={800}
                                    className={styles.mainImage}
                                    priority
                                />
                            </ScrollReveal>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};