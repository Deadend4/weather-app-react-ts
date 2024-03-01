import { useForm } from "react-hook-form";
import GetWeatherResponse from "../../types";
import weatherClient from "../WeatherClient/WeatherClient";
import styles from "./CityInput.module.css";

type OnSubmitFunction = (weather: GetWeatherResponse | null) => void;
type Inputs = {
  cityName: string;
};

interface CityInputProps {
  onSubmit: OnSubmitFunction;
}
export default function CityInput({ onSubmit }: CityInputProps) {
  const { register, handleSubmit, resetField } = useForm<Inputs>();

  const formOnSubmit = async (data: Inputs) => {
    const currentCity = await weatherClient.getWeatherInCity(
      data.cityName,
      "ru"
    );
    onSubmit(currentCity);
    resetField("cityName");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(formOnSubmit)}>
      <input
        type="input"
        className={styles.cityInput}
        placeholder="Введите название города"
        required
        {...register("cityName", { required: true })}
      />
      <button type="submit" className={styles.submitButton}>
        <img src="search.svg" alt="Поиск"></img>
      </button>
    </form>
  );
}
