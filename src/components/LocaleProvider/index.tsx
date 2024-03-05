import WeatherApp from "../WeatherApp";
import { Locale } from "../../types";
import { LocaleContext, useLocaleReducer } from "../LocaleContext";
import { getCurrentTranslation } from "../../utils";

export default function LocaleProvider() {
  const [locale, dispatch] = useLocaleReducer();

  function handleChangeLocale(loc: Locale) {
    dispatch(loc);
  }
  const currentTranslation = getCurrentTranslation(locale);
  return (
    <LocaleContext.Provider value={{ locale, currentTranslation }}>
      <WeatherApp onChangeLocale={handleChangeLocale} />
    </LocaleContext.Provider>
  );
}
