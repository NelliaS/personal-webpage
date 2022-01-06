import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroImage from "../../public/images/homepage.jpg";
import CrossIcon from "../../public/images/icons/cross.svg";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.hero}>
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
        <h1 className={styles.hero__headline}>
          Pomůžu ti na cestě za (lepší) prací v IT
        </h1>
        <h2 className={styles.hero__text}>
          Nela Slezáková <br></br> průvodkyně kariérní změnou
        </h2>
        <div className={styles.popup}>
          <h2>
            nabírám klienty
          </h2>
        </div>

      </div>
      <div className={styles.content_wrap}>
        <div className={styles.content__block1}>
          <h2>Myslíš, že by se ti hodila pomoc?</h2>
        </div>
        <div className={styles.content_wrap_block2and3}>
        <div className={styles.content__block2}>
          <h2>...pomoc se ti hodí, pokud:</h2>
          <ul>
            <li className={styles.mainitem}>S programováním teprve začínáš a ... </li>
            <li className={styles.secondaryitem}>ztratil/a ses v záplavě toho, co se musíš naučit</li>
            <li className={styles.secondaryitem}>tvoje snaha nenese kýžené ovoce</li>
            <li className={styles.secondaryitem}>pochybuješ, zda se ti to vůbec podaří</li>
            <li className={styles.secondaryitem}>máš strach z pohovorů </li>
            <li className={styles.mainitem}>V IT už pracuješ, ale …</li>
            <li className={styles.secondaryitem}>v současné práci nejsi spokojený/á</li>
            <li className={styles.secondaryitem}>cítíš se vyhořele</li>
            <li className={styles.secondaryitem}>pochybuješ, zda je IT pro tebe, a nevíš jak dál </li>
          </ul>
        </div>
        <div className={styles.content__block3}>
          <img className={styles.profile}src='images/profil.jpg'/>
          <h2>Nela - průvodkyně kariérní změnou</h2>
          <p>
           Jako samouk jsem se za relativně krátký čas byla schopná uchytit jako
           Python programátorka. Mimo to jsem ale taky vystudovaná psycholožka, 
           terapeutka a koučka ve výcviku.{" "}
          </p>
          <p>
           Hledala jsem způsob, jak spojit své dva milované světy - 
           programování a psychologii. Když jsem se začala pohybovat mezi 
           začátečníky, kteří se do IT snaží dostat, objevila jsem, že jim mám 
           hodně co nabídnout. A nejen jim, ale i lidem, kteří se v IT pohybují, 
           ale nejsou úplně spokojení.
          </p>
        </div>
        </div>
        <div className={styles.content__block4}>
        <div className={styles.content__block4_text}>
        <div className={styles.content__block4_flex}>
          <h2>Co nabízím?</h2>
          <p>
           Nabízím čtyři služby - <span className={styles.boldfont}>koučink, mentoring, sebepoznání a podporu.</span> 
           {" "}
          </p>
          <p>
           Všechny čtyři jsou svým unikátním způsobem přínosné pro změnu práce. 
           Pokud na stránce <span className={styles.italicfont}>Jak to funguje</span> nepřijdeš na to, která je pro tebe 
           nejvhodnější, nelam si hlavu s tím, ozvi se a společně na to přijdeme. 
          </p>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
