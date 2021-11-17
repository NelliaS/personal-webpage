import type { NextPage } from 'next'
import styles from '../styles/JakToFunguje.module.css'
import Image from "next/image";
import HeroImage from "../../public/images/jaktofunguje.jpg";

const JakToFunguje: NextPage = () => {
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
        <div className={styles.content} >
          <div className={styles.content__box1}>
            <h1>Jak pracuju</h1>            
            <p>Poskytuju komplexní podporu při tvojí snaze změnit kariéru a dostat se do IT. Chci, abychom kráčeli po této cestě přiměřeným tempem a s důvěrou, že na konci nás čeká úspěch. Nenabízím ti instantní řešení, ani rychlou a přímočarou cestu, nechci tě totiž dostat do ještě větší tlaku, než pod jakým možná jsi.</p>
             <p> Budu se ti snažit pomoct uspořádat si myšlenky, pochopit emoce a získat nadhled. Chci ti pomoct k většímu klidu a sebedůvěře. Budeme se bavit o tvém učebním procesu a time managementu. Vymyslíme, jak nejlépe se dostat do cíle, a budeme průběžně monitorovat naši snahu. Překážky, které se na cestě nevyhnutelně objeví, ti pomohu úspěšně zdolávat.</p>
             <p> Všechny mé znalosti, dovednosti a zkušenosti jsou ti plně k dispozici. Pracuji pod supervizí a pravidelně tak svůj styl práce konzultuji. Ve své práci stavím jednak na svém psychologickém vzdělání, terapeutických dovednostech (procesově orientovaná práce) a koučinku. Také na zkušenostech z mojí cesty do IT a zkušenostech z vlastní programátorské praxe.</p>
              </div>
          <div className={styles.content__box2}>
            <h1>Důležité informace</h1>
            <ul>
              <li>Prosím zajistit si klidné prostředí, zkontroluj techniku a ve smluveném čase se připoj na videohovor na Zoomu. Odkaz na Zoom ti přijde předem na e-mail.</li> 
              <li>Po sezení ti zašlu na stejný e-mail fakturu s platebními pokyny.</li> 
              <li>S předem naplánovaným sezením závazně počítám. V případě, že ti termín přestane vyhovovat, prosím, ozvi se mi s touto informací alespoň 24h dopředu. V opačném případě si účtuju storno poplatek v plné výši.</li>
            </ul>
          </div>
        </div>
      
      </div>
      </>
  );
}

export default JakToFunguje