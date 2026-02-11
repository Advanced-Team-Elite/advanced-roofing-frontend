import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Prompt } from "next/font/google"; // Importamos las fuentes
import { Header } from "@/shared/components/layout/Header/Header";
import { Footer } from "@/shared/components/layout/footer/Footer";
import {FloatingActions} from "@/shared/components/floating/FloatingActions";
const openSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
});

const prompt = Prompt({
    subsets: ["latin"],
    weight: ["500", "600"], // Pesos necesarios para títulos potentes
    display: "swap",
    variable: "--font-prompt",
});

export const metadata: Metadata = {
    title: "Advanced Roofing Team | Chicago Roofing Company",
    description: "Professional roofers in Chicago and the Greater Chicagoland Area.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${openSans.variable} ${prompt.variable}`}>
        <body className="antialiased">
        <Header />
        {children}
        <FloatingActions />
        <Footer />
        </body>
        </html>
    );
}