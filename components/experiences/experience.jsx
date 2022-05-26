import styles from "./experience.module.css";
export default function Experience({ icon, name, property }) {
  return (
    <div className={styles.experience}>
      <div className={styles.icon}>
        <i className={icon}></i>
      </div>
      <div className={styles.experience_item}>
        <h4 className={styles.exp_title}>{name}</h4>
        <p className={styles.properties}>{property}</p>
      </div>
    </div>
  );
}
