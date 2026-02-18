import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer"; // Usamos el mismo CSS para consistencia

export default function HailEvolutionBlogPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>
                        Understanding the Evolution of Hail Damage Insurance Claims: What Homeowners Need to Know
                    </h1>
                    <div className={styles.metaInfo}>
                        <span>February 05, 2025</span>
                        <span className={styles.separator}>|</span>
                        <span>By Adrian</span>
                    </div>
                </header>

                {/* Imagen Principal */}
                <div className={styles.featuredImageWrapper}>
                    <Image
                        src="/assets/images/features/blog/r7daqr5l_1q.png"
                        alt="Hail damage insurance claim representation"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido */}
                <section className={styles.content}>
                    <p>
                        Hailstorms are one of nature’s most unpredictable events, and for homeowners, they often come with a hefty price tag.
                        While no one can control the weather, navigating the insurance claim process for hail damage is something every
                        homeowner should understand.
                    </p>
                    <p>
                        Over the years, insurance policies and the claims process for hail damage have evolved significantly—often
                        not in favor of the policyholder. Staying informed is key to protecting your home and your financial investment.
                    </p>

                    <h2 className={styles.subTitle}>How Insurance Policies and Claims for Hail Damage Have Changed</h2>
                    <p>
                        These changes are largely driven by insurance companies seeking to minimize their own financial risk in light
                        of increasing hailstorm frequency and severity:
                    </p>

                    <ul className={styles.list}>
                        <li>
                            <strong>Higher Deductibles:</strong> Muchos aseguradores han introducido deducibles específicos para viento y granizo,
                            calculados como un porcentaje del valor de la vivienda (hasta un 5%).
                        </li>
                        <li>
                            <strong>Depreciated Value:</strong> Algunas pólizas ya no pagan el costo total de reemplazo (Replacement Cost),
                            sino el valor depreciado (Actual Cash Value), lo que reduce drásticamente el pago si el techo es viejo.
                        </li>
                        <li>
                            <strong>Claim Denials:</strong> Las aseguradoras son más estrictas, argumentando a menudo que el daño es "cosmético"
                            y no "funcional" para negar la cobertura.
                        </li>
                    </ul>

                    <h2 className={styles.subTitle}>What Every Homeowner Should Know</h2>
                    <p>
                        Para asegurar un proceso fluido y mejores resultados, sigue estos consejos esenciales:
                    </p>

                    <ol className={styles.orderedList}>
                        <li><strong>Review Your Policy Annually:</strong> Las condiciones suelen cambiar en la renovación.</li>
                        <li><strong>Act Quickly After a Storm:</strong> Inspecciona tu propiedad de inmediato y reporta el daño.</li>
                        <li><strong>Get a Professional Inspection:</strong> Contrata a un techador experto antes de llamar al seguro.</li>
                        <li><strong>Document Everything:</strong> Toma fotos de los daños y guarda todos los recibos.</li>
                    </ol>

                    <div className={styles.infoBox}>
                        <p>
                            <strong>Note:</strong> Partnering with a roofing company that specializes in handling insurance
                            claims can make a world of difference. They know how to communicate with insurers effectively.
                        </p>
                    </div>

                    <div className={styles.conclusion}>
                        <p>
                            The hail damage insurance landscape is getting more challenging. By staying informed and working with
                            the right professionals, you can protect yourself and your home from unnecessary financial strain.
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>

    );
}