"use client";
// components/widget/AddressSearch.tsx

import { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

interface AddressSearchProps {
    onAddressSelect: (address: string, lat: number, lng: number) => void;
    variant?: "hero" | "compact" | "default";
    placeholder?: string;
}

export const AddressSearch = ({
                                  onAddressSelect,
                                  variant = "default",
                                  placeholder,
                              }: AddressSearchProps) => {
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place?.geometry?.location) return;
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        onAddressSelect(place.formatted_address ?? "", lat, lng);
    };

    const defaultPlaceholder = placeholder ?? (
        variant === "hero"
            ? "Enter your street address to see your price"
            : variant === "compact"
                ? "Search a different address..."
                : "Enter your street address to see your price"
    );

    // ── Variante HERO — grande, con botón START ───────────────────────────────
    if (variant === "hero") {
        return (
            <Autocomplete
                onLoad={(ac) => (autocompleteRef.current = ac)}
                onPlaceChanged={handlePlaceChanged}
                options={{ componentRestrictions: { country: "us" }, types: ["address"] }}
            >
                <div className="flex items-center bg-white rounded-md shadow-2xl overflow-hidden">
                    <div className="pl-4 text-gray-400 shrink-0">
                        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                            <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder={defaultPlaceholder}
                        className="flex-1 px-3 py-4 text-gray-800 text-sm outline-none bg-transparent placeholder:text-gray-400"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                    <button
                        className="px-7 py-4 font-black text-sm tracking-widest text-white transition-all hover:opacity-90 active:scale-95 shrink-0"
                        style={{
                            background: "#4b5563",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "15px",
                            letterSpacing: "0.1em",
                        }}
                        onClick={() => {
                            const place = autocompleteRef.current?.getPlace();
                            if (place?.geometry?.location) {
                                onAddressSelect(
                                    place.formatted_address ?? "",
                                    place.geometry.location.lat(),
                                    place.geometry.location.lng()
                                );
                            }
                        }}
                    >
                        START
                    </button>
                </div>
            </Autocomplete>
        );
    }

    // ── Variante COMPACT — inline pequeño para la navbar post-selección ───────
    if (variant === "compact") {
        return (
            <Autocomplete
                onLoad={(ac) => (autocompleteRef.current = ac)}
                onPlaceChanged={handlePlaceChanged}
                options={{ componentRestrictions: { country: "us" }, types: ["address"] }}
            >
                <input
                    type="text"
                    placeholder={defaultPlaceholder}
                    className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-blue-300"
                />
            </Autocomplete>
        );
    }

    // ── Variante DEFAULT — el buscador original ───────────────────────────────
    return (
        <Autocomplete
            onLoad={(ac) => (autocompleteRef.current = ac)}
            onPlaceChanged={handlePlaceChanged}
            options={{ componentRestrictions: { country: "us" }, types: ["address"] }}
        >
            <div className="relative flex items-center group">
                <div className="absolute left-4 text-gray-400 group-focus-within:text-gray-600/10 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder={defaultPlaceholder}
                    className="w-full pl-12 pr-4 py-4 text-lg text-gray-700 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-300 focus:ring-0 bg-white transition-all
               "
                />
            </div>
        </Autocomplete>
    );
};