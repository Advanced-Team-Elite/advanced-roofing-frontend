'use client';

import Script from 'next/script';

export default function NiceJobReviewsSection() {
    return (
        <section className="w-full bg-[#F2F2F2] py-16 px-4 sm:px-6 lg:px-8">
            {/* Contenedor interno limitado para mantener la alineación general, con fondo gris full-width en la sección */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center rounded-none p-4 sm:p-6 md:p-10">

                    {/* Columna Izquierda: El Trust Badge centrado */}
                    <div className="flex justify-center w-full">
                        <div className="nj-badge" data-show-reviews="1" />
                    </div>

                    {/* Columna Derecha: Texto explicativo y botón */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                            Did you work with us?
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
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
            </div>

            <Script
                src="https://cdn.nicejob.co/js/sdk.min.js?id=7831c254-c2ab-4227-b769-bdeaec036bef"
                strategy="lazyOnload"
            />
        </section>
    );
}