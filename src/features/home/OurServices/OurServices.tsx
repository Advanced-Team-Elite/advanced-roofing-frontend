import Image from 'next/image';
import styles from './OurServices.module.css';
import Link from "next/link";

const OurServices = () => {
    const services = [
        { title: "Commercial Roofing", img: "/assets/images/features/home/1.jpg" },
        { title: "Insurance Claims", img: "/assets/images/features/home/2.jpg" },
        { title: "Shingle Roofing", img: "/assets/images/features/home/3.jpg" },
        { title: "Roofing Services", img: "/assets/images/features/home/4.jpg" },
        { title: "Roof Installation & Replacement", img: "/assets/images/features/home/5.jpg" },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.mainTitle}>Our Services</h2>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <Image
                                src={service.img}
                                alt={service.title}
                                fill
                                className={styles.image}
                            />
                            <div className={styles.overlay}></div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                        </div>
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