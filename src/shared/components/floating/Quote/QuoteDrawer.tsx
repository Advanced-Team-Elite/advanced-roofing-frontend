"use client";
/**
 * QuoteDrawer — GoogleMapsProvider removed.
 * The SDK is now loaded globally in RootLayout → GoogleMapsProvider.
 * This component simply uses AddressSearch and RoofMap directly.
 */
import { useState } from "react";
import styles from "../FloatingActions.module.css";
import { AddressSearch } from "@/features/widget/AddressSearch";
import { RoofMap } from "@/features/widget/RoofMap";
import { QuoteForm } from "@/features/widget/QuoteForm";
import { getRoofData } from "@/lib/google-solar";
import { DEFAULT_CENTER } from "@/lib/google-maps";
import { DetectedPitch } from "@/types/roofing";

interface QuoteDrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

type WidgetStep = "search" | "quote";

export const QuoteDrawer = ({ isOpen, setIsOpen }: QuoteDrawerProps) => {
    const [step, setStep]                   = useState<WidgetStep>("search");
    const [location, setLocation]           = useState(DEFAULT_CENTER);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [detectedArea, setDetectedArea]   = useState(2000);
    const [roofPolygon, setRoofPolygon]     = useState<{ lat: number; lng: number }[] | undefined>(undefined);
    const [suggestedPitch, setSuggestedPitch] = useState<DetectedPitch>("medium");
    const [mapZoom, setMapZoom]             = useState(11);
    const [roofError, setRoofError]         = useState<string | null>(null);
    const [isLoading, setIsLoading]         = useState(false);
    const [showHint, setShowHint]           = useState(true);

    const handleAddressSelect = async (address: string, lat: number, lng: number) => {
        setLocation({ lat, lng });
        setSelectedAddress(address);
        setMapZoom(19);
        setRoofError(null);
        setIsLoading(true);

        try {
            const data = await getRoofData(lat, lng);
            if (!data.areaSqFt || data.areaSqFt < 300) {
                setRoofError("no_building");
                return;
            }
            setDetectedArea(data.areaSqFt);
            setRoofPolygon(data.coords);

            if (data.pitchDegrees < 5)       setSuggestedPitch("flat");
            else if (data.pitchDegrees < 15) setSuggestedPitch("shallow");
            else if (data.pitchDegrees < 30) setSuggestedPitch("medium");
            else                             setSuggestedPitch("steep");
        } catch {
            setRoofError("api_error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleReset = () => {
        setStep("search");
        setSelectedAddress("");
        setRoofPolygon(undefined);
        setLocation(DEFAULT_CENTER);
    };

    return (
        <div className={`${styles.quoteWrapper} ${isOpen ? styles.wrapperOpen : ''}`}>

            {/* Notification bubble */}
            {!isOpen && showHint && (
                <div className={styles.quoteHint}>
                    <span className={styles.notifIcon}>!</span>
                    <button
                        className={styles.closeHint}
                        onClick={(e) => { e.stopPropagation(); setShowHint(false); }}
                    >
                        ×
                    </button>
                    <p className={styles.hintTitle}>Need a roof quote?</p>
                    <p className={styles.hintSubtitle}>Get your price NOW!</p>
                    <div className={styles.hintArrow}></div>
                </div>
            )}

            <button
                className={styles.quoteSideBtn}
                onClick={() => setIsOpen(!isOpen)}
                data-no-scale
            >
                <span className={styles.quoteText}>Instant Roof Quote</span>
            </button>

            <div className={styles.quoteDrawer}>
                    <div className="flex flex-col h-full bg-white overflow-y-auto pr-2 custom-scrollbar">
                        {/* Header con botón de cierre pegado a la derecha */}
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>

                        <div className={styles.drawerContent}>
                            {step === "search" ? (
                                <div className="flex flex-col flex-1 px-4 sm:px-8 md:px-12 pb-10">
                                    <div className="text-center mb-8">
                                        <h1 className="text-4xl font-black text-[#00589e] mb-2 tracking-tight">
                                            What Will My Roof Cost?
                                        </h1>
                                        <p className="text-gray-500 text-lg font-medium">
                                            Enter your street address to get an accurate estimate instantly
                                        </p>
                                    </div>

                                    <div className="mb-6 relative">
                                        <AddressSearch
                                            onAddressSelect={handleAddressSelect}
                                            variant="default"
                                            placeholder="Enter your street address to see your price"
                                        />
                                    </div>

                                    <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border-4 border-white  relative">
                                        <RoofMap
                                            center={location}
                                            zoom={mapZoom}
                                            polygonCoords={roofPolygon}
                                            hideControls={!selectedAddress}
                                        />
                                        {isLoading && (
                                            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-20">
                                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366]"></div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Botón que recién aparece al tener el polígono */}
                                    {selectedAddress && !isLoading && roofPolygon && (
                                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <button
                                                onClick={() => setStep("quote")}
                                                className="w-full py-5 bg-[#00589e] text-white font-black text-xl uppercase tracking-widest rounded-xl hover:bg-[#00437a] cursor-pointer transition-all active:scale-[0.98]"
                                            >
                                                See My Estimate →
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                /* ── STEP 2: CALCULADORA Y COTIZACIÓN ─────────────────────────────── */
                                <div className="flex flex-col flex-1 px-4 sm:px-8 md:px-12 pb-10 animate-in fade-in duration-500">
                                    {/* Cabecera del Step 2 con botón de retorno */}
                                    <div className="mb-8">
                                        <button
                                            onClick={() => setStep("search")}
                                            className="flex items-center gap-2 text-gray-500 hover:text-[#00589e] cursor-pointer transition-colors font-bold text-sm uppercase tracking-wider"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                                <polyline points="12 19 5 12 12 5"></polyline>
                                            </svg>
                                            Back to Map
                                        </button>
                                    </div>

                                    <div className="mb-8">
                                        <h2 className="text-5xl font-prompt text-[#00589e] mb-5">
                                            Your Instant Estimate
                                        </h2>
                                        {/* Badge de la dirección seleccionada */}
                                        <div className="bg-gray-50 border-l-4 border-[#00589e] p-4 rounded-r-xl ">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Property Address</p>
                                            <p className="text-sm font-bold text-gray-800 truncate">{selectedAddress}</p>
                                        </div>
                                    </div>

                                    {/* Componente de Formulario que ya tienes */}
                                    <div className="bg-white rounded-2xl border border-gray-100 p-2">
                                        <QuoteForm
                                            initialArea={detectedArea}
                                            initialPitch={suggestedPitch}
                                            address={selectedAddress}
                                        />
                                    </div>

                                    {/* Footer de confianza - Privacidad de Datos */}
                                    <div className="mt-10 p-6 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-center gap-4">
                                        <div className="bg-[#00589e] p-3 rounded-full text-white shadow-sm">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-[#00589e] uppercase tracking-tight">
                                                Privacy First
                                            </p>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                We do not store your personal data.
                                                Your information is only used to generate this instant estimate.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
            </div>
        </div>
    );
};