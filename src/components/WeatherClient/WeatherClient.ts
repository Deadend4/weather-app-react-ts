import GetWeatherResponse from "../../types";
import icon01d from "../../lottie/01d.svg";
import icon01n from "../../lottie/01n.svg";
import icon02d from "../../lottie/02d.svg";
import icon02n from "../../lottie/02n.svg";
import icon03d from "../../lottie/03d.svg";
import icon03n from "../../lottie/03n.svg";
import icon04d from "../../lottie/04d.svg";
import icon04n from "../../lottie/04n.svg";
import icon09d from "../../lottie/09d.svg";
import icon09n from "../../lottie/09n.svg";
import icon10d from "../../lottie/10d.svg";
import icon10n from "../../lottie/10n.svg";
import icon11d from "../../lottie/11d.svg";
import icon11n from "../../lottie/11n.svg";
import icon13d from "../../lottie/13d.svg";
import icon13n from "../../lottie/13n.svg";
import icon50d from "../../lottie/50d.svg";
import icon50n from "../../lottie/50n.svg";

export class WeatherClient {
  apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  public async getWeatherInCity(
    city: string,
    lang: string
  ): Promise<GetWeatherResponse | null> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=${lang}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = (await response.json()) as GetWeatherResponse;

      return result;
    } catch (err) {
      alert(`Ошибка: ${err}`);
      return null;
    }
  }

  public async getWeatherByCoords(
    lat: number,
    long: number,
    lang: string
  ): Promise<GetWeatherResponse | null> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apiKey}&units=metric&lang=${lang}`;
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = (await response.json()) as GetWeatherResponse;
      return result;
    } catch (err) {
      alert(`Ошибка: ${err}`);
      return null;
    }
  }

  getWeatherIcon(iconId: `${number}d` | `${number}n`): string | undefined {
    switch (iconId) {
      case "01d":
        return icon01d;
      case "01n":
        return icon01n;
      case "02d":
        return icon02d;
      case "02n":
        return icon02n;
      case "03d":
        return icon03d;
      case "03n":
        return icon03n;
      case "04d":
        return icon04d;
      case "04n":
        return icon04n;
      case "09d":
        return icon09d;
      case "09n":
        return icon09n;
      case "10d":
        return icon10d;
      case "10n":
        return icon10n;
      case "11d":
        return icon11d;
      case "11n":
        return icon11n;
      case "13d":
        return icon13d;
      case "13n":
        return icon13n;
      case "50d":
        return icon50d;
      case "50n":
        return icon50n;
      default:
        break;
    }
  }
}

const weatherClient = new WeatherClient();

export default weatherClient;
