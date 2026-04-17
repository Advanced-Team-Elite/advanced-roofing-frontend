"use client";
import { useState, useMemo } from "react";
import styles from "../FloatingActions.module.css";
// Importaciones de tus componentes de lógica (ajusta las rutas según tu carpeta)
import { AddressSearch} from "@/features/widget/AddressSearch";
import { RoofMap} from "@/features/widget/RoofMap";
import { QuoteForm} from "@/features/widget/QuoteForm";
import { GoogleMapsProvider} from "@/features/widget/GoogleMapsProvider";
import { getRoofData } from "@/lib/google-solar";
import { DEFAULT_CENTER } from "@/lib/google-maps";
import { DetectedPitch } from "@/types/roofing";

interface QuoteDrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

type WidgetStep = "search" | "quote";

export const QuoteDrawer = ({ isOpen, setIsOpen }: QuoteDrawerProps) => {
    const [step, setStep] = useState<WidgetStep>("search");
    const [location, setLocation] = useState(DEFAULT_CENTER);
    const [selectedAddress, setSelectedAddress] = useState("");
    const [detectedArea, setDetectedArea] = useState(2000);
    const [roofPolygon, setRoofPolygon] = useState<{ lat: number; lng: number }[] | undefined>(undefined);
    const [suggestedPitch, setSuggestedPitch] = useState<DetectedPitch>("medium");
    const [mapZoom, setMapZoom] = useState(11);
    const [roofError, setRoofError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddressSelect = async (address: string, lat: number, lng: number) => {
        setLocation({ lat, lng });
        setSelectedAddress(address);
        setMapZoom(19); // Zoom más cercano para techos
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

            // Lógica de inclinación (Pitch)
            if (data.pitchDegrees < 5) setSuggestedPitch("flat");
            else if (data.pitchDegrees < 15) setSuggestedPitch("shallow");
            else if (data.pitchDegrees < 30) setSuggestedPitch("medium");
            else setSuggestedPitch("steep");

        } catch (err) {
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
            <button className={styles.quoteSideBtn} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.quoteText}>Instant Roof Quote</span>
            </button>

            <div className={styles.quoteDrawer}>
                <GoogleMapsProvider>
                    <div className={styles.drawerHeader}>
                        <div>
                            <p className={styles.brandSubtitle}>Advanced Roofing</p>
                            <h3 className={styles.drawerTitle}>
                                {step === "search" ? "What will my roof cost?" : "Your Estimate"}
                            </h3>
                        </div>
                        <button className={styles.closeDrawer} onClick={() => setIsOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.drawerContent}>
                        {step === "search" ? (
                            <div className={styles.stepContainer}>
                                <AddressSearch onAddressSelect={handleAddressSelect} />

                                <div className={styles.mapContainer}>
                                    <RoofMap
                                        center={location}
                                        zoom={mapZoom}
                                        polygonCoords={roofPolygon}
                                        hideControls={!selectedAddress}
                                    />
                                    {isLoading && <div className={styles.mapLoading}>Analyzing Roof...</div>}
                                </div>

                                {selectedAddress && !roofError && roofPolygon && (
                                    <button onClick={() => setStep("quote")} className={styles.mainActionBtn}>
                                        See My Estimate →
                                    </button>
                                )}

                                {roofError && (
                                    <div className={styles.errorBox}>
                                        <p>No roof detected. Please check the address.</p>
                                        <button onClick={handleReset}>Try Again</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={styles.stepContainer}>
                                <button onClick={() => setStep("search")} className={styles.backBtn}>← Back</button>
                                <div className={styles.addressBadge}>{selectedAddress}</div>
                                <QuoteForm
                                    initialArea={detectedArea}
                                    initialPitch={suggestedPitch}
                                    address={selectedAddress}
                                />
                            </div>
                        )}
                    </div>
                </GoogleMapsProvider>
            </div>
        </div>
    );
};