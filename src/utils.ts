import { Locale, Translation } from "./types";
import ruTranslation from "./localization/ru.json";
import enTranslation from "./localization/en.json";
import { enUS } from "date-fns/locale/en-US";
import { ru } from "date-fns/locale/ru";

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
