import styles from "./header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>neuron Travel</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav_items}>
            <li className={styles.nav_item}>Disover</li>
            <li className={styles.nav_item}>Special Deals</li>
            <li className={styles.nav_item}>Community</li>
            <li className={styles.nav_item}>About us</li>
            <li className={styles.nav_item}>Sign In</li>
            <li className={styles.nav_item}>Register</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
