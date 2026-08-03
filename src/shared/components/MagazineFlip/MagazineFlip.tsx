"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "./MagazineFlip.module.css";
import Link from "next/link";
import { JournalPage } from "@/data/journals.data";

// ── Props ──────────────────────────────────────────────────────────────────
interface MagazineFlipProps {
    pages: JournalPage[];
}

// ── Hook móvil ─────────────────────────────────────────────────────────────
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

// ── Página individual ──────────────────────────────────────────────────────
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

// ── Vista mobile ───────────────────────────────────────────────────────────
function MobileMagazine({ pages }: MagazineFlipProps) {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const totalPages = pages.length;
    const [pageSize, setPageSize] = useState({ width: 340, height: 453 });

    useEffect(() => {
        const calcSize = () => {
            const vw = window.innerWidth;
            const width = Math.min(Math.floor(vw * 0.88), 420);
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
    }, []);

    const handleOpen = () => bookRef.current?.pageFlip().flipNext();
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
                    >‹</button>
                )}

                <div className={styles.mobileBookWrapper}>
                    <HTMLFlipBook
                        ref={bookRef}
                        width={pageSize.width}
                        height={pageSize.height}
                        size="fixed"
                        minWidth={240} maxWidth={420}
                        minHeight={320} maxHeight={560}
                        showCover={true} drawShadow={true}
                        flippingTime={700} maxShadowOpacity={0.4}
                        useMouseEvents={true} mobileScrollSupport={false}
                        usePortrait={true} startPage={0} autoSize={false}
                        clickEventForward={true} startZIndex={0}
                        swipeDistance={30} renderOnlyPageLengthChange={false}
                        showPageCorners={true} disableFlipByClick={false}
                        onFlip={onFlip}
                        className={styles.mobileBook}
                        style={{}}
                    >
                        {pages.map((page) => <Page key={page.id} page={page} />)}
                    </HTMLFlipBook>

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
                    >›</button>
                )}
            </div>

            {isOpen && (
                <div className={styles.dots}>
                    {pages.map((_, i) => (
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

// ── Vista desktop ──────────────────────────────────────────────────────────
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
                if (isRightSide) {
                    if (page >= pages.length - 2) setBookOffset(275);
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

    const handleOpen = () => {
        setBookOffset(0);
        bookRef.current?.pageFlip().flipNext();
    };

    const goNext = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        if (page >= pages.length - 2) setBookOffset(275);
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
                        width={549}
                        height={Math.round(549 * (3307 / 2539))}
                        size="fixed"
                        showCover={true} drawShadow={false}
                        flippingTime={800} maxShadowOpacity={0.4}
                        useMouseEvents={true} mobileScrollSupport={false}
                        onFlip={onFlip} onInit={onInit}
                        onChangeState={onChangeState}
                        className={styles.book} style={{}}
                        startPage={0}
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
                        <button className={`${styles.navBtn} ${styles.navLeft}`}  onClick={goPrev} disabled={currentPage <= 1} aria-label="Previous">‹</button>
                        <button className={`${styles.navBtn} ${styles.navRight}`} onClick={goNext} disabled={currentPage >= totalPages - 1} aria-label="Next">›</button>
                    </>
                )}
            </div>

            {isOpen && (
                <div className={styles.dots}>
                    {pages.map((_, i) => (
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
export const MagazineFlip = ({ pages }: MagazineFlipProps) => {
    const isMobile = useIsMobile();
    return isMobile ? <MobileMagazine pages={pages} /> : <DesktopMagazine pages={pages} />;
};