// src/assets/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/locales/en.json';
import es from './assets/locales/es.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  
  .init({
    resources: {
      en: {
        translation: en,  
      },
      es: {
        translation: es,  
      },
    },
    detection: {
      order: ['localStorage', 'navigator'], 
      caches: ['localStorage'] 
    },
    fallbackLng: 'es',  
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
