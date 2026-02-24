import Image from 'next/image';
import styles from './OurServices.module.css';
import Link from "next/link";

const OurServices = () => {
    const services = [
        { title: "Commercial Roofing", img: "/assets/images/features/home/1.jpg", href: "/commercial-roofing" },
        { title: "Insurance Claims", img: "/assets/images/features/home/2.jpg", href: "/roofing-insurance-claims" },
        { title: "Shingle Roofing", img: "/assets/images/features/home/3.jpg", href: "/roof-types/shingle-roofing/" },
        { title: "Roofing Services", img: "/assets/images/features/home/4.jpg", href: "/roofing" },
        { title: "Roof Installation & Replacement", img: "/assets/images/features/home/5.jpg", href: "/roofing" },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Our Services</h2>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className={styles.serviceCard}>
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}></div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </Link>

                    ))}
                </div>

                <div className={styles.buttonWrapper}>
                    <Link href="/our-services" className={styles.servicesLink}>
                        <button className={styles.viewAllBtn}>
                            View All Services
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurServices;