"use client";
import { createContext, useContext, useState } from "react";
import { createAxiosInstance } from "@/lib/axios"; // Adjust the path as necessary

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("default");
  const [axiosInstance, setAxiosInstance] = useState(
    createAxiosInstance(locale)
  );

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    setAxiosInstance(createAxiosInstance(newLocale));
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, axiosInstance }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
