import { createContext, useContext, useReducer } from "react";
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

export function useLocale() {
  return useContext(LocaleContext);
}
export function useLocaleReducer() {
  return useReducer(localeReducer, "ru");
}

function localeReducer(locale: Locale, action: Locale) {
  return action;
}
