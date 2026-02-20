import styles from './Privacypolicy.module.css';

export default function PrivacyPolicyPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>Privacy Policy</h1>

                <p className={styles.intro}>
                    We recognize that you may be concerned about our use and disclosure of your personal information. Your privacy is very important to us, and the following will inform you of the information that we, Advanced Roofing Team Construction, may collect from you, and how it is used. By using our website, www.advancedroofingteam.com, you are accepting the practices described in this policy.
                </p>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Information Collection</h2>
                    <p>We may collect non-personal information, such as a domain name and IP Address. The domain name and IP address reveals nothing personal about you other than the IP address from which you have accessed our site. We may also collect information about the type of Internet browser you are using, operating system, what brought you to our Website, as well as which of our Web pages you have accessed.</p>
                    <p>Additionally, if you communicate with us regarding our Website or our services, we will collect any information that you provide to us in any such communication.</p>
                    <p>We may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Information Use</h2>
                    <p>We use the collected information primarily for our own internal purposes, such as providing, maintaining, evaluating, and improving our services and Website, fulfilling requests for information, and providing customer support.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Security</h2>
                    <p>We follow generally accepted industry standards to protect the information submitted to us, both during transmission and once we receive it.</p>
                    <p>If we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page.</p>
                    <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Cookies</h2>
                    <p>We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's hard drive to help us improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site. Usage of a cookie is in no way linked to any personally identifiable information on our site.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Sharing</h2>
                    <p>We will not sell or otherwise provide the information we collect to outside third parties for the purpose of direct or indirect mass email marketing.</p>
                    <p>We will disclose personal information and/or an IP address, when required by law or in the good-faith belief that such action is necessary to:</p>
                    <ul className={styles.list}>
                        <li>Cooperate with the investigations of purported unlawful activities and conform to the edicts of the law or comply with legal process served on our company</li>
                        <li>Protect and defend the rights or property of our Website and related properties</li>
                        <li>Identify persons who may be violating the law, the rights of third parties, or otherwise misusing our Website or its related properties</li>
                    </ul>
                    <p>Please keep in mind that whenever you voluntarily disclose personal information online - for example through e-mail, discussion boards, or elsewhere - that information can be collected and used by others. In short, if you post personal information online that is accessible to the public, you may receive unsolicited messages from other parties in return.</p>
                    <p>Ultimately, you are solely responsible for maintaining the secrecy of your personal information. Please be careful and responsible whenever you are online.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Links</h2>
                    <p>This Website may contain links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Surveys & Contests</h2>
                    <p>From time-to-time our site may request information via surveys or contests. Participation in these surveys or contests is completely voluntary and you may choose whether or not to participate and therefore disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Consent</h2>
                    <p>By using this Website, you consent to the collection and use of information as specified above. If we make changes to our Privacy Policy, we will post those changes on this page. Please review this page frequently to remain up-to-date with the information we collect, how we use it, and under what circumstances we disclose it. You must review the new Privacy Policy carefully to make sure you understand our practices and procedures.</p>
                    <p>
                        <strong>
                            If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at <a href="tel:8472629774" className={styles.phoneLink}>(847) 262-9774</a> or via mail Attn: Privacy Officer, 975 Rand Rd, Des Plaines, IL 60016.
                        </strong>
                        </p>
                </section>
            </div>
        </div>
    );
}