"use client";

import { useState } from "react";
import styles from "../FloatingActions.module.css";
import { AddressSearch } from "@/features/widget/AddressSearch";
import { RoofMap } from "@/features/widget/RoofMap";
import { QuoteForm } from "@/features/widget/QuoteForm";
import { getRoofData } from "@/lib/google-solar";
import { computeAreaSqFt } from "@/lib/polygon-area";
import { DEFAULT_CENTER } from "@/lib/google-maps";
import { RoofSection, DetectedPitch } from "@/types/roofing";

interface QuoteDrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

type WidgetStep = "search" | "quote";

const SECTION_COLORS = ["#00589e", "#e65100", "#2e7d32", "#6a1b9a", "#c2185b"];

let sectionIdCounter = 0;
function nextSectionId(): string {
    sectionIdCounter += 1;
    return `section-${sectionIdCounter}`;
}

// ── Decoración de otoño (reemplaza los emojis 🍂 🍁) ─────────
function MapleLeafIcon({ size = 18 }: { size?: number }) {
    return (
        <svg
            viewBox="0 0 64 64"
            width={size}
            height={size}
            aria-hidden="true"
            style={{ display: "inline-block", flexShrink: 0 }}
        >
            <path
                d="M32 4 L38 16 L47 11 L44 25 L58 22 L50 33 L58 39 L44 41 L46 48 L35 45 L32 58 L29 45 L18 48 L20 41 L6 39 L14 33 L6 22 L20 25 L17 11 L26 16 Z"
                fill="#d95d00"
            />
            <path
                d="M32 4 L38 16 L47 11 L44 25 L58 22 L50 33 L58 39 L44 41 L46 48 L35 45 L32 58 Z"
                fill="#f08a1c"
                opacity="0.55"
            />
            <path d="M32 58 L32 14" stroke="#7a2f00" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M32 40 L22 31 M32 40 L42 31 M32 30 L24 22 M32 30 L40 22" stroke="#7a2f00" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <path d="M32 58 L32 63" stroke="#5c2000" strokeWidth="2.4" strokeLinecap="round" />
        </svg>
    );
}

function AcornIcon({ size = 18 }: { size?: number }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            aria-hidden="true"
            style={{ display: "inline-block", flexShrink: 0 }}
        >
            <rect x="11.2" y="2" width="1.6" height="3.6" rx="0.8" fill="#5c2f0a" />
            <path d="M12 21.5c-3-1-5.5-5.5-5.5-10h11c0 4.5-2.5 9-5.5 10z" fill="#d9993a" />
            <path d="M12 21.5c-3-1-5.5-5.5-5.5-10H12z" fill="#e8b055" opacity="0.7" />
            <path d="M4.8 11.5c0-3.8 3.3-6.3 7.2-6.3s7.2 2.5 7.2 6.3z" fill="#8b4a1c" />
            <path d="M7 9l2 2.5M10 7.5l1.2 4M13.5 7.5l-.7 4M17 9l-2 2.5" stroke="#5c2f0a" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
        </svg>
    );
}

// ── Powered by VCM — watermark sutil ─────────────────────────
function PoweredByVCM() {
    return (
        <div className="flex items-center justify-center mt-12 pb-2 opacity-90 hover:opacity-100 transition-opacity">
            <a
                href="https://discovervcm.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://res.cloudinary.com/dca79rb3c/image/upload/v1791407705/vcm_water_opcylu.png"
                    alt="Powered by VCM"
                    width={160}
                    height={18}
                    style={{ display: "block" }}
                />
            </a>
        </div>
    );
}

