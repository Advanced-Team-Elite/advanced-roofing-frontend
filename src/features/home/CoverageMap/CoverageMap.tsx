'use client';
import { APIProvider, Map, useMap, useApiIsLoaded } from '@vis.gl/react-google-maps';
import { useEffect, useState, useRef } from 'react';
import { COVERAGE_AREAS } from '@/shared/data/coverageAreas';
import { Autocomplete } from '@react-google-maps/api';
import { Search, X } from 'lucide-react';
import { ScrollReveal } from "@/shared/animations/ScrollReveal";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function CoverageMap() {
    const [hoveredArea, setHoveredArea] = useState<any>(null);
    const [polygons, setPolygons] = useState<{ area: any; polygon: google.maps.Polygon }[]>([]);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [searchResult, setSearchResult] = useState<google.maps.LatLng | null>(null);

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place?.geometry?.location) return;

        const location = place.geometry.location;
        setSearchResult(location);

        const point = new google.maps.LatLng(location.lat(), location.lng());
        const match = polygons.find(({ polygon }) =>
            google.maps.geometry.poly.containsLocation(point, polygon)
        );

        setHoveredArea(match ? match.area : { notFound: true });
    };

    function MapController({
                               searchResult,
                               setSearchResult
                           }: {
        searchResult: google.maps.LatLng | null,
        setSearchResult: (val: google.maps.LatLng | null) => void
    }) {
        const map = useMap();

        useEffect(() => {
            if (map && searchResult) {
                map.panTo(searchResult);
                map.setZoom(13);
                setSearchResult(null);
            }
        }, [map, searchResult, setSearchResult]);

        return null;
    }

    return (
        <ScrollReveal className="w-full py-[80px] px-10 md:px-[90px]" direction="left">
            {/* CONTENEDOR DEL ENCABEZADO */}
            <div className="max-w-[1550px] mx-auto mb-7 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">

                {/* TÍTULO: Centrado en mobile, a la izquierda en desktop */}
                <h1 className="text-5xl md:text-7xl font-black text-[#004A8C] max-w-[500px] text-center md:text-left ">
                    Roofs We've <br /> Protected
                </h1>

                {/* DESCRIPCIÓN: Centrada en mobile, justificada a la base en desktop */}
                <div className="max-w-[650px] pb-2 text-center md:text-justify">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <span className="font-bold">Explore real roofing projects completed across the U.S.</span>
                        — from storm restoration and commercial systems to residential roof replacements,
                        with insights tailored to each region and roofing type.
                    </p>
                </div>
            </div>
            <div className="relative w-full max-w-[1550px] mx-auto h-[900px] lg:h-[850px] md:h-[750px] sm:h-[680px] rounded-[40px] overflow-hidden shadow-2xl border border-white">

                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                    <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={['geometry', 'places']}>

                        <div className="absolute inset-0">
                            <Map
                                defaultCenter={{ lat: 41.8781, lng: -87.9298 }}
                                defaultZoom={10}
                                disableDefaultUI={true}
                            >
                                <MapController
                                    searchResult={searchResult}
                                    setSearchResult={setSearchResult}
                                />

                                {COVERAGE_AREAS.map((area) => (
                                    <AreaPolygon
                                        key={area.id}
                                        area={area}
                                        onSelect={(data) => setHoveredArea(data)}
                                        onPolygonReady={(area, polygon) =>
                                            setPolygons(prev => [...prev, { area, polygon }])
                                        }
                                        onPolygonRemove={(polygon) =>
                                            setPolygons(prev => prev.filter(p => p.polygon !== polygon))
                                        }
                                    />
                                ))}
                            </Map>
                        </div>

                        <SearchBox
                            autocompleteRef={autocompleteRef}
                            handlePlaceChanged={handlePlaceChanged}
                        />
                    </APIProvider>
                </div>

                {/* TOOLTIP */}
                {hoveredArea && (
                    <div
                        className={`
    custom-scrollbar
    absolute z-10 
    left-1/2 -translate-x-1/2

    mt-20
    md:mt-[70px]
    lg:mt-8

    md:right-8 md:left-auto md:translate-x-0
    w-[calc(100%-32px)]
    md:w-105
    max-h-[calc(100%-180px)]
    md:max-h-[90%]
    bg-white/50
    backdrop-blur-xl
    rounded-4xl
    shadow-2xl
    p-6 md:p-8
    border border-white/50
    overflow-y-auto
    transition-all duration-300 ease-in-out
`}
                    >
                        <div className="flex justify-between items-center mb-5 md:mb-6">
                            <h3 className="font-extrabold text-xl md:text-2xl text-gray-900 tracking-tight pr-4">
                                {hoveredArea.notFound ? 'Area not covered' : hoveredArea.name}
                            </h3>

                            <button
                                onClick={() => setHoveredArea(null)}
                                className="p-2 hover:bg-black/5 rounded-full transition-colors flex-shrink-0"
                            >
                                <X size={22} className="text-gray-500" />
                            </button>
                        </div>

                        {hoveredArea.notFound ? (
                            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                                This address is outside our current coverage areas. Contact us to check availability.
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
                                        Warranties & Technologies
                                    </h4>

                                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                                        <img
                                            src="/assets/images/features/map/warranty-1.png"
                                            className="w-full h-auto object-contain"
                                            alt="Dura Grip"
                                        />

                                        <img
                                            src="/assets/images/features/map/warranty-2.png"
                                            className="w-full h-auto object-contain"
                                            alt="StainGuard"
                                        />

                                        <img
                                            src="/assets/images/features/map/warranty-3.png"
                                            className="w-full h-auto object-contain"
                                            alt="Lifetime"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 px-2">
                                    <h4 className="font-extrabold text-lg text-gray-900 mb-2 tracking-tighter uppercase">
                                        Specs & Codes
                                    </h4>

                                    <div className="flex flex-col rounded-xl p-1">
                                        <SpecRow label="Pieces/Square" value="64" />
                                        <SpecRow label="Bundles/Square" value="3" />
                                        <SpecRow label="Nails/Square¹" value="256" />
                                        <SpecRow label="Exposure" value='5 5/8" (144 mm)' />
                                        <SpecRow label="Dimensions" value='13 1/4" x 39 3/8"' />
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

function SearchBox({ autocompleteRef, handlePlaceChanged }: any) {
    const apiIsLoaded = useApiIsLoaded();

    if (!apiIsLoaded) return null;

    return (
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 w-[calc(100%-32px)] md:w-auto">
            <Autocomplete
                onLoad={(ac) => (autocompleteRef.current = ac)}
                onPlaceChanged={handlePlaceChanged}
                options={{
                    componentRestrictions: { country: "us" },
                    types: ["address"]
                }}
            >
                <div
                    className="
                        flex items-center
                        w-full md:w-[500px]
                        h-12 md:h-14
                        bg-white
                        rounded-full
                        shadow-lg
                        border border-gray-100
                        px-4 md:px-6
                        gap-3
                    "
                >
                    <Search className="text-gray-400 flex-shrink-0" size={18} />

                    <input
                        type="text"
                        placeholder="Search your address..."
                        className="
                            flex-1
                            bg-transparent
                            border-none
                            outline-none
                            text-gray-600
                            placeholder:text-gray-300
                            text-sm md:text-lg
                            w-full
                            overflow-ellipsis
                        "
                    />
                </div>
            </Autocomplete>
        </div>
    );
}

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

function AreaPolygon({
                         area,
                         onSelect,
                         onPolygonReady,
                         onPolygonRemove,
                     }: {
    area: any;
    onSelect: (data: any) => void;
    onPolygonReady: (area: any, polygon: google.maps.Polygon) => void;
    onPolygonRemove: (polygon: google.maps.Polygon) => void;
}) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const polygon = new google.maps.Polygon({
            map,
            paths: area.paths,
            fillColor: "#005596",
            fillOpacity: 0.35,
            strokeWeight: 0,
            clickable: true,
        });

        onPolygonReady(area, polygon);

        const mouseOverListener = polygon.addListener('mouseover', () => {
            // 1. Aplicamos los estilos visuales válidos al polígono
            polygon.setOptions({
                fillOpacity: 0.6
            });

            // 2. Cambiamos el cursor a través de la instancia del mapa
            const map = polygon.getMap();
            if (map) {
                map.setOptions({ draggableCursor: 'pointer' });
            }
        });

        const mouseOutListener = polygon.addListener('mouseout', () => {
            polygon.setOptions({
                fillOpacity: 0.4 // O tu opacidad original
            });

            // 3. Restauramos el cursor (null lo devuelve al default)
            const map = polygon.getMap();
            if (map) {
                map.setOptions({ draggableCursor: null });
            }
        });

        const clickListener = polygon.addListener('click', () => {
            onSelect(area);
        });

        return () => {
            google.maps.event.removeListener(mouseOverListener);
            google.maps.event.removeListener(mouseOutListener);
            google.maps.event.removeListener(clickListener);

            onPolygonRemove(polygon);
            polygon.setMap(null);
        };
    }, [map, area]);

    return null;
}