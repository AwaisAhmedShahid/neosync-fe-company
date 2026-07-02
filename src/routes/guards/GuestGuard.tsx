import { Navigate, Outlet, useLocation } from 'react-router'
import { isAuthenticated } from 'src/lib/auth'

const GuestGuard = () => {
  const location = useLocation()
  const isPublicAuthRoute = location.pathname === '/auth/404' || location.pathname === '/404'

  if (!isPublicAuthRoute && isAuthenticated()) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default GuestGuard
