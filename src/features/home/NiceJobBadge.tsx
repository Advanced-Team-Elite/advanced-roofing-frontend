'use client';

import Script from 'next/script';

// ── Hoja de arce pequeña para la etiqueta de Thanksgiving ─────
function MapleLeaf({ size = 14 }: { size?: number }) {
    return (
        <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" style={{ flexShrink: 0 }}>
            <path
                d="M32 4 L38 16 L47 11 L44 25 L58 22 L50 33 L58 39 L44 41 L46 48 L35 45 L32 58 L29 45 L18 48 L20 41 L6 39 L14 33 L6 22 L20 25 L17 11 L26 16 Z"
                fill="#e8741a"
            />
            <path d="M32 58 L32 14" stroke="#7a2f00" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 58 L32 63" stroke="#5c2000" strokeWidth="2.6" strokeLinecap="round" />
        </svg>
    );
}

export default function NiceJobReviewsSection() {
    return (
        <section className="w-full bg-[#F2F2F2] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            {/* Calabaza de cosecha — top right (sin cara tallada, ya no es Halloween) */}
            <svg className="absolute -top-6 right-0 w-72 h-72 opacity-[0.08] pointer-events-none select-none" viewBox="0 0 100 100" fill="none">
                {/* Tallo y hoja */}
                <path d="M48 20 C46 12 50 6 56 4 C54 7 53 11 52 20 Z" fill="#4A3510" />
                <path d="M51 12 C58 8 68 11 65 18 C60 21 54 17 51 12 Z" fill="#3B6E22" opacity="0.85" />

                {/* Cuerpo de la calabaza (Secciones de atrás hacia adelante) */}
                {/* Capa exterior / Sombras laterales */}
                <path d="M12 50 C12 30 25 22 38 22 C30 32 28 65 38 78 C25 78 12 70 12 50 Z" fill="#D95D00" />
                <path d="M88 50 C88 30 75 22 62 22 C70 32 72 65 62 78 C75 78 88 70 88 50 Z" fill="#D95D00" />

                {/* Capa intermedia */}
                <path d="M22 50 C22 30 34 20 48 20 C38 32 38 68 48 80 C34 80 22 70 22 50 Z" fill="#E66B00" />
                <path d="M78 50 C78 30 66 20 52 20 C62 32 62 68 52 80 C66 80 78 70 78 50 Z" fill="#E66B00" />

                {/* Capa central brillante */}
                <path d="M32 50 C32 28 42 18 50 18 C58 18 68 28 68 50 C68 72 58 82 50 82 C42 82 32 72 32 50 Z" fill="#FF8800" />

                {/* Costillas y brillo */}
                <path d="M50 18 C46 34 46 66 50 82" stroke="#B34700" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
                <path d="M40 22 C33 36 33 64 41 79" stroke="#B34700" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
                <path d="M60 22 C67 36 67 64 59 79" stroke="#B34700" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
                <ellipse cx="41" cy="40" rx="4" ry="11" fill="#FFFFFF" opacity="0.18" transform="rotate(8 41 40)" />
            </svg>

            {/* Hojas de otoño — bottom left */}
            <svg className="absolute -bottom-4 -left-4 w-56 h-56 opacity-[0.09] pointer-events-none select-none" viewBox="0 0 120 120" fill="none">
                {/* Ramas / Pecíolos de base en la esquina */}
                <path d="M14 112 C18 108 26 100 32 88" stroke="#5C2000" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M52 110 C46 106 38 98 34 82" stroke="#5C2000" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
                <path d="M18 114 C12 116 6 118 4 119" stroke="#5C2000" strokeWidth="2" strokeLinecap="round" />

                {/* Hoja 1 (Grande, Central-Izquierda, tipo roble) */}
                <g>
                    {/* Cuerpo de la hoja */}
                    <path d="M16 104
                 C20 94 14 84 22 76
                 C15 64 24 55 24 44
                 C24 32 38 28 44 18
                 C48 14 58 8 62 14
                 C65 18 58 28 66 32
                 C72 35 78 28 82 34
                 C85 39 74 46 76 54
                 C78 62 86 64 80 72
                 C74 80 64 74 54 84
                 C46 92 48 102 36 106
                 C28 109 20 108 16 104 Z"
                          fill="#C85200" />
                    {/* Nervadura Principal */}
                    <path d="M19 101 C26 90 38 72 48 54 C53 44 57 30 60 16" stroke="#662200" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
                    {/* Nervaduras Secundarias */}
                    <path d="M26 90 C32 88 40 90 44 94" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M30 82 C24 78 18 78 16 79" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M35 74 C43 70 51 72 56 75" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M39 67 C33 60 25 58 22 62" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M43 59 C52 56 62 60 68 64" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M48 50 C44 42 34 38 30 40" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M53 40 C60 36 68 39 71 42" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M56 31 C52 24 44 22 41 24" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Hoja 2 (Mediana, Derecha, tipo arce/viento) */}
                <g opacity="0.9">
                    {/* Cuerpo de la hoja */}
                    <path d="M48 106
                 C56 102 52 90 60 84
                 C55 76 64 70 68 60
                 C64 48 78 46 82 36
                 C86 32 94 24 98 28
                 C100 31 94 40 102 42
                 C106 43 112 36 114 41
                 C116 45 106 51 106 58
                 C106 65 114 66 108 73
                 C103 79 94 74 86 82
                 C80 88 80 96 70 99
                 C62 102 54 102 48 106 Z"
                          fill="#E07000" />
                    {/* Nervadura Principal */}
                    <path d="M52 102 C60 92 70 76 78 61 C82 52 86 42 96 30" stroke="#662200" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
                    {/* Nervaduras Secundarias */}
                    <path d="M58 92 C65 90 70 94 72 97" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M62 84 C56 80 50 82 48 83" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M66 77 C74 74 81 77 84 81" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M70 71 C65 65 58 64 56 66" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M74 64 C82 61 88 64 92 68" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                    <path d="M78 56 C74 48 66 46 64 48" stroke="#662200" strokeWidth="1.1" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Hoja 3 (Pequeña, Izquierda) */}
                <g opacity="0.8">
                    {/* Cuerpo de la hoja */}
                    <path d="M6 72
                 C10 66 6 59 12 54
                 C8 46 14 40 14 32
                 C14 24 24 21 28 14
                 C31 11 38 7 40 11
                 C42 14 37 21 42 24
                 C46 26 50 21 53 25
                 C55 29 48 33 48 38
                 C48 43 53 44 49 49
                 C45 53 39 49 32 56
                 C27 61 28 68 20 71
                 C15 73 10 72 6 72 Z"
                          fill="#A03A00" />
                    {/* Nervadura Principal */}
                    <path d="M8 70 C13 62 21 50 28 38 C31 32 34 25 38 15" stroke="#4A1500" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
                    {/* Nervaduras Secundarias */}
                    <path d="M12 63 C17 61 21 63 23 65" stroke="#4A1500" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                    <path d="M15 57 C11 54 7 55 6 56" stroke="#4A1500" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                    <path d="M19 52 C24 50 29 52 31 55" stroke="#4A1500" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                    <path d="M22 47 C18 43 14 42 12 43" stroke="#4A1500" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                </g>
            </svg>

            {/* Espiga de trigo — bottom right (cosecha / Thanksgiving) */}
            <svg className="absolute bottom-0 right-10 w-16 h-36 opacity-[0.10] pointer-events-none select-none rotate-12" viewBox="0 0 60 130" fill="none">
                {/* Tallo */}
                <path d="M30 128 C29 100 31 60 30 22" stroke="#8A6A12" strokeWidth="2" strokeLinecap="round" />
                {/* Granos — par izquierda/derecha */}
                <g fill="#B8860B">
                    <ellipse cx="22" cy="34" rx="4.5" ry="10" transform="rotate(-32 22 34)" />
                    <ellipse cx="38" cy="34" rx="4.5" ry="10" transform="rotate(32 38 34)" />
                    <ellipse cx="22" cy="52" rx="4.5" ry="10" transform="rotate(-32 22 52)" />
                    <ellipse cx="38" cy="52" rx="4.5" ry="10" transform="rotate(32 38 52)" />
                    <ellipse cx="22" cy="70" rx="4.5" ry="10" transform="rotate(-32 22 70)" />
                    <ellipse cx="38" cy="70" rx="4.5" ry="10" transform="rotate(32 38 70)" />
                    <ellipse cx="23" cy="88" rx="4" ry="9" transform="rotate(-30 23 88)" />
                    <ellipse cx="37" cy="88" rx="4" ry="9" transform="rotate(30 37 88)" />
                    <ellipse cx="30" cy="14" rx="4.5" ry="11" />
                </g>
                {/* Aristas */}
                <g stroke="#8A6A12" strokeWidth="0.9" strokeLinecap="round" opacity="0.7">
                    <path d="M30 4 L30 -4" />
                    <path d="M18 28 L12 20" />
                    <path d="M42 28 L48 20" />
                </g>
            </svg>

            {/* Hoja suelta flotando — top left sutil */}
            <svg className="absolute top-8 left-1/4 w-16 h-16 opacity-[0.06] pointer-events-none select-none -rotate-12" viewBox="0 0 60 60" fill="none">
                <path d="M10 50 C10 50 5 25 25 10 C35 3 48 6 50 0 C50 0 53 18 42 28 C35 34 20 35 17 40 C14 45 15 50 10 50Z" fill="#cc5500"/>
                <path d="M50 0 L17 40" stroke="#8b3a00" strokeWidth="1"/>
            </svg>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center rounded-none p-4 sm:p-6 md:p-10">

                    {/* Columna Izquierda: El Trust Badge centrado */}
                    <div className="flex justify-center w-full">
                        <div className="nj-badge" data-show-reviews="1" />
                    </div>

                    {/* Columna Derecha: Texto explicativo y botón */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                        {/* Thanksgiving — quitar después del fin de semana */}
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#d95d00]/30 bg-[#d95d00]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#b34700]">
                            <MapleLeaf size={14} />
                            Thankful for you
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                            Did you work with us?
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
                            Your feedback is essential to help us keep improving and serving you better. Share your experience with us!
                        </p>

                        {/* Fallback rastreable para crawlers — NiceJob SDK reemplaza el href en runtime */}
                        <a
                            href="https://nicejob.com/advanced-roofing-team/invite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nj-review inline-flex items-center justify-center rounded-none bg-[#0052A3] px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-[#003d7a]"
                            data-fallback-href="https://nicejob.com/advanced-roofing-team/invite"
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