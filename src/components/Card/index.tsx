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
  translation: Translation;
}

export default function Card({
  city,
  description,
  temp,
  feelsLike,
  icon,
  timestamp,
  onBinClick,
  translation,
}: CardProps) {
  const locale = useContext(LocaleContext);
  const itemDate = new Date(timestamp);
  const formattedDate = format(itemDate, "d MMMM, EEEE", {
    locale: locale === "ru" ? ru : enUS,
  });
  const formattedTime = format(itemDate, "kk:mm", {
    locale: locale === "ru" ? ru : enUS,
  });

  const handleBinClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onBinClick();
  };

  return (
    <li className={styles.card} onClick={() => alert("Card Click")}>
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
        {translation.feelsLike} {Math.round(feelsLike)}°С
      </span>
    </li>
  );
}
