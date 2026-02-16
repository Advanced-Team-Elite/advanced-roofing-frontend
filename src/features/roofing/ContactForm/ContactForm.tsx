"use client";
import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    return (
        <aside className={styles.formContainer}>
            <h2 className={styles.title}>Get Started</h2>
            <p className={styles.description}>
                At Advanced Roofing Team Construction, we're always ready to take your call!
                Give us a call at (815) 409-9641 or fill out the form below
                to contact one of our team members.
            </p>

            <form className={styles.form}>
                <div className={styles.field}>
                    <label>First Name</label>
                    <input type="text" />
                </div>

                <div className={styles.field}>
                    <label>Last Name</label>
                    <input type="text" />
                </div>

                <div className={styles.field}>
                    <label>Phone</label>
                    <input type="tel" />
                </div>

                <div className={styles.field}>
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div className={styles.field}>
                    <label>Address</label>
                    <input type="text" placeholder="Enter a location" className={styles.addressInput} />
                </div>

                <div className={styles.field}>
                    <label>Are you a new customer?</label>
                    <div className={styles.selectWrapper}>
                        <select>
                            <option> </option>
                            <option>Yes, I am a potential new customer</option>
                            <option>No, I'm a current existing customer</option>
                            <option>I'm neither.</option>
                        </select>
                    </div>
                </div>

                <div className={styles.field}>
                    <label>How can we help you?</label>
                    <textarea rows={3}></textarea>
                </div>

                <div className={styles.captchaContainer}>
                    <span className={styles.captchaCode}>ZFMVT4</span>
                    <label>Please enter the captcha code above:</label>
                    <input type="text" />
                </div>

                <p className={styles.disclaimer}>
                    By submitting, you agree to receive text messages from Advanced Roofing Team Construction at the number provided, including those related to your inquiry, follow-ups, and review requests, via automated technology. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                    <a href="#" className={styles.policyLink}>Acceptable Use Policy</a>
                </p>

                <button type="submit" className={styles.submitBtn}>
                    Send Message
                </button>
            </form>
        </aside>
    );
};

export default ContactForm;