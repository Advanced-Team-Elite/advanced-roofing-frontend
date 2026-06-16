'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './ContactDrawer.module.css';
import {ChatInterface} from "@/shared/components/floating/ContactDrawer/ChatInterface/ChatInterface";

interface ContactDrawerProps {
    type: 'text' | 'email' | 'chat' | 'call' | null;
    onClose: () => void;
}

interface FormValues {
    firstName: string;
    lastName: string;
    phone: string;
    canText: string;
    message: string;
    email: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    canText?: string;
    message?: string;
    email?: string;
}

type SubmitState = 'idle' | 'loading' | 'success';

export const ContactDrawer = ({ type, onClose }: ContactDrawerProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [submitState, setSubmitState] = useState<SubmitState>('idle');
    const [form, setForm] = useState<FormValues>({
        firstName: '',
        lastName: '',
        phone: '',
        canText: '',
        message: '',
        email: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!type) {
            setForm({ firstName: '', lastName: '', phone: '', canText: '', message: '', email: '' });
            setErrors({});
            setSubmitState('idle');
            setIsExpanded(false);
        } else {
            setSubmitState('idle');
            setErrors({});
        }
    }, [type]);

    if (!type || !mounted) return null;

    const content = {
        text:  { title: 'Send us a text',     subtitle: "Let us know what you need, and we'll get back to you as soon as we can." },
        email: { title: 'Send us an email',   subtitle: 'Please enter your name and contact info.'                                  },
        chat:  { title: 'Live Chat',           subtitle: ''                                                                          },
        call:  { title: 'Request a callback', subtitle: "Please enter your name, phone number, and any details you'd like to mention." },
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm(prev => ({ ...prev, [id]: value }));
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [id]: undefined }));
        }
    };

    const validate = (): FormErrors => {
        const e: FormErrors = {};
        if (!form.firstName.trim()) e.firstName = 'First name is required.';
        if (!form.lastName.trim())  e.lastName  = 'Last name is required.';

        const digits = form.phone.replace(/\D/g, '');
        if (!digits)                 e.phone = 'Phone number is required.';
        else if (digits.length < 10) e.phone = 'Enter a valid US phone number.';

        if (!form.canText) e.canText = 'Please select an option.';

        if (type === 'email') {
            if (!form.email.trim()) e.email = 'Email address is required.';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                e.email = 'Enter a valid email address.';
        } else {
            if (!form.message.trim()) e.message = 'Please leave a message.';
        }

        return e;
    };

    const handleSubmit = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitState('loading');

        try {
            const res = await fetch('/api/callback-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, type }),
            });

            if (!res.ok) throw new Error('Failed');
            setSubmitState('success');
        } catch {
            setErrors({ message: 'Something went wrong. Please try again.' });
            setSubmitState('idle');
        }
    };

    const successMessages = {
        call:  "Your request has been sent! We'll call the number you provided as soon as we can.",
        text:  "Your message has been sent! We'll text you back as soon as we can.",
        email: "Your message has been sent! We'll reply to your email address shortly.",
        chat:  '',
    };

    const drawerContent = (
        <div className={`${styles.fullScreenWrapper} ${isExpanded ? styles.withBackdrop : ''}`}>
            <div className={styles.clickableOverlay} onClick={onClose} />

            <div className={`${styles.drawerContainer} ${isExpanded ? styles.expanded : ''}`}>
                <div className={styles.layout}>

                    {/* Panel Izquierdo */}
                    <div className={`${styles.infoPanel} ${isExpanded ? styles.visible : ''}`}>
                        <div className={styles.brand}>
                            <img src="/assets/brand/logo-dark.png" alt="Advanced Roofing" className={styles.logo} />
                            <h3>Advanced Roofing Team <br /> Construction</h3>
                        </div>
                        <div className={styles.contactInfo}>
                            <div className={styles.infoItem}>
                                <svg className={styles.blueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                <p>975 Rand Rd, Des Plaines, IL 60016</p>
                            </div>
                            <div className={styles.infoItem}>
                                <svg className={styles.blueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <p>(847) 262-9774</p>
                            </div>
                        </div>
                        <div className={styles.businessHours}>
                            <div className={styles.infoItem}>
                                <svg className={styles.blueIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /><path d="M12 14h.01" />
                                </svg>
                                <h4>Business Hours:</h4>
                            </div>
                            <p className={styles.hoursDetail}><strong>Monday - Sunday</strong></p>
                            <p className={styles.hoursDetail}>Open 24 Hours</p>
                        </div>
                    </div>

                    {/* Panel Derecho */}
                    <div className={`${styles.formPanel} ${type === 'chat' ? styles.formPanelChat : ''}`}>
                        <div className={styles.drawerHeader}>
                            <img
                                src="/assets/brand/logo-dark.png"
                                alt="Advanced Roofing"
                                className={`${styles.headerLogo} ${isExpanded ? styles.hidden : ''}`}
                            />
                            <div className={styles.controls}>
                                <button className={styles.iconBtn} onClick={() => setIsExpanded(!isExpanded)}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                                    </svg>
                                </button>
                                <button className={styles.iconBtn} onClick={onClose}>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* ── CHAT: espacio reservado ── */}
                        {type === 'chat' ? (
                            <ChatInterface />
                        ) : submitState === 'success' ? (
                            /* ── SUCCESS STATE ── */
                            <div className={styles.successState}>
                                <div className={styles.successIcon}>
                                    <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#00589e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <h2 className={styles.successTitle}>Thanks, {form.firstName}!</h2>
                                <br/>
                                <p className={styles.successMessage}>{successMessages[type]}</p>
                                <br/>
                                <button className={styles.closeSuccessBtn} onClick={onClose}>Close</button>
                            </div>

                        ) : submitState === 'loading' ? (
                            /* ── LOADING STATE ── */
                            <div className={styles.successState}>
                                <div className={styles.spinner} />
                                <p className={styles.loadingText}>Sending your request...</p>
                            </div>

                        ) : (
                            /* ── FORM STATE ── */
                            <>
                                <h2 className={styles.formTitle}>{content[type].title}</h2>
                                <p className={styles.formSubtitle}>{content[type].subtitle}</p>

                                <form className={styles.mainForm} onSubmit={(e) => e.preventDefault()}>
                                    <div className={styles.inputRow}>
                                        <div className={styles.floatingGroup}>
                                            <input id="firstName" type="text" placeholder=" "
                                                   value={form.firstName} onChange={handleChange}
                                                   className={`${styles.floatingInput} ${errors.firstName ? styles.inputError : ''}`}
                                            />
                                            <label htmlFor="firstName" className={styles.floatingLabel}>First Name*</label>
                                            {errors.firstName && <span className={styles.errorMsg}>{errors.firstName}</span>}
                                        </div>
                                        <div className={styles.floatingGroup}>
                                            <input id="lastName" type="text" placeholder=" "
                                                   value={form.lastName} onChange={handleChange}
                                                   className={`${styles.floatingInput} ${errors.lastName ? styles.inputError : ''}`}
                                            />
                                            <label htmlFor="lastName" className={styles.floatingLabel}>Last Name*</label>
                                            {errors.lastName && <span className={styles.errorMsg}>{errors.lastName}</span>}
                                        </div>
                                    </div>

                                    {/* Phone: visible en TODOS los tipos */}
                                    <div className={styles.floatingGroup}>
                                        <input id="phone" type="tel" placeholder=" "
                                               value={form.phone} onChange={handleChange}
                                               className={`${styles.floatingInput} ${errors.phone ? styles.inputError : ''}`}
                                        />
                                        <label htmlFor="phone" className={styles.floatingLabel}>Phone Number*</label>
                                        {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                                    </div>

                                    {/* Can we text you: visible en TODOS los tipos */}
                                    <div className={styles.floatingGroup}>
                                        <select
                                            id="canText"
                                            value={form.canText}
                                            onChange={handleChange}
                                            className={`${styles.floatingInput} ${styles.selectInput} ${errors.canText ? styles.inputError : ''}`}
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="yes">Yes, you can text at this number</option>
                                            <option value="no">No, don't text me</option>
                                        </select>
                                        <label htmlFor="canText" className={styles.floatingLabel}>Can we text you?*</label>
                                        {errors.canText && <span className={styles.errorMsg}>{errors.canText}</span>}
                                    </div>

                                    {/* Reemplaza el bloque del textarea message por esto: */}

                                    {type === 'email' ? (
                                        <div className={styles.floatingGroup}>
                                            <input id="email" type="email" placeholder=" "
                                                   value={form.email} onChange={handleChange}
                                                   className={`${styles.floatingInput} ${errors.email ? styles.inputError : ''}`}
                                            />
                                            <label htmlFor="email" className={styles.floatingLabel}>Email Address*</label>
                                            {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                                        </div>
                                    ) : (
                                        <div className={styles.floatingGroup}>
        <textarea id="message" placeholder=" " rows={4}
                  value={form.message} onChange={handleChange}
                  className={`${styles.floatingInput} ${errors.message ? styles.inputError : ''}`}
        />
                                            <label htmlFor="message" className={styles.floatingLabel}>Message*</label>
                                            {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                                        </div>
                                    )}

                                    <p className={styles.legalNotice}>
                                        By submitting this form, you acknowledge and agree to our
                                        <a href="/privacy-policy"> Privacy Policy</a> and <a href="/acceptable-use-policy"> Acceptable Use Policy</a>.
                                        If you choose to receive text messages, you agree to receive texts from Advanced Roofing Team Construction related to your inquiry. Message frequency varies. Msg & data rates may apply. Reply STOP to opt out or HELP for help.
                                    </p>
                                </form>

                                <div className={styles.actionsFooter}>
                                    <button className={styles.cancelBtn} onClick={onClose}>‹ Back</button>
                                    <button className={styles.submitBtn} onClick={handleSubmit}>Send</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(drawerContent, document.body);
};