export const QuoteDrawer = ({ isOpen, setIsOpen }: QuoteDrawerProps) => {
    const [step, setStep]                       = useState<WidgetStep>("search");
    const [location, setLocation]               = useState(DEFAULT_CENTER);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [sections, setSections]               = useState<RoofSection[]>([]);
    const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
    const [mapZoom, setMapZoom]                 = useState(11);
    const [roofError, setRoofError]             = useState<string | null>(null);
    const [isLoading, setIsLoading]             = useState(false);
    const [isDrawingMode, setIsDrawingMode]     = useState(false);
    const [showHint, setShowHint]               = useState(true);

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

            let pitch: DetectedPitch = "medium";
            if (data.pitchDegrees < 5)       pitch = "flat";
            else if (data.pitchDegrees < 15) pitch = "shallow";
            else if (data.pitchDegrees < 30) pitch = "medium";
            else                             pitch = "steep";

            const mainSection: RoofSection = {
                id:             "section-main",
                name:           "Main Roof",
                coords:         data.coords,
                areaSqFt:       data.areaSqFt,
                material:       pitch === "flat" ? "flat_tpo" : "asphalt_shingle",
                pitch:          pitch === "flat" ? "shallow" : pitch,
                layersToRemove: 1,
                color:          SECTION_COLORS[0],
            };

            setSections([mainSection]);
            setActiveSectionId(mainSection.id);
        } catch {
            setRoofError("api_error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdateCoords = (id: string, newCoords: { lat: number; lng: number }[]) => {
        const newArea = computeAreaSqFt(newCoords);
        setSections((prev) =>
            prev.map((sec) =>
                sec.id === id
                    ? { ...sec, coords: newCoords, areaSqFt: newArea || sec.areaSqFt }
                    : sec
            )
        );
    };

    const handleSectionDrawn = (coords: { lat: number; lng: number }[]) => {
        setIsDrawingMode(false);
        if (coords.length < 3) return;

        const newId = nextSectionId();
        const newSection: RoofSection = {
            id:             newId,
            name:           `Section ${String.fromCharCode(65 + sections.length)}`,
            coords,
            areaSqFt:       computeAreaSqFt(coords) || 400,
            material:       "asphalt_shingle",
            pitch:          "medium",
            layersToRemove: 1,
            color:          SECTION_COLORS[sections.length % SECTION_COLORS.length],
        };

        setSections((prev) => [...prev, newSection]);
        setActiveSectionId(newId);
    };

    const handleRemoveSection = (id: string) => {
        if (sections.length <= 1) return;
        const filtered = sections.filter((s) => s.id !== id);
        setSections(filtered);
        setActiveSectionId(filtered[0].id);
    };

    const handleReset = () => {
        setStep("search");
        setSelectedAddress("");
        setSections([]);
        setActiveSectionId(null);
        setLocation(DEFAULT_CENTER);
        setRoofError(null);
        setMapZoom(11);
        setIsDrawingMode(false);
    };

    const totalSqFt = sections.reduce((acc, s) => acc + s.areaSqFt, 0);

    return (
        <div className={`${styles.quoteWrapper} ${isOpen ? styles.wrapperOpen : ""}`}>

            {!isOpen && showHint && (
                <div className={styles.quoteHint}>
                    <span className={styles.pp1} /><span className={styles.pp2} />
                    <span className={styles.pp3} /><span className={styles.pp4} />
                    <span className={styles.pp5} /><span className={styles.pp6} />
                    <span className={styles.pp7} /><span className={styles.pp8} />
                    <span className={styles.pp9} /><span className={styles.pp10} />
                    <span className={styles.pp11} /><span className={styles.pp12} />
                    <span className={styles.pp13} /><span className={styles.pp14} />
                    <button className={styles.closeHint} onClick={(e) => { e.stopPropagation(); setShowHint(false); }}>×</button>
                    <div className={styles.hintInner}>
                        <span className={styles.hintTag}>
                            <MapleLeafIcon size={20} />
                            Fall Special
                        </span>
                        <p className={styles.hintTitle}>Fall Into Savings</p>
                        <p className={styles.hintSubtitle}>
                            Offer ends with the season{" "}
                            <span style={{ display: "inline-block", verticalAlign: "middle", marginLeft: 2 }}>
                                <AcornIcon size={18} />
                            </span>
                        </p>
                    </div>
                    <div className={styles.hintArrow} />
                </div>
            )}

            <button className={styles.quoteSideBtn} onClick={() => setIsOpen(!isOpen)} data-no-scale>
                <span className={styles.quoteText}>Instant Roof Quote</span>
            </button>

            <div className={styles.quoteDrawer}>
                <div className="flex flex-col h-full bg-white overflow-y-auto pr-2 custom-scrollbar">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black" aria-label="Close quote drawer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.drawerContent}>

                        {/* ── STEP 1 ── */}
                        {step === "search" && (
                            <div className="flex flex-col flex-1 px-4 sm:px-8 md:px-12 pb-4">
                                <div className="text-center mb-8">
                                    <h1 className="text-4xl font-black text-[#00589e] mb-2 tracking-tight">
                                        What Will My Roof Cost?
                                    </h1>
                                    <p className="text-gray-500 text-lg font-medium">
                                        Enter your address — we detect all roof sections automatically
                                    </p>
                                </div>

                                <div className="mb-4 relative">
                                    <AddressSearch
                                        onAddressSelect={handleAddressSelect}
                                        variant="default"
                                        placeholder="Enter your street address to see your price"
                                    />
                                </div>

                                {roofError && (
                                    <div className="mb-4 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl animate-in fade-in duration-300">
                                        <p className="text-sm font-bold text-amber-800">
                                            {roofError === "no_building"
                                                ? "No roof detected. Try another address or draw the outline manually."
                                                : "Could not retrieve roof data. Please try again."}
                                        </p>
                                    </div>
                                )}

                                {selectedAddress && !isLoading && sections.length > 0 && (
                                    <div className="mb-3 flex items-center gap-3 bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl text-sm">
                                        <span className="text-[#00589e] font-black">{totalSqFt.toLocaleString()} sq ft</span>
                                        <span className="text-gray-400">·</span>
                                        <span className="text-gray-600 font-semibold">
                                            {sections.length} {sections.length === 1 ? "section" : "sections"} detected
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1 min-h-[400px] rounded-2xl overflow-hidden border-4 border-white relative">
                                    <RoofMap
                                        center={location}
                                        zoom={mapZoom}
                                        sections={sections}
                                        activeSectionId={activeSectionId}
                                        onSelectSection={setActiveSectionId}
                                        onUpdateSectionCoords={handleUpdateCoords}
                                        isDrawingMode={isDrawingMode}
                                        onStartAddSection={() => setIsDrawingMode(true)}
                                        onSectionDrawn={handleSectionDrawn}
                                        onCancelDrawing={() => setIsDrawingMode(false)}
                                        onRemoveSection={handleRemoveSection}
                                        hideControls={!selectedAddress}
                                    />
                                    {isLoading && (
                                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center z-20 gap-3">
                                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00589e]" />
                                            <p className="text-sm font-bold text-[#00589e] uppercase tracking-wider">
                                                Analyzing roof structures...
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {selectedAddress && !isLoading && sections.length > 0 && (
                                    <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <button
                                            onClick={() => setStep("quote")}
                                            disabled={isDrawingMode}
                                            className="w-full py-5 bg-[#00589e] text-white font-black text-xl uppercase tracking-widest rounded-xl hover:bg-[#00437a] cursor-pointer transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#00589e]"
                                        >
                                            See My Estimate →
                                        </button>
                                    </div>
                                )}

                                {/* Powered by VCM */}
                                <PoweredByVCM />
                            </div>
                        )}

                        {/* ── STEP 2 ── */}
                        {step === "quote" && (
                            <div className="flex flex-col flex-1 pl-2 pr-1 sm:pl-4 sm:pr-1 md:pl-10 md:pr-2 pb-4 animate-in fade-in duration-500">
                                <div className="mb-8">
                                    <button
                                        onClick={handleReset}
                                        className="flex items-center gap-2 text-gray-500 hover:text-[#00589e] cursor-pointer transition-colors font-bold text-sm uppercase tracking-wider"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="19" y1="12" x2="5" y2="12" />
                                            <polyline points="12 19 5 12 12 5" />
                                        </svg>
                                        Back to Map
                                    </button>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-5xl font-prompt text-[#00589e] mb-5">Your Instant Estimate</h2>
                                    <div className="bg-gray-50 border-l-4 border-[#00589e] p-4 rounded-r-xl">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Property Address</p>
                                        <p className="text-sm font-bold text-gray-800 truncate">{selectedAddress}</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl border border-gray-100 p-2">
                                    <QuoteForm
                                        sections={sections}
                                        onUpdateSections={setSections}
                                        address={selectedAddress}
                                        location={location}
                                    />
                                </div>

                                {/* Powered by VCM */}
                                <PoweredByVCM />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};