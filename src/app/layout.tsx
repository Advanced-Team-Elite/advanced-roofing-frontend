// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Prompt } from "next/font/google";
import { Header } from "@/shared/components/layout/Header/Header";
import { FloatingActions } from "@/shared/components/floating/FloatingActions";
import { WeatherEffectsAsync } from "@/shared/components/layout/WeatherEffects/WeatherEffectsAsync";
import { Suspense } from "react";

const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
    preload: true,
});

const prompt = Prompt({
    subsets: ["latin"],
    weight: ["500", "600"],
    display: "swap",
    variable: "--font-prompt",
    preload: true,
});

export const metadata: Metadata = {
    title: "Advanced Roofing Team | Chicago Roofing Company",
    description: "Professional roofers in Chicago and the Greater Chicagoland Area.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // ✅ Ya NO es async — no bloquea el render
    return (
        <html lang="en" className={`${openSans.variable} ${prompt.variable}`}>
        <body className="antialiased">
        {/* ✅ Suspense: el weather carga sin bloquear nada */}
        <Suspense fallback={null}>
            <WeatherEffectsAsync />
        </Suspense>
        <Header />
        {children}
        <FloatingActions />
        </body>
        </html>
    );
}