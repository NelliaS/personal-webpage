import type { NextPage } from 'next'
import styles from '../styles/cennik.module.css'
import Image from "next/image";
import HeroImage from "../../public/images/cennik.jpg";

const Cennik: NextPage = () => {
    return (
        <main className={styles.content}>
            <div
            className={styles.hero__wrap}
            style={{ position: "relative", width: "100%", height: "33.33vw" }}
            >
            <Image
                src={HeroImage}
                className={styles.hero__img}
                alt="hero image"
                layout="fill"
                objectFit="cover"
            />
            </div>
            <section className={styles.content__block1}>

            </section>
            <section className={styles.content__block2}>

            </section>
            <section className={styles.content__block3}>

            </section>
        </main>
    )
  }
  
  export default Cennik