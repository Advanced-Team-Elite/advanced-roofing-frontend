import Link from 'next/link';
import Image from 'next/image';
import styles from './NotFound.module.css';
import {Footer} from "@/shared/components/layout/footer/Footer";
import FinancingSection from "@/shared/components/FinancingSection/FinancingSection";

const NotFoundContainer = () => {
    return (
        <div>
            <main className={styles.wrapper}>
                <div className={styles.contentSide}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.errorCode}>Error: 404</h1>
                        <h2 className={styles.subTitle}>We're Sorry</h2>
                        <p className={styles.description}>
                            It's not you, it's us! We apologize for taking you to an error page.
                            Please try one of the links below to get you back to your search.
                        </p>
                        <Link href="/" className={styles.backBtn}>
                            Back to Home
                        </Link>
                    </div>
                </div>

                <div className={styles.imageSide}>
                    <Image
                        src="/assets/images/shared/17.jpg"
                        alt="Advanced Roofing Houses"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default NotFoundContainer;