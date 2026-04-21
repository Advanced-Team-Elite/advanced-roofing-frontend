'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactDrawer.module.css';

interface ContactDrawerProps {
    type: 'text' | 'email' | 'chat' | 'call' | null;
    onClose: () => void;
}

export const ContactDrawer = ({ type, onClose }: ContactDrawerProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Aseguramos que el portal solo se ejecute en el cliente
    useEffect(() => {
        setMounted(true);
        if (type) {
            document.body.style.overflow = 'hidden'; // Bloquea scroll al abrir
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [type]);

    if (!type || !mounted) return null;

    const titles = {
        text: 'Send us a text',
        email: 'Send us an email',
        chat: 'Live Chat',
        call: 'Request a callback'
    };

    const drawerContent = (
        <div className={`${styles.fullScreenWrapper} ${isExpanded ? styles.withBackdrop : ''}`}>
            {/* Backdrop invisible que cierra el drawer al hacer clic fuera */}
            <div className={styles.clickableOverlay} onClick={onClose} />

            <div className={`${styles.drawerContainer} ${isExpanded ? styles.expanded : ''}`}>

                {/* Botones de Control */}
                <div className={styles.drawerHeader}>
                    {/* Logo a la izquierda */}
                    {!isExpanded && (
                        <img
                            src="/assets/brand/logo-dark.png"
                            alt="Advanced Roofing"
                            className={styles.headerLogo}
                        />
                    )}

                    {/* Botones de Control a la derecha */}
                    <div className={styles.controls}>
                        <button
                            className={styles.iconBtn}
                            onClick={() => setIsExpanded(!isExpanded)}
                            title={isExpanded ? "Collapse" : "Expand"}
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                            </svg>
                        </button>
                        <button className={styles.iconBtn} onClick={onClose} title="Close">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={styles.layout}>
                    {/* Panel Izquierdo: Información (Solo se revela al expandir) */}
                    <div className={`${styles.infoPanel} ${isExpanded ? styles.visible : ''}`}>
                        <div className={styles.brand}>
                            <img src="/assets/brand/logo-dark.png" alt="Advanced Roofing" className={styles.logo} />
                            <h3>Advanced Roofing Team <br/> Construction</h3>
                        </div>
                        <div className={styles.contactInfo}>
                            <p><span>📍</span> 975 Rand Rd, Des Plaines, IL 60016</p>
                            <p><span>📞</span> (847) 262-9774</p>
                        </div>
                        <div className={styles.businessHours}>
                            <h4>Business Hours:</h4>
                            <p>Monday - Sunday: Open 24 Hours</p>
                        </div>
                    </div>

                    {/* Panel Derecho: Formulario (Siempre visible) */}
                    <div className={styles.formPanel}>
                        <h2 className={styles.formTitle}>{titles[type]}</h2>
                        <p className={styles.formSubtitle}>
                            Please enter your name, phone number, and any details you&apos;d like to mention.
                        </p>

                        <form className={styles.mainForm} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputRow}>
                                <div className={styles.floatingGroup}>
                                    <input type="text" id="firstName" placeholder=" " required className={styles.floatingInput} />
                                    <label htmlFor="firstName" className={styles.floatingLabel}>First Name*</label>
                                </div>
                                <div className={styles.floatingGroup}>
                                    <input type="text" id="lastName" placeholder=" " required className={styles.floatingInput} />
                                    <label htmlFor="lastName" className={styles.floatingLabel}>Last Name*</label>
                                </div>
                            </div>

                            <div className={styles.floatingGroup}>
                                <input type="tel" id="phone" placeholder=" " required className={styles.floatingInput} />
                                <label htmlFor="phone" className={styles.floatingLabel}>Phone Number*</label>
                            </div>

                            <div className={styles.floatingGroup}>
                                <select
                                    id="textPermission"
                                    required
                                    defaultValue=""
                                    className={`${styles.floatingInput} ${styles.selectInput}`}
                                >
                                    {/* Esta opción es la que se muestra por defecto pero no se puede volver a elegir */}
                                    <option value="" disabled hidden>Select an option</option>
                                    <option value="yes">Yes, you can text at this number</option>
                                    <option value="no">No, don&apos;t text me</option>
                                </select>
                                <label htmlFor="textPermission" className={styles.floatingLabel}>Can we text you?*</label>
                            </div>

                            <div className={styles.floatingGroup}>
                                <textarea id="message" placeholder=" " rows={4} className={styles.floatingInput}></textarea>
                                <label htmlFor="message" className={styles.floatingLabel}>Message*</label>
                            </div>

                            <p className={styles.legalNotice}>
                                By submitting this form, you acknowledge and agree to our
                                <a href="#"> Privacy Policy</a> and <a href="#"> Acceptable Use Policy</a>.
                                If you choose to receive text messages, you agree to receive texts from Advanced Roofing Team Construction related to your inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help. Consent to receive text messages is not required to submit this form or receive services.
                            </p>
                        </form>

                        <div className={styles.actionsFooter}>
                            <button className={styles.cancelBtn} onClick={onClose}>‹ Back</button>
                            <button className={styles.submitBtn}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(drawerContent, document.body);
};