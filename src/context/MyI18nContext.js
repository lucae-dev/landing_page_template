import React, { createContext, useContext, useState } from 'react';

// 1. Import all translation files
import en from '../translations/en.json';

// 2. Combine them into a single object
const translations = {
  en
  // Add more languages here, e.g. fr, de, etc.
};

const defaultLanguage = 'en';

// 3. Create the context
const MyI18nContext = createContext({
  lang: defaultLanguage,
  setLang: () => {},
  t: (key) => key,
});

// 4. Create a provider that wraps your app
export function MyI18nProvider({ children }) {
  // The current language in state
  // in MyI18nProvider
  const [lang, setLang] = useState(
    localStorage.getItem('appLanguage') || 'en'
  );
  
  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem('appLanguage', newLang);
  };

  // A function that looks up keys in the JSON object for the current lang
  const t = (key) => {
    const keys = key.split('.');
    /*
      "navbar.home" => ["navbar", "home"]
       We’ll access translations[lang]["navbar"]["home"] step by step
    */
    let value = translations[lang];
    for (let k of keys) {
      value = value?.[k]; // optional chaining
      if (!value) break;
    }
    return value || key; // If it can't find the translation, return the key
  };

  const providerValue = {
    lang,
    setLang,
    t,
  };

  // Wrap children with the context provider
  return (
    <MyI18nContext.Provider value={providerValue}>
      {children}
    </MyI18nContext.Provider>
  );
}

// 5. Create a simple hook to consume the context
export function useMyI18n() {
  return useContext(MyI18nContext);
}