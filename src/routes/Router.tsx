import { Navigate, createBrowserRouter } from 'react-router'
import { lazy } from 'react'
import Loadable from '../layouts/full/shared/loadable/Loadable'
import { neosyncRoutes } from './neosync-routes'
import { templateRoutes } from './template-routes'
import { authRoutes } from './auth-routes'
import AuthGuard from './guards/AuthGuard'
import GuestGuard from './guards/GuestGuard'

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')))
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')))

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard />,
    children: [
      {
        element: <FullLayout />,
        children: [
          ...neosyncRoutes,
          ...templateRoutes,
          { path: '*', element: <Navigate to="/auth/404" replace /> },
        ],
      },
    ],
  },
  {
    path: '/',
    element: <GuestGuard />,
    children: [
      {
        element: <BlankLayout />,
        children: [
          ...authRoutes,
          { path: '*', element: <Navigate to="/auth/404" replace /> },
        ],
      },
    ],
  },
])

export default router
