export default class WeatherClient {
    apiKey = "51f340083f3ca179442e11b9b762700d";
    public async getWeatherInCity(city: string, lang: string) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=${lang}`;
        try {
            const response = await fetch(apiUrl, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = await response.json();

            console.log("result is: ", JSON.stringify(result, null, 4));
            return result;
        } catch (err) {
            alert("Ошыпка!");
        }
    }
}
