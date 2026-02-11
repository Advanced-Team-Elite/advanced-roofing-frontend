import Link from 'next/link';
import styles from './ServicesList.module.css';

const services = [
    { name: 'Storm Damage Repair', href: '/services/storm-damage-repair' },
    { name: 'Roof Installation & Replacement', href: '/services/roof-installation-replacement' },
    { name: 'Roofing Services', href: '/services/roofing-services' },
    { name: 'Shingle Roofing', href: '/services/shingle-roofing' },
    { name: 'Insurance Claims', href: '/services/insurance-claims' },
    { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
    { name: 'Roof Types', href: '/services/roof-types' },
    { name: 'Gutters', href: '/services/gutters' },
    { name: 'Siding', href: '/services/siding', full: true },
];


export const ServicesList = () => {
    return (
        <section className={styles.servicesSection}>
            <h1 className={styles.mainTitle}>Our Services</h1>
            <div className={styles.container}>
                {services.map((service, index) => (
                    <Link
                        key={index}
                        href={service.href}
                        className={`${styles.serviceItem} ${
                            service.full ? styles.fullWidth : ''
                        }`}
                    >
                        <span className={styles.serviceText}>
                            {service.name}
                        </span>
                        <span className={styles.underline}></span>
                    </Link>
                ))}

            </div>
            <div className={styles.buttonWrapper}>
                <a
                    href="/our-services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewAllBtn}
                >
                    View All Services
                </a>
            </div>
        </section>
    );
};

export default ServicesList;
