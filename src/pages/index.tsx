import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeroImage from "../../public/images/homepage.webp";
import CrossIcon from "../../public/images/icons/cross.svg";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.hero}>
        <div
          className={styles.hero__wrap}
          style={{ position: "relative", width: "100%", height: "22vw" }}
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
          Pomáhám lidem v IT anebo do IT
        </h1>


        {/*
        <h2 className={styles.hero__text}>
          Nela Slezáková <br></br> průvodkyně kariérní změnou
        </h2>
        <div className={styles.popup}>
          <h2>
            nabírám klienty
          </h2>
        </div>*/}
      </div>
      
      <div className={styles.mobileimgwrapper}>
        <h1>Pomáhám lidem v IT anebo do IT</h1>
      </div>

      <div className={styles.content_wrap}>
        <div className={styles.content__block1}>
          <h2>Myslíš, že by se ti hodila pomoc?</h2>
        </div>
        <div className={styles.content_wrap_block2and3}>
          <div className={styles.content__block2}>
            <h2 className={styles.hide}>Pomoc se ti hodí pokud:</h2>
            <ul>
              <li className={styles.mainitem}>
                S programováním teprve začínáš a ...{" "}
              </li>
              <li className={styles.secondaryitem}>
                Nevíš odkud začít a kterou cestou se vydat
              </li>
              <li className={styles.secondaryitem}>
                Chceš si svoji cestu do IT co nejlépe naplánovat
              </li>
              <li className={styles.secondaryitem}>
                Chceš vědět, na čem můžeš stavět svůj úspěch
              </li>
              <li className={styles.secondaryitem}>
                Trápí tě pochybnosti (imposter syndrom)
              </li>
              <li className={styles.secondaryitem}>
                Chceš objevit, kde máš mezery a zlepšit styl učení
              </li>
              <li className={styles.mainitem}>V IT už pracuješ, ale ...{" "}</li>

              <li className={styles.secondaryitem}>Nejsi spokojený/á a chtěl/a bys být</li>
              <li className={styles.secondaryitem}>Cítíš se vyhořele a chceš s tím něco začít dělat</li>
              <li className={styles.secondaryitem}>Chceš objevit své silné stránky a způsob jak je využít</li>
              <li className={styles.secondaryitem}>Potřebuješ pomoc s hledáním nové práce nebo aklimatizací</li>
            </ul>
          </div>
          <div className={styles.content__block3}>
            <img className={styles.profile} src="images/profil.webp" />
            <h2>Nela - psycholožka & programátorka</h2>
            <p>
            Jako samouk jsem se za relativně krátký čas byla schopná uchytit 
            jako Python programátorka. Mimo to jsem ale taky vystudovaná psycholožka a certifikovaná koučka.{" "}
            </p>
            <p>
            Hledala jsem způsob, jak spojit své dva milované světy - programování a psychologii. 
            A když jsem se začala pohybovat mezi začátečníky, kteří se do IT snaží dostat, 
            objevila jsem, že jim mám hodně co nabídnout. A nejen jim, ale i lidem, kteří se v IT pohybují, 
            ale nejsou úplně spokojení.
            </p>
            <p>
            Jsem aktivní v <a href="https://junior.guru/club/">junior guru</a> komunitě, kde jsem měla <a href="https://youtu.be/6G4TKGQICw0">přednášku</a> o duševním zdraví v kontextu kariérní změny.
            </p>
          </div>
        </div>
        <div className={styles.content__block4}>
          <div className={styles.content__block4_text}>
            <div className={styles.content__block4_flex}>
              <h2>Co nabízím?</h2>
              <p>
                Nabízím čtyři služby -{" "}
                <span className={styles.boldfont}>
                  koučink, mentoring, sebepoznání a podporu.
                </span>{" "}
              </p>
              <p>
                Pokud na stránce
                <span className={styles.italicfont}> Jak to funguje </span>
                nepřijdeš na to, která je pro tebe nejvhodnější, nelam si s tím hlavu, ozvi se a v rámci nezávazného 30 minutového videohovoru na to společně přijdeme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
