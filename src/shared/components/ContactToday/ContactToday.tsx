"use client";
import React, { useState, useEffect } from 'react';
import styles from './ContactToday.module.css';
import Link from "next/link";
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

const areas = [
    { name: "Addison", served: false },
    { name: "Arlington Heights", served: true, path: "/arlington-heights-il/" },
    { name: "Barrington", served: true, path: "/barrington-il/" },
    { name: "Bartlett", served: false },
    { name: "Beach Park", served: false },
    { name: "Berwyn", served: false },
    { name: "Blue Island", served: false },
    { name: "Bolingbrook", served: true, path: "/bolingbrook-il/" },
    { name: "Bridgeview", served: false },
    { name: "Buffalo Grove", served: true, path: "/buffalo-grove-il/" },
    { name: "Burbank", served: false },
    { name: "Calumet City", served: false },
    { name: "Calumet Park", served: false },
    { name: "Carol Stream", served: false },
    { name: "Chicago", served: false },
    { name: "Chicago Heights", served: false },
    { name: "Cicero", served: false },
    { name: "Deerfield", served: false },
    { name: "Des Plaines", served: true, path: "/des-plaines-il/" },
    { name: "Downers Grove", served: true, path: "/downers-grove-il/" },
    { name: "Elk Grove Village", served: false },
    { name: "Elmhurst", served: true, path: "/elmhurst-il/" },
    { name: "Elmwood Park", served: false },
    { name: "Evanston", served: true, path: "/evanston-il/" },
    { name: "Evergreen Park", served: false },
    { name: "Glen Ellyn", served: false },
    { name: "Glendale Heights", served: false },
    { name: "Glenview", served: false },
    { name: "Grayslake", served: false },
    { name: "Gurnee", served: false },
    { name: "Hanover Park", served: false },
    { name: "Harvey", served: false },
    { name: "Hickory Hills", served: false },
    { name: "Highland Park", served: false },
    { name: "Hinsdale", served: false },
    { name: "Hoffman Estates", served: true, path: "/hoffman-estates-il/" },
    { name: "La Grange", served: false },
    { name: "Lake Forest", served: true, path: "/lake-forest-il/" },
    { name: "Lake Villa", served: false },
    { name: "Lake Zurich", served: true, path: "/lake-zurich-il/" },
    { name: "Lansing", served: false },
    { name: "Lemont", served: true, path: "/lemont-il/" },
    { name: "Libertyville", served: false },
    { name: "Lisle", served: false },
    { name: "Lockport", served: true, path: "/lockport-il/" },
    { name: "Lombard", served: false },
    { name: "Long Grove", served: false },
    { name: "Maywood", served: false },
    { name: "Melrose Park", served: false },
    { name: "Mount Prospect", served: true, path: "/mount-prospect-il/" },
    { name: "Mundelein", served: false },
    { name: "Naperville", served: true, path: "/naperville-il/" },
    { name: "Niles", served: false },
    { name: "Norridge", served: false },
    { name: "North Chicago", served: false },
    { name: "Northbrook", served: true, path: "/northbrook-il/" },
    { name: "Northlake", served: false },
    { name: "Oak Brook", served: true, path: "/oak-brook-il/" },
    { name: "Oak Forest", served: false },
    { name: "Orland Park", served: true, path: "/orland-park-il/" },
    { name: "Palatine", served: true, path: "/palatine-il/" },
    { name: "Park Ridge", served: false },
    { name: "Phoenix", served: false },
    { name: "Riverdale", served: false },
    { name: "Riverwoods", served: false },
    { name: "Rolling Meadows", served: true, path: "/rolling-meadows-il/" },
    { name: "Romeoville", served: true, path: "/romeoville-il/" },
    { name: "Roselle", served: false },
    { name: "Round Lake Beach", served: false },
    { name: "Round Lake Heights", served: false },
    { name: "Schaumburg", served: true, path: "/schaumburg-il/" },
    { name: "Skokie", served: true, path: "/skokie-il/" },
    { name: "St. Charles", served: true, path: "/st-charles-il/" },
    { name: "Stickney", served: false },
    { name: "Streamwood", served: false },
    { name: "Third Lake", served: false },
    { name: "Tinley Park", served: true, path: "/tinley-park-il/" },
    { name: "Vernon Hills", served: false },
    { name: "Villa Park", served: false },
    { name: "Waukegan", served: false },
    { name: "West Chicago", served: false },
    { name: "Wheaton", served: false },
    { name: "Zion", served: false }
];

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
        <section className={styles.contactSection}>
            <div className={styles.container}>
                <div className={styles.mainGrid}>

                    {/* Columna Izquierda: Mapa y Áreas */}
                    <div className={styles.infoColumn}>
                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.444082237372!2d-87.90597921010837!3d42.0550997801243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa526c3541823%3A0x49e5f78978a3d315!2sAdvanced%20Roofing%20Team!5e0!3m2!1sen!2spe!4v1770822451587!5m2!1sen!2spe"
                                loading="lazy"
                                className={styles.map}
                                allowFullScreen></iframe>
                        </div>

                        <div className={styles.areasBox}>
                            <h3 className={styles.areasTitle}>Proudly Serving Customers in Des Plaines, IL</h3>
                            <p className={styles.areasLink}>Areas We Serve</p>
                            <p className={styles.areasDescription}>
                                Advanced Roofing Team Construction is proud to serve Des Plaines, Illinois and other surrounding areas.
                            </p>

                            <div className={styles.scrollList}>
                                {areas.map((area, index) => (
                                    <div key={index} className={styles.areaItem}>
                                        <span className={styles.dash}>—</span>
                                        <span className={area.served ? styles.served : styles.notServed}>
                                            {area.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <br></br>
                        </div>
                    </div>

                    {/* Columna Derecha: Formulario */}
                    <div className={styles.formColumn}>
                        <div className={styles.formColumnContainer}>
                            <h2 className={styles.formTitle}>Contact Scorpion <br/> Makes Today!</h2>
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
                                        {errors.email && <span className={styles.error}>{errors.error}</span>}
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
                                    Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                                    {" "}<Link className={styles.disclaimerLink} href="#">Acceptable Use Policy</Link>
                                </p>

                                <button type="submit" className={styles.submitBtn}>Send Message</button>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactToday;