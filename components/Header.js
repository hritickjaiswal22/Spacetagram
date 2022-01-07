import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Header.module.scss";

import logo from "../public/logo.webp";
import love from "../public/love.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} width={40} height={40} />
        </Link>
      </div>
      <h1 className={styles.header__title}>Spacetagram</h1>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/likes" className={styles.navLink}>
              <Image src={love} width={40} height={40} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
