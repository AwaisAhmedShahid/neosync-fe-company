import { lazy } from 'react'
import type { RouteObject } from 'react-router'
import Loadable from '../layouts/full/shared/loadable/Loadable'

const Login = Loadable(lazy(() => import('../views/authentication/Login')))
const ForgotPassword = Loadable(lazy(() => import('../views/authentication/ForgotPassword')))
const TwoStep = Loadable(lazy(() => import('../views/authentication/TwoStep')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')))

export const authRoutes: RouteObject[] = [
  { path: 'auth/login', element: <Login /> },
  { path: 'auth/forgot-password', element: <ForgotPassword /> },
  { path: 'auth/two-step', element: <TwoStep /> },
  { path: 'auth/404', element: <Error /> },
  { path: '404', element: <Error /> },
]
