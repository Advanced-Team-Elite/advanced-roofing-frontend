"use client";
import React from "react";
import Link from "next/link";
import styles from "./FinancingSection.module.css";

const FinancingSection = () => {
    return (
        <section className={styles.financingSection}>
            <h2 className={styles.financingTitle}>
                Financing Solutions For You
            </h2>

            <p className={styles.financingDescription}>
                Get the roof you need without the financial stress—our roofing company
                offers flexible financing options to fit your budget. Whether it's a
                repair or full replacement, we make it easier to protect your home with
                affordable monthly payments. Fast approval and simple terms make getting
                started hassle-free.
            </p>

            <Link href="/contact-us" className={styles.btnLearnMore} aria-label="Learn more about our roofing and exterior services">
                Learn More
            </Link>
        </section>
    );
};

export default FinancingSection;