import React, { useState } from 'react';
import Link from "next/link";
import {ScrollReveal} from "@/shared/animations/ScrollReveal";


// Definimos una interfaz para las props del Slider
interface SliderInputProps {
    label: string;
    subLabel: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (val: number) => void;
    prefix?: string;
    suffix?: string;
    rangeLabels?: [string, string]; // Opcional y con formato de tupla
    allowedValues?: number[];
}

interface FinancingProps {
    backgroundColor?: string; // Prop opcional
}

const Financing = ({ backgroundColor = "bg-[#f0f0f0]" }: FinancingProps) => {
    const [amount, setAmount] = useState(74500);
    const [apr, setApr] = useState(12.4);
    const [term, setTerm] = useState(5);

    const r = (apr / 100) / 12;
    const n = term * 12;
    const rawPayment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const monthlyPayment = isFinite(rawPayment) ? rawPayment : 0;

    return (
        <section className={`${backgroundColor} py-12 md:py-24 px-10 md:px-16 lg:px-24 font-sans`}>
            <ScrollReveal direction="left" initialOpacity={20} distance={90} className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-10 gap-12 items-start" >

                <div className="space-y-8 md:col-span-6">
                    <div className="max-w-md mx-auto md:mx-0">
                        <h2 className="text-[#005596] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-center md:text-left">
                            We offer easy financing options for your project
                        </h2>
                        {/* --- BANNER DE HEARTH AQUÍ --- */}
                        <div className="flex flex-col items-center md:items-start gap-2 mb-6">
                            <p className="text-gray-600 text-lg text-center md:text-left">
                                Financing provided by:
                            </p>
                            <a
                                href="https://app.gethearth.com/financing/12308/13571/prequalify?utm_campaign=12308&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=13571"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform block"
                            >
                                <img
                                    src="https://app.gethearth.com/contractor_images/advanced-team/banner.jpg?size_id=310x120&amp;color=darkblue"
                                    alt="Hearth Financing Options"
                                    className="rounded-lg shadow-md border border-white/50"
                                    style={{ cursor: 'pointer', maxWidth: '280px', height: 'auto' }}
                                />
                            </a>
                        </div>
                        <p className="text-gray-600 text-lg text-center md:text-left">
                            Estimate what your monthly payment will be:
                        </p>
                    </div>

                    <div className="bg-[#d9d9d9] rounded-2xl p-1 flex flex-col md:flex-row items-stretch shadow-sm">
                        <div className="bg-[#005596] text-white p-6 rounded-xl md:w-1/2 flex flex-col justify-center">
                            <p className="italic text-sm mb-2 opacity-90 leading-tight">
                                Estimated min.<br />monthly payment
                            </p>
                            <span className="text-3xl md:text-4xl font-bold">
                            ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        </div>
                        <div className="p-6 flex items-center justify-around flex-1 text-[#005596] font-bold">
                            <div className="text-center">
                                <p className="text-[12px] uppercase text-gray-500 mb-1">Total Amount</p>
                                <p className="text-xl">${amount.toLocaleString()}</p>
                            </div>
                            <div className="text-4xl font-light text-gray-400">/</div>
                            <div className="text-center">
                                <p className="text-[12px] uppercase text-gray-500 mb-1">Monthly Payment</p>
                                <p className="text-xl">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 md:col-span-4">
                    <SliderInput
                        label="Amount"
                        subLabel="Move slider to select amount"
                        min={1000} max={250000} step={500}
                        value={amount} onChange={setAmount}
                        prefix="$"
                    />
                    <SliderInput
                        label="APR"
                        subLabel="Move slider to select APR"
                        min={5} max={40} step={0.1}
                        value={apr} onChange={setApr}
                        suffix="%"
                    />
                    <SliderInput
                        label="Financing term"
                        subLabel="In years"
                        min={2} max={12} step={2}
                        allowedValues={[2, 3, 5, 7, 9, 12]}
                        value={term} onChange={setTerm}
                        rangeLabels={['1', '12']}
                    />

                    <Link href="/contact-us" className="w-full" title="Go to our contact page">
                        <button className="w-full cursor-pointer bg-[#005596] text-white py-4 text-xl font-semibold hover:bg-[#00447a] transition-colors">
                            Contact Us
                        </button>
                    </Link>

                    <p className="text-xs text-gray-400 leading-relaxed mt-4">
                        * This estimate is based on the principal, APR, and term selected. Actual rates and
                        payments are subject to credit approval and will vary based on your personal
                        financial profile, final project scope, and material selection. Financing
                        is provided by third-party lenders.
                    </p>
                </div>

            </ScrollReveal>
        </section>
    );
};

// Componente Slider con Tipado Correcto
const SliderInput: React.FC<SliderInputProps> = ({
                                                     label, subLabel, min, max, step, value, onChange, prefix = "", suffix = "", rangeLabels, allowedValues
                                                 }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = Number(e.target.value);

        if (allowedValues && allowedValues.length > 0) {
            // Buscamos el valor de la lista más cercano al que marcó el input range
            const closest = allowedValues.reduce((prev, curr) => {
                return Math.abs(curr - rawValue) < Math.abs(prev - rawValue) ? curr : prev;
            });
            onChange(closest);
        } else {
            // Comportamiento normal para los demás sliders
            onChange(rawValue);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <h3 className="text-[#005596] font-bold text-lg leading-none">{label}</h3>
            <p className="text-gray-500 text-sm">{subLabel}</p>
            <div className="bg-[#d9d9d9] p-4 rounded-lg relative">
                <div className="flex justify-between items-center mb-2">
                    {/* Mostramos el valor actual (que gracias a handleChange será uno de la lista) */}
                    <span className="text-gray-700 font-medium">{prefix}{value}{suffix}</span>
                    <button className="text-gray-400 hover:text-gray-600">✎</button>
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={allowedValues ? 1 : step} // Si hay lista, usamos step 1 para mayor suavidad al detectar el cambio
                    value={value}
                    onChange={handleChange}
                    className="w-full h-1 bg-[#005596] rounded-lg appearance-none cursor-pointer accent-[#005596]"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>{rangeLabels ? rangeLabels[0] : `${prefix}${min}${suffix}`}</span>
                    <span>{rangeLabels ? rangeLabels[1] : `${prefix}${max.toLocaleString()}${suffix}`}</span>
                </div>
            </div>
        </div>
    );

};

export default Financing;