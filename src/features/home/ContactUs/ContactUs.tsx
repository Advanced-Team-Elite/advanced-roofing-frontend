import styles from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Contenedor Blanco del Formulario */}
                <div className={styles.formCard}>
                    <h2 className={styles.title}>Contact Us Today</h2>
                    <p className={styles.subtitle}>
                        At Advanced Roofing Team Construction, we're always ready to take your call!
                        Give us a call at (847) 262-9774 or fill out the form below to contact one of our team members.
                    </p>

                    <form className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>First Name</label>
                                <input type="text" className={styles.input} />
                            </div>
                            <div className={styles.field}>
                                <label>Last Name</label>
                                <input type="text" className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Phone</label>
                                <input type="tel" className={styles.input} />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input type="email" className={styles.input} />
                            </div>
                        </div>

                        <div className={styles.field}>
                            <label>Address</label>
                            <input type="text" placeholder="Enter a location" className={styles.input} />
                        </div>

                        <div className={styles.field}>
                            <label>Are you a new customer?</label>
                            <select defaultValue="" className={styles.input}>
                                <option value="" disabled hidden></option>
                                <option value="new">Yes, I am a potential new customer</option>
                                <option value="current">No, I'm a current existing customer</option>
                                <option value="neither">I'm neither</option>
                            </select>
                        </div>

                        <div className={styles.field}>
                            <label>How can we help you?</label>
                            <textarea rows={4} className={styles.input}></textarea>
                        </div>

                        <div className={styles.captchaField}>
                            <label className={styles.captchaCode}>KN33H9</label>
                            <p>Please enter the captcha code above:</p>
                            <input type="text" className={styles.input} />
                        </div>

                        <p className={styles.disclaimer}>
                            By submitting, you agree to receive text messages from Advanced Roofing Team Construction
                            at the number provided, including those related to your inquiry, follow-ups, and review
                            requests, via automated technology. Consent is not a condition of purchase. Msg & data
                            rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                            <a href="#"> Acceptable Use Policy</a>
                        </p>

                        <div className={styles.btnWrapper}>
                            <button type="submit" className={styles.submitBtn}>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;