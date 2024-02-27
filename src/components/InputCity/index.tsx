import styles from "./InputCity.module.css";
import { useState } from "react";
import WeatherClient from "../WeatherClient/WeatherClient";

export default function InputCity() {
    const [data, setData] = useState({ data: [] });
    const weatherClient = new WeatherClient();
    interface HandleClickProps {
        lang: string;
        city: string;
    }
    async function handleClick({ city, lang }: HandleClickProps) {
        console.log(weatherClient.getWeatherInCity(city, lang));
    }

    return (
        <form className={styles.form}>
            <input
                type="input"
                className={styles.inputCity}
                placeholder="Введите название города"
            />
            <input
                type="button"
                value="Применить"
                className={styles.submitButton}
                onClick={() => handleClick({ lang: "ru", city: "Krasnodar" })}
            />
        </form>
    );
}
