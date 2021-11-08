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
          style={{ position: "relative", width: "100vw", height: "33.33vw" }}
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
          Pomůžu ti na cestě za tvojí první prací v IT
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
      <div className={styles.content}>
        <div className={styles.content__block1}>
          <h2>Myslíš, že by se ti hodila pomoc?</h2>
        </div>
        <div className={styles.content__block2}>
          <h2>Pomoc se ti hodí pokud:</h2>
          <ul>
            <li>Si zoufáš, že nevíš odkud začít</li>
            <li>Zasekl/a ses na tutoriálech</li>
            <li>Nedaří se ti dodržovat učební plán nebo ho vůbec nemáš</li>
            <li>Tvůj time management pokůlhává</li>
            <li>Potýkáš se s nejistotou (imposter syndrom)</li>
            <li>Srovnáváš se s ostatními, kterým se to podařilo</li>
            <li>
              Máš strach z pohovorů a nevíš, zda bys už na ně měl/a začít chodit
            </li>
            <li>Chybí ti nadhled a jsi ve stresu</li>
          </ul>
        </div>
        <div className={styles.content__block3}>
        <div className={styles.content__block3_flex}>
          <h2>Průvodce kariérní změnou</h2>
          <p>
            Je člověk, který se v dané oblasti dobře vyzná. Šel cestou, na které
            tě chce doprovázet. Expertízu mu dodává psychologické vzdělání a
            praktické dovednosti. Pomůže ti se na tvé cestě za změnou kariéry
            objevit poklady a vyhnout se pastem.
          </p>
        </div>
        </div>
        <div className={styles.content__block4}>
          <img />
          <h2>Nela - průvodkyně kariérní změnou</h2>
          <p>
            Šla jsem stejnou cestou, na které tě chci provázet - jako samouk
            jsem se do IT úspěšně dostala a chvíli se v něm i zdržela. Mým
            záměrem je zužitkovat své psychologické vzdělání a dovednosti
            (probíhající terapeutický a koučovací výcvik) a pomoci ti na tvojí
            cestě do IT.{" "}
          </p>
          <p>
            Věřím, že se mnou, jako průvodkyní, se ti bude našlapovat snáz.
            Pokud se se mnou rozhodneš vydat na toto dobrodružství, můžu ti
            slíbit jedno - neposuneš se jen ve znalostech, ale vyrosteš i
            osobnostně.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
