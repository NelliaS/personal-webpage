import type { NextPage } from 'next'
import Image from "next/image";
import styles from '../styles/Nela.module.css'
import HeroImage from "../../public/images/nelacoverimg.jpeg";

const Nela: NextPage = () => {
  return (
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

      <section className={styles.content__block1}>
        <h2>Kdo jsem?</h2>
      </section>

      <section className={styles.content__block2}>

        <h2>Moje životní cesta</h2>

        <div className={styles.content__block2_container}>

          <div className={styles.content__block2_timeline}>

            <ul>
              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>1995</span></p>
                  <p>Narozena ve Svitavách</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2011 - 2015</span></p>
                  <p>Gymnázium Svitavy - maturita</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2015 - 2019</span></p>
                  <p>Masarykova univerzita - bakalářské studium Psychologie</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2016 - 2018</span></p>
                  <p>Vedení relaxací a kognitivních tréninků (projekt SPOLU)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2018 - 2019</span></p>
                  <p>Projektový management vzdělávacích workshopů (IAP)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>2019 - 2021</span></p>
                  <p>Masarykova univerzita - magisterské studium Psychologie</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>07/2020 & 07/2021</span></p>
                  <p>Vedení seberozvojového programu pro rodiče dětí s autismem (tábory SPOSA)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>10/2020 - 12/2020</span></p>
                  <p>Začátečnický kurz v Pythonu (PyLadies)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>02/2021 - 08/2021</span></p>
                  <p>Programátor nákladního simulátoru (Centrum dopravního výzkumu)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>06/2021 - dosud</span></p>
                  <p>Základní výcvik v procesově orientované práci (započatý terapeutický výcvik)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>08/2021 - 11/2021</span></p>
                  <p>Junior software developer v Pythonu (Red Hat)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>10/2021 - dosud</span></p>
                  <p>Koučovací výcvik v metodě GROW (započatý koučovací výcvik)</p>
                </div>
              </li>

              <li>
                <div className={styles.content__block2_timelineContent}>
                  <p><span>12/2021</span></p>
                  <p>Průvodkyně kariérní změnou (vlastní praxe)</p>
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
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/rodice.jpg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Mám skvělýho bráchu</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/bracha.jpg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Miluju svého přítele (většinou)</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/pritel.jpeg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Když mě nenutí spát pod širákem</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/kemp.jpg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Lezkyně už od mala</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/lezkyne.jpg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Majitelka fotogenického kocoura</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/kocour.jpg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>Ráda cestuju</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/oslo.jpeg'/></div>
          </div>

          <div className={styles.content__block4_box}>
            <p>A trávím čas v přírodě</p>
            <div className={styles.boximagecontainer}><img className={styles.boximage}src='images/priroda.jpg'/></div>
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
              <li><img className={styles.cardicon}src='images/icons/arrow.svg'/>Silná osobnost a zároveň mimořádně citlivá</li>
              <li><img className={styles.cardicon}src='images/icons/arrow.svg'/>Umím si naplno užívat života, i lenošit bez výčitek</li>
              <li><img className={styles.cardicon}src='images/icons/arrow.svg'/>Milovnice pořádku a beznadějný bordelář</li>
              <li><img className={styles.cardicon}src='images/icons/arrow.svg'/>Prý společenská, ale preferuju klid v přírodě</li>
              <li><img className={styles.cardicon}src='images/icons/arrow.svg'/>Obyvatelka dvou velmi odlišných světů - <br></br>   psychologie a programování</li>
            </ul>
          </div>
            
          <div className={styles.content__block6_card}>
            <img className={styles.cardimage}src='images/nelafoto.jpg'/>
          </div>

        </div>
        
      </section>

    </main>
  )
}

export default Nela