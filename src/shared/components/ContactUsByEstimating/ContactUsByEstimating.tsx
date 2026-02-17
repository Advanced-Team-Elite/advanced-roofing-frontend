"use client";
import React from 'react';
import styles from './ContactUsByEstimating.module.css';
import Link from "next/link";
import {FlairIcon} from "@/shared/Icons/Icons";

const ContactUsByEstimating = () => {

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

                            <h2 className={styles.title}>Get a Free Roofing Estimate Today</h2>

                            <p className={styles.paragraph}>
                                If your home or business needs a new roof, a replacement, or help after storm damage,
                                Advanced Roofing Team Construction is ready to assist. Our team delivers quality
                                workmanship, straightforward communication, and roofing solutions designed for
                                Chicago weather.
                            </p>

                            <div className={styles.ctaBanner}>
                                <p className={styles.ctaText}>
                                    Call <a href="tel:8472629774" className={styles.phoneLink}>(847) 262-9774</a> today or{' '}
                                    <Link href="/contact" className={styles.blueLink}>
                                        contact us online
                                    </Link>{' '}
                                    to schedule a service and get a free estimate.
                                </p>
                            </div>


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

export default ContactUsByEstimating;