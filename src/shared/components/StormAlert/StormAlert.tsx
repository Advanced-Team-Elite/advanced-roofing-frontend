"use client";

import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const KEYWORDS = ["hail", "large hail", "severe wind", "severe storm", "tornado"];
const CHICAGO_COUNTIES = ["cook", "dupage", "will", "kane", "lake"];

export default function StormAlert() {
    const [alertData, setAlertData] = useState<{ event: string, area: string } | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkWeather = async () => {
            console.log("🔍 [StormAlert] Iniciando verificación de tormentas...");

            try {
                // 1. Ubicación
                const geoRes = await fetch('https://ipapi.co/json/');
                const location = await geoRes.json();
                console.log(`📍 [StormAlert] Ubicación detectada: ${location.city}, ${location.region_code}`);

                if (location.region_code !== 'IL') {
                    console.warn("region_code !== 'IL'. Saltando alerta.");
                    setLoading(false);
                    return;
                }

                // 2. Fetch de Alertas
                console.log("📡 [StormAlert] Consultando api.weather.gov para Illinois...");
                const weatherRes = await fetch('https://api.weather.gov/alerts/active?area=IL');

                if (!weatherRes.ok) {
                    throw new Error(`Weather API respondió con status: ${weatherRes.status}`);
                }

                const data = await weatherRes.json();
                console.log(`📊 [StormAlert] Alertas activas encontradas en IL: ${data.features?.length || 0}`);

                // 3. Filtrado con Logs
                const activeAlert = data.features.find((feature: any) => {
                    const props = feature.properties;
                    const eventText = (props.event || "").toLowerCase();
                    const descText = (props.description || "").toLowerCase();
                    const areaDesc = (props.areaDesc || "").toLowerCase();

                    const hasKeyword = KEYWORDS.some(word => eventText.includes(word) || descText.includes(word));
                    const isChicago = CHICAGO_COUNTIES.some(county =>
                        areaDesc.includes(county) || descText.includes(county)
                    );

                    if (hasKeyword || isChicago) {
                        console.log(`🎯 [StormAlert] Match encontrado: 
                            - Evento: ${props.event}
                            - Keywords match: ${hasKeyword}
                            - Chicago area match: ${isChicago}
                        `);
                    }

                    return hasKeyword && isChicago;
                });

                if (activeAlert) {
                    console.log("✅ [StormAlert] Mostrando banner de alerta.");
                    setAlertData({
                        event: activeAlert.properties.event,
                        area: location.city
                    });
                } else {
                    console.log("mx-0 [StormAlert] No hay alertas severas que coincidan con los filtros en tu zona.");
                }

            } catch (error) {
                console.error("❌ [StormAlert] Error en el flujo:", error);
            } finally {
                setLoading(false);
            }
        };

        checkWeather();
    }, []);

    if (!alertData || !isVisible) return null;

    return (
        <div className="bg-[#FFF9E6] border-b border-yellow-200 py-3 px-4 relative z-[999]">
            <div className="container mx-auto flex items-center justify-center gap-2 pr-8">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <p className="text-sm md:text-base text-amber-900 text-center">
                    <span className="font-bold">⚠️ {alertData.event} reported near {alertData.area}! </span>
                    <span className="hidden md:inline">Protect your property — </span>
                    <a href="#contact" className="font-bold underline hover:text-amber-700 ml-1">
                        Schedule free inspection
                    </a>
                </p>
            </div>
            <button onClick={() => setIsVisible(false)} className="absolute right-4 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-amber-700" />
            </button>
        </div>
    );
}