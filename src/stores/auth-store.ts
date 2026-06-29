import { create } from 'zustand'

interface AuthUser {
  id: string
  name: string
  email: string
  role: string
}

interface AuthState {
  user: AuthUser | null
  token: string | null
  setAuth: (user: AuthUser, token: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setAuth: (user, token) => {
    localStorage.setItem('neosync-token', token)
    set({ user, token })
  },
  clearAuth: () => {
    localStorage.removeItem('neosync-token')
    set({ user: null, token: null })
  },
}))
