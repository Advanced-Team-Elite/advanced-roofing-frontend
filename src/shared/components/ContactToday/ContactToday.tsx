"use client";
import React from 'react';
import styles from './ContactToday.module.css';
import Link from "next/link";

const ContactToday = () => {
    const areas = [
        { name: "Addison", served: false },
        { name: "Arlington Heights", served: true },
        { name: "Barrington", served: true },
        { name: "Bartlett", served: true },
        { name: "Beach Park", served: true },
        { name: "Berwyn", served: false },
        { name: "Addison", served: false },
        // ... (puedes mapear la lista completa aquí)
    ];

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
                            <p  className={styles.areasLink}>Areas We Serve</p>
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
                                At Advanced Roofing Team Construction, we're always ready to take your call! Give us a call at <strong>(847) 262-9774</strong> or fill out the form below to contact one of our team members.
                            </p>

                            <form className={styles.contactForm}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label>First Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Last Name</label>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label>Phone</label>
                                        <input type="tel" />
                                    </div>
                                    <div className={styles.field}>
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label>Address</label>
                                    <input type="text" placeholder="Enter a location" />
                                </div>

                                <div className={styles.field}>
                                    <label>Are you a new customer?</label>
                                    <select>
                                        <option>Select an option</option>
                                        <option>Yes, I am a potential new customer</option>
                                        <option>No, I'm a current existing customer</option>
                                        <option>I'm neither.</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label>How can we help you?</label>
                                    <textarea rows={4}></textarea>
                                </div>

                                <div className={styles.field}>
                                    <span className={styles.captchaCode}>29G7VX</span>
                                    <label>Please enter the captcha code above:</label>
                                    <input type="email" />
                                </div>

                                <p className={styles.disclaimer}>
                                    By submitting, you agree to receive text messages from Advanced Roofing Team
                                    Construction at the number provided, including those related to your inquiry, follow-ups,
                                    and review requests, via automated technology. Consent is not a condition of purchase.
                                    Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                                    <Link className={styles.disclaimerLink} href="#">Acceptable Use Policy</Link>
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