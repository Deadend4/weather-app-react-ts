import { useForm } from "react-hook-form";
import GetWeatherResponse from "../../types";
import weatherClient from "../WeatherClient/WeatherClient";
import styles from "./CityInput.module.css";
import { useLocale } from "../LocaleContext";

type OnSubmitFunction = (weather: GetWeatherResponse | null) => void;
type Inputs = {
  cityName: string;
};

interface CityInputProps {
  onSubmit: OnSubmitFunction;
  placeholder: string;
}
export default function CityInput({ onSubmit, placeholder }: CityInputProps) {
  const { register, handleSubmit, resetField } = useForm<Inputs>();
  const { locale } = useLocale();
  const formOnSubmit = async (data: Inputs) => {
    const currentCity = await weatherClient.getWeatherInCity(
      data.cityName,
      locale
    );
    onSubmit(currentCity);
    resetField("cityName");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(formOnSubmit)}>
      <input
        type="input"
        className={styles.cityInput}
        placeholder={placeholder}
        required
        {...register("cityName", { required: true })}
      />
      <button type="submit" className={styles.submitButton}>
        <img src="search.svg" alt="Поиск"></img>
      </button>
    </form>
  );
}
