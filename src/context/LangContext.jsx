import { useState, createContext, useContext } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
  if (!localStorage.getItem("lang")) localStorage.setItem("lang", "es");

  const [lang, setLang] = useState(localStorage.getItem("lang"));

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (!context) throw new Error("useLang must be used within a LangProvider");

  return context;
};
