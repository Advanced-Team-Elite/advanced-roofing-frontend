import styles from './ContactUsPage.module.css';
import {MapPinIcon, PhoneIcon, ProfessionalIcon} from "@/shared/Icons/Icons";
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";

const ContactUsPage = () => {
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

                        <form className={styles.form}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>First Name</label>
                                    <input type="text"/>
                                </div>
                                <div className={styles.field}>
                                    <label>Last Name</label>
                                    <input type="text"/>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Phone</label>
                                    <input type="text"/>
                                </div>
                                <div className={styles.field}>
                                    <label>Email</label>
                                    <input type="email"/>
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label>Address</label>
                                <input type="text" placeholder="Enter a location"/>
                            </div>

                            <div className={styles.field}>
                                <label>Are you a new customer?</label>
                                <select>
                                    <option value="" disabled hidden></option>
                                    <option value="new">Yes, I am a potential new customer</option>
                                    <option value="current">No, I'm a current existing customer</option>
                                    <option value="neither">I'm neither</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label>How can we help you?</label>
                                <textarea rows={4}></textarea>
                            </div>

                            <div className={styles.field}>
                                <label>Please enter the captcha code above:</label>
                                <input type="text"/>
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

                            <button className={styles.submitBtn}>
                                Send Message
                            </button>

                            <br></br>

                            {/* Info Bar */}
                            <div className={styles.infoBar}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconCircle}><PhoneIcon size={19}/></div>
                                    <div>
                                        <p className={styles.infoTitle}>Call Us Today!</p>
                                        <p className={styles.infoTextCall}>847-262-9774</p>
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
