"use client";
import React from 'react';
import styles from './WarrantyProgram.module.css';
import {FlairIcon} from "@/shared/Icons/Icons";

const WarrantyProgram = () => {
    return (
        <section className={styles.benefitsSection}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <FlairIcon size={160} />
                </div>

                <h2 className={styles.mainTitle}>THE BEST WARRANTY PROGRAM</h2>

                <div className={styles.content}>
                    <p className={styles.description}>
                        In addition to access to top-of-the-line products, working with a
                        GAF Master Elite Contractor also means that you are getting the best
                        warranties in the industry. GAF offers a comprehensive warranty program
                        that covers both materials and workmanship, providing you with peace of
                        mind knowing that your investment is protected. As a GAF Master Elite Contractor,
                        we are able to offer extended warranties on GAF products, giving you added protection
                        and security for your home.
                    </p>

                    <h3 className={styles.subTitle}>EXPERTISE AND KNOWLEDGE</h3>
                    <p className={styles.description}>
                        Another benefit of working with a GAF Master Elite Contractor is the expertise and
                        knowledge that comes with the designation. Our team at Advanced Roofing Team has
                        undergone extensive training and certification to become GAF Master Elite Contractors,
                        ensuring that we have the skills and experience needed to handle any roofing project
                        with precision and care. Whether you need a simple repair or a complete roof replacement,
                        you can trust that our team has the expertise to get the job done right the first time.
                    </p>

                    <h3 className={styles.subTitle}>SUPERIOR SERVICE AND COMMUNICATION</h3>
                    <p className={styles.description}>
                        When you choose Advanced Roofing Team as your GAF Master Elite Contractor, you can expect
                        superior customer service and communication throughout the entire process. We understand
                        that having work done on your home can be a stressful experience, which is why we make it a
                        priority to keep you informed and involved every step of the way. From the initial consultation
                        to the final inspection, we will work closely with you to ensure that your vision for your home
                        is realized and that you are completely satisfied with the results.
                    </p>

                    <h3 className={styles.subTitle}>QUALITY AND COMMITMENT</h3>
                    <p className={styles.description}>
                        In addition to our commitment to quality and customer service, working with a GAF Master Elite
                        Contractor like Advanced Roofing Team can also increase the value of your home. A professionally
                        installed roof using top-quality materials can enhance the curb appeal of your property and improve
                        its overall value. Whether you are looking to sell your home in the future or simply want to increase
                        its longevity and durability, investing in a GAF Master Elite Contractor is a wise decision that can pay
                        off in the long run.
                    </p>
                </div>
                
                <div className={styles.ctaBox}>
                    <p className={styles.ctaText}>
                        Overall, choosing Advanced Roofing Team as your GAF Master Elite Contractor is a decision that
                        can benefit you and your home in numerous ways. From access to the best products and warranties
                        in the industry to expert craftsmanship and superior customer service, our team is dedicated to
                        providing you with the best roofing experience possible. Contact us today to learn more about how
                        we can help you protect and enhance your home with our GAF Master Elite Contractor services.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WarrantyProgram;