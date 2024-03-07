import CityInput from "../CityInput";
import styles from "./WeatherApp.module.css";
import weatherClient from "../WeatherClient/WeatherClient";
import { useEffect, useState } from "react";
import GetWeatherResponse, { Locale } from "../../types";
import List from "../List";
import TranslationSelect from "../TranslationSelect";
import { useLocale, useLocaleDispatch } from "../LocaleContext";

export default function WeatherApp() {
  const [cards, setCards] = useState<GetWeatherResponse[]>([]);
  const { locale, currentTranslation } = useLocale();
  const { dispatch } = useLocaleDispatch();
  function getWeatherOnLoad(locale: Locale) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const currentCity = await weatherClient.getWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude,
        locale
      );
      if (currentCity !== null) {
        setCards(() => [currentCity]);
      }
    });
  }
  useEffect(() => {
    getWeatherOnLoad(locale);
    return () => {
      setCards([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addCardToState(newCard: GetWeatherResponse | null) {
    if (newCard !== null) {
      const filteredCards = cards.filter((item) => item.id !== newCard.id);
      setCards(() => [newCard, ...filteredCards]);
    }
  }

  function deleteCardFromState(currentCard: GetWeatherResponse) {
    const filteredCards = cards.filter((item) => item.id !== currentCard.id);
    setCards(() => [...filteredCards]);
  }

  function switchLanguage(value: Locale): void {
    dispatch(value);
    localStorage.setItem("locale", value);
    getWeatherOnLoad(value);
  }

  return (
    <div className={styles.page}>
      <TranslationSelect onSwitchChange={switchLanguage} />
      <span className={styles.appLogo}>{currentTranslation.heading}</span>
      <CityInput
        onSubmit={addCardToState}
        placeholder={currentTranslation.placeholder}
      />
      <ul className={styles.list}>
        {cards.length > 0 && (
          <List cards={cards} handleDeleteClick={deleteCardFromState} />
        )}
      </ul>
    </div>
  );
}
