"use client";
import React from "react";
import styles from "./WeatherEffects.module.css";

export const WeatherEffects = () => {
    return (
        <div className={styles.snowflakes} aria-hidden="true">
            <div className={styles.snowflake}>❅</div>
            <div className={styles.snowflake}>❅</div>
            <div className={styles.snowflake}>❆</div>
            <div className={styles.snowflake}>❄</div>
            <div className={styles.snowflake}>❅</div>
            <div className={styles.snowflake}>❆</div>
            <div className={styles.snowflake}>❄</div>
            <div className={styles.snowflake}>❅</div>
            <div className={styles.snowflake}>❆</div>
            <div className={styles.snowflake}>❄</div>

        </div>
    );
};