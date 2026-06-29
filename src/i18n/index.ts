import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from './locales/en/common.json'
import enAuth from './locales/en/auth.json'
import arCommon from './locales/ar/common.json'
import arAuth from './locales/ar/auth.json'

const LOCALE_KEY = 'neosync-locale'

const getInitialLocale = (): string => {
  const stored = localStorage.getItem(LOCALE_KEY)
  return stored === 'ar' ? 'ar' : 'en'
}

const applyDocumentDirection = (locale: string) => {
  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.dir = dir
  document.documentElement.lang = locale
}

const initialLocale = getInitialLocale()
applyDocumentDirection(initialLocale)

void i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon, auth: enAuth },
    ar: { common: arCommon, auth: arAuth },
  },
  lng: initialLocale,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'auth'],
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(LOCALE_KEY, lng)
  applyDocumentDirection(lng)
})

export default i18n
