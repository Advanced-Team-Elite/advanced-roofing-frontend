import styles from './ServiceForm.module.css';

export const ServiceForm = () => {
    return (
        <section className={styles.formSection}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Contact Us Today</h2>
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
                        <input type="text" placeholder="Introduce una ubicación" className={styles.input} />
                    </div>

                    <div className={styles.field}>
                        <label>Are you a new customer?</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.select}>
                                <option value="" disabled hidden></option>
                                <option value="new">Yes, I am a potential new customer</option>
                                <option value="current">No, I'm a current existing customer</option>
                                <option value="neither">I'm neither</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label>How can we help you?</label>
                        <textarea rows={4} className={styles.textarea}></textarea>
                    </div>

                    <div className={styles.field}>
                        <p className={styles.captchaCode}>MT9VKK</p>
                        <label>Please enter the captcha code above:</label>
                        <input type="text" className={styles.input} />
                    </div>

                    <p className={styles.disclaimer}>
                        By submitting, you agree to receive text messages from Advanced Roofing Team Construction
                        at the number provided, including those related to your inquiry, follow-ups, and review
                        requests, via automated technology. Consent is not a condition of purchase. Msg & data
                        rates may apply. Msg frequency may vary. Reply STOP to cancel or HELP for assistance.
                        <a href="#" className={styles.link}> Acceptable Use Policy</a>
                    </p>

                    <div className={styles.buttonCenter}>
                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};