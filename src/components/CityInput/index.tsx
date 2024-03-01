import { useForm } from "react-hook-form";
import GetWeatherResponse from "../../types";
import WeatherClient from "../WeatherClient/WeatherClient";
import styles from "./CityInput.module.css";

type OnSubmitFunction = (weather: GetWeatherResponse | null) => void;
type Inputs = {
  cityName: string;
};

interface CityInputProps {
  weatherClient: WeatherClient;
  onSubmit: OnSubmitFunction;
}
export default function CityInput({ weatherClient, onSubmit }: CityInputProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  const formOnSubmit = async (data: Inputs) => {
    const currentCity = await weatherClient.getWeatherInCity(
      data.cityName,
      "ru"
    );
    onSubmit(currentCity);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(formOnSubmit)}>
      <input
        type="input"
        className={styles.cityInput}
        placeholder="Введите название города"
        {...register("cityName", { required: true })}
      />
      <input type="submit" value="Применить" className={styles.submitButton} />
    </form>
  );
}
