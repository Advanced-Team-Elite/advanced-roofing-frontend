"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export const CareerModal = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        dialogRef.current?.showModal();
    }, []);

    const close = () => dialogRef.current?.close();

    return (
        <dialog
            ref={dialogRef}
            className="rounded-2xl p-0 backdrop:bg-black/70 bg-transparent overflow-visible animate-[modal-pop_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
            style={{ margin: "auto" }}
            onCancel={close}
        >
            {/* Botón de cerrar */}
            <button
                onClick={close}
                aria-label="Cerrar"
                // He añadido 'outline-none' y asegurado que no sea focusable innecesariamente
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-50 flex h-8 w-8 sm:h-9 sm:w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 hover:ring-white/40 outline-none focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    className="h-4 w-4"
                >
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>

            {/* Contenedor de la imagen */}
            <div className="relative aspect-[4/3] w-[90vw] max-w-[340px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[720px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                    src="/assets/images/shared/popup.webp"
                    alt="Make money with us"
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 800px) 90vw, 720px"
                    className="object-cover"
                />

                {/* Botón APPLY NOW */}
                <a
                    href="http://localhost:3000/contact-us"
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-8 md:right-12 cursor-pointer rounded-lg bg-yellow-400 px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 md:text-lg font-bold !text-blue-900 shadow-xl transition-transform hover:scale-105"
                >
                    APPLY NOW
                </a>
            </div>
        </dialog>
    );
};