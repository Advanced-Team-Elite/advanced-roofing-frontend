"use client";
// components/widget/LeadForm.tsx
// Reemplaza al QuoteForm tras click en "Get My Quote"
// Recopila datos de contacto y dispara el envío del lead + PDF opcional

import { useState } from "react";

interface QuoteSummary {
    address: string;
    sqft: number;
    material: string;
    pitch: string;
    layers: number;
    materialCost: number;
    laborCost: number;
    removalCost: number;
    total: number;
}

const PITCH_LABELS: Record<string, string> = {
    shallow: "Shallow",
    medium: "Medium",
    steep: "Steep",
    high_steep: "High Steep",
    flat: "Flat Roof"
};

interface LeadFormProps {
    quote: QuoteSummary;
    onSuccess: () => void;
    onBack: () => void;
}

export const LeadForm = ({ quote, onSuccess, onBack }: LeadFormProps) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: quote.address,
        sendPdf: true,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        if (name === "phone") {
            // Auto-formato (XXX) XXX-XXXX mientras el usuario escribe
            const digits = value.replace(/\D/g, "").slice(0, 10);
            let formatted = digits;
            if (digits.length > 6) {
                formatted = `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
            } else if (digits.length > 3) {
                formatted = `(${digits.slice(0,3)}) ${digits.slice(3)}`;
            } else if (digits.length > 0) {
                formatted = `(${digits}`;
            }
            setForm(prev => ({ ...prev, phone: formatted }));
            return;
        }
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async () => {
        // Validación básica
        if (!form.firstName || !form.email || !form.phone) {
            setError("Please fill in all required fields.");
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        // Validar teléfono US: acepta (312) 555-0000, 312-555-0000, 3125550000, +13125550000
        const phoneDigits = form.phone.replace(/\D/g, "");
        if (phoneDigits.length < 10 || phoneDigits.length > 11) {
            setError("Please enter a valid US phone number (e.g. (312) 555-0000).");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/send-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, quote }),
            });

            if (!res.ok) throw new Error("Failed to send");
            onSuccess();
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const materialLabels: Record<string, string> = {
        asphalt_shingle: "Asphalt Shingles",
        metal: "Premium Metal",
        flat_tpo: "Flat Roof (TPO)",
        slate: "Natural Slate",
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-5 sm:p-8 rounded-2xl shadow-2xl border border-gray-100">

                {/* ── Columna izquierda: formulario ─────────────────────────── */}
                <div className="space-y-5">
                    <div>
                        <button
                            onClick={onBack}
                            className="text-sm text-gray-500 hover:text-black font-bold flex items-center gap-1 mb-4 transition-colors"
                        >
                            ← Back to estimate
                        </button>
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">Get Your Free Quote</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            A specialist will contact you within 24 hours.
                        </p>
                    </div>

                    {/* Nombre */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                placeholder="John"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none bg-gray-50 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all shadow-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">
                                Last Name
                            </label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                placeholder="Smith"
                                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none bg-gray-50 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@email.com"
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none bg-gray-50 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all shadow-sm"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">
                            Cell Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="(312) 555-0000"
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none bg-gray-50 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all shadow-sm"
                        />
                    </div>

                    {/* Dirección */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1 uppercase tracking-wider">
                            Property Address
                        </label>
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="123 Main St, Chicago, IL"
                            className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm text-black outline-none bg-gray-50 focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all shadow-sm"
                        />
                    </div>

                    {/* Checkbox PDF */}
                    <label className="flex items-center gap-3 cursor-pointer group bg-gray-50 p-3 rounded-lg border border-gray-100 hover:border-gray-300 transition-all">
                        <input
                            type="checkbox"
                            name="sendPdf"
                            checked={form.sendPdf}
                            onChange={handleChange}
                            className="w-4 h-4 accent-black cursor-pointer"
                        />
                        <span className="text-sm text-gray-600 group-hover:text-black font-medium transition-colors">
            Send me a PDF copy of this estimate to my email
        </span>
                    </label>

                    {/* Error */}
                    {error && (
                        <p className="text-xs font-bold text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5 flex items-center gap-2">
                            <span>⚠️</span> {error}
                        </p>
                    )}
                </div>

                {/* ── Columna derecha: resumen del presupuesto ──────────────── */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-between shadow-sm">
                    <div>
                        <h3 className="text-lg font-black text-gray-900 mb-1 uppercase tracking-tight">Your Estimate Summary</h3>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                <circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none"/>
                            </svg>
                            {quote.address || "Chicago Area"}
                        </div>

                        <div className="space-y-2.5 text-sm mb-6">
                            <div className="flex justify-between text-gray-500">
                                <span className="font-medium">Roof Size:</span>
                                <span className="font-bold text-gray-900">{quote.sqft.toLocaleString()} sq ft</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span className="font-medium">Material:</span>
                                <span className="font-bold text-gray-900">{materialLabels[quote.material] ?? quote.material}</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span className="font-medium">Pitch:</span>
                                <span className="font-bold text-gray-900">
                                    {PITCH_LABELS[quote.pitch] ?? quote.pitch.replace('_', ' ')}
                                </span>
                            </div>

                            {/* Desglose de costos con línea punteada */}
                            <div className="border-t border-dashed border-gray-300 pt-4 mt-4 space-y-2.5">
                                <div className="flex justify-between text-gray-500">
                                    <span>Materials</span>
                                    <span className="font-bold text-gray-500">xxx</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Labor</span>
                                    <span className="font-bold text-gray-500">xxx</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                    <span>Tear-off</span>
                                    <span className="font-bold text-gray-500">xxx</span>
                                </div>
                            </div>
                        </div>

                        {/* Total con tipografía impactante */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-t-2 border-gray-900 pt-5 gap-1">
                            <span className="text-gray-500 font-black text-xs uppercase tracking-widest">Total Estimate</span>
                            <span className="text-4xl font-black text-gray-900 tracking-tighter">
                ${quote.total.toLocaleString()}
            </span>
                        </div>
                    </div>

                    {/* CTA Final en Negro Sólido */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="mt-8 w-full bg-gray-900 hover:bg-black disabled:bg-gray-300 text-white font-black text-lg py-4 rounded-xl shadow-xl transition-all active:scale-[0.98] uppercase tracking-wider flex items-center justify-center gap-2 group"
                    >
                        {loading ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                Submit & Get Quote
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </>
                        )}
                    </button>

                    <p className="text-[10px] text-gray-400 mt-4 text-center italic leading-tight">
                        No spam. A real specialist will reach out <br />
                        within 24 hours to confirm your details.
                    </p>
                </div>
            </div>
        </div>
    );
};