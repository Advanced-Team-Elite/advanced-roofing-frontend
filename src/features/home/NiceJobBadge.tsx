'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function NiceJobSectionWithSkeleton() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulamos el tiempo de carga del SDK externo para quitar el skeleton
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2545]">
                    Client Reviews & Feedback
                </h2>
                <p className="mt-2 text-[#0B2545]/70 text-sm md:text-base">
                    See what our customers are saying or leave us your own feedback.
                </p>
            </div>

            {isLoading ? (
                /* --- SKELETON (Se muestra mientras "carga" o en localhost) --- */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center animate-pulse">
                    {/* Skeleton Izquierda (Trust Badge) */}
                    <div className="w-full max-w-md h-80 bg-gray-200 rounded-3xl p-6 flex flex-col justify-between">
                        <div className="flex justify-between items-center">
                            <div className="h-6 w-32 bg-gray-300 rounded"></div>
                            <div className="h-6 w-16 bg-gray-300 rounded"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                        <div className="h-12 bg-gray-300 rounded-xl"></div>
                    </div>

                    {/* Skeleton Derecha (Collect Reviews Form) */}
                    <div className="w-full max-w-md h-80 bg-gray-200 rounded-3xl p-6 flex flex-col justify-between">
                        <div className="h-6 w-40 bg-gray-300 rounded"></div>
                        <div className="space-y-4">
                            <div className="h-10 bg-gray-300 rounded"></div>
                            <div className="h-16 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-12 bg-gray-300 rounded-xl"></div>
                    </div>
                </div>
            ) : (
                /* --- CONTENIDO REAL (Widgets de NiceJob) --- */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-items-center">
                    <div className="w-full flex justify-center">
                        <div className="nj-badge" data-show-reviews="1" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="nj-review-form" />
                    </div>
                </div>
            )}

            <Script
                src="https://cdn.nicejob.co/js/sdk.min.js?id=7831c254-c2ab-4227-b769-bdeaec036bef"
                strategy="lazyOnload"
            />
        </section>
    );
}