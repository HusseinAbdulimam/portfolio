import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

import langAR from './locale/ar.json';
import langEN from './locale/en.json';

const resources = {
  en: {
    translation: langEN
  },
  ar: {
    translation: langAR
  }
};

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init({
        resources,
        lng: "ar",
        interpolation: {
        escapeValue: false
        }
        // ,
        // react: {
        //   useSuspense: false
        // } 
    });

export default i18n;