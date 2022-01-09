import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_line}>
      <footer>
        <div className={styles.footer_content}>
          <div className={styles.footer_text}>
            <p>Nela Slezáková</p>
            <p>průvodkyně kariérní změnou</p>
          </div>
          <div className={styles.footer_text}>
            <p>nela@nelaprovazi.cz</p>
            <p>+420 605 135 201</p>
          </div>
          <div className={styles.footer_icons}>
            <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/users/791020144661889054/"><img className={styles.footer_icon} src="/images/icons/discord.svg"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/NelliaS/"><img className={styles.footer_icon} src="/images/icons/github.svg"/></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nela-slezakova/"><img className={styles.footer_icon} src="/images/icons/linkedin.svg"/></a>
          </div>
          {/* <div className={styles.footer_copy}>
            <a target="_blank" rel="noopener noreferrer" href=""><p>Contributors</p></a>
          </div> */}
          <div className={styles.footer_copy}>
            <span><p>Copyright ©</p></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
