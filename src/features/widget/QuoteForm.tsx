"use client";

import { useState, useEffect } from "react";
import { useRoofCalculator } from "@/hooks/useRoofCalculator";
import { RoofMaterial, RoofPitch, DetectedPitch } from "@/types/roofing";
import { LeadForm } from "./LeadForm";
import { ConfirmationScreen } from "./ConfirmationScreen";

interface QuoteFormProps {
    initialArea: number;
    initialPitch: DetectedPitch;
    liveArea?: number;
    address?: string;
}

type Step = "quote" | "lead" | "confirmation";

// Pitches disponibles para asphalt — TPO no usa pitch
const ASPHALT_PITCHES: { value: RoofPitch; label: string; range: string }[] = [
    { value: "shallow",    label: "Shallow",    range: "4/12–6/12"  },
    { value: "medium",     label: "Medium",     range: "7/12–8/12"  },
    { value: "steep",      label: "Steep",      range: "9/12–11/12" },
    { value: "high_steep", label: "High Steep", range: "12/12"      },
];

const PITCH_ICONS: Record<string, React.ReactNode> = {
    shallow: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 15L12 12L21 15" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15V21H19V15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    medium: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 mb-1" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 15L12 9L21 15" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15V21H19V15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    steep: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 mb-1" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M3 15L12 6L21 15" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15V21H19V15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    high_steep: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 mb-1" fill="none" stroke="currentColor" strokeWidth="2.8">
            <path d="M3 15L12 3L21 15" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 15V21H19V15" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
};

