import Link from 'next/link';
import Image from 'next/image';
import styles from './ThankYou.module.css';
import {Footer} from "@/shared/components/layout/footer/Footer";

export const metadata = {
    title: 'Thank You | Chicago Roofers',
    description: 'Thank you for contacting Advanced Roofing Team Construction. We will be in touch shortly.',
};

export default function ThankYouContainer() {
    return (
        <div>
            <main className={styles.mainWrapper}>
                <section className={styles.contentSection}>
                    <div className={styles.textContent}>
                        <div className={styles.textContentWrapper}>
                            <h1 className={styles.title}>Thank You <br /> For Contacting Us</h1>
                            <p className={styles.message}>
                                A member of our team will be in touch shortly to confirm your
                                contact details or address questions you may have.
                            </p>
                            <Link href="/" className={styles.backButton}>
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <Image
                            src="/assets/images/shared/23.webp"
                            alt="Beautiful house with blue siding"
                            fill
                            className={styles.houseImage}
                            priority
                        />
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}