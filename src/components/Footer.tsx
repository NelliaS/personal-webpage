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
          <img className={styles.footer_icon} src="/images/icons/discord.svg"/>
          <img className={styles.footer_icon} src="/images/icons/github.svg"/>
          <img className={styles.footer_icon} src="/images/icons/linkedin.svg"/>
        </div>
        <div className={styles.footer_copy}>
          <p>Copyright © </p>
          <p>N. Slezáková, P. Kejmarová, L. Cicvárková, </p>
          <p>V. Mádr, L. Silná, R. Zeman</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
