import styles from '../styles/Header.module.css'
import NavLinks from './NavLinks';


const Navigation = () => {


  return (
    <>
    <nav className={styles.navigation}>
    <NavLinks isMobile={undefined} closeMobileMenu={function () {
          throw new Error('Function not implemented.');
        } } />
    </nav>
    </>
  );
};

export default Navigation