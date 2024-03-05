import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import { enUS } from "date-fns/locale/en-US";
import styles from "./Card.module.css";
import Bin from "../Bin";
import { Locale, Translation } from "../../types";
import { LocaleContext } from "../LocaleContext";
import { useContext } from "react";

interface CardProps {
  city: string;
  description: string;
  temp: number;
  feelsLike: number;
  timestamp: number;
  icon: string;
  onBinClick: () => void;
}

export default function Card({
  city,
  description,
  temp,
  feelsLike,
  icon,
  timestamp,
  onBinClick,
}: CardProps) {
  const { locale, currentTranslation } = useContext(LocaleContext);
  const itemDate = new Date(timestamp);

  function getDateLocale(locale: Locale) {
    switch (locale) {
      case "ru":
        return ru;
      case "en":
        return enUS;
      default:
        break;
    }
  }

  const formattedDate = format(itemDate, "d MMMM, EEEE", {
    locale: getDateLocale(locale),
  });
  const formattedTime = format(itemDate, "kk:mm", {
    locale: getDateLocale(locale),
  });

  const handleBinClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onBinClick();
  };

  return (
    <li className={styles.card}>
      <button type="button" className={styles.bin} onClick={handleBinClick}>
        <Bin />
      </button>
      <span className={styles.city}>{city}</span>
      <span className={styles.date}>{formattedDate}</span>
      <span className={styles.date}>{formattedTime}</span>
      <span className={styles.description}>{description}</span>
      <img src={icon} alt={description} />
      <span className={styles.temperature}>{Math.round(temp)}°С</span>
      <span>
        {currentTranslation.feelsLike} {Math.round(feelsLike)}°С
      </span>
    </li>
  );
}