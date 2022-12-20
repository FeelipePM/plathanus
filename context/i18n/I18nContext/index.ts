import { createContext } from "react";

const I18nContext = createContext({
  t: (key: string) => key,
});

export default I18nContext;
