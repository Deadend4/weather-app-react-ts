import GetWeatherResponse, { Locale, Translation } from "../../types";
import Card from "../Card";
import weatherClient from "../WeatherClient/WeatherClient";
import { capitalizeFirstLetter } from "../../utils";

const DATE_MULTIPLIER = 1000;

interface ListProps {
  cards: GetWeatherResponse[];
  handleDeleteClick: (currentCard: GetWeatherResponse) => void;
}

export default function List({ cards, handleDeleteClick }: ListProps) {
  const renderList = cards.map((item) => {
    const onBinClick = () => handleDeleteClick(item);
    return (
      <Card
        key={item.id}
        city={item.name}
        description={capitalizeFirstLetter(item.weather[0].description)}
        feelsLike={item.main.feels_like}
        icon={weatherClient.getWeatherIcon(item.weather[0].icon)}
        temp={item.main.temp}
        timestamp={item.dt * DATE_MULTIPLIER}
        onBinClick={onBinClick}
      />
    );
  });
  return <>{renderList}</>;
}
