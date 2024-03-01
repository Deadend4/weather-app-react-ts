import CityInput from "../CityInput";
import styles from "./WeatherApp.module.css";
import WeatherClient from "../WeatherClient/WeatherClient";
import { useEffect, useState } from "react";
import GetWeatherResponse from "../../types";
import List from "../List";

const weatherClient = new WeatherClient();

export default function WeatherApp() {
  const [cards, setCards] = useState<GetWeatherResponse[]>([]);

  function getWeatherOnLoad() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const currentCity = await weatherClient.getWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude,
        "ru"
      );
      if (currentCity !== null) {
        setCards(() => [currentCity]);
      }
    });
  }
  useEffect(() => {
    getWeatherOnLoad();
    return () => {
      setCards([]);
    };
  }, []);

  function addCardToState(newCard: GetWeatherResponse | null) {
    if (newCard !== null) {
      setCards((cards) => [...cards, newCard]);
    }
  }

  return (
    <div className={styles.page}>
      <span className={styles.appLogo}>Погода</span>
      <CityInput weatherClient={weatherClient} onSubmit={addCardToState} />
      <ul className={styles.list}>
        {cards.length > 0 && <List cards={cards} />}
      </ul>
    </div>
  );
}
