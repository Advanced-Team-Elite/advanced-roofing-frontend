import Image from 'next/image';
import styles from './BlogPost.module.css';
import RelatedPostsSection from "@/shared/components/RelatedPostsSection/RelatedPostsSection";
import {Footer} from "@/shared/components/layout/footer/Footer"; // Asegúrate de crear este archivo CSS

export default function SidingBlogPage() {
    return (
        <div>
            <article className={styles.container}>
                {/* Cabecera del Blog */}
                <header className={styles.header}>
                    <h1 className={styles.mainTitle}>Top Siding Options for Your Home in 2024</h1>
                    <div className={styles.metaInfo}>
                        <span>October 01, 2024</span>
                        <span className={styles.separator}>|</span>
                        <span>By Adrian</span>
                    </div>
                </header>

                {/* Imagen Destacada Principal */}
                <div className={styles.featuredImageWrapper}>
                    <Image
                        src="/assets/images/features/blog/r7daqr5l_1q.png"
                        alt="Blue house with new siding"
                        width={1000}
                        height={500}
                        priority
                        className={styles.featuredImage}
                    />
                </div>

                {/* Contenido del Blog */}
                <section className={styles.content}>
                    <p>
                        As we step into 2024, the world of home siding is evolving with exciting innovations and trends.
                        That is why we want to help you chose the right siding for your home.
                    </p>

                    <h2 className={styles.subTitle}>Vinyl Siding</h2>
                    <p>
                        Vinyl siding continues to be a popular choice for homeowners because it is affordable and low maintenance.
                        Over the years, advancements have enhanced its durability and aesthetic appeal. Today’s vinyl options
                        come with UV protection, ensuring they retain color longer, and offer a wide range of textures and
                        styles that mimic wood and stone.
                    </p>
                    <p>
                        On the other hand, materials such as metal, slate, or tile roofs tend to be more expensive upfront but
                        provide significant long-term benefits. These options are known for their durability and resilience,
                        often lasting between 50 to 100 years with minimal maintenance.
                    </p>

                    <h2 className={styles.subTitle}>Fiber Cement</h2>
                    <p>
                        Fiber cement siding is renowned for its durability and resistance to the elements, making it an
                        excellent choice for homeowners in areas prone to harsh weather. Made from a mix of cement, sand,
                        and cellulose fibers, it mimics the look of wood but without the susceptibility to rot and pests.
                    </p>

                    {/* Imagen Intercalada (Como en el mockup) */}
                    <div className={styles.bodyImage}>
                        <Image
                            src="/assets/images/features/blog/siding-detail.jpg"
                            alt="Fiber cement siding detail"
                            width={800}
                            height={450}
                        />
                    </div>

                    <h2 className={styles.subTitle}>Wood Siding</h2>
                    <p>
                        Wood siding is a great option if you love natural aesthetics, wood siding offers a classic and
                        timeless appeal. Available in several styles like shingles, clapboard, and board-and-batten,
                        wood can bring warmth and charm to any home. However, it does require regular maintenance
                        to prevent rot and insect damage.
                    </p>

                    <h2 className={styles.subTitle}>Metal Siding</h2>
                    <p>
                        Metal siding, often made from aluminum or steel, is gaining traction for its sleek, modern look.
                        It is incredibly durable, resistant to fire, and can withstand extreme weather conditions.
                        While the initial cost can be high, its low maintenance requirements and long lifespan
                        make it a worthwhile consideration.
                    </p>

                    <h2 className={styles.subTitle}>Eco-Friendly Options</h2>
                    <p>
                        As sustainability becomes a priority for many homeowners, eco-friendly siding options are trending in 2024.
                        Materials like bamboo, reclaimed wood, and recycled metal are being used more frequently,
                        offering environmentally conscious choices that don’t compromise on style or durability.
                    </p>

                    <h2 className={styles.subTitle}>Choosing The Right Siding</h2>
                    <p>
                        When selecting siding, consider your local climate, home style, and budget. Modern homes
                        pair well with metal or fiber cement, while traditional designs might benefit from
                        the classic look of wood or vinyl.
                    </p>

                    <div className={styles.conclusion}>
                        <p>
                            In conclusion, 2024 is bursting with siding options, each one bringing its own flair
                            and fun to the table! Let the siding adventure begin!
                        </p>
                    </div>
                </section>
            </article>
            <RelatedPostsSection />
            <Footer/>
        </div>

    );
}