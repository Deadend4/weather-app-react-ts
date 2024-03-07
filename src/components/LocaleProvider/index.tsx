import { PropsWithChildren } from "react";
import {
  LocaleContext,
  LocaleDispatchContext,
  useLocaleReducer,
} from "../LocaleContext";
import { getCurrentTranslation } from "../../utils";

export default function LocaleProvider({ children }: PropsWithChildren) {
  const [locale, dispatch] = useLocaleReducer();

  const currentTranslation = getCurrentTranslation(locale);
  return (
    <LocaleContext.Provider value={{ locale, currentTranslation }}>
      <LocaleDispatchContext.Provider value={{ dispatch }}>
        {children}
      </LocaleDispatchContext.Provider>
    </LocaleContext.Provider>
  );
}
