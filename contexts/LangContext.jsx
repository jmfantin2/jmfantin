import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";
/*
type Lang = {
  iso: string;
  n: number;
};

type LangContextData = {
  lang: {iso: string;
    n: number;};
  toggleLang: () => void;
};
*/

export const LangContext = createContext({});

export function LangContextProvider({ children }) {
  const initialLang = { iso: "PT", n: 0 };

  const [lang, setLang] = useState(initialLang);

  function toggleLang() {
    if (lang.iso === "PT") {
      setLang({ iso: "EN", n: 1 });
    } else {
      setLang({ iso: "PT", n: 0 });
    }
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  return useContext(LangContext);
};
