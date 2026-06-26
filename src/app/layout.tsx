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
import { FacebookPixel } from "@/shared/components/PixelComponents/FacebookPixel/FacebookPixel";
import {OpenAIPixel} from "@/shared/components/PixelComponents/OpenAIPixel/OpenAIPixel";
import {WeatherMapWidget} from "@/shared/components/floating/WeatherMapWidget/WeatherMapWidget";
import { Clarity } from '@/shared/components/PixelComponents/Clarity/Clarity';

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
    title: {
        default: "Advanced Roofing Team | Roofing & Siding in Chicagoland",
        template: "%s | Advanced Roofing Team"
    },
    description: "Expert roof installation, replacement, and siding services for the Greater Chicagoland area. GAF Master Elite & Owens Corning Preferred contractors. 24/7 emergency support.",
    metadataBase: new URL('https://www.advancedroofingteam.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'Advanced Roofing Team',

        images: [{ url: '/logo.png', width: 1200, height: 630 }],
    },
    robots: {
        index: true,
        follow: true,
    },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RoofingContractor",
                        "name": "Advanced Roofing Team",
                        "url": "https://www.advancedroofingteam.com",
                        "logo": "https://www.advancedroofingteam.com/logo.png",
                        "telephone": "+1-877-945-6565",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Chicago",
                            "addressRegion": "IL",
                            "addressCountry": "US"
                        },
                        "areaServed": {
                            "@type": "AdministrativeArea",
                            "name": "Chicagoland Area"
                        },
                        "priceRange": "$$$"
                    })
                }}
            />
        </head>
        <body className="antialiased">
            <OpenAIPixel pixelId="6dPKWdJYqiipqoUnA6L2AB" />
            <FacebookPixel pixelId="27082259264741522" />
            <Clarity projectId="x786vn6psg" />
            <Suspense fallback={null}>
                <WeatherEffectsAsync />
            </Suspense>
            <GoogleMapsProvider>
                <Header />
                {children}
                <WeatherMapWidget />
                <FloatingActions />
            </GoogleMapsProvider>
        </body>
        </html>
    );
}