import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const NavLinks = (props: { isMobile: any; closeMobileMenu: () => any; }) => {
  const router = useRouter();
  const activeLink = `${styles.link} ${styles.link_active}`;
  const handleClickMobile = () => {
    props.isMobile && props.closeMobileMenu();
  };

  return (
    <>
      <div className={styles.nav_wrapper}>
        <ul className={styles.nav}>
          <li
            className={router.pathname === "/" ? activeLink : styles.link}
            onClick={handleClickMobile}
          >
            <Link href="/">
              <a>Úvod</a>
            </Link>
          </li>
          <li
            className={router.pathname === "/nela" ? activeLink : styles.link}
            onClick={handleClickMobile}
          >
            <Link href="/nela">
              <a>Nela</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/jak-to-funguje" ? activeLink : styles.link
            }
            onClick={handleClickMobile}
          >
            <Link href="/jak-to-funguje">
              <a>Jak to funguje</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/kontaktni-formular" ? activeLink : styles.link
            }
            onClick={handleClickMobile}
          >
            <Link href="/kontaktni-formular">
              <a>Kontakt</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/cenik" ? activeLink : styles.link
            }
            onClick={handleClickMobile}
          >
            <Link href="/cenik">
              <a>Ceník</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
