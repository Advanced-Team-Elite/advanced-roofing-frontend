'use client';

import { Map, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Search, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '@/shared/animations/ScrollReveal';
import { COVERAGE_AREAS } from '@/shared/data/coverageAreas';
import { PROJECTS, type Project as PortfolioProject } from '@/data/projects.data';


interface Area {
    id: string | number;
    name: string;
    paths: google.maps.LatLngLiteral[];
    [key: string]: any;
}

// Proyecto del portfolio con un id de texto propio por zona (project-<zona>-<n>)
type CoverageProject = Omit<PortfolioProject, 'id'> & { id: string };

interface HoveredArea extends Partial<Area> {
    notFound?: boolean;
    projects?: CoverageProject[];
}

// ─── Shuffle determinístico (misma zona → mismos proyectos; zonas distintas → distintos) ───
const hashString = (s: string): number => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
};

const mulberry32 = (a: number) => () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const seededShuffle = <T,>(arr: T[], seed: number): T[] => {
    const a = [...arr];
    const rnd = mulberry32(seed);
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

// Proyectos del portfolio real para cada zona, consistentes según el ID completo de la zona
const getProjectsForArea = (areaId: string | number): CoverageProject[] => {
    const seed = hashString(String(areaId));
    const count = Math.min((seed % 3) + 2, PROJECTS.length); // 2 a 4 proyectos por zona

    return seededShuffle(PROJECTS, seed)
        .slice(0, count)
        .map((p, i) => ({
            ...p,
            id: `project-${areaId}-${i}`,
        }));
};

// ─── Placeholder ──────────────────────────────────────────────────────────────

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

// ─── Dato individual del proyecto ─────────────────────────────────────────────

function Detail({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
    return (
        <div className={wide ? 'col-span-2' : ''}>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{label}</dt>
            <dd className="mt-0.5 text-sm font-semibold text-gray-900">{value}</dd>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CoverageMap() {
    const [hoveredArea, setHoveredArea] = useState<HoveredArea | null>(null);
    const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
    const [mapVisible, setMapVisible]   = useState(false);
    const containerRef                  = useRef<HTMLDivElement>(null);
    const polygonsRef                   = useRef<{ area: Area; polygon: google.maps.Polygon }[]>([]);

    // Defer map render until near viewport
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setMapVisible(true); observer.disconnect(); } },
            { rootMargin: '200px' }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Intercepta la selección de zona para inyectarle sus proyectos específicos y resetear el índice del carrusel
    const handleSelectArea = useCallback((area: Area | HoveredArea | null) => {
        if (!area) {
            setHoveredArea(null);
            return;
        }
        if ('notFound' in area && area.notFound) {
            setHoveredArea(area);
            return;
        }

        // 1. Resetear el índice SIEMPRE al cambiar de área
        setCurrentProjectIndex(0);

        // 2. Inyectar proyectos
        const projects = getProjectsForArea(area.id!);
        setHoveredArea({ ...area, projects });
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

        if (match) {
            handleSelectArea(match.area);
        } else {
            handleSelectArea({ notFound: true });
        }
    }, [handleSelectArea]);

    // Lógica de navegación del carrusel de proyectos
    const handleNextProject = () => {
        if (!hoveredArea?.projects) return;
        setCurrentProjectIndex((prev) => (prev + 1) % hoveredArea.projects!.length);
    };

    const handlePrevProject = () => {
        if (!hoveredArea?.projects) return;
        setCurrentProjectIndex((prev) => (prev - 1 + hoveredArea.projects!.length) % hoveredArea.projects!.length);
    };

    const activeProject = hoveredArea?.projects?.[currentProjectIndex];

    return (
        <ScrollReveal className="w-full py-[80px] px-10 md:px-[90px]" direction="left">

            {/* Header */}
            <div className="max-w-[1550px] mx-auto mb-7 flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
                <h1 className="text-5xl md:text-7xl font-black text-[#004A8C] max-w-[500px] text-center md:text-left">
                    Roofs We've <br /> Protected
                </h1>
                <div className="max-w-[650px] pb-2 text-center md:text-justify">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <span className="font-bold">Explore the areas we have covered across the U.S.</span>
                        {' '}— from storm restoration and commercial systems to residential roof
                        replacements, with insights tailored to each region and roofing type.
                    </p>
                </div>
            </div>

            {/* Container — watched by IntersectionObserver */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[1550px] mx-auto h-[580px] sm:h-[680px] md:h-[750px] lg:h-[850px] rounded-[40px] overflow-hidden shadow-2xl border border-white"
            >
                <div className="absolute inset-0 rounded-[40px] overflow-hidden">
                    {!mapVisible ? (
                        <MapPlaceholder />
                    ) : (
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
                                        onSelect={handleSelectArea}
                                        onPolygonReady={handlePolygonReady}
                                        onPolygonRemove={handlePolygonRemove}
                                    />
                                ))}
                            </Map>
                            <SearchBox onLocationFound={handleLocationFound} />
                        </div>
                    )}
                </div>

                {/* Contenedor invisible para calcular la posición simétrica de las flechas */}
                {hoveredArea && !hoveredArea.notFound && hoveredArea.projects && hoveredArea.projects.length > 1 && (
                    <div className="
        absolute z-30 pointer-events-none
        top-32 left-4 right-4
        md:top-8 md:left-auto md:right-8 md:w-[420px]
        max-h-[calc(100%-100px)] md:max-h-[calc(100%-64px)]
        scale-[0.50] md:scale-[0.75] lg:scale-[1]
        origin-top-right
        h-250 /* Altura estimada para centrar las flechas verticalmente */
    ">
                        <div className="relative w-full h-full">
                            {/* Flecha Izquierda (Justo afuera del borde izquierdo) */}
                            <button
                                onClick={handlePrevProject}
                                className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40 pointer-events-auto p-2.5 bg-white hover:bg-gray-50 text-[#004A8C] rounded-full shadow-xl border border-gray-100 hover:scale-110 active:scale-95 transition-all"
                                aria-label="Previous Project"
                            >
                                <ChevronLeft size={22} strokeWidth={3} />
                            </button>

                            {/* Flecha Derecha (Justo afuera del borde derecho) */}
                            <button
                                onClick={handleNextProject}
                                className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-40 pointer-events-auto p-2.5 bg-white hover:bg-gray-50 text-[#004A8C] rounded-full shadow-xl border border-gray-100 hover:scale-110 active:scale-95 transition-all"
                                aria-label="Next Project"
                            >
                                <ChevronRight size={22} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                )}

                {/* Tooltip Lateral con Escala Dinámica */}
                {hoveredArea && (
                    <div className="
        custom-scrollbar absolute z-20
        /* Posición fija */
        top-20 left-4 right-4
        md:top-8 md:left-auto md:right-8 md:w-[420px]
        max-h-[calc(100%-100px)] md:max-h-[calc(100%-64px)]

        /* Escalado: 90% en mobile, 95% en tablet, 100% en desktop */
        scale-[0.50] md:scale-[0.75] lg:scale-[1]
        origin-top-right

        bg-white/60 backdrop-blur-xl rounded-[32px] shadow-2xl
        p-5 md:p-8 border border-white/50
        overflow-y-auto transition-all duration-300 ease-in-out
    ">
                        {/* Header - Mismo diseño */}
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-extrabold text-lg md:text-2xl text-gray-900 tracking-tight pr-2">
                                {hoveredArea.notFound ? 'No projects yet' : hoveredArea.name}
                            </h3>
                            <button onClick={() => handleSelectArea(null)} aria-label="Close"
                                    className="p-1.5 hover:bg-black/5 rounded-full transition-colors flex-shrink-0">
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        {hoveredArea.notFound ? (
                            <p className="text-gray-500 text-sm leading-relaxed">
                                We serve this area, but no projects are pinned here yet. <strong>Be the first to feature your roof!</strong>
                            </p>
                        ) : (
                            activeProject && (
                                <>
                                    {/* Imagen del proyecto */}
                                    <div className="overflow-hidden mb-4 md:mb-6 rounded-2xl bg-gray-100 aspect-[16/9] md:aspect-[16/8] relative flex items-center justify-center">
                                        <img
                                            src={activeProject.image}
                                            className="w-full h-full object-cover"
                                            alt={`${activeProject.title} — ${hoveredArea.name}`}
                                        />
                                    </div>

                                    {/* Datos del proyecto */}
                                    <div className="px-1">
                                        <div className="flex items-center justify-between gap-3 mb-2">
                                            <span
                                                className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                                    activeProject.category === 'Commercial'
                                                        ? 'bg-[#004A8C] text-white'
                                                        : 'bg-[#f7d000] text-black'
                                                }`}
                                            >
                                                {activeProject.category}
                                            </span>
                                            {hoveredArea.projects && hoveredArea.projects.length > 1 && (
                                                <span className="text-xs font-semibold text-gray-500">
                                                    {currentProjectIndex + 1} / {hoveredArea.projects.length}
                                                </span>
                                            )}
                                        </div>

                                        <h4 className="font-extrabold text-lg text-gray-900 leading-tight">
                                            {activeProject.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 mb-4">{activeProject.type}</p>

                                        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-black/5 pt-4">
                                            <Detail label="Size" value={activeProject.size} />
                                            <Detail label="Duration" value={activeProject.time} />
                                            <Detail label="System" value={activeProject.system} wide />
                                            {activeProject.location && (
                                                <Detail label="Location" value={activeProject.location} />
                                            )}
                                            {activeProject.year && (
                                                <Detail label="Year" value={String(activeProject.year)} />
                                            )}
                                        </dl>

                                        {activeProject.description && (
                                            <p className="mt-4 text-sm text-gray-700 leading-relaxed line-clamp-3">
                                                {activeProject.description}
                                            </p>
                                        )}
                                    </div>
                                </>
                            )
                        )}
                    </div>
                )}


            </div>
        </ScrollReveal>
    );


}

// ─── Search Box ───────────────────────────────────────────────────────────────

function SearchBox({ onLocationFound }: { onLocationFound: (l: google.maps.LatLng) => void }) {
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
            const loc = place.geometry.location;
            onLocationFound(loc);
            if (map) { map.panTo(loc); map.setZoom(13); }
        });
        return () => google.maps.event.removeListener(listener);
    }, [placesLib, map, onLocationFound]);

    return (
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 w-[calc(100%-32px)] md:w-auto">
            <div className="flex items-center w-full md:w-[500px] h-12 md:h-14 bg-white rounded-full shadow-lg border border-gray-100 px-4 md:px-6 gap-3">
                <Search className="text-gray-400 flex-shrink-0" size={18} />
                <input ref={inputRef} type="text" placeholder="Search your address..."
                       className="flex-1 bg-transparent border-none outline-none text-gray-600 placeholder:text-gray-300 text-sm md:text-lg w-full overflow-ellipsis" />
            </div>
        </div>
    );
}

// ─── Area Polygon ─────────────────────────────────────────────────────────────

function AreaPolygon({ area, onSelect, onPolygonReady, onPolygonRemove }: {
    area: Area;
    onSelect: (area: Area) => void;
    onPolygonReady: (area: Area, polygon: google.maps.Polygon) => void;
    onPolygonRemove: (polygon: google.maps.Polygon) => void;
}) {
    const map = useMap();

    useEffect(() => {
        if (!map) return;
        const polygon = new google.maps.Polygon({
            map, paths: area.paths,
            fillColor: '#005596', fillOpacity: 0.35, strokeWeight: 0, clickable: true,
        });
        onPolygonReady(area, polygon);
        const over  = polygon.addListener('mouseover', () => { polygon.setOptions({ fillOpacity: 0.6 }); map.setOptions({ draggableCursor: 'pointer' }); });
        const out   = polygon.addListener('mouseout',  () => { polygon.setOptions({ fillOpacity: 0.35 }); map.setOptions({ draggableCursor: null }); });
        const click = polygon.addListener('click', () => onSelect(area));
        return () => {
            google.maps.event.removeListener(over);
            google.maps.event.removeListener(out);
            google.maps.event.removeListener(click);
            onPolygonRemove(polygon);
            polygon.setMap(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map]);

    return null;
}