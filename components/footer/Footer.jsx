import React from "react";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_body}>
          <h1 className={styles.footer_logo}>Neuron Travel</h1>
          <ul className={styles.footer_nav}>
            <li className={styles.nav_item}>Discover</li>
            <li className={styles.nav_item}>Special Deals</li>
            <li className={styles.nav_item}>Community</li>
            <li className={styles.nav_item}>about us</li>
          </ul>
          <ul className={styles.social_links}>
            <li className={styles.links}>
              <i className="fa-brands fa-facebook-f"></i>
            </li>
            <li className={styles.links}>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li className={styles.links}>
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
        <div className={styles.legal_terms}>
          <p className={styles.copy_right}>
            &#169; Neuron Travel.All right reserved
          </p>
          <div className={styles.terms_policy}>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