export const QuoteForm = ({ initialArea, initialPitch, liveArea, address = "" }: QuoteFormProps) => {
    const { calculateQuote } = useRoofCalculator();
    const [step, setStep] = useState<Step>("quote");
    const [sqft, setSqft] = useState(initialArea);
    const suggestedMaterial: RoofMaterial = initialPitch === "flat" ? "flat_tpo" : "asphalt_shingle";
    const resolvedInitialPitch: RoofPitch = initialPitch === "flat" ? "shallow" : initialPitch;
    const [material, setMaterial] = useState<RoofMaterial>(suggestedMaterial);
    const [pitch, setPitch] = useState<RoofPitch>(resolvedInitialPitch);
    const [layers, setLayers] = useState(1);

    const isTPO = material === "flat_tpo";

    useEffect(() => {
        if (initialPitch === "flat") {
            setMaterial("flat_tpo");
            setPitch("shallow"); // fallback, no se usa pero mantiene estado limpio
        } else {
            setPitch(initialPitch);
        }
    }, [initialPitch]);

    useEffect(() => {
        if (liveArea !== undefined && liveArea !== sqft) setSqft(liveArea);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [liveArea]);

    const result = calculateQuote({ address, squareFeet: sqft, material, pitch, layersToRemove: layers });

    const quoteSummary = { address, sqft, material, pitch, layers, ...result };

    if (step === "lead") return <LeadForm quote={quoteSummary} onSuccess={() => setStep("confirmation")} onBack={() => setStep("quote")} />;
    if (step === "confirmation") return <ConfirmationScreen total={result.total} />;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 sm:p-8 rounded-2xl shadow-2xl border border-gray-100">

            {/* ── Controles ── */}
            <div className="space-y-6 text-black">
                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-2">
                    Roof Details
                </h3>

                {/* Área - Estética neutral y limpia */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">
                        Detected Roof Area
                    </p>
                    <p className="text-2xl font-black text-gray-900">
                        {sqft.toLocaleString()} <span className="text-base font-semibold text-gray-500">sq ft</span>
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 italic">
                        Drag polygon vertices on the map to adjust
                    </p>
                </div>

                {/* Material — Botones en escala de grises */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Material Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { value: "asphalt_shingle", label: "Asphalt Shingles" },
                            { value: "flat_tpo",        label: "Flat Roof (TPO)"  },
                        ].map((m) => {
                            const isSelected = material === m.value;
                            const isSuggested = (m.value === "flat_tpo" && initialPitch === "flat") ||
                                (m.value === "asphalt_shingle" && initialPitch !== "flat");

                            return (
                                <button
                                    key={m.value}
                                    type="button"
                                    onClick={() => setMaterial(m.value as RoofMaterial)}
                                    className={`relative py-4 px-2 rounded-xl border-2 transition-all flex flex-col items-center gap-1 ${
                                        isSelected
                                            ? "border-gray-900 bg-gray-100 text-gray-900 shadow-sm"
                                            : "border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200"
                                    }`}
                                >
                        <span className={`text-sm ${isSelected ? "font-black" : "font-bold"}`}>
                            {m.label}
                        </span>

                                    {/* Badge de Sugerido sutil */}
                                    {isSuggested && (
                                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-black uppercase tracking-tighter ${
                                            isSelected
                                                ? "bg-gray-900 text-white"
                                                : "bg-gray-200 text-gray-500"
                                        }`}>
                                Suggested
                            </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Pitch — solo si es asphalt */}
                {!isTPO && (
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Roof Pitch (Steepness)</label>
                        <div className="grid grid-cols-4 gap-1.5">
                            {ASPHALT_PITCHES.map((p) => {
                                const isSelected = pitch === p.value;
                                const isSuggested = initialPitch !== "flat" && initialPitch === p.value;

                                return (
                                    <button
                                        key={p.value}
                                        type="button"
                                        onClick={() => setPitch(p.value)}
                                        className={`flex flex-col items-center justify-center py-3 px-1 rounded-xl border-2 transition-all ${
                                            isSelected
                                                ? "border-gray-900 bg-gray-100 text-gray-900 shadow-sm"
                                                : "border-gray-100 bg-gray-50 text-gray-400 hover:border-gray-200"
                                        }`}
                                    >
                                        {/* Icono Visual */}
                                        <div className={`${isSelected ? "text-gray-900" : "text-gray-300"}`}>
                                            {PITCH_ICONS[p.value]}
                                        </div>

                                        <span className={`text-[9px] uppercase tracking-wider leading-tight text-center ${isSelected ? "font-black" : "font-bold"}`}>
                        {p.label}
                    </span>
                                        <span className="text-[8px] text-gray-400 mt-0.5">{p.range}</span>

                                        {/* Suggested Badge Neutral */}
                                        {isSuggested && (
                                            <span className={`text-[7px] mt-1.5 px-1.5 py-0.5 rounded font-black uppercase tracking-tighter ${
                                                isSelected ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500"
                                            }`}>
                            Suggested
                        </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* TPO info */}
                {isTPO && (
                    <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                        <p className="text-xs text-amber-700 font-semibold">
                            TPO flat roofs are priced at a fixed rate per square. No pitch or layer removal applies.
                        </p>
                    </div>
                )}

                {/* Layers — solo si es asphalt */}
                {!isTPO && (
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Existing Layers to Remove</label>
                        <div className="flex gap-2">
                            {[1, 2, 3].map((n) => {
                                const isSelected = layers === n;
                                return (
                                    <button
                                        key={n}
                                        type="button"
                                        onClick={() => setLayers(n)}
                                        className={`flex-1 py-2 rounded-lg border-2 text-sm transition-all ${
                                            isSelected
                                                ? "border-gray-900 bg-gray-100 text-gray-900 font-black shadow-sm"
                                                : "border-gray-100 bg-gray-50 text-gray-400 font-bold hover:border-gray-200"
                                        }`}
                                    >
                                        {n} {n === 1 ? "layer" : "layers"}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* ── Estimate Summary ── */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between shadow-sm">
                <div>
                    <h3 className="text-lg font-black text-gray-900 mb-5 uppercase tracking-tight border-b border-gray-200 pb-2">
                        Estimate Summary
                    </h3>
                    <div className="space-y-4">
                        {isTPO ? (
                            <div className="flex items-start gap-3 text-gray-700">
                                <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                                <span className="text-sm font-medium">TPO Flat Roof Installation (incl. insulation)</span>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-start gap-3 text-gray-700">
                                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                                    <span className="text-sm font-medium">
                            Asphalt Shingles — <span className="font-bold text-gray-900">{ASPHALT_PITCHES.find(p => p.value === pitch)?.label}</span> pitch ({ASPHALT_PITCHES.find(p => p.value === pitch)?.range})
                        </span>
                                </div>
                                <div className="flex items-start gap-3 text-gray-700">
                                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                                    <span className="text-sm font-medium">
                            Tear-off & Disposal — <span className="font-bold text-gray-900">{layers} {layers === 1 ? "layer" : "layers"}</span>
                        </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-6">
            <span className="text-gray-500 font-black text-xs uppercase tracking-widest">
                Total Estimate
            </span>
                        <span className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">
                ${result.total.toLocaleString()}
            </span>
                    </div>

                    {/* Botón Principal: Negro con hover sutil */}
                    <button
                        onClick={() => setStep("lead")}
                        className="w-full bg-gray-900 hover:bg-black text-white font-black text-lg py-4 rounded-xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-wider"
                    >
                        Get My Quote →
                    </button>

                    <p className="text-[10px] text-gray-400 mt-5 italic text-center leading-tight">
                        *Automated estimate for Chicago area. <br />
                        Final price subject to on-site inspection.
                    </p>
                </div>
            </div>
        </div>
    );
};