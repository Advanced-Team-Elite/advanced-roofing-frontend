'use client';

import { useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    isNewCustomer: string;
    message: string;
}

interface FormErrors {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    address?: string;
    message?: string;
}

export const QuoteAnchor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        isNewCustomer: 'No',
        message: '',
    });

    const openModal = () => {
        setSubmitted(false);
        setErrors({});
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
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

        if (!formData.message.trim())
            newErrors.message = 'Please tell us how we can help.';

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
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
                isNewCustomer: 'No',
                message: '',
            });
            setErrors({});
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <style>{`
                .patriotic-bg {
                    background-color: #0b2545;
                    background-image: linear-gradient(
                        90deg, 
                        rgba(255,255,255,0.05) 50%, 
                        transparent 50%
                    );
                    background-size: 100px 100%;
                }
                @keyframes btnPulse {
                    0%, 100% { 
                        box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.6);
                    }
                    50% { 
                        box-shadow: 0 0 0 15px rgba(251, 191, 36, 0); 
                    }
                }
                .btn-pulse { 
                    animation: btnPulse 2s ease-in-out infinite; 
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .modal-overlay { animation: fadeIn 0.2s ease-out; }
                .modal-content { animation: scaleIn 0.25s ease-out; }
            `}</style>

            <section className="patriotic-bg w-full py-20 my-10 relative overflow-hidden border-t-8 border-b-8 border-red-600">
                <div className="absolute top-0 left-0 w-full h-2 bg-white" />
                <div className="absolute bottom-0 left-0 w-full h-2 bg-white" />

                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
                    <div className="bg-red-600 text-white px-8 py-2 font-bold uppercase tracking-[0.2em] shadow-lg mb-4">
                        Independence Day Savings
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Declare Independence From <span className="text-yellow-400">Leaks</span>
                    </h2>

                    <p className="text-blue-100 text-xl md:text-2xl max-w-2xl font-medium">
                        Celebrate 250 years of American excellence. Get your roof inspection today and secure an exclusive holiday discount.
                    </p>

                    <button
                        type="button"
                        onClick={openModal}
                        className="btn-pulse cursor-pointer bg-yellow-400 hover:bg-yellow-300 text-blue-950 hover:text-blue-950 font-black uppercase tracking-widest transition-all hover:scale-105 px-10 py-4 text-xl rounded-sm border-2 border-white shadow-lg inline-block text-center"
                    >
                        Claim My Holiday Discount
                    </button>

                    <p className="text-blue-300 text-sm italic">
                        Offer expires end of July • Professional Service
                    </p>

                </div>
            </section>

            {isOpen && (
                <div
                    className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
                    onClick={closeModal}
                >
                    <div
                        className="modal-content patriotic-bg relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-md border-4 border-red-600 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-0 left-0 w-full h-2 bg-white" />
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-white" />

                        <button
                            type="button"
                            onClick={closeModal}
                            aria-label="Close"
                            className="absolute top-4 right-4 cursor-pointer text-white hover:text-yellow-400 text-2xl font-bold leading-none z-10"
                        >
                            &times;
                        </button>

                        <div className="p-8 md:p-10">
                            {submitted ? (
                                <div className="flex flex-col items-center text-center space-y-6 py-8">
                                    <div className="bg-red-600 text-white px-8 py-2 font-bold uppercase tracking-[0.2em] shadow-lg">
                                        Request Received
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-white">
                                        Thank You, <span className="text-yellow-400">Patriot!</span>
                                    </h3>
                                    <p className="text-blue-100 text-lg max-w-md">
                                        Your request has been submitted successfully. One of our specialists will give you a call shortly.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="bg-yellow-400 cursor-pointer hover:bg-yellow-300 text-blue-950 font-black uppercase tracking-widest transition-all hover:scale-105 px-8 py-3 text-lg rounded-sm border-2 border-white shadow-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-6">
                                        <div className="bg-red-600 text-white inline-block px-6 py-2 font-bold uppercase tracking-[0.2em] shadow-lg mb-3">
                                            Independence Day Savings
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black text-white">
                                            Claim Your <span className="text-yellow-400">Discount</span>
                                        </h3>
                                    </div>

                                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400"
                                                />
                                                {errors.firstName && (
                                                    <p className="text-yellow-300 text-xs mt-1">{errors.firstName}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400"
                                                />
                                                {errors.lastName && (
                                                    <p className="text-yellow-300 text-xs mt-1">{errors.lastName}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                    Phone
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400"
                                                />
                                                {errors.phone && (
                                                    <p className="text-yellow-300 text-xs mt-1">{errors.phone}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400"
                                                />
                                                {errors.email && (
                                                    <p className="text-yellow-300 text-xs mt-1">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400"
                                            />
                                            {errors.address && (
                                                <p className="text-yellow-300 text-xs mt-1">{errors.address}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-blue-100 text-sm font-semibold mb-1">
                                                How can we help you?
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full rounded-sm border-2 border-white/30 bg-white/95 px-4 py-2 text-blue-950 focus:outline-none focus:border-yellow-400 resize-none"
                                            />
                                            {errors.message && (
                                                <p className="text-yellow-300 text-xs mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        <div className="pt-2 flex justify-center">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="btn-pulse cursor-pointer bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 disabled:hover:scale-100 text-blue-950 font-black uppercase tracking-widest transition-all hover:scale-105 px-10 py-3 text-lg rounded-sm border-2 border-white shadow-lg"
                                            >
                                                {isSubmitting ? 'Sending...' : 'Claim Discount'}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};