import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale, localeNames } from "../i18n/translations";
import { useTranslation, useTranslationArray } from "../i18n/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  ta: (key: string) => string[];
  localeNames: Record<Locale, string>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    document.documentElement.lang = l;
  }, []);

  const t = useTranslation(locale);
  const ta = useTranslationArray(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, ta, localeNames }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
