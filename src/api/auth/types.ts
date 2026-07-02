export interface AuthRole {
  name: string
  permissions: string[]
}

export interface AuthUser {
  id: string
  email: string
  companyId: string
  isGlobalAdmin: boolean
  role: AuthRole
}

export interface LoginPayload {
  email: string
  password: string
}

export interface LoginData {
  user: AuthUser
  accessToken: string
  expiresAt: string
}

export interface ApiSuccessResponse<T> {
  success: true
  data: T
  message: string
}

export interface ApiErrorResponse {
  success: false
  message: string
  error?: string
}

export type LoginResponse = ApiSuccessResponse<LoginData> | ApiErrorResponse
