"use client";

import { useState, useEffect } from 'react';
import styles from './StormAlert.module.css';

interface WeatherFeature {
    properties: {
        event?: string;
        description?: string;
        areaDesc?: string;
    };
}

interface AlertInfo {
    event: string;
    area: string;
}

const KEYWORDS = ["hail", "large hail", "severe wind", "severe storm", "tornado"];
const CHICAGO_COUNTIES = ["cook", "dupage", "will", "kane", "lake"];
const LOCATION_CACHE_KEY = 'user_geo_location';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

export default function StormAlert() {
    const [alertData, setAlertData] = useState<AlertInfo | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkWeather = async () => {
            try {
                let userLocation = null;
                const cachedData = localStorage.getItem(LOCATION_CACHE_KEY);

                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    // Verificar si el cache aún es válido
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        userLocation = data;
                        console.log("Location:", userLocation.city);
                    }
                }

                // Si no hay cache, consultamos la API
                if (!userLocation) {
                    const apiKey = process.env.NEXT_PUBLIC_IP_GEO_KEY || 'NOT_FOUND';
                    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
                    const geoData = await response.json();

                    if (geoData.city) {
                        userLocation = {
                            city: geoData.city,
                            region: geoData.state_prov_code || geoData.state_prov // Dependiendo de la API
                        };
                        // Guardar en LocalStorage con timestamp
                        localStorage.setItem(LOCATION_CACHE_KEY, JSON.stringify({
                            data: userLocation,
                            timestamp: Date.now()
                        }));
                    }
                }

                // Validar si es Illinois (IL)
                // Nota: ipgeolocation a veces devuelve el nombre completo o el código.
                // Ajustamos la validación para ser flexibles.
                const isIllinois = userLocation?.region === 'IL' || userLocation?.region === 'Illinois';
                if (!isIllinois) {
                    setLoading(false);
                    return;
                }

                // Consultar alertas de NOAA (Weather.gov)
                const weatherRes = await fetch('https://api.weather.gov/alerts/active?area=IL');
                const weatherData = await weatherRes.json();

                const activeAlert = weatherData.features.find((feature: WeatherFeature) => {
                    const props = feature.properties;
                    const eventText = (props.event || "").toLowerCase();
                    const descText = (props.description || "").toLowerCase();
                    const areaDesc = (props.areaDesc || "").toLowerCase();

                    const hasKeyword = KEYWORDS.some(word => eventText.includes(word) || descText.includes(word));
                    const isChicagoArea = CHICAGO_COUNTIES.some(county =>
                        areaDesc.includes(county) || descText.includes(county)
                    );

                    return hasKeyword && isChicagoArea; //true
                });

                if (activeAlert && activeAlert.properties.event) {
                    // 3. Ahora setAlertData aceptará el objeto sin quejas
                    setAlertData({
                        event: activeAlert.properties.event,
                        area: userLocation?.city || "Not Found"
                    });
                }
            } catch (e) {
                console.error("Error en StormAlert:", e);
            } finally {
                setLoading(false);
            }
        };

        checkWeather();
    }, []);

    // Si terminó de cargar y no hay alerta o no es visible, no renderizamos nada
    if (!loading && (!alertData || !isVisible)) return null;

    return (
        <div className={`${styles.wrapper} ${alertData ? styles.expanded : ''}`}>
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