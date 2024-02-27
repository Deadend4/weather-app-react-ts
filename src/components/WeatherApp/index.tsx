import InputCity from "../InputCity";
import styles from "./WeatherApp.module.css";

export default function WeatherApp() {
    interface Coordinates {
        latitude: number;
        longitude: number;
    }
    function printCoords({ latitude, longitude }: Coordinates) {
        // console.log(`latitude: ${latitude}, longitude: ${longitude}`);
    }
    navigator.geolocation.getCurrentPosition((position) => {
        printCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    });
    return (
        <div className={styles.page}>
            <span className={styles.appName}>Погода</span>
            <InputCity />
        </div>
    );
}
