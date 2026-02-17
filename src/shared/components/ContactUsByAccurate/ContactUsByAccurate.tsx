"use client";
import React from 'react';
import styles from './ContactUsByAccurate.module.css';
import Link from "next/link";
import {FlairIcon} from "@/shared/Icons/Icons";

export const ContactUsByAccurate = () => {

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

                            <h2 className={styles.title}>ACCURATE ASSESMENT OF DAMAGES</h2>

                            <p className={styles.paragraph}>
                                The first step in the insurance claim process is to assess the damage to your home. After a hailstorm or high winds, it’s important to inspect your roof, siding, windows, and other exterior features for any signs of damage. At Advanced Roofing Team, our team of experts can conduct a thorough inspection of your property to identify and document any damage caused by hail or wind.
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