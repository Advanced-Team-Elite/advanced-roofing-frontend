import Image from 'next/image';
import styles from './OurServices.module.css';
import Link from "next/link";

const OurServices = () => {
    const services = [
        { title: "Commercial Roofing", img: "/assets/images/features/home/1.webp", href: "/commercial-roofing" },
        { title: "Insurance Claims", img: "/assets/images/features/home/2.webp", href: "/roofing-insurance-claims" },
        { title: "Shingle Roofing", img: "/assets/images/features/home/3.webp", href: "/roof-types/shingle-roofing/" },
        { title: "Roofing Services", img: "/assets/images/features/home/4.webp", href: "/roofing/" },
        { title: "Roof Installation & Replacement", img: "/assets/images/features/home/5.webp", href: "/roofing/roof-installation-replacement/" },
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
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