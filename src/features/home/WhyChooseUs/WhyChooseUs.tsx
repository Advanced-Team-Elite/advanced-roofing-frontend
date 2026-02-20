import Image from 'next/image';
import { HammerIcon, HouseIcon, InspectionIcon, ProfessionalIcon} from "@/shared/Icons/Icons";
import styles from './WhyChooseUs.module.css';
import {ScrollReveal} from "@/shared/animations/ScrollReveal";

const WhyChooseUs = () => {

    const benefits = [
        {
            icon: <HammerIcon size={35} />,
            title: "Quality Products & Solutions",
        },
        {
            icon: <HouseIcon size={35} />,
            title: "Customer Care Focused",
        },
        {
            icon: <InspectionIcon size={35} />,
            title: "Free Inspections & Estimates",
        },
        {
            icon: <ProfessionalIcon size={35} />,
            title: "Experienced & Professional",
        },
    ];

    return (
        <section className={styles.wrapper}>
            {/* Background with Next Image for performance */}
            <div className={styles.bgContainer}>
                <Image
                    src="/assets/images/features/home/bg-1.jpg"
                    alt="Chicago City Background"
                    fill
                    className={styles.bgImage}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.grid}>

                        <div className={styles.imageCol}>
                            <div className={styles.imageWrapper}>
                                <ScrollReveal direction="right">
                                    <Image
                                        src="/assets/images/features/home/content-v5.png"
                                        alt="Our professional team"
                                        width={800}
                                        height={700}
                                        className={styles.mainImage}
                                    />
                                </ScrollReveal>
                            </div>
                        </div>


                    {/* Right: Text and Benefits */}
                    <ScrollReveal direction="left">
                        <div className={styles.textCol}>
                            <h2 className={styles.title}>
                                Why Choose
                                Advanced <br/>
                                Roofing
                                Team Construction?
                            </h2>

                            <div className={styles.benefitsGrid}>
                                {benefits.map((item, index) => (
                                    <div key={index} className={styles.benefitItem}>
                                        <div className={styles.iconCircle}>
                                            {item.icon}
                                        </div>
                                        <span className={styles.benefitTitle}>
                                            {item.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>


                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;