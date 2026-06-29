import { lazy } from 'react'
import type { RouteObject } from 'react-router'
import Loadable from '../layouts/full/shared/loadable/Loadable'

const TemplateIndex = Loadable(lazy(() => import('../views/template/TemplateIndex')))
const Modern = Loadable(lazy(() => import('../views/dashboards/Modern')))
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')))
const Form = Loadable(lazy(() => import('../views/utilities/form/Form')))
const Table = Loadable(lazy(() => import('../views/utilities/table/Table')))
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')))
const CreateTickets = Loadable(lazy(() => import('../views/apps/tickets/CreateTickets')))
const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')))
const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogDetail')))
const UserProfile = Loadable(lazy(() => import('../views/pages/user-profile/UserProfile')))
const SolarIcon = Loadable(lazy(() => import('../views/icons/SolarIcon')))
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login')))
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register')))
const Maintainance = Loadable(lazy(() => import('../views/authentication/Maintainance')))

export const templateRoutes: RouteObject[] = [
  { path: 'template', element: <TemplateIndex /> },
  { path: 'template/dashboard/modern', element: <Modern /> },
  { path: 'template/notes', element: <Notes /> },
  { path: 'template/tickets', element: <Tickets /> },
  { path: 'template/tickets/create', element: <CreateTickets /> },
  { path: 'template/blog', element: <Blog /> },
  { path: 'template/blog/:id', element: <BlogDetail /> },
  { path: 'template/form', element: <Form /> },
  { path: 'template/table', element: <Table /> },
  { path: 'template/user-profile', element: <UserProfile /> },
  { path: 'template/icons', element: <SolarIcon /> },
  { path: 'template/auth/login', element: <Login2 /> },
  { path: 'template/auth/register', element: <Register2 /> },
  { path: 'template/maintenance', element: <Maintainance /> },
]
