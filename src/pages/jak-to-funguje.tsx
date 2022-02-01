import type { NextPage } from 'next'
import styles from '../styles/JakToFunguje.module.css'
import Image from "next/image";
import HeroImage from "../../public/images/jaktofunguje.webp";

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

        <div className={styles.mobileimgwrapper}>
        <h1>Jak pracuji</h1>
        </div>

        <section className={styles.content__block1} >
          <div className={styles.content__box}>
            <h1 className={styles.hidden}>Jak pracuji</h1>            
             <p>Poskytuju individualizovanou podporu na tvojí cestě za (lepší) prací v IT. Pokud si junior/ka, začni se mnou spolupracovat a dostaň se do IT snáze, efektivněji a ve větším klidu. Pokud v IT pracuješ a nejsi spokojený/á, pojď se mnou zjistit, jak na tom jsi, co potřebuješ a jak to získáš. Ve své praxi stavím jednak na svém psychologickém vzdělání, terapeutických dovednostech (procesově orientovaná práce) a koučinku. Tak na zkušenostech z mojí cesty do IT a zkušenostech z vlastní programátorské praxe. Nabízím Ti 4 varianty spolupráce - můžeš si vybrat mezi koučinkem, mentoringem, sebepoznáním a podporou. Blíže k jednotlivým variantám spolupráce se dozvíš níže.</p>
  
             <p>
                Prakticky to funguje tak, že se objednáš a ve stanovený čas se připojíš na videohovor, o délce 60 minut. Frekvence sezení je zpravidla 1x 14 dní. Odhadovat potřebný počet sezení je ošemetné, ale zpravidla by lidem mělo do úvodu stačit 3 - 5 sezení. Každé sezení, nehledě na variantu spolupráce, by ti mělo přinášet uspořádání myšlenek, nadhled a větší klid. Nelam si hlavu, pokud nevíš, jaký typ spolupráce je pro tebe ten pravý. Využij možnosti nezávazné konzultace (30 min), která je zdarma - pojďme se pobavit o tvém tématu a tom, co ti můžu nabídnout.
              </p>
              </div>       
        </section >
        <section className={styles.content__block2}>
          <h1>Varianty spolupráce</h1>
        </section>
        <section className={styles.content__block3}>
          <div className={styles.card_container}>
          <div className={styles.card}>
          <h2>Nezávazná konzultace</h2>
            <ul>
              <li>pojď si se mnou popovídat o tvém tématu</li>
              <li>získej podrobnější informace</li>
              <li>poslechni si, co ti můžu nabídnout</li>
              <li>zeptej se na všechno, co tě zajímá</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>Koučink</h2>
            <ul>
              <li>zorientuješ se ve své momentální situaci</li>
              <li>stanovíš si cíl, který je SMART</li>
              <li>zvolíš ten nejlepší postup a plán</li>
              <li>pracuješ na splnění svého cíle</li>
            </ul>
          </div>
          <div className={styles.card}>
          <h2>Mentoring</h2>
            <ul>
              <li>rozhodneš se, čemu se věnovat (jazyk, oblast)</li>
              <li>budeš vědět, co tě čeká a čím začít</li>
              <li>nastavíš si rozumný time management</li>
              <li>cenné tipy v rukávu</li>
            </ul>
          </div>
          <div className={styles.card}>
          <h2>Podpora</h2>
            <ul>
              <li>lépe porozumíš své situaci a pocitům</li>
              <li>zvýší se tvoje sebedůvěra</li>
              <li>svoji situaci budeš lépe zvládat</li>
              <li>budeš mít plán, jak dál postupovat</li>
            </ul>
          </div>
          <div className={styles.card}>
          <h2>Sebepoznání</h2>
            <ul>
              <li>absolvuješ diagnostiku osobnosti, inteligence anebo psychického stavu</li>
              <li>vydáš na cestu, která je pro tebe nejvhodnější</li>
              <li>budeš vědět, na čem stavět úspěch a jak dál</li>
            </ul>
          </div>
        </div>
        </section>
        {/* <section className={styles.content__block4}>         
          <h2>Zjisti, která forma spolupráce by pro tebe byla nejlepší</h2>
          <h2>Udělat si kvíz</h2>
          </section>       */}
      </main>
      </>
  );
}

export default JakToFunguje