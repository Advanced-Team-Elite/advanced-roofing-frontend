'use client';
import styles from './Privacypolicy.module.css';
import { Footer } from "@/shared/components/layout/footer/Footer";

export default function AcceptableUsePolicyPage() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Acceptable Use Policy</h1>

                    <p><strong>Advanced Roofing Team Construction</strong></p>
                    <p>Last updated: June 12, 2026</p>

                    <p className={styles.intro}>
                        This Acceptable Use Policy explains how you may and may not use the website, online tools, and related services (together, the “Services”) offered by Advanced Roofing Team Construction (“Advanced,” “we,” “us,” or “our”) at www.advancedroofingteam.com.
                    </p>
                    <p>
                        By using our Services, for example, browsing our site, requesting a quote, uploading photos of your roof, or leaving a review, you agree to follow this Policy. If you don’t agree, please don’t use the Services. The examples below show what we expect; they aren’t a complete list of everything that is or isn’t allowed.
                    </p>
                    <p>
                        This Policy is about how you use our Services. For how we collect, use, and protect your personal information, please see our Privacy Policy.
                    </p>
                    <p>
                        We may update this Policy from time to time by posting a new version on our website. The version posted there is the one that applies to you.
                    </p>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. The basics</h2>
                        <p>Please use our Services only for lawful, honest reasons, and in the way they’re meant to be used. Don’t use them to do anything illegal, to harm someone else, or to get in the way of how the Services work for other people.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Things you may not do</h2>
                        <p>When using our Services, please don’t:</p>
                        <ul className={styles.list}>
                            <li><strong>Break the law or harm others.</strong> Use the Services for anything unlawful, dishonest, or harmful, or in a way that violates someone else’s rights.</li>
                            <li><strong>Post or send harmful or offensive content.</strong> Submit anything that is harassing, threatening, defamatory, obscene, hateful, invasive of someone’s privacy, or otherwise abusive, whether in a review, a contact form, a chat, or a photo you upload.</li>
                            <li><strong>Use content that isn’t yours.</strong> Upload, post, or share photos, text, logos, or other content that you don’t own or have permission to use.</li>
                            <li><strong>Give false information or pretend to be someone else.</strong> For example, submitting a quote request or review under a fake name or someone else’s identity.</li>
                            <li><strong>Try to break or overload the site.</strong> Don’t try to hack, damage, overload, or interfere with our website or servers, or get into areas, accounts, or data you’re not allowed to access. In Illinois, this kind of computer tampering is against the law.</li>
                            <li><strong>Harvest information with bots.</strong> Don’t use automated tools to scrape or collect information, such as email addresses or phone numbers, from the site without our permission.</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Our content</h2>
                        <p>The content on our website, including our text, photos, logos, and designs, belongs to Advanced or to others who let us use it. You’re welcome to view and share it for normal, personal use, but please don’t copy, republish, or use it for your own business without our written permission.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Content you submit</h2>
                        <p>When you post or upload content through our Services, for example, photos of your property, a review, or a message, please make sure it’s accurate and that you have the right to share it.</p>
                        <p>By submitting content, you give Advanced permission to use it for the reason you provided it (for example, to prepare your estimate, schedule your job, answer your question, or display reviews and testimonials). You’re responsible for what you submit, and you agree not to submit anything that breaks the rules in Section 2.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. How we keep an eye on things</h2>
                        <p>We don’t have to monitor the Services, but we may. If we believe you’ve broken this Policy, we may, at our discretion and without notice, remove or disable content, limit or suspend your access, or take other steps we think are appropriate. Where we believe activity may be unlawful, we may report it to the authorities and cooperate with their investigation.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Reporting a problem</h2>
                        <p>If you see content or activity that you think breaks this Policy, or if you believe something on our site uses your copyrighted work without permission, please let us know at (847) 262-9774 or by mail at 975 Rand Rd, Des Plaines, IL 60016, and we’ll look into it.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. About the information on our site</h2>
                        <p>We work to keep our website accurate and up to date, but the information on it, including service descriptions and any pricing, is meant as general guidance. It isn’t a binding offer, and any estimate or quote becomes a contract only once we confirm it with you in writing.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Changes to this Policy</h2>
                        <p>We may revise this Policy from time to time. When we do, we’ll post the updated version on our website and change the “Last updated” date above. If you keep using the Services after a change is posted, that means you accept the updated Policy.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Governing law</h2>
                        <p>This Policy is governed by the laws of the State of Illinois. Any dispute relating to this Policy or your use of the Services will be handled in the state or federal courts located in Cook County, Illinois, and you agree to that jurisdiction.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>10. Contact us</h2>
                        <p>
                            Advanced Roofing Team Construction<br />
                            975 Rand Rd, Des Plaines, IL 60016<br />
                            Phone: (847) 262-9774
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}