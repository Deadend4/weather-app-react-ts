import styles from "./TranslationSelect.module.css";

export default function TranslationSelect() {
  return (
    <div className={styles.translation}>
      <input type="checkbox" className={styles.toggle} id="lang" />
      <label htmlFor="lang" className={styles.toggleLabel}></label>
    </div>
  );
}
