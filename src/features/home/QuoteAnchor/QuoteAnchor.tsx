'use client';

import Link from "next/link";

export const QuoteAnchor = () => {
    const openWidget = () => {
        const widget = document.querySelector('.FloatingActions-module__Bo6awa__quoteSideBtn') as HTMLElement;
        if (widget) widget.click();
        else console.error("No se encontró el botón de Instant Roof Quote");
    };

    return (
        <>
            <style>{`
                /* Fondo de franjas patrióticas inspirado en image_2aeb19.jpg */
                .patriotic-bg {
                    background-color: #0b2545;
                    background-image: linear-gradient(
                        90deg, 
                        rgba(255,255,255,0.05) 50%, 
                        transparent 50%
                    );
                    background-size: 100px 100%;
                }
                @keyframes btnPulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.6); /* Amarillo dorado */
                    }
                    50% { 
                        box-shadow: 0 0 0 15px rgba(251, 191, 36, 0); 
                    }
                }
                .btn-pulse { 
                    animation: btnPulse 2s ease-in-out infinite; 
                }
            `}</style>

            <section className="patriotic-bg w-full py-20 my-10 relative overflow-hidden border-t-8 border-b-8 border-red-600">
                {/* Detalles de diseño estilo bandera */}
                <div className="absolute top-0 left-0 w-full h-2 bg-white" />
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white" />

                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
                    {/* Ribbon patriótico */}
                    <div className="bg-red-600 text-white px-8 py-2 font-bold uppercase tracking-[0.2em] shadow-lg mb-4">
                        Independence Day Savings
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Declare Independence From <span className="text-yellow-400">Leaks</span>
                    </h2>

                    <p className="text-blue-100 text-xl md:text-2xl max-w-2xl font-medium">
                        Celebrate 250 years of American excellence. Get your roof inspection today and secure an exclusive holiday discount.
                    </p>

                    <Link
                        href="/contact-us"
                        className="btn-pulse bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black uppercase tracking-widest transition-all hover:scale-105 px-10 py-4 text-xl rounded-sm border-2 border-white shadow-lg inline-block text-center"
                    >
                        Claim My Holiday Discount
                    </Link>

                    <p className="text-blue-300 text-sm italic">
                        Offer expires July 4th • Professional Service
                    </p>
                </div>
            </section>
        </>
    );
};