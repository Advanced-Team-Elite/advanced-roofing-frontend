'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './FloatingActions.module.css';
import { QuoteDrawer } from './Quote/QuoteDrawer';
import { ContactDrawer } from "@/shared/components/floating/ContactDrawer/ContactDrawer";
import { getPregeneratedAudio } from "@/lib/audio-map";

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

type ReadState = 'idle' | 'loading' | 'playing' | 'error';

export const FloatingActions = () => {
    const pathname = usePathname();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [showTop, setShowTop]                     = useState(false);
    const [showBubble, setShowBubble]               = useState(false);
    const [isMenuOpen, setIsMenuOpen]               = useState(false);
    const [mounted, setMounted]                     = useState(false);
    const [readState, setReadState]                 = useState<ReadState>('idle');
    const [isQuoteOpen, setIsQuoteOpen]             = useState(false);
    const [activeContactType, setActiveContactType] = useState<'text' | 'email' | 'chat' | 'call' | null>(null);

    const lastScrollY = useRef(0);

    const isMobile = () => typeof window !== 'undefined' && window.innerWidth <= 768;

    // ── Mount + bubble timer ─────────────────────────────────
    useEffect(() => {
        const mountTimer  = setTimeout(() => setMounted(true), 50);
        const bubbleTimer = setTimeout(() => setShowBubble(true), 1000);
        return () => {
            clearTimeout(mountTimer);
            clearTimeout(bubbleTimer);
            window.speechSynthesis.cancel();
            audioRef.current?.pause();
        };
    }, []);

    // ── Cambio de página: cortar CUALQUIER audio activo ──────
    // (pre-generado o Web Speech API) ANTES de precargar el
    // audio de la nueva página. Este único efecto reemplaza
    // los dos useEffect separados que tenías antes — el bug
    // era que se creaba el audio nuevo sin pausar el viejo,
    // perdiendo la referencia al que seguía sonando.
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.onplay = null;
            audioRef.current.onended = null;
            audioRef.current.onerror = null;
            audioRef.current = null;
        }
        window.speechSynthesis.cancel();
        setReadState('idle');

        const url = getPregeneratedAudio(pathname);
        if (url) {
            const preload = new Audio(url);
            preload.preload = 'auto';
            audioRef.current = preload;
        }
    }, [pathname]);

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

    // ── Stop lectura (cubre ambas fuentes de audio) ──────────
    const stopAudio = () => {
        window.speechSynthesis.cancel();
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setReadState('idle');
    };

    // ── Extraer texto limpio del DOM (fallback path) ─────────
    const extractPageText = (): string => {
        const source =
            document.querySelector<HTMLElement>('[data-readable]') ??
            document.querySelector<HTMLElement>('main')            ??
            document.querySelector<HTMLElement>('article');

        if (!source) return '';

        const clone = source.cloneNode(true) as HTMLElement;

        clone
            .querySelectorAll('nav, header, footer, button, script, style, [aria-hidden="true"], .sr-only, svg, img')
            .forEach(el => el.remove());

        return clone.innerText
            .replace(/\n{3,}/g, '\n\n')
            .replace(/[ \t]{2,}/g, ' ')
            .trim();
    };

    // ── Elegir la mejor voz disponible ──────────────────────
    const pickVoice = (): SpeechSynthesisVoice | null => {
        const voices = window.speechSynthesis.getVoices();
        return (
            voices.find(v => v.name === 'Microsoft Aria Online (Natural) - English (United States)') ??
            voices.find(v => v.name === 'Microsoft Aria - English (United States)')                  ??
            voices.find(v => v.name.includes('Aria'))                                                ??
            voices.find(v => v.name === 'Samantha')                                                  ??
            voices.find(v => v.name === 'Karen')                                                     ??
            voices.find(v => v.name === 'Google US English')                                         ??
            voices.find(v => v.lang === 'en-US' && v.localService)                                   ??
            voices.find(v => v.lang === 'en-US')                                                     ??
            voices[0]                                                                                 ??
            null
        );
    };

    // ── Reproducir audio pre-generado ────────────────────────
    const playPregeneratedAudio = () => {
        const audio = audioRef.current;
        if (!audio) {
            speakWithWebSpeechAPI();
            return;
        }

        audio.currentTime = 0;
        audio.onplay  = () => setReadState('playing');
        audio.onended = () => { stopAudio(); setIsMenuOpen(false); };
        audio.onerror = () => {
            // Si el mp3 falla (404, CORS, etc.) cae a Web Speech API
            speakWithWebSpeechAPI();
        };

        audio.play().catch(() => {
            speakWithWebSpeechAPI();
        });
    };

    // ── Web Speech API (fallback) ────────────────────────────
    const speakWithWebSpeechAPI = () => {
        const text = extractPageText();
        if (!text) {
            setReadState('error');
            setTimeout(() => setReadState('idle'), 3000);
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang  = 'en-US';
        utterance.rate  = 0.75;
        utterance.pitch = 1.0;

        utterance.onstart = () => setReadState('playing');
        utterance.onend   = () => { stopAudio(); setIsMenuOpen(false); };
        utterance.onerror = () => {
            stopAudio();
            setReadState('error');
            setTimeout(() => setReadState('idle'), 3000);
        };

        const speak = () => {
            utterance.voice = pickVoice();
            window.speechSynthesis.speak(utterance);
            setReadState('playing');
        };

        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            speak();
        } else {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.onvoiceschanged = null;
                speak();
            };
        }
    };

    // ── Toggle lector — decide la fuente según la ruta ───────
    const handleToggleRead = () => {
        if (readState === 'playing') {
            stopAudio();
            setIsMenuOpen(false);
            return;
        }

        const hasPregenerated = getPregeneratedAudio(pathname) !== null;

        if (hasPregenerated) {
            playPregeneratedAudio();
        } else {
            speakWithWebSpeechAPI();
        }
    };

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen(prev => !prev);
    };

    // ── Labels por estado ────────────────────────────────────
    const readLabel: Record<ReadState, string> = {
        idle:    '🔊 Listen to this page',
        loading: '🔊 Listen to this page',
        playing: '⏹ Stop reading',
        error:   '⚠️ Not available — try another browser',
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
                    >
                        {readLabel[readState]}
                    </button>

                    {readState === 'playing' && (
                        <span className={styles.readingStatus}>Reading in progress...</span>
                    )}
                </div>
            )}

            {/* Botón accesibilidad */}
            <button
                className={`${styles.accessibilityBtn} ${showBubble ? styles.withBubble : styles.withoutBubble}`}
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

            {/* Contact widget — Halloween Edition */}
            <div className={`${styles.contactContainer} ${mounted ? styles.contactVisible : styles.contactHidden}`}>
                <div className={styles.chatWrapper}>
                    {showBubble && (
                        <div className={styles.chatBubble} style={{ position: "relative" }}>
                            {/* Sombrero de bruja decorativo arriba del bocadillo */}
                            <svg
                                viewBox="0 0 100 100"
                                width="36"
                                height="36"
                                style={{ position: "absolute", top: "-22px", left: "12px", transform: "rotate(-15deg)", pointerEvents: "none" }}
                            >
                                <path d="M10 80 Q50 70 90 80 Q50 75 10 80 Z" fill="#1a1a1a" />
                                <path d="M25 76 C35 55 45 30 55 10 C58 35 68 55 75 76 Z" fill="#2d1b4e" />
                                <path d="M30 71 Q50 67 70 71 Q50 64 30 71 Z" fill="#d95d00" /> {/* Cinta naranja */}
                                <rect x="46" y="65" width="8" height="7" rx="1" fill="#ffb700" /> {/* Hebilla */}
                            </svg>

                            <button className={styles.closeBtn} onClick={() => setShowBubble(false)}>×</button>
                            <strong
                                style={{
                                    display: "block",
                                    color: "#0c0c0c",
                                    fontWeight: "bolder",
                                    marginBottom: "8px" /* Usar margin-bottom en lugar de padding para separar del párrafo */
                                }}
                            >
                                Spooktacular Welcome to Advanced Roofing!
                            </strong>
                            <p>Don&apos;t let roof troubles haunt you! How can we help today?</p>
                            <div className={styles.bubbleTriangle}></div>
                        </div>
                    )}

                    <ContactDrawer type={activeContactType} onClose={() => setActiveContactType(null)} />

                    <div className={styles.actionGrid}>
                        {/* TEXT — Fantasma */}
                        <button className={styles.actionItem} onClick={() => setActiveContactType('text')} aria-label="Send us a text message">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 2C7.58 2 4 5.58 4 10v9c0 .55.45 1 1 1 .28 0 .53-.11.71-.29L7 18.41l1.29 1.29c.39.39 1.02.39 1.41 0L11 18.41l1.29 1.29c.39.39 1.02.39 1.41 0L15 18.41l1.29 1.29c.18.18.43.29.71.29.55 0 1-.45 1-1v-9c0-4.42-3.58-8-8-8zm-2.5 7.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8 11.83 8 11s.67-1.5 1.5-1.5zm5 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                            </svg>
                            <span>Text</span>
                        </button>

                        {/* CALL — Murciélago */}
                        <button
                            className={styles.actionItem}
                            onClick={() => {
                                if (isMobile()) window.location.href = 'tel:+18479456565';
                                else setActiveContactType('call');
                            }}
                            aria-label="Call our office"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 6c-2 0-3.8 1.2-5 2.5C5.2 7 3 7 1.5 8c0 3.5 3 7.5 7 8 0-1.5 1-3.5 3.5-3.5s3.5 2 3.5 3.5c4-.5 7-4.5 7-8-1.5-1-3.7-1-5.5.5C15.8 7.2 14 6 12 6zm-2 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                            </svg>
                            <span>Call</span>
                        </button>

                        {/* EMAIL — Calabaza */}
                        <button className={styles.actionItem} onClick={() => setActiveContactType('email')} aria-label="Send us an email">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 3c-.55 0-1 .45-1 1v1.1C6.95 5.61 4 8.96 4 13c0 4.97 3.58 9 8 9s8-4.03 8-9c0-4.04-2.95-7.39-7-7.9V4c0-.55-.45-1-1-1zm-3.5 7L10 12l-1.5 2h-1L9 12 7.5 10h1zm7 0L17 12l-1.5 2h-1l1.5-2-1.5-2h1zm-5.5 6h4l-2 2z"/>
                            </svg>
                            <span>Email</span>
                        </button>

                        {/* CHAT — Calavera */}
                        <button className={styles.actionItem} onClick={() => setActiveContactType('chat')} aria-label="Open live chat">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 2C7.58 2 4 5.58 4 10c0 2.5 1.14 4.73 2.93 6.22V19c0 .55.45 1 1 1h2v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h2c.55 0 1-.45 1-1v-2.78C18.86 14.73 20 12.5 20 10c0-4.42-3.58-8-8-8zm-3 9c-.83 0-1.5-.67-1.5-1.5S8.17 8 9 8s1.5.67 1.5 1.5S9.83 11 9 11zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 8 15 8s1.5.67 1.5 1.5S15.83 11 15 11zm-5 4h4v1.5h-4V15z"/>
                            </svg>
                            <span>Chat</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};