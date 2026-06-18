"use client";
import { useState, useRef, useCallback, useEffect } from "react";

const GIF_URL = "https://www.spc.noaa.gov/products/activity_loop.gif";
const MIN_SCALE = 1;
const MAX_SCALE = 4;

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");
        setIsMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);
    return isMobile;
};

const MapIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
);

const MapContent = () => {
    const [scale, setScale] = useState(MIN_SCALE);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [loaded, setLoaded] = useState(false);
    const isDragging = useRef(false);
    const dragStart = useRef<{ x: number; y: number } | null>(null);
    const offsetAtDrag = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const scaleRef = useRef(MIN_SCALE);
    const offsetRef = useRef({ x: 0, y: 0 });

    const clampOffset = useCallback((x: number, y: number, s: number) => {
        const container = containerRef.current;
        if (!container) return { x, y };
        const maxX = (container.clientWidth * (s - 1)) / 2;
        const maxY = (container.clientHeight * (s - 1)) / 2;
        return {
            x: Math.min(maxX, Math.max(-maxX, x)),
            y: Math.min(maxY, Math.max(-maxY, y)),
        };
    }, []);

    const applyScale = useCallback((next: number) => {
        const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
        scaleRef.current = clamped;
        const newOffset = clampOffset(offsetRef.current.x, offsetRef.current.y, clamped);
        offsetRef.current = newOffset;
        setScale(clamped);
        setOffset(newOffset);
    }, [clampOffset]);

    const applyOffset = useCallback((x: number, y: number) => {
        const clamped = clampOffset(x, y, scaleRef.current);
        offsetRef.current = clamped;
        setOffset(clamped);
    }, [clampOffset]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            applyScale(scaleRef.current - e.deltaY * 0.002);
        };
        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [applyScale]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length !== 1) return;
            e.preventDefault();
            isDragging.current = true;
            dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            offsetAtDrag.current = { ...offsetRef.current };
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging.current || !dragStart.current || e.touches.length !== 1) return;
            e.preventDefault();
            const dx = e.touches[0].clientX - dragStart.current.x;
            const dy = e.touches[0].clientY - dragStart.current.y;
            applyOffset(offsetAtDrag.current.x + dx, offsetAtDrag.current.y + dy);
        };

        const onTouchEnd = () => {
            isDragging.current = false;
            dragStart.current = null;
        };

        el.addEventListener("touchstart", onTouchStart, { passive: false });
        el.addEventListener("touchmove", onTouchMove, { passive: false });
        el.addEventListener("touchend", onTouchEnd);
        return () => {
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, [applyOffset]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
        dragStart.current = { x: e.clientX, y: e.clientY };
        offsetAtDrag.current = { ...offsetRef.current };
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current || !dragStart.current) return;
        applyOffset(
            offsetAtDrag.current.x + e.clientX - dragStart.current.x,
            offsetAtDrag.current.y + e.clientY - dragStart.current.y
        );
    }, [applyOffset]);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
        dragStart.current = null;
    }, []);

    const zoom = useCallback((delta: number) => applyScale(scaleRef.current + delta), [applyScale]);

    return (
        <div className="relative w-full h-full">
            {/* Loader */}
            {!loaded && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4" style={{ background: "#0d2d5e" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-10 h-10 text-white opacity-90">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} stroke="currentColor" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-white/60 text-xs tracking-widest uppercase">
                      Loading weather map
                    </span>
                </div>
            )}

            {/* Zoom buttons */}
            <div className="absolute bottom-3 right-3 z-50 flex flex-col gap-1">
                <button
                    onClick={() => zoom(0.4)}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow hover:bg-white transition text-base font-bold disabled:opacity-40"
                    aria-label="Zoom in"
                >
                    +
                </button>
                <button
                    onClick={() => zoom(-0.4)}
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow hover:bg-white transition text-base font-bold disabled:opacity-40"
                    aria-label="Zoom out"
                >
                    −
                </button>
            </div>

            <div
                ref={containerRef}
                className="w-full h-full overflow-hidden bg-gray-900 select-none"
                style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={GIF_URL}
                    alt="NOAA weather radar"
                    draggable={false}
                    onLoad={() => setLoaded(true)}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                        transformOrigin: "center center",
                        transition: "none",
                        pointerEvents: "none",
                        userSelect: "none",
                        opacity: loaded ? 1 : 0,
                    }}
                />
            </div>
        </div>
    );
};

export const WeatherMapWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useIsMobile();
    const close = () => setIsOpen(false);

    const dialogSize = isMobile
        ? { width: "calc(100vw - 32px)", height: "calc((100vw - 32px) * 775 / 1185)" }
        : { width: Math.min(720, (typeof window !== "undefined" ? window.innerWidth : 1280) - 64), height: Math.min(470, (typeof window !== "undefined" ? window.innerHeight : 800) - 64) };

    return (
        <>
            {/* Floating icon button — same for all screen sizes */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-53 min-[769px]:bottom-19 left-3 min-[769px]:left-6
                z-[9999] w-11 h-11 bg-[#00589E] backdrop-blur-sm rounded-full shadow-lg
                flex items-center justify-center cursor-pointer transition"
                aria-label="Open weather radar"
            >
                <MapIcon className="w-6 h-6 text-white" />
            </button>

            {/* Centered dialog */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                    onClick={close}
                >
                    <div
                        className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
                        style={dialogSize}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={close}
                            className="absolute cursor-pointer top-3 right-3 z-50 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <MapContent />
                    </div>
                </div>
            )}
        </>
    );
};