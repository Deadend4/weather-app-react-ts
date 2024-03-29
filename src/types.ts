export default interface GetWeatherResponse {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: [
    {
      description: string;
      icon: `${number}d` | `${number}n`;
      id: number;
      main: string;
    }
  ];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}

export interface Translation {
  heading: string;
  placeholder: string;
  feelsLike: string;
}

export type Locale = "ru" | "en";
