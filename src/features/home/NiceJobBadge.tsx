'use client';

import Script from 'next/script';

export default function NiceJobReviewsSection() {
    return (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Contenedor principal con estilo de tarjeta gris limpia y bordes rectos acorde a Advanced */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#F4F6F9] rounded-none p-8 md:p-12 border border-gray-200 shadow-sm">

                {/* Columna Izquierda: El Trust Badge centrado */}
                <div className="flex justify-center w-full">
                    <div className="nj-badge" data-show-reviews="1" />
                </div>

                {/* Columna Derecha: Texto explicativo y botón */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                    <h3 className="text-3xl font-extrabold text-[#0B2545]">
                        Did you work with us?
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg max-w-md">
                        Your feedback is essential to help us keep improving and serving you better. Share your experience with us!
                    </p>

                    <a
                        href="https://nicejob.com/advanced-roofing-team/invite"
                        className="nj-review inline-flex items-center justify-center rounded-none bg-[#0052A3] px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#003d7a]"
                    >
                        Leave us a review!
                    </a>
                </div>

            </div>

            <Script
                src="https://cdn.nicejob.co/js/sdk.min.js?id=7831c254-c2ab-4227-b769-bdeaec036bef"
                strategy="lazyOnload"
            />
        </section>
    );
}