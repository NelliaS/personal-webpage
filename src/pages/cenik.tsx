// import React, { useState } from 'react';
// import type { NextPage } from 'next'
// import styles from '../styles/cenik.module.css'
// import Button from '../components/Button'
// import Link from "next/link"
// import Image from "next/image";
// import HeroImage from "../../public/images/cenik.webp";
//
//
// const Cenik: NextPage = () => {
//
//     const [cena1, setCena1] = useState(" ");
//     const [cena2, setCena2] = useState(" ");
//     const [info1, setInfo1] = useState("");
//     const [info2, setInfo2] = useState("* čím dlouhodobější typ spolupráce, tím dostupnější cena, v tíživé finanční situaci lze ceny dále uzpůsobit");
//
//
//
//     return (
//         <section className={styles.content}>
//             <section className={styles.boxwrapper}>
//                 <div className={styles.titlewrapper}>
//                     <h1>Ceník</h1>
//                 </div>
//                 <section className={styles.gridwrapper}>
//                     <h2 className={styles.griditem1}>Jednorázové platby za sezení</h2>
//                     <h2 className={styles.griditem2}>Cena při zakoupení 5 sezení (10% sleva)</h2>
//                     <p className={styles.griditem5}> </p>
//                     <p className={styles.griditem6}>1250,- Kč</p>
//                     <p className={styles.griditem7}>1125,- Kč</p>
//                 </section>
//                 <section className={styles.flexwrapper}>
//                     <div className={styles.textwrapper}>
//                         <p>* k variantě Sebepoznání navíc jednorázově 1250,- Kč za 2 diagnostické metody a jejich vyhodnocení</p>
//                     </div>
//                         <Link href="/kontaktni-formular">
//                             <a><Button value="Chci zjistit víc" type='submit'/></a>
//                         </Link>
//                 </section>
//             </section>
//
//             {/* MOBILE SECTION */}
//
//             <section className={styles.mobilecontent}>
//                 <div className={styles.mobileimgwrapper}>
//                     <h1>Ceník</h1>
//                 </div>
//                 <section className={styles.mobilebuttonwrapper}>
//                     <button onClick={() => {
//                         setCena1(",- Kč");
//                         setCena2("");
//                         setInfo1("");
//                         setInfo2("* čím dlouhodobější typ spolupráce, tím dostupnější cena, v tíživé finanční situaci lze ceny dále uzpůsobit");
//                         }}
//                             className={styles.mbitem1}>Jednorázové setkání</button>
//                     <button onClick={() => {
//                         setCena1(",- Kč");
//                         setCena2("- Kč");
//                         setInfo1("");
//                         setInfo2("* čím dlouhodobější typ spolupráce, tím dostupnější cena, v tíživé finanční situaci lze ceny dále uzpůsobit");
//                     }}
//                             className={styles.mbitem3}>Koučink / Mentoring</button>
//                     <button onClick={() => {
//                         setCena1(" Kč");
//                         setCena2("");
//                         setInfo1("*");
//                         setInfo2("** k tomu navíc jednorázově 990,- Kč za dvě diagnostické metody a jejich vyhodnocení");
//                     }}
//                             className={styles.mbitem2}>Sebepoznání</button>
//                     <button onClick={() => {
//                         setCena1("");
//                         setCena2("");
//                         setInfo1("");
//                         setInfo2("* čím dlouhodobější typ spolupráce, tím dostupnější cena, v tíživé finanční situaci lze ceny dále uzpůsobit");
//                     }}
//                             className={styles.mbitem4}>Podpora</button>
//                 </section>
//                 <section className={styles.mobiletablewrapper}>
//                     <h1>Cena za sezení*{info1}</h1>
//                     <section className={styles.mobilegridwrapper}>
//                         <p>1. - 3. sezení</p>
//                         <p>4. a další</p>
//                         <p>{cena1}</p>
//                         <p>{cena2}</p>
//                     </section>
//                     <p className={styles.mtextalign}>{info2}</p>
//                     {/* <p className={styles.mtextalign}>* k tomu navíc jednorázově <span className={styles.mtextinfo}>890,- Kč</span> za dvě diagnostické metody a jejich vyhodnocení</p> */}
//                 </section >
//                 <Link href="/kontaktni-formular">
//                     <a className={styles.malign}><Button value="Chci zjistit víc" type='submit'/></a>
//                 </Link>
//             </section>
//         </section>
//
//
//     )
//
// }
//
// export default Cenik
