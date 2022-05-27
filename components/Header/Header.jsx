import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";
export default function Header() {
  const [isLogined, setLogined] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <h1>neuron Travel</h1>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav_items}>
            <li className={styles.nav_item}>
              <Link href="/discover">
                <a>Discover</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/#special">
                <a>Special Deals</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/community">
                <a>Community</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>

            <li className={styles.nav_item}>
              <Link href="/sign-in">
                <a>Sign In</a>
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
