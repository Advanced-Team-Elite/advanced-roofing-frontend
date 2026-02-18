"use client";
import React, { useState, useEffect } from 'react';
import styles from './ContactUsByAccurate.module.css';
import Link from "next/link";
import { FlairIcon } from "@/shared/Icons/Icons";
import { useRouter } from 'next/navigation';

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

export const ContactUsByAccurate = () => {
    const router = useRouter();

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
            if (validationErrors.captchaInput) {
                refreshCaptcha();
            }
            return;
        }

        const { captchaInput, ...dataToSubmit } = formData;
        console.log('Form submitted:', dataToSubmit);

        router.push('/contact-us/thank-you');
    };

    return (
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>

                    <div className={styles.formColumn}>
                        <div className={styles.formColumnContainer}>
                            <h2 className={styles.formTitle}>Contact Us</h2>
                            <p className={styles.formSubtitle}>
                                At Advanced Roofing Team Construction, we're always ready to take your call! Give us a call at (847) 262-9774 or fill out the form below to contact one of our team members.
                            </p>

                            <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
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
                                    />
                                    {errors.address && <span className={styles.error}>{errors.address}</span>}
                                </div>

                                <div className={styles.field}>
                                    <label>Are you a new customer?</label>
                                    <select
                                        name="isNewCustomer"
                                        value={formData.isNewCustomer}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled hidden>Select an option</option>
                                        <option value="new">Yes, I am a potential new customer</option>
                                        <option value="current">No, I'm a current existing customer</option>
                                        <option value="neither">I'm neither.</option>
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
                                    ></textarea>
                                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                                </div>

                                <div className={styles.field}>
                                    <div className={styles.captchaRow}>
                                        <span className={styles.captchaCode}>{captchaCode}</span>
                                        <button type="button" onClick={refreshCaptcha} className={styles.captchaRefresh}>↻</button>
                                    </div>
                                    <label>Please enter the captcha code above:</label>
                                    <input
                                        type="text"
                                        name="captchaInput"
                                        value={formData.captchaInput}
                                        onChange={handleChange}
                                    />
                                    {errors.captchaInput && <span className={styles.error}>{errors.captchaInput}</span>}
                                </div>

                                <p className={styles.disclaimer}>
                                    By submitting, you agree to receive text messages from Advanced Roofing Team
                                    Construction at the number provided, including those related to your inquiry, follow-ups,
                                    and review requests, via automated technology. Consent is not a condition of purchase.
                                    Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.{" "}
                                    <Link className={styles.disclaimerLink} href="#">Acceptable Use Policy</Link>
                                </p>

                                <div className={styles.rowBtn}>
                                    <button type="submit" className={styles.submitBtn}>Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={styles.infoColumn}>
                        <div className={styles.textContent}>
                            <div className={styles.iconWrapper}>
                                <FlairIcon size={160} />
                            </div>

                            <h2 className={styles.title}>ACCURATE ASSESMENT OF DAMAGES</h2>

                            <p className={styles.paragraph}>
                                The first step in the insurance claim process is to assess the damage to your home. After a hailstorm or high winds, it's important to inspect your roof, siding, windows, and other exterior features for any signs of damage. At Advanced Roofing Team, our team of experts can conduct a thorough inspection of your property to identify and document any damage caused by hail or wind.
                            </p>
                            <h3 className={styles.subtitle}>
                                FILING A CLAIM WAS NEVER EASIER
                            </h3>

                            <p className={styles.paragraph}>
                                Once the damage has been assessed, the next step is to file a claim with your insurance company. This involves contacting your insurance provider and providing them with the necessary information and documentation to support your claim. Our team at Advanced Roofing Team can assist you with this process, including preparing and submitting the required documentation, such as reports, photographs, and estimates for the necessary repairs.
                            </p>

                            <div className={styles.rowBtn}>
                                <button type="submit" className={styles.contactUsBtn}>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};