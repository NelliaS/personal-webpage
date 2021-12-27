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
        <section className={styles.content__block1} >
          <div className={styles.content__box1}>
            <h1>Jak pracuju</h1>            
             <p>Poskytuju individualizovanou podporu při tvojí snaze za lepší prací. Nabízím čtyři služby - koučink, mentoring, sebepoznání a podporu. Všechny čtyři jsou svým unikátním způsobem přínosné pro změnu práce a mají společné jedno - mě :) Styl mé práce je ovlivněn tím, kdo jsem a co považuji za důležité. Jsem upřímná, svéhlavá, empatická a podporující. Nejsem prodavač instantních řešení, ani ti nebudu lhát, že jde vše snadno a bez práce, nechci tě dostávat pod větší tlak, než pod jakým nejspíše jsi.</p>
             <p>Když se do toho se mnou rozhodneš jít, můžu ti slíbit, že všechny mé znalosti, dovednosti a zkušenosti ti budou plně k dispozici. Ve své praxi stavím jednak na svém psychologickém vzdělání, terapeutických dovednostech (procesově orientovaná práce) a koučinku. Tak na zkušenostech z mojí cesty do IT a zkušenostech z vlastní programátorské praxe.</p>
             <p>Prakticky to funguje tak, že se objednáš a ve stanovený čas se připojíš na videohovor. Každé sezení, nehledě na variantu spolupráce, by ti mělo přinášet uspořádání myšlenek, nadhled a větší klid. Blíže k jednotlivým variantám se dozvíš níže, můžeš si také udělat kvíz a zjistit, která by pro tebe v současnosti byla nejvhodnější.</p>
              </div>
          <div className={styles.content__box2}>
            <h1>To be deleted</h1>
            <ul>
              <li>to be deleted</li> 
              <li>to be deleted</li> 
              <li>to be deleted</li>
            </ul>
          </div>
        </section >
        <section className={styles.content__block2}>
          <h1>Varianty spolupráce</h1>
        </section>
        <section className={styles.content__block3}>
          <div className={styles.card_container}>
          <div className={styles.card}>
            <span className={styles.card_number}>1</span><h2>Koučink</h2>
            <ul>
              <li>zorientuješ se ve své situaci</li>
              <li>budeš vědět, co použít na cestě za svými cíly</li>
              <li>vybereš si svůj první cíl, který je SMART</li>
              <li>budeš mít jasný plán, co a jak dělat abys svého cíle dosáhl/a</li>
              <li>1 sezení od ...,- Kč</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>2</span><h2>Mentoring</h2>
            <ul>
              <li>rozhodneš se, čemu se věnovat (jazyk, oblast, odvětví)</li>
              <li>budeš vědět, co tě čeká a čím začít</li>
              <li>nastavíš si rozumný time management</li>
              <li>cenné tipy v rukávu</li>
              <li>1 sezení od ...,- Kč</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>3</span><h2>Podpora</h2>
            <ul>
              <li>lépe porozumíš své situaci a svým pocitům</li>
              <li>budeš klidnější</li>
              <li>zvýší se tvoje sebedůvěra</li>
              <li>svoji situaci budeš lépe zvládat a mít plán, jak dál postupovat</li>
              <li>1 sezení od ...,- Kč</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>4</span><h2>Sebepoznání</h2>
            <ul>
              <li>absolvuješ diagnostiku osobnosti, či kognitivních schopností (inteligence)</li>
              <li>budeš se lépe znát a proto se rozhodneš pro cestu, která je pro tebe nejvhodnější</li>
              <li>budeš vědět, na čem stavět úspěch</li>
              <li>1 sezení od ...,- Kč</li>
            </ul>
          </div>
          <div className={styles.card}>
          <span className={styles.card_number}>5</span><h2>Dlouhodobá</h2>
            <ul>
              <li>spolupracuj se mnou dlouhodobě a v každý moment využívej takový typ spolupráce, který ti dá nejvíc</li>
              <li>získej dlouhodobou podporu na svojí cestě za (lepší) prací v IT</li>
              <li>1 sezení od ...,- Kč</li>
            </ul>
          </div>
          </div>
        </section>
        <section className={styles.content__block4}>
          <h1>to be deleted</h1>
          <p>Zjisti, která forma spolupráce by pro tebe byla nejlepší</p>
          <p>Udělat si kvíz</p>
          </section>      
      </main>
      </>
  );
}

export default JakToFunguje