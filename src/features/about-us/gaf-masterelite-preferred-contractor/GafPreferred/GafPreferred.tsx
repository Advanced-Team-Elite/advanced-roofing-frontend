import React, {useState} from "react";
import styles from "./GafPreferred.module.css";
import Image from "next/image";
import {FlairIcon} from "@/shared/Icons/Icons";
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

export const GafPreferred = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* Bloque Izquierdo: Contenido con Padding Proporcional */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={160} />
                    </div>
                    <h2 className={styles.title}>GAF Master Elite Preferred Contractor</h2>
                    <h3 className={styles.subtitle}>SETTING CONTRACTORS APART FROM THE REST</h3>

                    <p className={styles.paragraph}>
                        When it comes to protecting your home, your roof plays a crucial role in keeping
                        you and your family safe and comfortable. That’s why choosing an experienced and
                        reputable roofing contractor is essential. At Advanced Roofing Team, we are proud
                        to be a GAF Master Elite Contractor, a designation that sets us apart from other
                        roofing companies and provides numerous benefits for homeowners.
                    </p>

                    <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : ''}`}>
                        <br></br>
                        <h2 className={styles.subtitle}>TRAINING AND SERVICE THAT SETS US APART</h2>

                        <p className={styles.paragraph}>
                            As a GAF Master Elite Contractor, we have undergone rigorous training and
                            certification processes to ensure that we meet the highest standards of
                            excellence in the roofing industry. This means that when you choose us for
                            your roofing needs, you can have confidence that you are working with a team
                            of professionals who are committed to providing top-quality service and craftsmanship.
                        </p>
                        <h2 className={styles.subtitle}>THE BEST ROOFING PRODUCTS ON THE MARKET</h2>

                        <p className={styles.paragraph}>
                            One of the key advantages of working with a GAF Master Elite Contractor like
                            Advanced Roofing Team is the access to the best roofing products on the market.
                            GAF is one of the leading manufacturers of roofing materials in the industry,
                            known for their superior quality and durability. As a GAF Master Elite Contractor,
                            we have exclusive access to their full line of products, including shingles,
                            underlayments, and ventilation systems. This means that when you choose us for
                            your roofing project, you can rest assured that you are getting the best materials
                            available for your home.
                        </p>
                    </div>

                    {/* Botón Continue Reading con línea superior como en image_2dd7d7.jpg */}
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

                <ScrollReveal direction="right" className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/assets/images/features/about-us/content-v6.png"
                            alt="Owens Corning Materials"
                            className={styles.mainImage}
                        />
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};