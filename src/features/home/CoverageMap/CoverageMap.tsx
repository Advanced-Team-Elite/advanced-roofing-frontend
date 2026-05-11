'use client';

import { APIProvider, Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Search, X } from 'lucide-react';
import { ScrollReveal } from '@/shared/animations/ScrollReveal';
import { COVERAGE_AREAS } from '@/shared/data/coverageAreas';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Area {
    id: string | number;
    name: string;
    paths: google.maps.LatLngLiteral[];
    [key: string]: any;
}

interface HoveredArea extends Partial<Area> {
    notFound?: boolean;
}

// ─── Static placeholder (shown before SDK loads) ──────────────────────────────

function MapPlaceholder() {
    return (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-gray-400">
                <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-[#004A8C] animate-spin" />
                <span className="text-sm font-medium">Loading map…</span>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CoverageMap() {
    const [hoveredArea, setHoveredArea]   = useState<HoveredArea | null>(null);
    const [mapVisible, setMapVisible]     = useState(false);
    const containerRef                    = useRef<HTMLDivElement>(null);
    const polygonsRef                     = useRef<{ area: Area; polygon: google.maps.Polygon }[]>([]);

    // Mount SDK only when the section nears the viewport
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMapVisible(true);
                    observer.disconnect(); // one-shot
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handlePolygonReady = useCallback((area: Area, polygon: google.maps.Polygon) => {
        polygonsRef.current = [...polygonsRef.current, { area, polygon }];
    }, []);

    const handlePolygonRemove = useCallback((polygon: google.maps.Polygon) => {
        polygonsRef.current = polygonsRef.current.filter((p) => p.polygon !== polygon);
    }, []);

    const handleLocationFound = useCallback((location: google.maps.LatLng) => {
        const point = new google.maps.LatLng(location.lat(), location.lng());
        const match = polygonsRef.current.find(({ polygon }) =>
            google.maps.geometry.poly.containsLocation(point, polygon)
        );
        setHoveredArea(match ? match.area : { notFound: true });
    }, []);

    return (
        <ScrollReveal className="w-full py-[80px] px-10 md:px-[90px]" direction="left">

            {/* Header */}
            <div className="max-w-[1550px] mx-auto mb-7 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                <h1 className="text-5xl md:text-7xl font-black text-[#004A8C] max-w-[500px] text-center md:text-left">
                    Roofs We've <br /> Protected
                </h1>
                <div className="max-w-[650px] pb-2 text-center md:text-justify">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <span className="font-bold">
                            Explore real roofing projects completed across the U.S.
                        </span>{' '}
                        — from storm restoration and commercial systems to residential roof
                        replacements, with insights tailored to each region and roofing type.
                    </p>
                </div>
            </div>

            {/* Map container — ref watched by IntersectionObserver */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[1550px] mx-auto h-[580px] sm:h-[680px] md:h-[750px] lg:h-[850px] rounded-[40px] overflow-hidden shadow-2xl border border-white"
            >
                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                    {!mapVisible ? (
                        <MapPlaceholder />
                    ) : (
                        <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={['geometry', 'places']}>
                            <div className="absolute inset-0">
                                <Map
                                    defaultCenter={{ lat: 41.8781, lng: -87.9298 }}
                                    defaultZoom={10}
                                    disableDefaultUI={true}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {COVERAGE_AREAS.map((area: Area) => (
                                        <AreaPolygon
                                            key={area.id}
                                            area={area}
                                            onSelect={setHoveredArea}
                                            onPolygonReady={handlePolygonReady}
                                            onPolygonRemove={handlePolygonRemove}
                                        />
                                    ))}
                                </Map>
                            </div>

                            <SearchBox onLocationFound={handleLocationFound} />
                        </APIProvider>
                    )}
                </div>

                {/* Tooltip — z-20, mobile full-width / desktop top-right */}
                {hoveredArea && (
                    <div className="
                        custom-scrollbar
                        absolute z-20
                        top-20 left-4 right-4
                        md:top-8 md:left-auto md:right-8 md:w-[420px]
                        max-h-[calc(100%-100px)] md:max-h-[calc(100%-64px)]
                        bg-white/60 backdrop-blur-xl
                        rounded-[32px] shadow-2xl
                        p-6 md:p-8
                        border border-white/50
                        overflow-y-auto
                        transition-all duration-300 ease-in-out
                    ">
                        <div className="flex justify-between items-start mb-5 md:mb-6">
                            <h3 className="font-extrabold text-xl md:text-2xl text-gray-900 tracking-tight pr-4">
                                {hoveredArea.notFound ? 'Area not covered' : hoveredArea.name}
                            </h3>
                            <button
                                onClick={() => setHoveredArea(null)}
                                aria-label="Close"
                                className="p-2 hover:bg-black/5 rounded-full transition-colors flex-shrink-0"
                            >
                                <X size={22} className="text-gray-500" />
                            </button>
                        </div>

                        {hoveredArea.notFound ? (
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                This address is outside our current coverage areas. Contact us to
                                check availability.
                            </p>
                        ) : (
                            <>
                                <div className="overflow-hidden mb-6 md:mb-8 rounded-2xl">
                                    <img
                                        src="/assets/images/features/map/house-shingles.png"
                                        className="w-full object-cover"
                                        alt="Roofing Shingles Preview"
                                    />
                                </div>

                                <div className="mb-6 md:mb-8">
                                    <h4 className="font-bold text-base md:text-lg text-gray-800 mb-4 tracking-tight">
                                        Warranties &amp; Technologies
                                    </h4>
                                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                                        {['warranty-1', 'warranty-2', 'warranty-3'].map((w) => (
                                            <img
                                                key={w}
                                                src={`/assets/images/features/map/${w}.png`}
                                                className="w-full h-auto object-contain"
                                                alt={w}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 px-2">
                                    <h4 className="font-extrabold text-lg text-gray-900 mb-2 tracking-tighter uppercase">
                                        Specs &amp; Codes
                                    </h4>
                                    <div className="flex flex-col rounded-xl p-1">
                                        <SpecRow label="Pieces/Square"   value="64" />
                                        <SpecRow label="Bundles/Square"  value="3" />
                                        <SpecRow label="Nails/Square¹"   value="256" />
                                        <SpecRow label="Exposure"        value='5 5/8" (144 mm)' />
                                        <SpecRow label="Dimensions"      value='13 1/4" x 39 3/8"' />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </ScrollReveal>
    );
}

// ─── Search Box ───────────────────────────────────────────────────────────────

interface SearchBoxProps {
    onLocationFound: (location: google.maps.LatLng) => void;
}

function SearchBox({ onLocationFound }: SearchBoxProps) {
    const placesLib = useMapsLibrary('places');
    const map       = useMap();
    const inputRef  = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!placesLib || !inputRef.current) return;

        const ac = new placesLib.Autocomplete(inputRef.current, {
            componentRestrictions: { country: 'us' },
            types: ['address'],
            fields: ['geometry'],
        });

        const listener = ac.addListener('place_changed', () => {
            const place = ac.getPlace();
            if (!place?.geometry?.location) return;
            const location = place.geometry.location;
            onLocationFound(location);
            if (map) {
                map.panTo(location);
                map.setZoom(13);
            }
        });

        return () => google.maps.event.removeListener(listener);
    }, [placesLib, map, onLocationFound]);

    return (
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 w-[calc(100%-32px)] md:w-auto">
            <div className="
                flex items-center
                w-full md:w-[500px] h-12 md:h-14
                bg-white rounded-full shadow-lg border border-gray-100
                px-4 md:px-6 gap-3
            ">
                <Search className="text-gray-400 flex-shrink-0" size={18} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search your address..."
                    className="
                        flex-1 bg-transparent border-none outline-none
                        text-gray-600 placeholder:text-gray-300
                        text-sm md:text-lg w-full overflow-ellipsis
                    "
                />
            </div>
        </div>
    );
}

// ─── Spec Row ─────────────────────────────────────────────────────────────────

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center gap-4 py-1 border-b border-gray-100/30 last:border-0">
            <span className="text-gray-900 font-semibold text-[13px] md:text-[15px] leading-tight tracking-tight">
                {label}
            </span>
            <span className="text-gray-900 font-medium text-[13px] md:text-[15px] text-right opacity-80">
                {value}
            </span>
        </div>
    );
}

// ─── Area Polygon ─────────────────────────────────────────────────────────────

interface AreaPolygonProps {
    area: Area;
    onSelect: (area: Area) => void;
    onPolygonReady: (area: Area, polygon: google.maps.Polygon) => void;
    onPolygonRemove: (polygon: google.maps.Polygon) => void;
}

function AreaPolygon({ area, onSelect, onPolygonReady, onPolygonRemove }: AreaPolygonProps) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const polygon = new google.maps.Polygon({
            map,
            paths: area.paths,
            fillColor: '#005596',
            fillOpacity: 0.35,
            strokeWeight: 0,
            clickable: true,
        });

        onPolygonReady(area, polygon);

        const overListener  = polygon.addListener('mouseover', () => {
            polygon.setOptions({ fillOpacity: 0.6 });
            map.setOptions({ draggableCursor: 'pointer' });
        });
        const outListener   = polygon.addListener('mouseout', () => {
            polygon.setOptions({ fillOpacity: 0.35 });
            map.setOptions({ draggableCursor: null });
        });
        const clickListener = polygon.addListener('click', () => onSelect(area));

        return () => {
            google.maps.event.removeListener(overListener);
            google.maps.event.removeListener(outListener);
            google.maps.event.removeListener(clickListener);
            onPolygonRemove(polygon);
            polygon.setMap(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    return null;
}