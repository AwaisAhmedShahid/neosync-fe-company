import { apiClient } from 'src/lib/api-client'
import type { LoginPayload, LoginResponse } from './types'

export async function login(payload: LoginPayload) {
  const { data } = await apiClient.post<LoginResponse>('/auth/login', payload)
  return data
}
