"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./MagazineFlip.module.css";
import Link from "next/link";
import { JournalPage } from "@/data/journals.data";

interface MagazineFlipProps { pages: JournalPage[]; }

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
        setIsMobile(mq.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, [breakpoint]);
    return isMobile;
}

const Page = React.forwardRef<HTMLDivElement, { page: JournalPage }>(
    ({ page }, ref) => (
        <div ref={ref} className={styles.page}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={page.image} alt="" className={styles.pageImage} />
            {page.link && (
                <Link href={page.link} className={styles.readMore}>
                    {page.linkLabel ?? "Ver más"} →
                </Link>
            )}
            <span className={styles.pageNumber}>{page.id}</span>
        </div>
    )
);
Page.displayName = "Page";

// ── Mobile con Zoom ────────────────────────────────────────────────────────
function MobileMagazine({ pages }: MagazineFlipProps) {
    const bookRef    = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen]           = useState(false);
    const totalPages                    = pages.length;
    const [pageSize, setPageSize]       = useState({ width: 340, height: 453 });

    // ── Zoom state ──────────────────────────────────────────────────────────
    const [scale, setScale]             = useState(1);
    const [translateX, setTranslateX]   = useState(0);
    const [translateY, setTranslateY]   = useState(0);
    const MIN_SCALE = 1;
    const MAX_SCALE = 3;

    // Pinch-to-zoom refs
    const lastDist    = useRef<number | null>(null);
    const lastScale   = useRef(1);
    const isDragging  = useRef(false);
    const lastTouch   = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const calcSize = () => {
            const vw = window.innerWidth;
            const width = Math.min(Math.floor(vw * 0.96), 480);
            const height = Math.round(width * (3307 / 2539));
            setPageSize({ width, height });
        };
        calcSize();
        window.addEventListener("resize", calcSize);
        return () => window.removeEventListener("resize", calcSize);
    }, []);

    const onFlip = useCallback((e: any) => {
        const page = e.data;
        setCurrentPage(page);
        setIsOpen(page > 0);
        // Reset zoom on page flip
        setScale(1);
        setTranslateX(0);
        setTranslateY(0);
    }, []);

    const goNext = () => bookRef.current?.pageFlip().flipNext();
    const goPrev = () => bookRef.current?.pageFlip().flipPrev();

    // ── Zoom helpers ────────────────────────────────────────────────────────
    const clampTranslate = (s: number, tx: number, ty: number) => {
        if (!containerRef.current) return { tx, ty };
        const maxX = (pageSize.width  * (s - 1)) / 2;
        const maxY = (pageSize.height * (s - 1)) / 2;
        return {
            tx: Math.max(-maxX, Math.min(maxX, tx)),
            ty: Math.max(-maxY, Math.min(maxY, ty)),
        };
    };

    const zoomIn  = () => {
        const s = Math.min(scale + 0.5, MAX_SCALE);
        setScale(s);
        const { tx, ty } = clampTranslate(s, translateX, translateY);
        setTranslateX(tx); setTranslateY(ty);
    };
    const zoomOut = () => {
        const s = Math.max(scale - 0.5, MIN_SCALE);
        setScale(s);
        if (s === 1) { setTranslateX(0); setTranslateY(0); return; }
        const { tx, ty } = clampTranslate(s, translateX, translateY);
        setTranslateX(tx); setTranslateY(ty);
    };
    const zoomReset = () => { setScale(1); setTranslateX(0); setTranslateY(0); };

    // ── Touch handlers ──────────────────────────────────────────────────────
    const onTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            lastDist.current  = Math.hypot(dx, dy);
            lastScale.current = scale;
        } else if (e.touches.length === 1 && scale > 1) {
            isDragging.current = true;
            lastTouch.current  = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && lastDist.current !== null) {
            e.preventDefault();
            const dx   = e.touches[0].clientX - e.touches[1].clientX;
            const dy   = e.touches[0].clientY - e.touches[1].clientY;
            const dist = Math.hypot(dx, dy);
            const s    = Math.max(MIN_SCALE, Math.min(MAX_SCALE, lastScale.current * (dist / lastDist.current)));
            setScale(s);
            const { tx, ty } = clampTranslate(s, translateX, translateY);
            setTranslateX(tx); setTranslateY(ty);
        } else if (e.touches.length === 1 && isDragging.current && lastTouch.current) {
            e.preventDefault();
            const dx = e.touches[0].clientX - lastTouch.current.x;
            const dy = e.touches[0].clientY - lastTouch.current.y;
            lastTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            const newTx = translateX + dx;
            const newTy = translateY + dy;
            const { tx, ty } = clampTranslate(scale, newTx, newTy);
            setTranslateX(tx); setTranslateY(ty);
        }
    };

    const onTouchEnd = () => {
        lastDist.current   = null;
        isDragging.current = false;
        lastTouch.current  = null;
        if (scale < 1.05) zoomReset();
    };

    const isFirst = currentPage === 0;
    const isLast  = currentPage >= totalPages - 1;

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h2 className={styles.title}>Our Journal</h2>
                <p className={styles.subtitle}>Stories, projects &amp; expertise from our team</p>
            </div>

            {/* Zoom toolbar — FUERA del mobileScene */}
            {isOpen && (
                <div className={styles.zoomBar}>
                    <button className={styles.zoomBtn} onClick={zoomOut}
                            disabled={scale <= MIN_SCALE} aria-label="Zoom out">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                    </button>
                    <button className={styles.zoomReset} onClick={zoomReset}>
                        {Math.round(scale * 100)}%
                    </button>
                    <button className={styles.zoomBtn} onClick={zoomIn}
                            disabled={scale >= MAX_SCALE} aria-label="Zoom in">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            <line x1="11" y1="8" x2="11" y2="14"/>
                            <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                    </button>
                </div>
            )}

            <div className={styles.mobileScene}>
                {isOpen && (
                    <button className={`${styles.mobileNav} ${styles.mobileNavLeft}`}
                            onClick={goPrev} disabled={isFirst || scale > 1} aria-label="Previous">‹</button>
                )}

                <div className={styles.mobileBookWrapper}>
                    {/* Zoom container — transforma solo la imagen, no los botones */}
                    <div
                        ref={containerRef}
                        className={styles.zoomContainer}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        style={{
                            transform: `scale(${scale}) translate(${translateX / scale}px, ${translateY / scale}px)`,
                            transformOrigin: 'center center',
                            transition: lastDist.current ? 'none' : 'transform 0.15s ease',
                            cursor: scale > 1 ? 'grab' : 'default',
                        }}
                    >
                        <HTMLFlipBook
                            ref={bookRef}
                            width={pageSize.width}
                            height={pageSize.height}
                            size="fixed"
                            minWidth={240} maxWidth={480}
                            minHeight={320} maxHeight={640}
                            showCover={true} drawShadow={true}
                            flippingTime={700} maxShadowOpacity={0.4}
                            useMouseEvents={scale === 1}
                            mobileScrollSupport={false}
                            usePortrait={true} startPage={0} autoSize={false}
                            clickEventForward={true} startZIndex={0}
                            swipeDistance={scale > 1 ? 9999 : 30}
                            renderOnlyPageLengthChange={false}
                            showPageCorners={true}
                            disableFlipByClick={scale > 1}
                            onFlip={onFlip}
                            className={styles.mobileBook}
                            style={{}}
                        >
                            {pages.map((page) => <Page key={page.id} page={page} />)}
                        </HTMLFlipBook>
                    </div>

                    {!isOpen && (
                        <button className={styles.mobileOpenBtn}
                                onClick={() => bookRef.current?.pageFlip().flipNext()}>
                            Open Journal ›
                        </button>
                    )}
                </div>

                {isOpen && (
                    <button className={`${styles.mobileNav} ${styles.mobileNavRight}`}
                            onClick={goNext} disabled={isLast || scale > 1} aria-label="Next">›</button>
                )}
            </div>

            {/* Hint zoom */}
            {isOpen && scale === 1 && (
                <p className={styles.zoomHint}>Pinch or use +/− to zoom in</p>
            )}

            {isOpen && (
                <div className={styles.dots}>
                    {pages.map((_, i) => (
                        <button key={i}
                                className={`${styles.dot} ${i === currentPage ? styles.dotActive : ""}`}
                                onClick={() => bookRef.current?.pageFlip().flip(i)} />
                    ))}
                </div>
            )}
        </section>
    );
}

