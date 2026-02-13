"use client";
import React from 'react';
import styles from './KeyBenefits.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

const KeyBenefits = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>

                <h2 className={styles.mainTitle}>KEY BENEFITS OF WORKING WITH US</h2>

                <div className={styles.content}>
                    <p className={styles.description}>
                        Working with an Owens Corning Preferred Contractor is the limited lifetime warranties
                        that come with their roofing products. These warranties offer homeowners peace of mind,
                        knowing that their investment is protected and that they can rely on the durability
                        and performance of their roof for years to come. With an Owens Corning Preferred Contractor,
                        you can rest assured that your roof is in good hands and that any issues or concerns
                        will be addressed promptly and effectively.
                    </p>

                    <h3 className={styles.subTitle}>EXCLUSIVE SERVICES BY OWENS CORNING</h3>
                    <p className={styles.description}>
                        Furthermore, Owens Corning Preferred Contractors have access to exclusive tools,
                        resources, and support from Owens Corning, which enables them to provide superior
                        service and results for their customers. Whether you are in need of a roof repair,
                        replacement, or installation, you can count on an Owens Corning Preferred Contractor
                        to deliver exceptional workmanship and exceptional results.
                    </p>

                    <h3 className={styles.subTitle}>PROUDLY SERVING QUALITY SERVICE</h3>
                    <p className={styles.description}>
                        At Advanced Roofing team, we are proud to be an Owens Corning Preferred Contractor,
                        dedicated to providing our customers with the highest level of service and quality.
                        With our team of skilled professionals and access to top-of-the-line Owens Corning
                        roofing materials, we are equipped to handle all of your roofing needs with precision and care.
                    </p>
                </div>
                
                <div className={styles.ctaBox}>
                    <p className={styles.ctaText}>
                        When you choose Advanced Roofing Team as your Owens Corning Preferred Contractor,
                        you can trust that you are making a wise investment in the longevity and protection
                        of your home. Contact us today to learn more about our services and how we can help
                        you achieve a beautiful, durable roof that will stand the test of time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;