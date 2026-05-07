'use client';
import { APIProvider, Map, useMap, useApiIsLoaded } from '@vis.gl/react-google-maps';
import { useEffect, useState, useRef } from 'react';
import { COVERAGE_AREAS } from '@/shared/data/coverageAreas';
import { Autocomplete } from '@react-google-maps/api';
import { Search, X } from 'lucide-react';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function CoverageMap() {
    const [hoveredArea, setHoveredArea] = useState<any>(null);
    const [polygons, setPolygons] = useState<{ area: any; polygon: google.maps.Polygon }[]>([]);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
    const [searchResult, setSearchResult] = useState<google.maps.LatLng | null>(null);
    const apiIsLoaded = useApiIsLoaded(); // Hook para verificar si 'google' existe


    const handlePlaceChanged = () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place?.geometry?.location) return;

        const location = place.geometry.location;
        setSearchResult(location); // Esto dispara el efecto una sola vez

        const point = new google.maps.LatLng(location.lat(), location.lng());
        const match = polygons.find(({ polygon }) =>
            google.maps.geometry.poly.containsLocation(point, polygon)
        );
        setHoveredArea(match ? match.area : { notFound: true });
    };

    // Dentro de tu archivo, donde definiste esta función:
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

                // Aquí es donde se usará la función para "limpiar" el estado
                setSearchResult(null);
            }
        }, [map, searchResult, setSearchResult]);

        return null;
    }

    return (
        <div className="w-full flex justify-center items-center py-10 bg-gray-50">
            <div className="relative w-full max-w-[1600px] h-[950px] rounded-[40px] overflow-hidden shadow-2xl border border-white">

                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                    <APIProvider apiKey={GOOGLE_MAPS_API_KEY} libraries={['geometry', 'places']}>
                        {/* El mapa se renderiza normal */}
                        <div className="absolute inset-0">
                            <Map
                                defaultCenter={{ lat: 41.8781, lng: -87.9298 }}
                                defaultZoom={10}
                                disableDefaultUI={true}
                            >
                                {/* ANTES: <MapController searchResult={searchResult} /> */}
                                {/* AHORA: Agregamos setSearchResult */}
                                <MapController
                                    searchResult={searchResult}
                                    setSearchResult={setSearchResult}
                                />
                                {COVERAGE_AREAS.map((area) => (
                                    <AreaPolygon
                                        key={area.id}
                                        area={area}
                                        onHover={(data) => setHoveredArea(data)}
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

                        {/* USAMOS UN COMPONENTE ENVOLTORIO PARA EL BUSCADOR */}
                        <SearchBox
                            autocompleteRef={autocompleteRef}
                            handlePlaceChanged={handlePlaceChanged}
                        />
                    </APIProvider>
                </div>




                {/* TOOLTIP */}
                {hoveredArea && (
                    <div className="absolute top-8 right-8 w-[420px] max-h-[90%] bg-white/70 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 border border-white/50 overflow-y-auto animate-in slide-in-from-right-10 duration-500 z-10 transition-all">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-extrabold text-2xl text-gray-900 tracking-tight">
                                {hoveredArea.notFound ? 'Area not covered' : hoveredArea.name}
                            </h3>
                            <button
                                onClick={() => setHoveredArea(null)}
                                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {hoveredArea.notFound ? (
                            <p className="text-gray-500 text-base">
                                This address is outside our current coverage areas. Contact us to check availability.
                            </p>
                        ) : (
                            <>
                                <div className="overflow-hidden mb-8">
                                    <img
                                        src="/assets/images/features/map/house-shingles.png"
                                        className="w-full object-cover"
                                        alt="Roofing Shingles Preview"
                                    />
                                </div>
                                <div className="mb-8">
                                    <h4 className="font-bold text-lg text-gray-800 mb-4 tracking-tight">Warranties & Technologies</h4>
                                    <div className="grid grid-cols-3 gap-4">
                                        <img src="/assets/images/features/map/warranty-1.png" className="w-full h-auto object-contain" alt="Dura Grip" />
                                        <img src="/assets/images/features/map/warranty-2.png" className="w-full h-auto object-contain" alt="StainGuard" />
                                        <img src="/assets/images/features/map/warranty-3.png" className="w-full h-auto object-contain" alt="Lifetime" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-lg text-gray-800 mb-2 tracking-tight">Specs & Codes</h4>
                                    <div className="space-y-3">
                                        <SpecRow label="Pieces/Square" value="64" />
                                        <SpecRow label="Bundles/Square" value="3" />
                                        <SpecRow label="Nails/Square" value="256" />
                                        <SpecRow label="Exposure" value='5 5/8" (144 mm)' />
                                        <SpecRow label="Dimensions" value='13 1/4" x 39 3/8"' />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function SearchBox({ autocompleteRef, handlePlaceChanged }: any) {
    const apiIsLoaded = useApiIsLoaded();

    // Si la API no ha cargado, no renderizamos el Autocomplete para evitar el ReferenceError
    if (!apiIsLoaded) return null;

    return (
        <div className="absolute top-8 left-8 z-10">
            <Autocomplete
                onLoad={(ac) => (autocompleteRef.current = ac)}
                onPlaceChanged={handlePlaceChanged}
                options={{ componentRestrictions: { country: "us" }, types: ["address"] }}
            >
                <div className="flex items-center w-[400px] h-14 bg-white rounded-full shadow-lg border border-gray-100 px-6 gap-3">
                    <Search className="text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search your address..."
                        className="flex-1 bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-lg w-full overflow-ellipsis"
                    />
                </div>
            </Autocomplete>
        </div>
    );
}

function SpecRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-200/50 last:border-0">
            <span className="text-gray-500 font-medium">{label}</span>
            <span className="text-gray-900 font-bold">{value}</span>
        </div>
    );
}

function AreaPolygon({
                         area,
                         onHover,
                         onPolygonReady,
                         onPolygonRemove,
                     }: {
    area: any;
    onHover: (data: any) => void;
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
            polygon.setOptions({ fillOpacity: 0.6 });
            onHover(area);
        });

        const mouseOutListener = polygon.addListener('mouseout', () => {
            polygon.setOptions({ fillOpacity: 0.35 });
        });

        return () => {
            google.maps.event.removeListener(mouseOverListener);
            google.maps.event.removeListener(mouseOutListener);
            onPolygonRemove(polygon);
            polygon.setMap(null);
        };
    }, [map, area]);

    return null;
}