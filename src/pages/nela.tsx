import type { NextPage } from 'next'
import Image from "next/image";
import styles from '../styles/Nela.module.css'
import HeroImage from "../../public/images/nelacoverimg.webp";

const Nela: NextPage = () => {
  return (
    <>
      <div
        className={styles.hero__wrap}
        style={{ position: "relative", width: "100%", height: "28vw" }}
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
        <h1>Nela</h1>
      </div>

      <section className={styles.content__block1}>
        <h2>Nela Slezáková</h2>
      </section>

      <section className={styles.content__block2}>

        <h2>Moje životní cesta</h2>

        <div className={styles.content__block2_container}>

          <div className={styles.content__block2_timeline}>

            <ul>
              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>1995</span></p>
                  <p>Poprvé mamince v náručí</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2011 - 2015</span></p>
                  <p>Studuji gympl a čtu knížky o psychologii</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2015 - 2019</span></p>
                  <p>Bakalářské studium vysněné psychologie (MUNI)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2016 - 2018</span></p>
                  <p>Dobrovolničím - vedu relaxace a kognitivní tréninky (projekt SPOLU)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>07/2020 - 07/2021</span></p>
                  <p>Vedu seberozvojové programy pro rodiče dětí s autismem (SPOSA) - cca 20h praxe</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2020</span></p>
                  <p>Při datové analýze své diplomky objevuji krásu skriptů a začínám kurz Pythonu (PyLadies)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2021</span></p>
                  <p>Stávám se Mgr. psycholožkou (MUNI)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>02/2021 - 08/2021</span></p>
                  <p>První pokus o spojení programování a psychologie - programuji scénáře výzkumu dopravní psychologie (CDV)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>05/2021 - dosud</span></p>
                  <p>Začínám se intenzivně vzdělávat v psychoterapii:<br></br>
                    - psychoterapeutický výcvik v Procesově orientované práci (nedokončený základní kmen, r. 2021-22, celkem: 125 hodin)<br></br>
                    - kurz metod Kognitivně behaviorální terapie (r. 2022, celkem: 16h)<br></br>
                    + doposud absolvovaná individuální psychoterapie: 100h<br></br>
                    + doposud absolvovaná supervize: 10h
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>08/2021 - 11/2021</span></p>
                  <p>Věnuju se čistě programování v Pythonu (Red Hat)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>10/2021 - 4/2022</span></p>
                  <p>Absolvuji akreditovaný koučovací výcvik (Praktická psychologie s.r.o., zahrnujíce 150h vzdělávání a 35 odkoučovaných sezení)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>12/2021</span></p>
                  <p>Začínám s vlastní praxí psycholožky
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2/2022</span></p>
                  <p>Začínám programovat pro FlowerChecker</p>
                </div>
              </li>

            </ul>

          </div>

        </div>
        
      </section>

      <section className={styles.content__block3}>
        <h2>A co dál?</h2>
      </section>

      <section className={styles.content__block4}>
        <div className={styles.content__block4_flex}>

          <div className={styles.content__block4_box}>
            <p>Vzešla jsem z velké lásky</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/rodice.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Mám skvělýho bráchu</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/bracha.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Miluju svého přítele (většinou)</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/pritel.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Když mě nenutí spát pod širákem</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/kemp.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Lezkyně už od mala</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/lezkyne.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Majitelka fotogenického kocoura</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/kocour.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Ráda cestuju</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/oslo.webp'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>A trávím čas v přírodě</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/priroda.webp'/></div>
          </div>

        </div>
      </section>

      <section className={styles.content__block5}>
        <h2>A jaká jsem?</h2>
      </section>

      <section className={styles.content__block6}>

        <div className={styles.content__block6_flex}>

          <div className={styles.content__block6_card}>
            <ul>
              <li>Silná osobnost a zároveň mimořádně citlivá</li>
              <li>Umím si naplno užívat života, i lenošit bez výčitek</li>
              <li>Milovnice pořádku a beznadějný bordelář</li>
              <li>Prý společenská, ale preferuju klid v přírodě</li>
              <li>Obyvatelka dvou velmi odlišných světů - <br></br>   psychologie a programování</li>
            </ul>
          </div>
            
          <div className={styles.content__block6_card}>
            <img className={styles.cardimage}src='images/nelafoto.webp'/>
          </div>

        </div>
        
      </section>

    </>
  )
}

export default Nela
