import type { NextPage } from 'next'
import styles from '../styles/cenik.module.css'
import Image from "next/image";
import HeroImage from "../../public/images/cenik.jpg";

const Cenik: NextPage = () => {
    return (
        <main className={styles.content}>
            <section className={styles.boxwrapper}>
                <div className={styles.titlewrapper}>
                    <h1>Ceník</h1>
                </div>
                <section className={styles.gridwrapper}>
                    <h1 className={styles.griditem1}>Koučink</h1>
                    <h1 className={styles.griditem2}>Mentoring</h1>
                    <h1 className={styles.griditem3}>Sebepoznání*</h1>
                    <h1 className={styles.griditem4}>Podpora**</h1>
                    <p className={styles.griditem5}>1. - 3. sezení</p>
                    <p className={styles.griditem6}>990,- Kč</p>
                    <p className={styles.griditem7}>990,- Kč</p>
                    <p className={styles.griditem8}>990,- Kč</p>
                    <p className={styles.griditem9}>890,- Kč</p>
                    <p className={styles.griditem10}>4. a další sezení</p>
                    <p className={styles.griditem11}>890,- Kč</p>
                    <p className={styles.griditem12}>890,- Kč</p>
                    <p className={styles.griditem13}>890,- Kč</p>
                    <p className={styles.griditem14}>790,- Kč</p>
                </section>
                <section className={styles.flexwrapper}>
                    <div className={styles.textwrapper}>
                        <p>* k tomu navíc jednorázově 990,- Kč za 2 diagnostické metody a jejich vyhodnocení</p>
                        <p>** zvýhodněná cena pro typ spolupráce, která je zpravidla dlouhodobější</p>
                    </div>
                    <a href=""><h1>Chci zjistit vic</h1></a>
                </section>
          </section>
    
        </main>
    )
  }
  
  export default Cenik