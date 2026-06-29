import { create } from 'zustand'

export type Locale = 'en' | 'ar'

interface UiState {
  sidebarCollapsed: boolean
  locale: Locale
  setSidebarCollapsed: (collapsed: boolean) => void
  setLocale: (locale: Locale) => void
}

const LOCALE_KEY = 'neosync-locale'

const getInitialLocale = (): Locale => {
  const stored = localStorage.getItem(LOCALE_KEY)
  return stored === 'ar' ? 'ar' : 'en'
}

export const useUiStore = create<UiState>((set) => ({
  sidebarCollapsed: false,
  locale: getInitialLocale(),
  setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
  setLocale: (locale) => {
    localStorage.setItem(LOCALE_KEY, locale)
    set({ locale })
  },
}))
