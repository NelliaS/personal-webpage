import type { NextPage } from 'next'
import styles from '../styles/JakToFunguje.module.css'
import Image from "next/image";
import HeroImage from "../../public/images/jaktofunguje.jpg";

const JakToFunguje: NextPage = () => {
  return (
    <>
      <main className={styles.content}>
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
        <section className={styles.content__block1} >
          <div className={styles.content__box1}>
            <h1>Jak pracuju</h1>            
            <p>Poskytuju komplexní podporu při tvojí snaze změnit kariéru a dostat se do IT. Chci, abychom kráčeli po této cestě přiměřeným tempem a s důvěrou, že na konci nás čeká úspěch. Nenabízím ti instantní řešení, ani rychlou a přímočarou cestu, nechci tě totiž dostat do ještě větší tlaku, než pod jakým možná jsi.</p>
             <p> Budu se ti snažit pomoct uspořádat si myšlenky, pochopit emoce a získat nadhled. Chci ti pomoct k většímu klidu a sebedůvěře. Budeme se bavit o tvém učebním procesu a time managementu. Vymyslíme, jak nejlépe se dostat do cíle, a budeme průběžně monitorovat naši snahu. Překážky, které se na cestě nevyhnutelně objeví, ti pomohu úspěšně zdolávat.</p>
             <p> Všechny mé znalosti, dovednosti a zkušenosti jsou ti plně k dispozici. Pracuji pod supervizí a pravidelně tak svůj styl práce konzultuji. Ve své práci stavím jednak na svém psychologickém vzdělání, terapeutických dovednostech (procesově orientovaná práce) a koučinku. Také na zkušenostech z mojí cesty do IT a zkušenostech z vlastní programátorské praxe.</p>
              </div>
          <div className={styles.content__box2}>
            <h1>Důležité informace</h1>
            <ul>
              <li>Prosím zajisti si klidné prostředí, zkontroluj techniku a ve smluveném čase se připoj na videohovor na Zoomu. Odkaz na Zoom ti přijde předem na e-mail.</li> 
              <li>Po sezení ti zašlu na stejný e-mail fakturu s platebními pokyny.</li> 
              <li>S předem naplánovaným sezením závazně počítám. V případě, že ti termín přestane vyhovovat, prosím ozvi se mi s touto informací alespoň 24 h dopředu. V opačném případě si účtuju storno poplatek v plné výši.</li>
            </ul>
          </div>
        </section >
        <section className={styles.content__block2}>
          <h1>Fáze spolupráce</h1>
        </section>
        <section className={styles.content__block3}>
          <div className={styles.card_container}>
          <div className={styles.card}>
            <span className={styles.card_number}>1</span><h2>Poznávám</h2>
            <ul>
              <li>svoji situaci</li>
              <li>svá očekávání</li>
              <li>své silné stránky</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>2</span><h2>Stanovuju</h2>
            <ul>
              <li>dílčí cíle</li>
              <li>nejlepší postup</li>
              <li>časový plán</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>3</span><h2>Mám podporu</h2>
            <ul>
              <li>vytrvat</li>
              <li>zdolat překážky</li>
              <li>při budování sebedůvěry</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>4</span><h2>Pohovoruju</h2>
            <ul>
              <li>po důkladné přípravě a nácviku</li>
              <li>méně ve stresu</li>
              <li>a učím se ze zkušenosti</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>5</span><h2>V nové práci</h2>
            <ul>
              <li>využívám znalosti a silné stránky</li>
              <li>navazuji vztahy s kolegy</li>
              <li>učím se ze zpětné vazby</li>
            </ul>
          </div>
          </div>
        </section>
        <section className={styles.content__block4}>
          <h1>Za kolik?</h1>
          <p>Za 1 sezení (55 min) si účtuju 850,- Kč. Můžeš si taky předplatit 4 sezení za 3 000,-Kč</p>
          </section>      
      </main>
      </>
  );
}

export default JakToFunguje