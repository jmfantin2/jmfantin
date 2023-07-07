import { createContext, useContext } from "react";
import { useState } from "react";

export const LangContext = createContext({});

export function LangContextProvider({ children }) {
  const [lang, setLang] = useState({ iso: "PT", n: 0 });

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
