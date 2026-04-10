"use client";

import { useState, useEffect } from 'react';
import styles from './StormAlert.module.css';

const KEYWORDS = ["hail", "large hail", "severe wind", "severe storm", "tornado", "flood"];
const CHICAGO_COUNTIES = ["cook", "dupage", "will", "kane", "lake"];

export default function StormAlert() {
    const [alertData, setAlertData] = useState<{ event: string, area: string } | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkWeather = async () => {
            try {
                const geoRes = await fetch('http://ip-api.com/json/');
                const location = await geoRes.json();
                if (location.region !== 'IL') return;

                const weatherRes = await fetch('https://api.weather.gov/alerts/active?area=IL');
                const data = await weatherRes.json();

                const activeAlert = data.features.find((feature: any) => {
                    const props = feature.properties;
                    const eventText = (props.event || "").toLowerCase();
                    const descText = (props.description || "").toLowerCase();
                    const areaDesc = (props.areaDesc || "").toLowerCase();

                    const hasKeyword = KEYWORDS.some(word => eventText.includes(word) || descText.includes(word));
                    const isChicago = CHICAGO_COUNTIES.some(county =>
                        areaDesc.includes(county) || descText.includes(county)
                    );
                    return hasKeyword && isChicago;
                });

                if (activeAlert) {
                    setAlertData({
                        event: activeAlert.properties.event,
                        area: location.city
                    });
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        checkWeather();
    }, []);

    // Si terminó de cargar y no hay alerta, no renderizamos nada
    if (!loading && !alertData) return null;

    return (
        <div className={`${styles.wrapper} ${alertData && isVisible ? styles.expanded : ''}`}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={`${styles.container} container mx-auto`}>
                        <p className={styles.text}>
                            <span className={styles.bold}>
                                ⚠️ {alertData?.event} reported near {alertData?.area}!
                            </span>
                            <span className={styles.hiddenMobile}> Protect your property — </span>
                            <a href="/contact-us" className={styles.link}>
                                Schedule your free inspection
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}