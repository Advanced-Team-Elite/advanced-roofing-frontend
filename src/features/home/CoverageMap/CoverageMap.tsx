'use client';
import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { COVERAGE_AREAS } from '@/shared/data/coverageAreas';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

export default function CoverageMap() {
    const [hoveredArea, setHoveredArea] = useState<any>(null);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="relative w-[1600px] h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
                    <Map
                        defaultCenter={{ lat: 41.8781, lng: -87.9298 }} // Centro de Illinois/Chicago
                        defaultZoom={10}
                        disableDefaultUI={true}
                    >
                        {COVERAGE_AREAS.map((area) => (
                            <AreaPolygon
                                key={area.id}
                                area={area}
                                onHover={(data) => setHoveredArea(data)}
                            />
                        ))}
                    </Map>
                </APIProvider>

                {/* TOOLTIP FLOTANTE (ESTILO MOCKUP) */}
                {hoveredArea && (
                    <div className="absolute top-10 right-10 w-80 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-200 animate-in fade-in zoom-in duration-300 z-50">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-xl text-gray-800">Overview: {hoveredArea.name}</h3>
                            <button onClick={() => setHoveredArea(null)} className="text-gray-400 hover:text-gray-600">✕</button>
                        </div>
                        <div className="rounded-lg overflow-hidden mb-4 h-32 bg-gray-200">
                            <img src="/assets/images/project-sample.jpg" className="w-full h-full object-cover" alt="Project" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Pieces/Square</span>
                                <span className="font-bold text-gray-800">64</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Bundles/Square</span>
                                <span className="font-bold text-gray-800">3</span>
                            </div>
                            {/* Agrega más specs aquí */}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

function AreaPolygon({ area, onHover }: { area: any, onHover: (data: any) => void }) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        // Instanciamos el Polígono real con las coordenadas de 'paths'
        const polygon = new google.maps.Polygon({
            map,
            paths: area.paths, // Aquí usamos el array de {lat, lng} que generamos
            fillColor: "#005596", // Azul de Advanced Team Elite
            fillOpacity: 0.35,
            strokeWeight: 0,
            clickable: true,
        });

        // Manejo de eventos
        const mouseOverListener = polygon.addListener('mouseover', (e: any) => {
            polygon.setOptions({
                fillOpacity: 0.6,
                strokeWeight: 0
            });
            onHover(area);
        });

        const mouseOutListener = polygon.addListener('mouseout', () => {
            polygon.setOptions({
                fillOpacity: 0.35,
                strokeWeight: 0
            });
            // Opcional: no limpiar el hover inmediatamente para que el usuario pueda ver el tooltip
        });

        // Limpieza al desmontar el componente
        return () => {
            google.maps.event.removeListener(mouseOverListener);
            google.maps.event.removeListener(mouseOutListener);
            polygon.setMap(null);
        };
    }, [map, area]);

    return null;
}