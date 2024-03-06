import { Locale } from "../../types";
import { useLocale } from "../LocaleContext";
import styles from "./TranslationSelect.module.css";

interface TranslationSelectProps {
  onSwitchChange: (value: Locale) => void;
}
export default function TranslationSelect({
  onSwitchChange,
}: TranslationSelectProps) {
  const { locale } = useLocale();
  return (
    <div className={styles.translation}>
      <input
        type="radio"
        className={styles.toggle}
        id="rus"
        name="lang"
        value="ru"
        checked={locale === "ru"}
        onChange={() => onSwitchChange("ru")}
      />
      <label htmlFor="rus" className={styles.ruLang}></label>
      <input
        type="radio"
        className={styles.toggle}
        id="eng"
        name="lang"
        value="en"
        checked={locale === "en"}
        onChange={() => onSwitchChange("en")}
      />
      <label htmlFor="eng" className={styles.enLang}></label>
    </div>
  );
}
