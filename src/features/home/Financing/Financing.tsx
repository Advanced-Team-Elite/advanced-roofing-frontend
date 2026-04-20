import React, { useState } from 'react';
import Link from "next/link";


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
}

const Financing = () => {
    const [amount, setAmount] = useState(74500);
    const [apr, setApr] = useState(12.4);
    const [term, setTerm] = useState(5);

    const r = (apr / 100) / 12;
    const n = term * 12;
    const rawPayment = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const monthlyPayment = isFinite(rawPayment) ? rawPayment : 0;

    return (
        <section className="bg-[#f0f0f0] py-12 md:py-24 px-10 md:px-16 lg:px-24 font-sans">
            <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-10 gap-12 items-center">

                <div className="space-y-8 md:col-span-6">
                    <div className="max-w-md mx-auto md:mx-0">
                        <h2 className="text-[#005596] text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-center md:text-left">
                            We offer easy financing options for your project
                        </h2>
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
                                <p className="text-[10px] uppercase text-gray-500 mb-1">Total Amount</p>
                                <p className="text-xl">${amount.toLocaleString()}</p>
                            </div>
                            <div className="text-4xl font-light text-gray-400">/</div>
                            <div className="text-center">
                                <p className="text-[10px] uppercase text-gray-500 mb-1">Monthly Payment</p>
                                <p className="text-xl">${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 md:col-span-4">
                    <SliderInput
                        label="Amount"
                        subLabel="Move slider to select amount"
                        min={500} max={200000} step={500}
                        value={amount} onChange={setAmount}
                        prefix="$"
                    />
                    <SliderInput
                        label="APR"
                        subLabel="Move slider to select APR"
                        min={0} max={39} step={0.1}
                        value={apr} onChange={setApr}
                        suffix="%"
                    />
                    <SliderInput
                        label="Financing term"
                        subLabel="In years"
                        min={1} max={12} step={1}
                        value={term} onChange={setTerm}
                        rangeLabels={['1', '12']}
                    />

                    <Link href="/contact-us" className="w-full">
                        <button className="w-full cursor-pointer bg-[#005596] text-white py-4 text-xl font-semibold hover:bg-[#00447a] transition-colors">
                            Contact Us
                        </button>
                    </Link>
                    <p className="text-xs text-gray-400 leading-relaxed mt-4">
                        * Estimated payments based on credit approval. Final pricing depends on individual
                        creditworthiness and a physical inspection of project scope and materials.
                        Financing provided by third-party lenders.
                    </p>
                </div>

            </div>
        </section>
    );
};

// Componente Slider con Tipado Correcto
const SliderInput: React.FC<SliderInputProps> = ({
                                                     label, subLabel, min, max, step, value, onChange, prefix = "", suffix = "", rangeLabels
                                                 }) => (
    <div className="flex flex-col space-y-2">
        <h3 className="text-[#005596] font-bold text-lg leading-none">{label}</h3>
        <p className="text-gray-500 text-sm">{subLabel}</p>
        <div className="bg-[#d9d9d9] p-4 rounded-lg relative">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">{prefix}{value}{suffix}</span>
                <button className="text-gray-400 hover:text-gray-600">✎</button>
            </div>
            <input
                type="range"
                min={min} max={max} step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-1 bg-[#005596] rounded-lg appearance-none cursor-pointer accent-[#005596]"
            />
            <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <span>{rangeLabels ? rangeLabels[0] : `${prefix}${min}${suffix}`}</span>
                <span>{rangeLabels ? rangeLabels[1] : `${prefix}${max.toLocaleString()}${suffix}`}</span>
            </div>
        </div>
    </div>
);

export default Financing;