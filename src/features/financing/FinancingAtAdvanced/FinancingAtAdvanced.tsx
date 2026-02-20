'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FinancingAtAdvanced.module.css';
import Link from "next/link";
import {FlairIcon} from "@/shared/Icons/Icons";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export const FinancingAtAdvanced = () => {

    return (
        <section className={styles.aboutSection}>
            <div className={styles.fullWidthContainer}>

                {/* LEFT */}
                <div className={styles.textContent}>
                    <div className={styles.iconWrapper}>
                        <FlairIcon size={160} />
                    </div>

                    <h2 className={styles.title}>
                        Financing at Advanced Roofing Team Construction
                    </h2>

                    <p className={styles.paragraph}>
                        A new roof or roofing repair is an important investment in the safety, performance, and longevity of your home. At{' '}
                        <Link href="/about-us/" className={styles.inlineLinkBlue}>
                            Advanced Roofing Team Construction
                        </Link>{' '}
                        , we offer flexible financing options to help make the process straightforward and accessible. Our financing solutions are designed to provide a smooth experience, with an easy application process, convenient payment structures, and prompt approvals, allowing you to move forward with your roofing project confidently and without unnecessary delays.
                    </p>

                    <img
                        src="https://app.gethearth.com/contractor_images/advanced-team/banner.jpg?size_id=310x120&amp;color=darkblue"
                        alt="home_improvement 310x120"/>

                </div>

                {/* RIGHT */}
                <ScrollReveal direction="right">
                    <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                            <Image
                                src="/assets/images/features/about-us/content-v6.png"
                                alt="Chicago Roofing"
                                fill
                                className={styles.mainImage}
                                priority
                            />
                        </div>
                    </div>
                </ScrollReveal>


            </div>
        </section>
    );
};
