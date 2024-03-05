import { createContext } from "react";
import { Locale, Translation } from "../types";
import ruTranslation from "../localization/ru.json";

interface LocaleContextProps {
  locale: Locale;
  currentTranslation: Translation;
}
export const LocaleContext = createContext<LocaleContextProps>({
  locale: "ru",
  currentTranslation: ruTranslation,
});
