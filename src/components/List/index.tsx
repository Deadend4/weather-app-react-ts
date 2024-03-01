import GetWeatherResponse from "../../types";

interface ListProps {
  cards: GetWeatherResponse[];
}

export default function List({ cards }: ListProps) {
  const renderList = cards.map((item) => {
    return (
      <li key={item.dt}>
        {item.name} / {item.main.temp}C / {item.wind.speed}m/s
      </li>
    );
  });
  return <>{renderList}</>;
}
