import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_flex}>
        <div className={styles.footer_text}>
          <p>Nela Slezáková</p>
          <p>průvodkyně kariérní změnou</p>
        </div>
        <div className={styles.footer_text}>
          <p>nelaslezakova@seznam.cz</p>
          <p>+420 605 135 201</p>
        </div>
        <div className={styles.footer_icons}>
          <img src="../../public/images/icons/discord.svg"></img>
          <img src="../../public/images/icons/github.svg"></img>
          <img src="../../public/images/icons/linkedin.svg"></img>
        </div>
        <div className={styles.footer_copy}>
          <p>Copyright © </p>
          <p>N. Slezáková, P. Kejmarová, L. Cicvárková, </p>
          <p>V. Mádr, L. Silná</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
