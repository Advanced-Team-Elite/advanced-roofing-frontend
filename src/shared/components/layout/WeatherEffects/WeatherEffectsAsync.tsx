// WeatherEffectsAsync.tsx
import { getDynamicWeather } from "@/lib/weather";
import { WeatherEffects } from "./WeatherEffects";

export async function WeatherEffectsAsync() {
    const season = await getDynamicWeather();
    return <WeatherEffects forcedSeason={season} />;
}