import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/shared/locales/en/translation.json'
import tr from '@/shared/locales/tr/translation.json'

i18n.use(initReactI18next).init({
  lng: 'tr',
  fallbackLng: 'tr',
  debug: false,

  interpolation: {
    escapeValue: false
  },

  resources: {
    tr: { translation: tr },
    en: { translation: en }
  }
})

export { i18n }
