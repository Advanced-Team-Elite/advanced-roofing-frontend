import styles from './MoreThanRoofing.module.css';

const MoreThanRoofing = () => {
    const points = [
        "Over 20 years of roofing experience",
        "Strong manufacturer-backed warranties available",
        "Full roof replacements and installations for homes and businesses",
        "Trained team ready to handle storm recovery when needed",
        "Insured service for peace of mind",
        "Emergency roofing support available 24/7",
        "Free estimates to help you plan",
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Decoración del techo (la línea angular superior) */}
                <svg className={styles.flairSvg} viewBox="0 0 24 24">
                    <path
                        d="M23.996 13.743C23.982 13.798 23.933 13.833 23.879 13.833C23.869 13.833 23.86 13.832 23.85 13.829L12 10.814L0.151 13.829C0.087 13.846 0.021 13.808 0.004 13.743C-0.013 13.68 0.024 13.613 0.088 13.595L11.967 10.17C11.989 10.164 12.012 10.164 12.034 10.17L23.913 13.595C23.976 13.613 24.013 13.68 23.996 13.743Z"
                        fill="currentColor"
                    />
                </svg>

                <h2 className={styles.mainTitle}>More Than a Roofing Company</h2>

                <p className={styles.description}>
                    Advanced Roofing Team Construction has served the Chicago area since 2004.
                    What sets us apart is our full-service approach. We don't just install roofs;
                    we help property owners through every stage, from inspections to working with
                    insurance adjusters when needed.
                </p>

                <h3 className={styles.subTitle}>Here’s why people choose us:</h3>

                <div className={styles.pointsGrid}>
                    {points.map((point, index) => (
                        <div key={index} className={styles.pointItem}>
                            <span className={styles.dash}>—</span>
                            <p>{point}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.footerText}>
                    Our goal is to keep the process clear, efficient, and tailored to your property’s needs,
                    whether you're planning a roof upgrade or addressing storm-related damage.
                </p>

                <div className={styles.contactSection}>
                    <h3 className={styles.readyTitle}>Ready to Start? Contact Us Today</h3>
                    <p className={styles.contactDesc}>
                        If it’s time for a roof replacement, new installation, or storm damage assessment,
                        Advanced Roofing Team Construction is the name Chicago trusts. Let us handle the hard part.
                    </p>

                    <div className={styles.ctaBox}>
                        <p>
                            Call <strong>(847) 262-9774</strong> or <strong>contact us online</strong> now to schedule a service and get a free estimate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreThanRoofing;