'use client';
import { useEffect } from 'react';
import Script from 'next/script';

// Declaración para que TypeScript reconozca oaiq globalmente
declare global {
    interface Window {
        oaiq: any;
    }
    function oaiq(...args: any[]): void;
}

export const OpenAIPixel = ({ pixelId }: { pixelId: string }) => {
    useEffect(() => {
        window.oaiq = window.oaiq || function (...args: any[]) {
            (window.oaiq.q = window.oaiq.q || []).push(args);
        };
        window.oaiq("init", { pixelId });
    }, [pixelId]);

    return (
        <Script
            src="https://bzrcdn.openai.com/sdk/oaiq.min.js"
            strategy="afterInteractive"
        />
    );
};