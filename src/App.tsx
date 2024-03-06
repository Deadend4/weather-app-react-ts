import "./App.css";
import LocaleProvider from "./components/LocaleProvider";
import WeatherApp from "./components/WeatherApp";

function App() {
  return <LocaleProvider children={<WeatherApp />} />;
}

export default App;
