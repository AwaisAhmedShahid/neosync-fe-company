import { create } from 'zustand'
import type { AuthUser } from 'src/api/auth/types'

const TOKEN_KEY = 'neosync-token'
const USER_KEY = 'neosync-user'
const EXPIRES_KEY = 'neosync-token-expires'

function readStoredUser(): AuthUser | null {
  const raw = localStorage.getItem(USER_KEY)
  if (!raw) return null

  try {
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

interface AuthState {
  user: AuthUser | null
  token: string | null
  setAuth: (user: AuthUser, token: string, expiresAt?: string) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: readStoredUser(),
  token: localStorage.getItem(TOKEN_KEY),
  setAuth: (user, token, expiresAt) => {
    localStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(USER_KEY, JSON.stringify(user))
    if (expiresAt) {
      localStorage.setItem(EXPIRES_KEY, expiresAt)
    }
    set({ user, token })
  },
  clearAuth: () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(EXPIRES_KEY)
    set({ user: null, token: null })
  },
}))
