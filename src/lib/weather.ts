// src/lib/weather.ts
import { prisma } from "./prisma";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const CITY = "Chicago,IL,US";

export type Season = "winter" | "summer" | "fall" | "spring";

export async function getDynamicWeather(): Promise<Season> {
    const now = new Date();
    const eightHoursInMs = 8 * 60 * 60 * 1000;

    try {
        // 1. Verificar API KEY
        if (!API_KEY) {
            console.error("ERROR: OPENWEATHER_API_KEY no está definida");
        }

        // 2. Intentar obtener la configuración de la DB
        let config = await prisma.weatherConfig.findUnique({
            where: { id: 1 },
        });

        if (config) {
            const diff = now.getTime() - new Date(config.updatedAt).getTime();
            const hoursPassed = (diff / (1000 * 60 * 60)).toFixed(2);

            // Si no han pasado 8 horas, retornamos lo de la DB
            if (diff <= eightHoursInMs) {
                return config.currentClimate as Season;
            }
        }

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`,
            { next: { revalidate: 0 } }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error("ERROR API OpenWeather:", response.status, errorData.message);
            throw new Error(`Weather API failed: ${errorData.message}`);
        }

        const data = await response.json();
        const newClimate = mapConditionToSeason(data.weather[0].main, data.main.temp);

        console.log(`API Response: Climate=${data.weather[0].main}, Temp=${(data.main.temp - 273.15).toFixed(1)}°C`);
        console.log(`Season: ${newClimate}`);

        config = await prisma.weatherConfig.upsert({
            where: { id: 1 },
            update: { currentClimate: newClimate, updatedAt: now },
            create: { id: 1, currentClimate: newClimate, city: "Chicago" },
        });
        return config.currentClimate as Season;

    } catch (error) {
        return "spring"; // Fallback
    }
}

function mapConditionToSeason(condition: string, tempK: number): Season {
    const tempC = tempK - 273.15;
    if (tempC <= 2 || condition === 'Snow' || condition === 'Sleet') return "winter";
    if (['Rain', 'Drizzle', 'Thunderstorm', 'Tornado'].includes(condition)) return "fall";
    if (tempC > 24) return "summer";
    return "spring";
}