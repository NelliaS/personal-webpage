import { useState } from "react";
import NavLinks from "./NavLinks";
import styles from "../styles/Header.module.css";

const MobileNavigation = () => {
  const menuOpen = `${styles.menu} ${styles.menu_open}`;

  const [open, setOpen] = useState(false);

  const handleClickMenu = () => {
    setOpen(!open);
  };
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <button
        className={open ? menuOpen : styles.menu}
        onClick={handleClickMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={styles.mobileNavigation}>{open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}</nav>
    </>
  );
};

export default MobileNavigation;
