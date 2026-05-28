"use client";
import React, {useRef, useState, useCallback, useEffect} from "react";
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
    { id: 5,  image: "/assets/images/features/magazine/page-3.png" }, /*link: "/roofing/roof-installation-replacement", linkLabel: "Our services"*/
    { id: 6,  image: "/assets/images/features/magazine/page-4.png" },
    { id: 7,  image: "/assets/images/features/magazine/page-5.png" },
    { id: 8,  image: "/assets/images/features/magazine/page-6.png" },
];

// Cada página necesita forwardRef para react-pageflip
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

export const MagazineFlip = () => {
    const bookRef = useRef<any>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const totalPages = PAGES.length;
    const [bookOffset, setBookOffset] = useState(275); // mitad del ancho de página = 450/2
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

    const handleBookMouseDown = (e: React.MouseEvent) => {
        const bookEl = bookRef.current?.pageFlip().getSettings();
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        if (page === undefined) return;

        // Detectar si el click fue en la mitad derecha (va a pasar a siguiente)
        // o en la mitad izquierda (va a ir a anterior)
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const isRightSide = clickX > rect.width / 2;

        if (isRightSide) {
            // flipNext
            if (page >= PAGES.length - 2) setBookOffset(275);
            else setBookOffset(0);
        } else {
            // flipPrev
            if (page <= 1) setBookOffset(-275);
            else setBookOffset(0);
        }
    };


    const onFlip = useCallback((e: any) => {
        const page = e.data;
        setCurrentPage(page);
        setIsOpen(page > 0);

        if (page === 0) {
            setBookOffset(-275); // 👈 portada: tira a la IZQUIERDA
        } else if (page >= PAGES.length - 1) {
            setBookOffset(275);  // 👈 contraportada: tira a la DERECHA
        } else {
            setBookOffset(0);    // centro para páginas interiores
        }
    }, []);

    const onInit = useCallback((e: any) => {
        setBookOffset(-275); // arranca en portada → izquierda
    }, []);

    const handleOpen = () => {
        setBookOffset(0); // al abrir pasa a páginas interiores
        bookRef.current?.pageFlip().flipNext();
    };

    const handleClose = () => {
        setBookOffset(-275); // al cerrar vuelve a portada
        bookRef.current?.pageFlip().flip(0);
    };

    const goNext = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        // Si estamos en la penúltima página, al flipNext iremos a la última (contraportada)
        if (page >= PAGES.length - 2) setBookOffset(275);
        else setBookOffset(0);
        bookRef.current?.pageFlip().flipNext();
    };
    const goPrev = () => {
        const page = bookRef.current?.pageFlip().getCurrentPageIndex();
        // Si estamos en página 1, al flipPrev iremos a portada
        if (page <= 1) setBookOffset(-275);
        else setBookOffset(0);
        bookRef.current?.pageFlip().flipPrev();
    };

    const onChangeState = useCallback((e: any) => {
        // 'flipping' = justo cuando empieza la animación
        if (e.data === 'flipping') {
            const page = bookRef.current?.pageFlip().getCurrentPageIndex();

            if (page === 0) {
                setBookOffset(-275); // va a abrir → centra a la izq
            } else if (page >= PAGES.length - 2) {
                setBookOffset(275);  // va a cerrar → centra a la der
            } else {
                setBookOffset(0);
            }
        }
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.label}>Advanced Roofing</span>
                <h2 className={styles.title}>Our Journal</h2>
                <p className={styles.subtitle}>Stories, projects & expertise from our team</p>
            </div>

            <div className={styles.scene}>
                {/* Botón de abrir — solo visible cuando está cerrado */}
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
                        width={550}
                        height={750}
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
                        minWidth={300}
                        maxWidth={550}
                        minHeight={400}
                        maxHeight={750}
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

                {/* Navegación — solo visible cuando está abierto */}
                {isOpen && (
                    <>
                        <button
                            className={`${styles.navBtn} ${styles.navLeft}`}
                            onClick={goPrev}
                            disabled={currentPage <= 1}
                            aria-label="Previous"
                        >
                            ‹
                        </button>
                        <button
                            className={`${styles.navBtn} ${styles.navRight}`}
                            onClick={goNext}
                            disabled={currentPage >= totalPages - 1}
                            aria-label="Next"
                        >
                            ›
                        </button>
                    </>
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
};