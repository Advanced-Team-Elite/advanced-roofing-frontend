'use client';

import Image from "next/image";
import styles from "@/features/home/AboutHome/AboutHome.module.css";
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

export default function SolarPanel() {

    return (
        <ScrollReveal
            direction="zoom"
            initialOpacity={100}
            className="relative w-full overflow-hidden bg-white py-1"
        >
            <div className="mx-auto w-full max-w-[424px] md:max-w-2xl xl:max-w-[1500px] px-6 lg:px-10">
                {/* Cambiado a xl:grid-cols-2 para que en tablets sea 1 sola columna */}
                <div className="grid grid-cols-1 xl:grid-cols-2 min-h-[620px] items-center">

                    {/* IZQUIERDA — Imagen con altura asegurada para que no desaparezca */}
                    <div className="relative w-full h-[350px] md:h-[450px] xl:h-full overflow-hidden">
                        <Image
                            src="/assets/images/features/home/solar/solar-panel.webp"
                            alt="Modern solar panel installation"
                            fill
                            className="object-contain object-center p-1 md:p-8"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
                    </div>

                    {/* DERECHA — Texto */}
                    <div className={`flex flex-col justify-center items-center xl:items-start bg-white px-3 py-0 pb-3 xl:px-16 xl:py-20 transition-all duration-1000 delay-200 ease-out`}>

                        <h2 className="font-jost text-4xl md:text-5xl font-black leading-[1.05] text-[#00589e] xl:text-6xl mb-6 text-center xl:text-left">
                            The Smart Choice
                            <br />
                            <span className="text-[#1e2022]">for Your Energy</span>
                            <br />
                            Future.
                        </h2>

                        <div className="w-16 h-1.5 bg-[#f7d000] mb-8" />

                        <p className="text-lg leading-relaxed text-black max-w-xl mb-10 text-center xl:text-left">
                            Integrate state-of-the-art solar solutions with your roofing system.
                            Maximize energy efficiency, reduce utility costs, and protect your
                            property with clean, reliable power built to last.
                        </p>

                        <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 w-full">
                            {/* Banner CTA centrado, con texto más grande y enlace amarillo sin subrayado */}
                            <div className="w-full bg-[#00589e] p-6 md:p-8 rounded-none shadow-md text-white">
                                <p className="text-center text-lg md:text-lg font-medium leading-relaxed">
                                    Call <strong className="font-bold text-white">(877) 945-6565</strong> today or{' '}
                                    <Link
                                        href="/contact-us"
                                        className="text-[#f7d000] font-semibold hover:text-white transition-colors"
                                        title="Go to our contact page"
                                    >
                                        contact us online
                                    </Link>{' '}
                                    to schedule your free solar panel estimate with our experienced Chicago team.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ScrollReveal>
    );
}