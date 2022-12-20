import { ReactNode } from "react";
import { useRouter } from "next/router";

import I18nContext from "../I18nContext";
import locales from "../../../locales";

type I18nProviderProps = {
  children: ReactNode;
};

type I18nContextData = {
  locale: string;
  t: (translation: string) => string;
};

const I18nProvider = ({ children }: I18nProviderProps) => {
  const { locale } = useRouter();

  const translation = (translation) => locales["pt-BR"][translation];

  const contextData = {
    locale,
    t: translation,
  } as I18nContextData;

  return (
    <I18nContext.Provider value={contextData}>{children}</I18nContext.Provider>
  );
};

export default I18nProvider;
