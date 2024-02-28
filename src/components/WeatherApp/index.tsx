import InputCity from "../InputCity";
import styles from "./WeatherApp.module.css";
import WeatherClient from "../WeatherClient/WeatherClient";
import { useState } from "react";
import Card from "./Card";
import List from "../List";

const weatherClient = new WeatherClient();

export default function WeatherApp() {
    const [cards, setCards] = useState<Card[]>([]);

    function getWeatherOnLoad() {
        if (cards.length === 0) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const currentCity = await weatherClient.getWeatherByCoords(
                    position.coords.latitude,
                    position.coords.longitude,
                    "ru"
                );
                setCards((cards) => [...cards, { ...currentCity }]);
            });
        }
    }
    getWeatherOnLoad();
    console.log(cards);

    return (
        <div className={styles.page}>
            <span className={styles.appLogo}>Погода</span>
            <InputCity weatherClient={weatherClient} />
            <ul className={styles.list}>
                {cards.length > 0 ? <List cards={cards} /> : false}
            </ul>
        </div>
    );
}
