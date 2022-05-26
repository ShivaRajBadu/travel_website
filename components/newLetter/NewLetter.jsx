import React from "react";
import styles from "./newLetter.module.css";

export default function NewLetter() {
  return (
    <div className={styles.newletter}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          subscribe to get <span className={styles.bg}>special price</span>{" "}
        </h1>
        <p className={styles.subtitle}>
          Don't want to miss something? Subscribe right now and get special
          promotion and monthly newsletter
        </p>
        <div className={styles.buttonIn}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your Email.."
          />
          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