// ── Desktop (sin cambios) ──────────────────────────────────────────────────
function DesktopMagazine({ pages }: MagazineFlipProps) {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const totalPages = pages.length;
    const [bookOffset, setBookOffset] = useState(275);
    const bookWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const bookEl = bookWrapperRef.current;
            if (!bookEl) return;
            const handleMouseDown = (e: MouseEvent) => {
                const page = bookRef.current?.pageFlip().getCurrentPageIndex();
                if (page === undefined) return;
                const rect = bookEl.getBoundingClientRect();
                const isRightSide = e.clientX - rect.left > rect.width / 2;
                if (isRightSide) setBookOffset(page >= pages.length - 2 ? 275 : 0);
                else setBookOffset(page <= 1 ? -275 : 0);
            };
            bookEl.addEventListener("mousedown", handleMouseDown, { capture: true });
            return () => bookEl.removeEventListener("mousedown", handleMouseDown, { capture: true });
        }, 500);
        return () => clearTimeout(timeout);
    }, [pages.length]);

    const onFlip = useCallback((e: any) => {
        const page = e.data;
        setCurrentPage(page);
        setIsOpen(page > 0);
        if (page === 0) setBookOffset(-275);
        else if (page >= pages.length - 1) setBookOffset(275);
        else setBookOffset(0);
    }, [pages.length]);

    const onInit = useCallback(() => { setBookOffset(-275); }, []);

    const goNext = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        setBookOffset(page >= pages.length - 2 ? 275 : 0);
        bookRef.current?.pageFlip().flipNext();
    };

    const goPrev = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        setBookOffset(page <= 1 ? -275 : 0);
        bookRef.current?.pageFlip().flipPrev();
    };

    const onChangeState = useCallback((e: any) => {
        if (e.data === "flipping") {
            const page = bookRef.current?.pageFlip().getCurrentPageIndex();
            if (page === 0) setBookOffset(-275);
            else if (page >= pages.length - 2) setBookOffset(275);
            else setBookOffset(0);
        }
    }, [pages.length]);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h2 className={styles.title}>Our Journal</h2>
                <p className={styles.subtitle}>Stories, projects &amp; expertise from our team</p>
            </div>

            <div className={styles.scene}>
                {!isOpen && (
                    <button className={styles.openBtn}
                            onClick={() => { setBookOffset(0); bookRef.current?.pageFlip().flipNext(); }}>
                        Open Journal ›
                    </button>
                )}

                <div ref={bookWrapperRef} style={{
                    transform: `translateX(${bookOffset}px)`,
                    transition: "transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                }}>
                    <HTMLFlipBook
                        ref={bookRef} width={549}
                        height={Math.round(549 * (3307 / 2539))}
                        size="fixed" showCover={true} drawShadow={false}
                        flippingTime={800} maxShadowOpacity={0.4}
                        useMouseEvents={true} mobileScrollSupport={false}
                        onFlip={onFlip} onInit={onInit} onChangeState={onChangeState}
                        className={styles.book} style={{}} startPage={0}
                        minWidth={300} maxWidth={550}
                        minHeight={Math.round(300 * (3307 / 2539))} maxHeight={743}
                        autoSize={false} clickEventForward={true}
                        usePortrait={false} startZIndex={0}
                        swipeDistance={30} renderOnlyPageLengthChange={false}
                        showPageCorners={true} disableFlipByClick={false}
                    >
                        {pages.map((page) => <Page key={page.id} page={page} />)}
                    </HTMLFlipBook>
                </div>

                {isOpen && (
                    <>
                        <button className={`${styles.navBtn} ${styles.navLeft}`}  onClick={goPrev} disabled={currentPage <= 1}>‹</button>
                        <button className={`${styles.navBtn} ${styles.navRight}`} onClick={goNext} disabled={currentPage >= totalPages - 1}>›</button>
                    </>
                )}
            </div>

            {isOpen && (
                <div className={styles.dots}>
                    {pages.map((_, i) => (
                        <button key={i}
                                className={`${styles.dot} ${i === currentPage ? styles.dotActive : ""}`}
                                onClick={() => bookRef.current?.pageFlip().flip(i)} />
                    ))}
                </div>
            )}
        </section>
    );
}

export const MagazineFlip = ({ pages }: MagazineFlipProps) => {
    const isMobile = useIsMobile();
    return isMobile ? <MobileMagazine pages={pages} /> : <DesktopMagazine pages={pages} />;
};