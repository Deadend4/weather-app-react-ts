import GetWeatherResponse from "../../types";

export default class WeatherClient {
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
}
