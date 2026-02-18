'use client';

import Image from 'next/image';
import styles from './ServingSchaumburg.module.css';
import {useState} from "react";
import Link from "next/link";

export const ServingSchaumburg = () => {
    const [isExpanded, setIsExpanded] = useState(false);
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
                    <h3 className={styles.title} style={{ marginTop: '20px' }}>
                        Frequently Asked Questions
                    </h3>

                    <h4 className={styles.question}>How Do I Know If My Entire Roof Needs Replacement or Just a Minor Repair?</h4>
                    <p className={styles.paragraph}>
                        Minor repairs are usually sufficient for isolated issues such as a few missing shingles, a small leak, or damaged flashing around a chimney. However, a full replacement is often necessary if your roof is over twenty years old or if shingles are curling, buckling, and losing significant amounts of protective granules. You should also look for widespread structural signs, such as sagging rooflines or persistent leaks that appear in multiple areas of your attic. If the cost of several small repairs starts to approach the price of a new installation, a total replacement becomes the more financially sound investment for your home.
                    </p>

                    <h4 className={styles.question}>What Is The Average Timeline For A Complete Roof Replacement In Schaumburg?</h4>
                    <p className={styles.paragraph}>
                        For a standard residential home in the Schaumburg area, the actual roof installation typically takes between one and three days to complete. The total project timeline may span seven to ten days, accounting for the initial inspection, material delivery, and the acquisition of local building permits. Factors such as the size of your home, the steepness of the roof, and the specific material being installed can influence the duration of the work. Our professional crews work diligently to minimize disruption and ensure that your property is thoroughly cleaned and secured at the end of each workday.
                    </p>

                    <h4 className={styles.question}>Are There Specific Roofing Materials Best Suited For The Illinois Climate?</h4>
                    <p className={styles.paragraph}>
                        Asphalt shingles remain the most popular choice for Illinois homeowners because they provide excellent weather resistance and cost-effectiveness in a <Link href="/roof-types" className={styles.inlineLink}>variety of styles.</Link> Metal roofing is another elite option for our region due to its ability to shed heavy snow quickly and withstand the high winds and hail common during Midwestern storms. For those seeking maximum longevity, synthetic slate and traditional slate offer exceptional durability against the severe freeze-thaw cycles that occur every winter. We recommend impact-resistant materials that carry a Class 4 rating to help protect your home and potentially lower your insurance premiums.
                    </p>

                    <h4 className={styles.question}>When Is The Best Time To Replace My Roof?</h4>
                    <p className={styles.paragraph}>
                        The ideal time for a roof replacement in Illinois and <Link href="/areas-we-serve" className={styles.inlineLink}>nearby areas</Link> is during late summer and early fall, when the weather is consistently dry, and temperatures are moderate. These conditions enable perfect shingle adhesion and provide a safer working environment for the installation team before the first snowfall arrives. Spring is also a popular choice for homeowners who discover damage after a harsh winter, though spring rains can occasionally cause minor scheduling delays. While emergency repairs can be performed year-round, planning your replacement for the autumn ensures your home is fully sealed and insulated against the upcoming winter cold.
                    </p>

                    <h4 className={styles.question}>How Can I Maintain My Roof After Replacement?</h4>
                    <p className={styles.paragraph}>
                        To preserve your new investment, perform a visual inspection from the ground at least twice a year, and after any major wind or hailstorm. Keeping your gutters clear of leaves and debris is critical to prevent water from backing up under the shingles and causing rot along the roof's edge. You should also trim back overhanging tree branches to prevent them from rubbing against the surface or dropping excessive moisture onto the shingles. Finally, ensuring your attic has proper ventilation will help regulate temperatures and prevent the buildup of condensation that can damage your roof structure from the inside out.
                    </p>

                    {/* PARTE EXPANDIBLE */}
                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>

                        {/* Banner dentro de la parte expandible con links amarillos */}
                        <div className={styles.ctaBanner} style={{ marginTop: '30px' }}>
                            <p style={{ textAlign: 'center', margin: 0 }}>
                                Stop worrying about leaks and storm damage by upgrading to a modern roofing system engineered for superior resistance. Contact us at {' '}
                                <Link href="tel:(847) 262-9774" className={styles.yellowLink}>
                                    <strong>(847) 262-9774</strong>
                                </Link>
                                {' '} or {' '}
                                <Link href="/contact" className={styles.yellowLink}>
                                    fill out our online form.
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className={styles.readMoreWrapper}>
                        <button
                            className={styles.readMoreBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded ? 'Read Less' : 'Continue Reading'}
                            <span className={`${styles.arrow} ${isExpanded ? styles.arrowUp : ''}`}>∨</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};