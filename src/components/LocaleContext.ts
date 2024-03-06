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

export const LocaleDispatchContext = createContext<{
  dispatch: React.Dispatch<Locale>;
}>({
  dispatch: (locale) => "ru",
});

export function useLocale() {
  return useContext(LocaleContext);
}
export function useLocaleDispatch() {
  return useContext(LocaleDispatchContext);
}
export function useLocaleReducer() {
  return useReducer(localeReducer, "ru");
}

function localeReducer(locale: Locale, action: Locale) {
  return action;
}
