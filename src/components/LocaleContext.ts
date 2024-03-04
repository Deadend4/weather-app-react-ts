import { createContext } from "react";
import { Locale } from "../types";

export const LocaleContext = createContext<Locale>("ru");
