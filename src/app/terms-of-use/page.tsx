'use client';
import styles from './Privacypolicy.module.css'; // Reutilizando los estilos base
import { Footer } from "@/shared/components/layout/footer/Footer";

export default function WebsiteTermsOfUsePage() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Website Terms of Use</h1>

                    <p><strong>Advanced Roofing Team Construction</strong></p>
                    <p>Last updated: June 12, 2026</p>

                    <p className={styles.intro}>
                        These Website Terms of Use (“Terms”) apply to your use of our website at www.advancedroofingteam.com (the “Site”), run by Advanced Roofing Team Construction (“Advanced,” “we,” “us,” or “our”). By using the Site, you agree to these Terms. If you don’t agree, please don’t use the Site.
                    </p>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. How these Terms fit with our other policies</h2>
                        <p>These Terms work together with two other documents: our Acceptable Use Policy (the rules for how you may use the Site) and our Privacy Policy (how we handle your information). Both are part of these Terms by reference. Where a topic is covered in one of those policies, that policy applies; these Terms cover what’s left.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. These Terms cover the website only, not our roofing work</h2>
                        <p>These Terms govern your use of the Site only. They are not a contract for roofing or any other services, and using the Site doesn’t create one.</p>
                        <p>If you hire us, the work is governed by a separate written proposal, estimate, and/or contract that we provide and that you agree to. Those documents, not these Terms and not anything shown on the Site, control the services, pricing, warranties, payment, timelines, and related obligations. Any estimate or quote shown or requested through the Site is not a binding offer (as also noted in our Acceptable Use Policy) and becomes a contract only once we confirm it with you in writing.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. The Site is provided “as is”</h2>
                        <p>We work to keep the Site useful and current, but we provide the Site and everything on it "as is" and "as available," without warranties of any kind. We don't promise that the Site will be accurate, complete, up to date, uninterrupted, or free of errors, and to the fullest extent allowed by law we disclaim all implied warranties, including merchantability and fitness for a particular purpose. Keeping your own device and connection safe, for example, free of malware, is your responsibility. This also applies to any third-party websites we link to, which we don't control and aren't responsible for. You use the Site at your own discretion and risk.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Limits on our liability</h2>
                        <p>To the fullest extent allowed by law, Advanced will not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the Site, and our total liability for any claim relating to the Site is limited to $100. Nothing in these Terms limits any liability that cannot be limited under applicable law, such as liability for our own fraud or willful misconduct. Keep in mind that these limits apply to the Site only; anything relating to roofing work we perform is governed by your separate signed contract.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Your responsibility to us</h2>
                        <p>If your misuse of the Site, or your breach of these Terms or our Acceptable Use Policy, leads to a claim against us, you agree to cover the reasonable costs we incur as a result (including reasonable legal fees), to the extent the law allows.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. General</h2>
                        <p>The governing law and the courts that handle any dispute are the same as in our Acceptable Use Policy (the laws of the State of Illinois, with disputes handled in the state or federal courts in Cook County, Illinois).</p>
                        <p>If any part of these Terms is found unenforceable, the rest stays in effect. If we don’t enforce a part of these Terms right away, that isn’t a waiver of it. These Terms are the entire agreement between you and Advanced about your use of the Site, and they do not change or override any separate contract you sign with us for services.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Changes to these Terms</h2>
                        <p>We may update these Terms from time to time. The current version is always posted on the Site with the “Last updated” date above, and if you keep using the Site after a change is posted, that means you accept the updated Terms.</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Contact us</h2>
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