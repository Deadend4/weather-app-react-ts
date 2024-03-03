import CityInput from "../CityInput";
import styles from "./WeatherApp.module.css";
import weatherClient from "../WeatherClient/WeatherClient";
import { useEffect, useState } from "react";
import GetWeatherResponse from "../../types";
import List from "../List";
import TranslationSelect from "../TranslationSelect";

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
      const filteredCards = cards.filter((item) => item.id !== newCard.id);
      setCards((cards) => [newCard, ...filteredCards]);
    }
  }

  function deleteCardFromState(currentCard: GetWeatherResponse) {
    const filteredCards = cards.filter((item) => item.id !== currentCard.id);
    setCards((cards) => [...filteredCards]);
  }

  return (
    <div className={styles.page}>
      <TranslationSelect />
      <span className={styles.appLogo}>Погода</span>
      <CityInput onSubmit={addCardToState} />
      <ul className={styles.list}>
        {cards.length > 0 && (
          <List cards={cards} handleDeleteClick={deleteCardFromState} />
        )}
      </ul>
    </div>
  );
}
