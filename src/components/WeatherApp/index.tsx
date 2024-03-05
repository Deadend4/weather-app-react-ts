import CityInput from "../CityInput";
import styles from "./WeatherApp.module.css";
import weatherClient from "../WeatherClient/WeatherClient";
import { useEffect, useState, useContext } from "react";
import GetWeatherResponse, { Translation, Locale } from "../../types";
import List from "../List";
import TranslationSelect from "../TranslationSelect";
import ruTranslation from "../../localization/ru.json";
import enTranslation from "../../localization/en.json";
import { LocaleContext } from "../LocaleContext";

export default function WeatherApp() {
  const [cards, setCards] = useState<GetWeatherResponse[]>([]);
  const [locale, setLocale] = useState<Locale>(
    localStorage.getItem("locale") as Locale
  );

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
  }, []);

  function addCardToState(newCard: GetWeatherResponse | null) {
    if (newCard !== null) {
      const filteredCards = cards.filter((item) => item.id !== newCard.id);
      setCards((cards) => [newCard, ...filteredCards]);
    }
  }

  function deleteCardFromState(currentCard: GetWeatherResponse) {
    const filteredCards = cards.filter((item) => item.id !== currentCard.id);
    setCards(() => [...filteredCards]);
  }

  function switchLanguage(value: Locale): void {
    setLocale(value);
    localStorage.setItem("locale", value);
    getWeatherOnLoad(value);
  }

  function getCurrentTranslation(value: Locale): Translation {
    switch (value) {
      case "ru":
        return ruTranslation;
      case "en":
        return enTranslation;
      default:
        return ruTranslation;
    }
  }
  const currentTranslation = getCurrentTranslation(locale);
  return (
    <LocaleContext.Provider value={{ locale, currentTranslation }}>
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
    </LocaleContext.Provider>
  );
}
