'use client';

import { useState, useEffect } from 'react';
import styles from './ContactUs.module.css';

const CAPTCHA_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function generateCaptcha(length = 6): string {
    return Array.from({ length }, () =>
        CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]
    ).join('');
}

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    isNewCustomer: string;
    message: string;
    captchaInput: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    address?: string;
    isNewCustomer?: string;
    message?: string;
    captchaInput?: string;
}

const ContactUs = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        isNewCustomer: '',
        message: '',
        captchaInput: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [captchaCode, setCaptchaCode] = useState('');

    useEffect(() => {
        setCaptchaCode(generateCaptcha());
    }, []);

    const refreshCaptcha = () => {
        setCaptchaCode(generateCaptcha());
        setFormData((prev) => ({ ...prev, captchaInput: '' }));
        setErrors((prev) => ({ ...prev, captchaInput: undefined }));
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error on change
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};

        if (!formData.firstName.trim())
            newErrors.firstName = 'First name is required.';

        if (!formData.lastName.trim())
            newErrors.lastName = 'Last name is required.';

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required.';
        } else if (!/^\+?[\d\s\-().]{7,20}$/.test(formData.phone)) {
            newErrors.phone = 'Enter a valid phone number.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        if (!formData.address.trim())
            newErrors.address = 'Address is required.';

        if (!formData.isNewCustomer)
            newErrors.isNewCustomer = 'Please select an option.';

        if (!formData.message.trim())
            newErrors.message = 'Please tell us how we can help you.';

        if (!formData.captchaInput.trim()) {
            newErrors.captchaInput = 'Please enter the captcha code.';
        } else if (formData.captchaInput.toUpperCase() !== captchaCode) {
            newErrors.captchaInput = 'Captcha code does not match. Try again.';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            // If captcha failed, regenerate it
            if (validationErrors.captchaInput) {
                refreshCaptcha();
            }
            return;
        }

        const { captchaInput, ...dataToSubmit } = formData;
        console.log('Form submitted:', dataToSubmit);

        // Reset form after successful submit
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            isNewCustomer: '',
            message: '',
            captchaInput: '',
        });
        setErrors({});
        refreshCaptcha();
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Contenedor Blanco del Formulario */}
                <div className={styles.formCard}>
                    <h2 className={styles.title}>Contact Us Today</h2>
                    <p className={styles.subtitle}>
                        At Advanced Roofing Team Construction, we're always ready to take your call!
                        Give us a call at (847) 262-9774 or fill out the form below to contact one of our team members.
                    </p>

                    <form className={styles.form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                            </div>
                            <div className={styles.field}>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {errors.email && <span className={styles.error}>{errors.email}</span>}
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter a location"
                                value={formData.address}
                                onChange={handleChange}
                                className={styles.input}
                            />
                            {errors.address && <span className={styles.error}>{errors.address}</span>}
                        </div>

                        <div className={styles.field}>
                            <label>Are you a new customer?</label>
                            <select
                                name="isNewCustomer"
                                value={formData.isNewCustomer}
                                onChange={handleChange}
                                className={styles.input}
                            >
                                <option value="" disabled hidden></option>
                                <option value="new">Yes, I am a potential new customer</option>
                                <option value="current">No, I'm a current existing customer</option>
                                <option value="neither">I'm neither</option>
                            </select>
                            {errors.isNewCustomer && <span className={styles.error}>{errors.isNewCustomer}</span>}
                        </div>

                        <div className={styles.field}>
                            <label>How can we help you?</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.input}
                            ></textarea>
                            {errors.message && <span className={styles.error}>{errors.message}</span>}
                        </div>

                        <div className={styles.captchaField}>
                            <label className={styles.captchaCode}>{captchaCode}</label>
                            <button
                                type="button"
                                onClick={refreshCaptcha}
                                className={styles.captchaRefresh}
                                aria-label="Refresh captcha"
                            >
                                ↻
                            </button>
                            <p>Please enter the captcha code above:</p>
                            <input
                                type="text"
                                name="captchaInput"
                                value={formData.captchaInput}
                                onChange={handleChange}
                                className={styles.input}
                            />
                            {errors.captchaInput && <span className={styles.error}>{errors.captchaInput}</span>}
                        </div>

                        <p className={styles.disclaimer}>
                            By submitting, you agree to receive text messages from Advanced Roofing Team Construction
                            at the number provided, including those related to your inquiry, follow-ups, and review
                            requests, via automated technology. Consent is not a condition of purchase. Msg & data
                            rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                            <a href="#"> Acceptable Use Policy</a>
                        </p>

                        <div className={styles.btnWrapper}>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;