"use client";
// components/widget/ConfirmationScreen.tsx

interface ConfirmationScreenProps {
    total: number;
}

export const ConfirmationScreen = ({ total }: ConfirmationScreenProps) => {
    return (
        <div className="animate-in fade-in zoom-in-95 duration-500 bg-white p-10 sm:p-14 rounded-3xl shadow-2xl border border-gray-100 text-center max-w-2xl mx-auto">

            {/* Icono de Éxito - El único toque de color funcional */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mx-auto mb-6 border border-emerald-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">You're all set!</h2>
            <p className="text-gray-500 text-lg mb-8">Your quote request has been received.</p>

            {/* Caja de Estimación Neutral */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl px-10 py-6 inline-block mb-10 shadow-sm">
                <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em] mb-2">
                    Final Estimate
                </p>
                <p className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tighter">
                    ${total.toLocaleString()}
                </p>
            </div>

            {/* Información de contacto - Iconografía en Gris */}
            <div className="space-y-4 text-sm text-gray-500 max-w-sm mx-auto">
                <div className="flex items-center justify-center gap-3 bg-gray-50/50 py-2 px-4 rounded-lg border border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Check your email for a copy of this estimate.</span>
                </div>

                <div className="flex items-center justify-center gap-3 bg-gray-50/50 py-2 px-4 rounded-lg border border-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">A specialist will call you within <strong className="text-gray-900 font-black">24 hours</strong>.</span>
                </div>
            </div>

            {/* Footer de marca minimalista */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">
                    Advanced Roofing Team · Chicago, IL
                </p>
                <p className="text-[10px] text-gray-300 mt-1">
                    advancedteamelite.com
                </p>
            </div>
        </div>
    );
};