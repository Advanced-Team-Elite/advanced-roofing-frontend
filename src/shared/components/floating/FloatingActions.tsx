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

type ReadState = 'idle' | 'loading' | 'playing' | 'error';

export const FloatingActions = () => {
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

    // ── Stop lectura ─────────────────────────────────────────
    const stopAudio = () => {
        window.speechSynthesis.cancel();
        setReadState('idle');
    };

    // ── Extraer texto limpio del DOM ─────────────────────────
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
            voices.find(v => v.name === 'Microsoft Aria Online (Natural) - English (United States)') ?? // Edge Neural — mejor opción
            voices.find(v => v.name === 'Microsoft Aria - English (United States)')                  ?? // Edge local
            voices.find(v => v.name.includes('Aria'))                                                ?? // Edge cualquier Aria
            voices.find(v => v.name === 'Samantha')                                                  ?? // macOS / iOS
            voices.find(v => v.name === 'Karen')                                                     ?? // macOS Australia
            voices.find(v => v.name === 'Google US English')                                         ?? // Chrome desktop
            voices.find(v => v.lang === 'en-US' && v.localService)                                   ?? // voz local en-US
            voices.find(v => v.lang === 'en-US')                                                     ?? // cualquier en-US
            voices[0]                                                                                 ?? // lo que haya
            null
        );
    };

    // ── Toggle lector ────────────────────────────────────────
    const handleToggleRead = () => {
        if (readState === 'playing') {
            stopAudio();
            setIsMenuOpen(false);
            return;
        }

        const text = extractPageText();
        if (!text) {
            setReadState('error');
            setTimeout(() => setReadState('idle'), 3000);
            return;
        }

        window.speechSynthesis.cancel();

        const utterance     = new SpeechSynthesisUtterance(text);
        utterance.lang      = 'en-US';
        utterance.rate      = 0.75;
        utterance.pitch     = 1.0;

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

        // Las voces pueden no estar listas en Firefox / primer load de Chrome
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