"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./MagazineFlip.module.css";
import Link from "next/link";

interface MagazinePage {
    id: number;
    image: string;
    link?: string;
    linkLabel?: string;
}

const PAGES: MagazinePage[] = [
    { id: 1,  image: "/assets/images/features/magazine/port.png" },
    { id: 2,  image: "/assets/images/features/magazine/page-0.png" },
    { id: 3,  image: "/assets/images/features/magazine/page-1.png" },
    { id: 4,  image: "/assets/images/features/magazine/page-2.png" },
    { id: 5,  image: "/assets/images/features/magazine/page-3.png" },
    { id: 6,  image: "/assets/images/features/magazine/page-4.png" },
    { id: 7,  image: "/assets/images/features/magazine/page-5.png" },
    { id: 8,  image: "/assets/images/features/magazine/page-6.png" },
];

// ── Hook para detectar mobile ──────────────────────────────────────────────
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

// ── Página para el FlipBook (desktop) ─────────────────────────────────────
const Page = React.forwardRef<HTMLDivElement, { page: MagazinePage }>(
    ({ page }, ref) => (
        <div ref={ref} className={styles.page}>
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

// ── Vista mobile: HTMLFlipBook en portrait (una cara) ────────────────────
function MobileMagazine() {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const totalPages = PAGES.length;

    // Dimensiones dinámicas según el viewport
    const [pageSize, setPageSize] = useState({ width: 340, height: 453 });

    useEffect(() => {
        const calcSize = () => {
            const vw = window.innerWidth;
            const width = Math.min(Math.floor(vw * 0.88), 420);
            const height = Math.round(width * (4 / 3));
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
    }, []);

    const handleOpen = () => {
        bookRef.current?.pageFlip().flipNext();
    };

    const goNext = () => bookRef.current?.pageFlip().flipNext();
    const goPrev = () => bookRef.current?.pageFlip().flipPrev();

    const isFirst = currentPage === 0;
    const isLast  = currentPage >= totalPages - 1;

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h2 className={styles.title}>Our Journal</h2>
                <p className={styles.subtitle}>Stories, projects &amp; expertise from our team</p>
            </div>

            <div className={styles.mobileScene}>
                {isOpen && (
                    <button
                        className={`${styles.mobileNav} ${styles.mobileNavLeft}`}
                        onClick={goPrev}
                        disabled={isFirst}
                        aria-label="Previous"
                    >
                        ‹
                    </button>
                )}

                <div className={styles.mobileBookWrapper}>
                    <HTMLFlipBook
                        ref={bookRef}
                        width={pageSize.width}
                        height={pageSize.height}
                        size="fixed"
                        minWidth={240}
                        maxWidth={420}
                        minHeight={320}
                        maxHeight={560}
                        showCover={true}
                        drawShadow={true}
                        flippingTime={700}
                        maxShadowOpacity={0.4}
                        useMouseEvents={true}
                        mobileScrollSupport={false}
                        usePortrait={true}          /* ← una sola página visible */
                        startPage={0}
                        autoSize={false}
                        clickEventForward={true}
                        startZIndex={0}
                        swipeDistance={30}
                        renderOnlyPageLengthChange={false}
                        showPageCorners={true}
                        disableFlipByClick={false}
                        onFlip={onFlip}
                        className={styles.mobileBook}
                        style={{}}
                    >
                        {PAGES.map((page) => (
                            <Page key={page.id} page={page} />
                        ))}
                    </HTMLFlipBook>

                    {/* Botón "Open" superpuesto a la portada */}
                    {!isOpen && (
                        <button className={styles.mobileOpenBtn} onClick={handleOpen}>
                            Open Journal ›
                        </button>
                    )}
                </div>

                {isOpen && (
                    <button
                        className={`${styles.mobileNav} ${styles.mobileNavRight}`}
                        onClick={goNext}
                        disabled={isLast}
                        aria-label="Next"
                    >
                        ›
                    </button>
                )}
            </div>

            {/* Dots */}
            {isOpen && (
                <div className={styles.dots}>
                    {PAGES.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === currentPage ? styles.dotActive : ""}`}
                            onClick={() => bookRef.current?.pageFlip().flip(i)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

// ── Vista desktop: FlipBook original ──────────────────────────────────────
function DesktopMagazine() {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const totalPages = PAGES.length;
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
                const clickX = e.clientX - rect.left;
                const isRightSide = clickX > rect.width / 2;
                if (isRightSide) {
                    if (page >= PAGES.length - 2) setBookOffset(275);
                    else setBookOffset(0);
                } else {
                    if (page <= 1) setBookOffset(-275);
                    else setBookOffset(0);
                }
            };
            bookEl.addEventListener("mousedown", handleMouseDown, { capture: true });
            return () => bookEl.removeEventListener("mousedown", handleMouseDown, { capture: true });
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    const onFlip = useCallback((e: any) => {
        const page = e.data;
        setCurrentPage(page);
        setIsOpen(page > 0);
        if (page === 0) setBookOffset(-275);
        else if (page >= PAGES.length - 1) setBookOffset(275);
        else setBookOffset(0);
    }, []);

    const onInit = useCallback(() => { setBookOffset(-275); }, []);

    const handleOpen = () => {
        setBookOffset(0);
        bookRef.current?.pageFlip().flipNext();
    };

    const goNext = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        if (page >= PAGES.length - 2) setBookOffset(275);
        else setBookOffset(0);
        bookRef.current?.pageFlip().flipNext();
    };

    const goPrev = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        if (page <= 1) setBookOffset(-275);
        else setBookOffset(0);
        bookRef.current?.pageFlip().flipPrev();
    };

    const onChangeState = useCallback((e: any) => {
        if (e.data === "flipping") {
            const page = bookRef.current?.pageFlip().getCurrentPageIndex();
            if (page === 0) setBookOffset(-275);
            else if (page >= PAGES.length - 2) setBookOffset(275);
            else setBookOffset(0);
        }
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h2 className={styles.title}>Our Journal</h2>
                <p className={styles.subtitle}>Stories, projects &amp; expertise from our team</p>
            </div>

            <div className={styles.scene}>
                {!isOpen && (
                    <button className={styles.openBtn} onClick={handleOpen}>
                        Open Journal ›
                    </button>
                )}

                <div
                    ref={bookWrapperRef}
                    style={{
                        transform: `translateX(${bookOffset}px)`,
                        transition: "transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
                    }}
                >
                    <HTMLFlipBook
                        ref={bookRef}
                        width={550} height={750}
                        size="fixed"
                        showCover={true}
                        drawShadow={false}
                        flippingTime={800}
                        maxShadowOpacity={0.4}
                        useMouseEvents={true}
                        mobileScrollSupport={false}
                        onFlip={onFlip}
                        onInit={onInit}
                        className={styles.book}
                        style={{}}
                        startPage={0}
                        minWidth={300} maxWidth={550}
                        minHeight={400} maxHeight={750}
                        autoSize={false}
                        clickEventForward={true}
                        usePortrait={false}
                        startZIndex={0}
                        swipeDistance={30}
                        renderOnlyPageLengthChange={false}
                        showPageCorners={true}
                        onChangeState={onChangeState}
                        disableFlipByClick={false}
                    >
                        {PAGES.map((page) => (
                            <Page key={page.id} page={page} />
                        ))}
                    </HTMLFlipBook>
                </div>

                {isOpen && (
                    <>
                        <button className={`${styles.navBtn} ${styles.navLeft}`} onClick={goPrev} disabled={currentPage <= 1} aria-label="Previous">‹</button>
                        <button className={`${styles.navBtn} ${styles.navRight}`} onClick={goNext} disabled={currentPage >= totalPages - 1} aria-label="Next">›</button>
                    </>
                )}
            </div>

            {isOpen && (
                <div className={styles.dots}>
                    {PAGES.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === currentPage ? styles.dotActive : ""}`}
                            onClick={() => bookRef.current?.pageFlip().flip(i)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

// ── Export principal ───────────────────────────────────────────────────────
export const MagazineFlip = () => {
    const isMobile = useIsMobile();
    return isMobile ? <MobileMagazine /> : <DesktopMagazine />;
};