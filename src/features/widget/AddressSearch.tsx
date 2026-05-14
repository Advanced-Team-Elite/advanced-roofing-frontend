"use client";
/**
 * AddressSearch — migrated from @react-google-maps/api
 *
 * Previously used <Autocomplete> from @react-google-maps/api, which created
 * a second SDK context conflicting with @vis.gl's APIProvider.
 *
 * Now uses useMapsLibrary('places') from @vis.gl — it reuses the SDK instance
 * already loaded by GoogleMapsProvider. Zero extra network requests.
 *
 * API surface is identical: same props, same variants, same behavior.
 */

import { useRef, useEffect } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";

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
    const placesLib   = useMapsLibrary("places");
    const inputRef    = useRef<HTMLInputElement>(null);
    const acRef       = useRef<google.maps.places.Autocomplete | null>(null);

    const defaultPlaceholder =
        placeholder ??
        (variant === "compact"
            ? "Search a different address..."
            : "Enter your street address to see your price");

    // Build Autocomplete once the places library is ready
    useEffect(() => {
        if (!placesLib || !inputRef.current) return;

        const ac = new placesLib.Autocomplete(inputRef.current, {
            componentRestrictions: { country: "us" },
            types: ["address"],
            fields: ["geometry", "formatted_address"],
        });

        acRef.current = ac;

        // 👇 Esto hace que el pac-container recalcule su posición
        // cada vez que el input cambia de posición en el DOM
        const observer = new ResizeObserver(() => {
            google.maps.event.trigger(ac, 'resize');
        });

        // Observa el contenedor scrolleable (el drawer)
        const scrollParent = inputRef.current.closest('.overflow-y-auto') as Element;
        if (scrollParent) {
            scrollParent.addEventListener('scroll', () => {
                google.maps.event.trigger(ac, 'resize');
            });
            observer.observe(scrollParent);
        }

        const listener = ac.addListener("place_changed", () => {
            const place = ac.getPlace();
            if (!place?.geometry?.location) return;
            onAddressSelect(
                place.formatted_address ?? "",
                place.geometry.location.lat(),
                place.geometry.location.lng()
            );
        });

        return () => {
            google.maps.event.removeListener(listener);
            observer.disconnect();
        };
    }, [placesLib, onAddressSelect]);

    // Shared START button handler (hero variant)
    const handleStartClick = () => {
        const place = acRef.current?.getPlace();
        if (place?.geometry?.location) {
            onAddressSelect(
                place.formatted_address ?? "",
                place.geometry.location.lat(),
                place.geometry.location.lng()
            );
        }
    };

    // ── HERO ──────────────────────────────────────────────────────────────────
    if (variant === "hero") {
        return (
            <div className="flex items-center bg-white rounded-md shadow-2xl overflow-hidden">
                <div className="pl-4 text-gray-400 shrink-0">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder={defaultPlaceholder}
                    className="flex-1 px-3 py-4 text-gray-800 text-sm outline-none bg-transparent placeholder:text-gray-400"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                <button
                    onClick={handleStartClick}
                    className="px-7 py-4 font-black text-sm tracking-widest text-white transition-all hover:opacity-90 active:scale-95 shrink-0"
                    style={{
                        background: "#4b5563",
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "15px",
                        letterSpacing: "0.1em",
                    }}
                >
                    START
                </button>
            </div>
        );
    }

    // ── COMPACT ───────────────────────────────────────────────────────────────
    if (variant === "compact") {
        return (
            <input
                ref={inputRef}
                type="text"
                placeholder={defaultPlaceholder}
                className="w-full px-4 py-2 text-sm text-gray-800 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-black border border-transparent focus:border-blue-300"
            />
        );
    }

    // ── DEFAULT ───────────────────────────────────────────────────────────────
    return (
        <div className="relative flex items-center group">
            <div className="absolute left-4 text-gray-400 group-focus-within:text-gray-600/10 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                </svg>
            </div>
            <input
                ref={inputRef}
                type="text"
                placeholder={defaultPlaceholder}
                className="w-full pl-12 pr-4 py-4 text-lg text-gray-700 border-2 border-gray-200 rounded-xl outline-none focus:border-gray-300 focus:ring-0 bg-white transition-all"
            />
        </div>
    );
};