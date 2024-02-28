import styles from "./InputCity.module.css";
import WeatherClient from "../WeatherClient/WeatherClient";

export default function InputCity({
    weatherClient,
}: {
    weatherClient: WeatherClient;
}) {
    interface HandleClickProps {
        lang: string;
        city: string;
    }
    async function handleClick({ city, lang }: HandleClickProps) {
        const currentCity = await weatherClient.getWeatherInCity(city, lang);

        console.log(currentCity.name);
    }
    console.log("InputCity");
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
