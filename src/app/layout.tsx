// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Prompt } from "next/font/google";
import { Header } from "@/shared/components/layout/Header/Header";
import { FloatingActions } from "@/shared/components/floating/FloatingActions";
import { WeatherEffectsAsync } from "@/shared/components/layout/WeatherEffects/WeatherEffectsAsync";
import { Suspense } from "react";
import { GoogleMapsProvider } from "@/features/widget/GoogleMapsProvider";
import Script from "next/script"; // 1. Importa el componente Script
import { FacebookPixel } from "@/shared/components/FacebookPixel/FacebookPixel";

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
        <head>
            {/* Google Analytics */}
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-MLY1QBHZGE"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-MLY1QBHZGE');
                `}
            </Script>
        </head>
        <body className="antialiased">
            <FacebookPixel pixelId="27082259264741522" />
            <Suspense fallback={null}>
                <WeatherEffectsAsync />
            </Suspense>
            <GoogleMapsProvider>
                <Header />
                {children}
                <FloatingActions />
            </GoogleMapsProvider>
        </body>
        </html>
    );
}