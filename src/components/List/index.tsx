import Card from "../WeatherApp/Card";

interface ListProps {
    cards: Card[];
}

export default function List({ cards }: ListProps) {
    return (
        <>
            <p>{cards[0].name}</p>
        </>
    );
}
