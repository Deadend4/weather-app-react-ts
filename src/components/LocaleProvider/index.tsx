import { useReducer } from "react";
import { Locale } from "../../types";
import { LocaleContext, LocaleDispatchContext } from "../LocaleContext";
import { getCurrentTranslation } from "../../utils";

export default function LocaleProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [locale, dispatch] = useReducer(localeReducer, "ru");

  function localeReducer(locale: Locale, action: Locale) {
    return action;
  }

  const currentTranslation = getCurrentTranslation(locale);
  return (
    <LocaleContext.Provider value={{ locale, currentTranslation }}>
      <LocaleDispatchContext.Provider value={{ dispatch }}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleContext.Provider>
  );
}
