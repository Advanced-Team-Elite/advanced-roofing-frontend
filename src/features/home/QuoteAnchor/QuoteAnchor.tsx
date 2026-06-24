'use client';

export const QuoteAnchor = () => {
    const openWidget = () => {
        const widget = document.querySelector('.FloatingActions-module__Bo6awa__quoteSideBtn') as HTMLElement;
        if (widget) widget.click();
        else console.error("No se encontró el botón de Instant Roof Quote");
    };

    return (
        <>
            <style>{`
                @keyframes ribbonPulse {
                    0%,100% { transform: scaleX(1); box-shadow: 0 4px 20px rgba(220,38,38,0.4); }
                    50% { transform: scaleX(1.04); box-shadow: 0 4px 32px rgba(220,38,38,0.8); }
                }
                @keyframes clockRing {
                    0%,100% { transform: rotate(0deg); }
                    10% { transform: rotate(-18deg); }
                    20% { transform: rotate(18deg); }
                    30% { transform: rotate(-14deg); }
                    40% { transform: rotate(14deg); }
                    50% { transform: rotate(-8deg); }
                    60% { transform: rotate(8deg); }
                    70% { transform: rotate(-4deg); }
                    80% { transform: rotate(4deg); }
                    90% { transform: rotate(0deg); }
                }
                @keyframes clockBounce {
                    0%,100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                @keyframes tickHand {
                    0%,100% { transform: rotate(0deg); }
                    50% { transform: rotate(20deg); }
                }
                @keyframes flashBorderBg {
                    0%,100% { background: #dc2626; }
                    50% { background: #fbbf24; }
                }
                @keyframes shimmer {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes btnPulse {
                    0%,100% { box-shadow: 0 0 0 0 rgba(251,191,36,0.5); }
                    50% { box-shadow: 0 0 0 14px rgba(251,191,36,0); }
                }
                .ribbon-animated {
                    animation: ribbonPulse 2s ease-in-out infinite;
                }
                .clock-ring {
                    display: inline-block;
                    transform-origin: center bottom;
                    animation: clockRing 1.2s ease-in-out infinite, clockBounce 1.2s ease-in-out infinite;
                }
                .tick-hand {
                    animation: tickHand 0.6s ease-in-out infinite alternate;
                    transform-origin: 14px 15px;
                }
                .shimmer-text {
                    background: linear-gradient(90deg, #fbbf24 0%, #fff 40%, #fbbf24 60%, #fff 80%, #fbbf24 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                    display: inline-block;
                }
                .btn-pulse {
                    animation: btnPulse 2s ease-in-out infinite;
                }
                .section-flash-line {
                    animation: flashBorderBg 2s ease-in-out infinite;
                }
            `}</style>

            <section className="w-full py-20 bg-[#005699] my-10 relative overflow-hidden">

                {/* Línea top — sin border-radius */}
                <div className="section-flash-line absolute top-0 left-0 w-full" style={{ height: '4px' }} />
                {/* Línea bottom — sin border-radius */}
                <div className="section-flash-line absolute bottom-0 left-0 w-full" style={{ height: '4px' }} />

                {/* Ribbon */}
                <div className="absolute top-0 left-0 w-full flex justify-center">
                    <div className="ribbon-animated bg-red-600 text-white font-black text-xl md:text-2xl px-10 py-3 uppercase tracking-widest rounded-b-2xl border-l-4 border-r-4 border-b-4 border-white flex items-center gap-3">
                        <span className="clock-ring">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <circle cx="14" cy="15" r="11" stroke="white" strokeWidth="2.2"/>
                                <line className="tick-hand" x1="14" y1="15" x2="14" y2="9" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                                <line x1="14" y1="15" x2="18" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="12" y1="4" x2="10" y2="2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="16" y1="4" x2="18" y2="2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </span>
                        Limited Time Offer
                    </div>
                </div>

                {/* Contenido */}
                <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center space-y-8 mt-12">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-400 leading-tight">
                        Secure Our Best Pricing Today
                    </h2>
                    <p className="text-gray-100 text-lg md:text-xl max-w-2xl">
                        Request your free, no-obligation inspection now and lock in our special seasonal rates.
                        Expert restoration starts with a single click.
                    </p>
                    <button
                        onClick={openWidget}
                        className="btn-pulse bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-black font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 px-8 py-3 text-base md:px-12 md:py-5 md:text-xl rounded-full"
                    >
                        Get Instant Quote
                    </button>
                </div>
            </section>
        </>
    );
};