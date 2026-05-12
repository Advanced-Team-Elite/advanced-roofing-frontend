// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Prompt } from "next/font/google";
import { Header } from "@/shared/components/layout/Header/Header";
import { FloatingActions } from "@/shared/components/floating/FloatingActions";
import { WeatherEffectsAsync } from "@/shared/components/layout/WeatherEffects/WeatherEffectsAsync";
import { Suspense } from "react";
import {GoogleMapsProvider} from "@/features/widget/GoogleMapsProvider";

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
    return (
        <html lang="en" className={`${openSans.variable} ${prompt.variable}`}>
        <body className="antialiased">
        <Suspense fallback={null}>
            <WeatherEffectsAsync />
        </Suspense>

        {/*
                GoogleMapsProvider wraps the entire app so that:
                - CoverageMap (inside HomeContainer → children)
                - RoofMap / AddressSearch (inside FloatingActions → QuoteDrawer)
                ...all share the SAME single google.maps SDK instance.

                Previously GoogleMapsProvider lived inside QuoteDrawer, making
                it a sibling branch to HomeContainer — CoverageMap had no
                APIProvider ancestor and threw "<Map> can only be used inside
                an <APIProvider>".
            */}
        <GoogleMapsProvider>
            <Header />
            {children}
            <FloatingActions />
        </GoogleMapsProvider>

        </body>
        </html>
    );
}