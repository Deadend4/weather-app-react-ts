import { format } from "date-fns";
import styles from "./Card.module.css";
import Bin from "../Bin";
import { useLocale } from "../LocaleContext";
import { getDateLocale } from "../../utils";

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
  const { locale, currentTranslation } = useLocale();
  const itemDate = new Date(timestamp);

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
