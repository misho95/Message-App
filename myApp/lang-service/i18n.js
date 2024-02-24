import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lang/en.json'
import ge from './lang/ge.json'

export const languageResources = {
  en: { translation: en},
  ge: {translation: ge},
}

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'ge',
  fallbackLng: 'en',
  resources: languageResources
});

export default i18next;