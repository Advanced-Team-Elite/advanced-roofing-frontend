"use client";
import React, { useState, useEffect } from 'react';
import styles from './ContactUsByClaim.module.css';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FlairIcon } from "@/shared/Icons/Icons";

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

const generateCaptcha = (): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const ContactToday = () => {
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
    const [isSubmitting, setIsSubmitting] = useState(false);

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

        if (!formData.isNewCustomer || formData.isNewCustomer === 'Select an option')
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            if (validationErrors.captchaInput) {
                refreshCaptcha();
            }
            return;
        }

        setIsSubmitting(true);

        const { captchaInput, ...dataToSubmit } = formData;

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

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

            router.push('/contact-us/thank-you');

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={errors.firstName ? styles.inputError : ''}
                                        />
                                        {errors.firstName && <span className={styles.errorMsg}>{errors.firstName}</span>}
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={errors.lastName ? styles.inputError : ''}
                                        />
                                        {errors.lastName && <span className={styles.errorMsg}>{errors.lastName}</span>}
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? styles.inputError : ''}
                                        />
                                        {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? styles.inputError : ''}
                                        />
                                        {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="address">Address</label>
                                    <input
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Enter a location"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className={errors.address ? styles.inputError : ''}
                                    />
                                    {errors.address && <span className={styles.errorMsg}>{errors.address}</span>}
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="isNewCustomer">Are you a new customer?</label>
                                    <select
                                        id="isNewCustomer"
                                        name="isNewCustomer"
                                        value={formData.isNewCustomer}
                                        onChange={handleChange}
                                        className={errors.isNewCustomer ? styles.inputError : ''}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="Yes, I am a potential new customer">Yes, I am a potential new customer</option>
                                        <option value="No, I'm a current existing customer">No, I'm a current existing customer</option>
                                        <option value="I'm neither.">I'm neither.</option>
                                    </select>
                                    {errors.isNewCustomer && <span className={styles.errorMsg}>{errors.isNewCustomer}</span>}
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message">How can we help you?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? styles.inputError : ''}
                                    />
                                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                                </div>

                                <div className={styles.field}>
                                    <div className={styles.captchaRow}>
                                        <span className={styles.captchaCode}>{captchaCode}</span>
                                        <button
                                            type="button"
                                            className={styles.captchaRefresh}
                                            onClick={refreshCaptcha}
                                            aria-label="Refresh captcha"
                                        >
                                            ↻
                                        </button>
                                    </div>
                                    <label htmlFor="captchaInput">Please enter the captcha code above:</label>
                                    <input
                                        id="captchaInput"
                                        name="captchaInput"
                                        type="text"
                                        value={formData.captchaInput}
                                        onChange={handleChange}
                                        className={errors.captchaInput ? styles.inputError : ''}
                                    />
                                    {errors.captchaInput && <span className={styles.errorMsg}>{errors.captchaInput}</span>}
                                </div>

                                <p className={styles.disclaimer}>
                                    By submitting, you agree to receive text messages from Advanced Roofing Team
                                    Construction at the number provided, including those related to your inquiry, follow-ups,
                                    and review requests, via automated technology. Consent is not a condition of purchase.
                                    Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.{" "}
                                    <Link className={styles.disclaimerLink} href="#">Acceptable Use Policy</Link>
                                </p>

                                <div className={styles.rowBtn}>
                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className={styles.infoColumn}>
                        <div className={styles.textContent}>
                            <div className={styles.iconWrapper}>
                                <FlairIcon size={160} />
                            </div>

                            <h2 className={styles.title}>ACCURATE <br />ASSESMENT<br /> OF DAMAGES</h2>

                            <p className={styles.paragraph}>
                                The first step in the insurance claim process is to assess the damage to your home.
                                After a hailstorm or high winds, it's important to inspect your roof, siding, windows,
                                and other exterior features for any signs of damage. At Advanced Roofing Team, our team
                                of experts can conduct a thorough inspection of your property to identify and document
                                any damage caused by hail or wind.
                            </p>

                            <h3 className={styles.subtitle}>FILING A CLAIM WAS NEVER EASIER</h3>

                            <p className={styles.paragraph}>
                                Once the damage has been assessed, the next step is to file a claim with your insurance company.
                                This involves contacting your insurance provider and providing them with the necessary information
                                and documentation to support your claim. Our team at Advanced Roofing Team can assist you with this
                                process, including preparing and submitting the required documentation, such as reports, photographs,
                                and estimates for the necessary repairs.
                            </p>

                            <div className={styles.rowBtn}>
                                <button type="button" className={styles.contactUsBtn}>Contact Us</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactToday;