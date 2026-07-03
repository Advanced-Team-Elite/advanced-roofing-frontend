'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FloatingActions.module.css';
import { QuoteDrawer } from './Quote/QuoteDrawer';
import { ContactDrawer } from "@/shared/components/floating/ContactDrawer/ContactDrawer";

interface IconProps {
    size?: number;
}

const AccessibilityIcon = ({ size = 28 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="1" />
        <path d="m9 20 3-6 3 6" />
        <path d="m6 8 6 2 6-2" />
        <path d="M12 10v4" />
    </svg>
);

// Estados posibles del lector
type ReadState = 'idle' | 'loading' | 'playing' | 'error';

export const FloatingActions = () => {
    const [showTop, setShowTop]               = useState(false);
    const [showBubble, setShowBubble]         = useState(false);
    const [isMenuOpen, setIsMenuOpen]         = useState(false);
    const [mounted, setMounted]               = useState(false);
    const [readState, setReadState]           = useState<ReadState>('idle');
    const [isQuoteOpen, setIsQuoteOpen]       = useState(false);
    const [activeContactType, setActiveContactType] = useState<'text' | 'email' | 'chat' | 'call' | null>(null);

    const lastScrollY  = useRef(0);
    const audioRef     = useRef<HTMLAudioElement | null>(null);
    const audioBlobUrl = useRef<string | null>(null);

    const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;

    // ── Mount + bubble timer ─────────────────────────────────
    useEffect(() => {
        const mountTimer  = setTimeout(() => setMounted(true), 50);
        const bubbleTimer = setTimeout(() => setShowBubble(true), 1000);
        return () => {
            clearTimeout(mountTimer);
            clearTimeout(bubbleTimer);
            stopAudio();
        };
    }, []);

    // ── Scroll → mostrar botón Top ───────────────────────────
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            setShowTop(current > 300 && current > lastScrollY.current);
            lastScrollY.current = current;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ── Helpers de audio ─────────────────────────────────────
    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
        if (audioBlobUrl.current) {
            URL.revokeObjectURL(audioBlobUrl.current);
            audioBlobUrl.current = null;
        }
        setReadState('idle');
    };

    // ── Extraer texto limpio del DOM ─────────────────────────
    const extractPageText = (): string => {
        // Busca main con data-readable primero, luego cualquier main
        const source =
            document.querySelector<HTMLElement>('[data-readable]') ??
            document.querySelector<HTMLElement>('main') ??
            document.querySelector<HTMLElement>('article');

        if (!source) return '';

        const clone = source.cloneNode(true) as HTMLElement;

        // Eliminar elementos que no deben leerse
        clone
            .querySelectorAll('nav, header, footer, button, script, style, [aria-hidden="true"], .sr-only, svg, img')
            .forEach(el => el.remove());

        return clone.innerText
            .replace(/\n{3,}/g, '\n\n')
            .replace(/[ \t]{2,}/g, ' ')
            .trim();
    };

    // ── Toggle lector ────────────────────────────────────────
    const handleToggleRead = async () => {
        // Si ya está playing → stop
        if (readState === 'playing') {
            stopAudio();
            setIsMenuOpen(false);
            return;
        }

        // Si está loading → ignorar doble click
        if (readState === 'loading') return;

        const text = extractPageText();
        if (!text) {
            setReadState('error');
            setTimeout(() => setReadState('idle'), 3000);
            return;
        }

        setReadState('loading');

        try {
            const res = await fetch('/api/tts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
            });

            if (!res.ok) throw new Error('TTS API error');

            const blob    = await res.blob();
            const url     = URL.createObjectURL(blob);
            audioBlobUrl.current = url;

            const audio   = new Audio(url);
            audioRef.current = audio;

            audio.onended = () => {
                stopAudio();
                setIsMenuOpen(false);
            };
            audio.onerror = () => {
                stopAudio();
                setReadState('error');
                setTimeout(() => setReadState('idle'), 3000);
            };

            await audio.play();
            setReadState('playing');

        } catch (err) {
            console.error('TTS error:', err);
            stopAudio();
            setReadState('error');
            setTimeout(() => setReadState('idle'), 3000);
        }
    };

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen(prev => !prev);
    };

    // ── Labels por estado ────────────────────────────────────
    const readLabel: Record<ReadState, string> = {
        idle:    '🔊 Listen to this page',
        loading: '⏳ Generating audio...',
        playing: '⏹ Stop reading',
        error:   '⚠️ Error — try again',
    };

    if (!mounted) return null;

    return (
        <>
            <QuoteDrawer isOpen={isQuoteOpen} setIsOpen={setIsQuoteOpen} />
            {isQuoteOpen && <div className={styles.drawerOverlay} onClick={() => setIsQuoteOpen(false)} />}

            {/* Menú accesibilidad */}
            {isMenuOpen && (
                <div
                    className={`${styles.accessibilityMenu} ${showBubble ? styles.menuWithBubble : styles.menuWithoutBubble}`}
                    onClick={e => e.stopPropagation()}
                >
                    <button
                        onClick={handleToggleRead}
                        className={styles.menuItem}
                        disabled={readState === 'loading'}
                    >
                        {readLabel[readState]}
                    </button>

                    {readState === 'loading' && (
                        <span className={styles.readingStatus}>Generating audio with AI...</span>
                    )}
                    {readState === 'playing' && (
                        <span className={styles.readingStatus}>Reading in progress...</span>
                    )}
                </div>
            )}

            {/* Botón accesibilidad */}
            <button
                className={`${styles.accessibilityBtn} ${showBubble ? styles.withBubble : styles.withoutBubble} ${readState === 'loading' ? styles.disabledBtn : ''}`}
                aria-label="Accessibility Options"
                onClick={toggleMenu}
            >
                <AccessibilityIcon size={35} />
            </button>

            {/* Botón Top */}
            <button
                className={`${styles.topBtn} ${showTop ? styles.topVisible : styles.topHidden}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Top
            </button>

            {/* Contact widget */}
            <div className={`${styles.contactContainer} ${mounted ? styles.contactVisible : styles.contactHidden}`}>
                <div className={styles.chatWrapper}>
                    {showBubble && (
                        <div className={styles.chatBubble}>
                            <button className={styles.closeBtn} onClick={() => setShowBubble(false)}>×</button>
                            <strong>Welcome to Advanced Roofing Team Construction</strong>
                            <p>I&apos;m here if you have any questions or need help!</p>
                            <div className={styles.bubbleTriangle}></div>
                        </div>
                    )}

                    <ContactDrawer type={activeContactType} onClose={() => setActiveContactType(null)} />

                    <div className={styles.actionGrid}>
                        <button className={styles.actionItem} onClick={() => setActiveContactType('text')} aria-label="Send us a text message">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/></svg>
                            <span>Text</span>
                        </button>

                        <button
                            className={styles.actionItem}
                            onClick={() => {
                                if (isMobile()) window.location.href = 'tel:+18479456565';
                                else setActiveContactType('call');
                            }}
                            aria-label="Call our office"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            <span>Call</span>
                        </button>

                        <button className={styles.actionItem} onClick={() => setActiveContactType('email')} aria-label="Send us an email">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                            <span>Email</span>
                        </button>

                        <button className={styles.actionItem} onClick={() => setActiveContactType('chat')} aria-label="Open live chat">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/></svg>
                            <span>Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};