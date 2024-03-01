import { format } from "date-fns";
import { ru } from "date-fns/locale/ru";
import styles from "./Card.module.css";
import Bin from "../Bin";

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
  const itemDate = new Date(timestamp);
  const formattedDate = format(itemDate, "d MMMM, EEEE", { locale: ru });
  const formattedTime = format(itemDate, "kk:mm", { locale: ru });

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
      <span>Ощущается: {Math.round(feelsLike)}°С</span>
    </li>
  );
}
