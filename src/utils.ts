import { Locale, Translation } from "./types";
import ruTranslation from "./localization/ru.json";
import enTranslation from "./localization/en.json";
import { enUS } from "date-fns/locale/en-US";
import { ru } from "date-fns/locale/ru";
import availableLocales from "./localization/availableLocales";

export function capitalizeFirstLetter(text: string): string {
  const newText = text[0].toUpperCase() + text.substring(1);
  return newText;
}
export function getCurrentTranslation(value: Locale): Translation {
  switch (value) {
    case "ru":
      return ruTranslation;
    case "en":
      return enTranslation;
    default:
      return ruTranslation;
  }
}
export function getDateLocale(locale: Locale) {
  switch (locale) {
    case "ru":
      return ru;
    case "en":
      return enUS;
    default:
      break;
  }
}

export function getDefaultLocale() {
  let defaultLocale: Locale = "en";

  if (localStorage.getItem("locale")) {
    defaultLocale = localStorage.getItem("locale") as Locale;
  } else {
    defaultLocale = getValidLocale(
      navigator.language.substring(0, 2) as Locale
    );
  }
  return defaultLocale;
}

export function getValidLocale(locale: Locale) {
  return availableLocales.includes(locale) ? locale : "en";
}
