import { Navigate, Outlet, useLocation } from 'react-router'
import { isAuthenticated } from 'src/lib/auth'

const AuthGuard = () => {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to="/auth/login" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export default AuthGuard
