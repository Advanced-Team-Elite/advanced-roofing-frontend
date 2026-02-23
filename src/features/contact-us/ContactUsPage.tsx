'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactUsPage.module.css';
import { MapPinIcon, PhoneIcon } from "@/shared/Icons/Icons";
import { Footer } from "@/shared/components/layout/footer/Footer";

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

const ContactUsPage = () => {
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

            router.push('/contact-us/thank-you');

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <section className={styles.contactSection}>
                <div className={styles.container}>

                    {/* LEFT SIDE - MAP + INFO */}
                    <div className={styles.mapColumn}>

                        {/* Google Map */}
                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.444082237372!2d-87.90597921010837!3d42.0550997801243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa526c3541823%3A0x49e5f78978a3d315!2sAdvanced%20Roofing%20Team!5e0!3m2!1sen!2spe!4v1770822451587!5m2!1sen!2spe"
                                loading="lazy"
                                className={styles.map}
                                allowFullScreen></iframe>
                        </div>

                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <div className={styles.formColumn}>
                        <h1 className={styles.title}>Contact Us Now</h1>

                        <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
                                        type="text"
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
                                By submitting, you agree to receive text messages from Advanced Roofing
                                Team Construction at the number provided, including those related to your inquiry,
                                follow-ups, and review requests, via automated technology. Consent is not a condition of
                                purchase.
                                Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for
                                assistance.
                                <a href="#"> Acceptable Use Policy</a>
                            </p>

                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>

                            <br></br>

                            {/* Info Bar */}
                            <div className={styles.infoBar}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconCircle}><PhoneIcon size={19}/></div>
                                    <div>
                                        <p className={styles.infoTitle}>Call Us Today!</p>
                                        <a href="tel:8472629774" className={styles.infoTextCall}>
                                            847-262-9774
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconCircle}><MapPinIcon size={19}/></div>
                                    <div>
                                        <p className={styles.infoTitle}>Location</p>
                                        <p className={styles.infoText}>
                                            975 Rand Rd Des Plaines, IL 60016
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
            <Footer/>
        </>
    );
};

export default ContactUsPage;