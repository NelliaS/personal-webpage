import React, { useState } from 'react';
import type { NextPage } from 'next'
import styles from '../styles/cenik.module.css'
import Button from '../components/Button'
import Link from "next/link"
import Image from "next/image";
import HeroImage from "../../public/images/cenik.webp";


const Cenik: NextPage = () => {

    const [cena1, setCena1] = useState("990,- Kč");
    const [cena2, setCena2] = useState("890,- Kč");
    const [info1, setInfo1] = useState("");
    const [info2, setInfo2] = useState("");


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
                    <p className={styles.griditem10} id=''>4. a další sezení</p>
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
                <div className={styles.mobileimgwrapper}>
                    <h1>Ceník</h1>
                </div>
                <section className={styles.mobilebuttonwrapper}>
                    <button onClick={() => {
                        setCena1("990,- Kč");
                        setCena2("890,- Kč");
                        setInfo1("");
                        setInfo2("");
                        }} className={styles.mbitem1}>Koučink</button>
                    <button onClick={() => {
                        setCena1("990,- Kč");
                        setCena2("890,- Kč");
                        setInfo1("*");
                        setInfo2("* k tomu navíc jednorázově 990,- Kč za dvě diagnostické metody a jejich vyhodnocení");}} className={styles.mbitem2}>Sebepoznání</button>
                    <button onClick={() => {
                        setCena1("990,- Kč");
                        setCena2("890,- Kč");
                        setInfo1("");
                        setInfo2("");}} className={styles.mbitem3}>Mentoring</button>
                    <button onClick={() => {
                        setCena1("890,- Kč");
                        setCena2("790,- Kč");
                        setInfo1("*");
                        setInfo2("* zvýhodněná cena pro typ spolupráce, která je zpravidla dlouhodobější");
                    }} 
                        className={styles.mbitem4}>Podpora</button>
                </section>
                <section className={styles.mobiletablewrapper}>
                    <h1>Cena za sezení{info1}</h1>
                    <section className={styles.mobilegridwrapper}>
                        <p>1. - 3. sezení</p>
                        <p>4. a další</p>
                        <p>{cena1}</p>
                        <p>{cena2}</p>
                    </section>
                    <p className={styles.mtextalign}>{info2}</p>
                    {/* <p className={styles.mtextalign}>* k tomu navíc jednorázově <span className={styles.mtextinfo}>990,- Kč</span> za dvě diagnostické metody a jejich vyhodnocení</p> */}
                </section >
                <Link href="/kontaktni-formular">
                    <a className={styles.malign}><Button value="Chci zjistit víc" type='submit'/></a>
                </Link>
            </section>
        </section>
        
        
    )
    
}

export default Cenik