'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function RateUsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO / SECCIÓN PRINCIPAL DE CALIFICACIÓN */}
            <section className="w-full bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center p-4 sm:p-6 md:p-8">

                        {/* Columna de Texto y Botones (Aparece primero en mobile con order-1, y a la derecha en desktop con md:order-2) */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 order-1 md:order-2">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00589e] bg-[#00589e]/10 px-3 py-1 rounded-full">
                                Customer Feedback
                            </span>
                            <h1 className="font-jost text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] leading-tight">
                                Did you work with us?
                            </h1>
                            <p className="text-gray-600 text-base sm:text-lg max-w-lg leading-relaxed">
                                Your feedback is essential to help us keep improving and serving you better. Share your experience with our Chicago roofing and solar team!
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 w-full">
                                <a
                                    href="https://nicejob.com/advanced-roofing-team/invite"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nj-review inline-flex items-center justify-center rounded-none bg-[#00589e] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#004275] hover:scale-[1.02] w-full sm:w-auto text-center"
                                >
                                    Leave us a review!
                                </a>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-none border-2 border-[#0B2545] px-6 py-4 text-base font-bold text-[#0B2545] transition-all hover:bg-[#0B2545] hover:text-white w-full sm:w-auto text-center"
                                >
                                    Back to Home
                                </Link>
                            </div>
                        </div>

                        {/* Columna del Trust Badge (Aparece segundo en mobile con order-2, y a la izquierda en desktop con md:order-1) */}
                        <div className="flex justify-center w-full order-2 md:order-1">
                            <div className="nj-badge" data-show-reviews="1" />
                        </div>

                    </div>
                </div>
            </section>

            {/* SECCIÓN INFERIOR: WIDGET DE HISTORIAS / RESEÑAS COMPLETAS */}
            <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-jost text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
                            Customer Stories & Experiences
                        </h2>
                        <div className="w-16 h-1.5 bg-[#f7d000] mx-auto mt-4 mb-4" />
                        <p className="text-gray-600 text-base sm:text-lg">
                            Discover what our homeowners and partners say about our roofing and solar installations. Real stories from real projects across Chicago.
                        </p>
                    </div>

                    {/* Contenedor del Widget de Stories ocupando todo el ancho disponible */}
                    <div className="w-full">
                        <div className="nj-stories" data-filter-media="hide" />
                    </div>
                </div>
            </section>

            {/* Script global de NiceJob para ambos widgets */}
            <Script
                src="https://cdn.nicejob.co/js/sdk.min.js?id=7831c254-c2ab-4227-b769-bdeaec036bef"
                strategy="lazyOnload"
            />
        </main>
    );
}