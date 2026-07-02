import { useAuthStore } from 'src/stores/auth-store'

const EXPIRES_KEY = 'neosync-token-expires'

export function isAuthenticated(): boolean {
  const { token, clearAuth } = useAuthStore.getState()
  if (!token) return false

  const expiresAt = localStorage.getItem(EXPIRES_KEY)
  if (expiresAt && new Date(expiresAt) <= new Date()) {
    clearAuth()
    return false
  }

  return true
}
