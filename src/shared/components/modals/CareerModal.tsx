"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
    { src: "/assets/images/shared/dialog_hiring_1.webp", link: "/contact-us" },
    { src: "/assets/images/shared/dialog_hiring_2.webp", link: "/contact-us" },
];

export const CareerCarousel = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    const close = () => dialogRef.current?.close();

    return (
        <dialog
            ref={dialogRef}
            className="rounded-2xl p-0 backdrop:bg-black/70 bg-transparent overflow-visible animate-[modal-pop_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards] max-w-[95vw]"
            style={{ margin: "auto" }}
            onCancel={close}
        >
            {/* Botón de cerrar */}
            <button
                onClick={close}
                className="absolute -top-3 -right-3 z-50 h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg hover:bg-neutral-100 outline-none"
            >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-5 w-5 sm:h-6 sm:w-6"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>

            {/* Contenedor del Carrusel */}
            <div className="relative aspect-[4/3] w-[85vw] max-w-[720px] overflow-hidden rounded-2xl shadow-2xl">
                {slides.map((slide, index) => (
                    <div key={slide.src} className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                        <Image src={slide.src} alt="Hiring" fill priority quality={100} className="object-cover" />
                        {/* Botón APPLY NOW responsivo */}
                        <a
                            href={slide.link}
                            className="absolute bottom-4 right-4 sm:bottom-8 sm:right-12 px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-lg rounded-lg bg-yellow-400 font-bold text-blue-900 shadow-xl hover:scale-105 transition-transform"
                        >
                            APPLY NOW
                        </a>
                    </div>
                ))}
            </div>

            {/* Flechas de navegación (ocultas en móviles muy pequeños para evitar desbordamiento) */}
            <button
                onClick={prevSlide}
                className="absolute left-1 top-1/2 -translate-y-1/2 md:left-[-50px] p-1 md:p-2 text-white/70 hover:text-yellow-400 transition z-10"
            >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-1 top-1/2 -translate-y-1/2 md:right-[-50px] p-1 md:p-2 text-white/70 hover:text-yellow-400 transition z-10"
            >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </dialog>
    );
};