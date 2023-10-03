import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { getStorage } from 'services/storage';

let storedLocale = getStorage('locale') ?? 'en-Us';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require('./locales/en-US.json')
      },
      es: {
        translation: require('./locales/es-ES.json')
      }
    },
    lng: storedLocale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
