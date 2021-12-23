import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_line}>
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
            <p>Contributors </p>
            <p>Copyright © </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
