import type { NextPage } from 'next'
import styles from '../styles/cenik.module.css'
import Button from '../components/Button'
import Link from "next/link"
import Image from "next/image";
import HeroImage from "../../public/images/cenik.webp";

const Cenik: NextPage = () => {
    return (
        <section className={styles.content}>
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
                        <Link href="/kontaktni-formular">
                            <a><Button value="Chci zjistit víc" type='submit'/></a>
                        </Link>
                </section>
            </section>

            {/* MOBILE SECTION */}

            <section className={styles.mobilecontent}>
                <div className={styles.mobileimgwrapper}></div>
                <section className={styles.mobilebuttonwrapper}>
                    <a className={styles.mbitem1}>Koučing</a>
                    <a className={styles.mbitem2}>Sebepoznání</a>
                    <a className={styles.mbitem3}>Mentoring</a>
                    <a className={styles.mbitem4}>Podpora</a>
                </section>
                <section className={styles.mobiletablewrapper}>
                    <h1>Cena za sezení*</h1>
                    <section className={styles.mobilegridwrapper}>
                        <p>1. - 3. sezení</p>
                        <p>4. a další</p>
                        <p>990,- Kč</p>
                        <p>890,- Kč</p>
                    </section>
                    <p className={styles.mtextalign}>* k tomu navíc jednorázově <span className={styles.mtextinfo}>990,- Kč</span> za dvě diagnostické metody a jejich vyhodnocení</p>
                </section >
                <Link href="/kontaktni-formular">
                    <a className={styles.malign}><Button value="Chci zjistit víc" type='submit'/></a>
                </Link>
            </section>
        </section>
        
        
    )
}

export default Cenik