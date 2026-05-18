// src/lib/weather.ts
import { prisma } from "./prisma";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const CITY = "Chicago,IL,US";

export type Season = "winter" | "summer" | "fall" | "spring";

async function checkGovernmentAlerts(): Promise<boolean> {
    try {
        // Consumimos el endpoint que mencionaste
        const res = await fetch("https://api.weather.gov/alerts/active?area=IL", {
            headers: { "User-Agent": "(advanced-roofing-app, tech@advancedroofing.com)" }, // NWS requiere un User-Agent
            next: { revalidate: 300 } // Revalidar cada 5 minutos está bien para alertas
        });

        if (!res.ok) return false;

        const data = await res.json();
        if (!data.features || data.features.length === 0) return false;

        const severeEvents = ["Severe Thunderstorm Warning", "Severe Thunderstorm Watch", "Tornado Warning", "Flash Flood Warning"];

        const hasSevereAlert = data.features.some((feature: any) =>
            severeEvents.includes(feature.properties?.event)
        );

        return hasSevereAlert;
    } catch (error) {
        console.error("Error consultando api.weather.gov:", error);
        return false;
    }
}

export async function getDynamicWeather(): Promise<Season> {
    const now = new Date();
    const eightHoursInMs = 8 * 60 * 60 * 1000;

    try {
        if (!API_KEY) {
            console.error("ERROR: OPENWEATHER_API_KEY no está definida");
        }

        let config = await prisma.weatherConfig.findUnique({
            where: { id: 1 },
        });

        if (config) {
            const diff = now.getTime() - new Date(config.updatedAt).getTime();
            if (diff <= eightHoursInMs) {
                return config.currentClimate as Season;
            }
        }

        const isSevereWeatherActive = await checkGovernmentAlerts();

        if (isSevereWeatherActive) {
            console.log("¡Alerta severa detectada por el NWS! Forzando estado de tormenta.");
            const severeClimate: Season = "fall"; // Tu estado asignado para tormentas/lluvia

            await saveWeatherToDB(severeClimate, now);
            return severeClimate;
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`,
            { next: { revalidate: 0 } }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Weather API failed: ${errorData.message}`);
        }

        const data = await response.json();

        const newClimate = mapConditionToSeason(data.weather[0].main, data.main.temp);

        console.log(`API Response: Climate=${data.weather[0].main}, Temp=${(data.main.temp - 273.15).toFixed(1)}°C`);
        console.log(`Season elegida: ${newClimate}`);

        await saveWeatherToDB(newClimate, now);
        return newClimate;

    } catch (error) {
        console.error("Error en getDynamicWeather, usando fallback 'spring':", error);
        return "spring";
    }
}

async function saveWeatherToDB(climate: Season, date: Date) {
    await prisma.weatherConfig.upsert({
        where: { id: 1 },
        update: { currentClimate: climate, updatedAt: date },
        create: { id: 1, currentClimate: climate, city: "Chicago" },
    });
}

function mapConditionToSeason(condition: string, tempK: number): Season {
    const tempC = tempK - 273.15;

    if (['Rain', 'Drizzle', 'Thunderstorm', 'Tornado'].includes(condition)) {
        return "fall";
    }

    if (tempC <= 2 || condition === 'Snow' || condition === 'Sleet') {
        return "winter";
    }

    if (tempC > 24) return "summer";

    return "spring";
}