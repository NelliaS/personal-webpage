import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import styles from '../styles/Header.module.css';


const Header = () => {
  
  return (
    <>
    <div className={styles.stick}>
      <div className={styles.footer_line}>
          <Navigation />
          <MobileNavigation />
      </div>
    </div>
      </>
    )
  }
  
  export default Header