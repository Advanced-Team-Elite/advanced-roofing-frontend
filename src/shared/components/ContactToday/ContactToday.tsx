"use client";
import React from 'react';
import styles from './ContactToday.module.css';
import Link from "next/link";

const ContactToday = () => {
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
        { name: "Chicago", served: false }, // No estaba en tu lista de paths específicos
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