import { lazy } from 'react'
import type { RouteObject } from 'react-router'
import Loadable from '../layouts/full/shared/loadable/Loadable'

const Dashboard = Loadable(lazy(() => import('../views/neosync/dashboard/Dashboard')))
const Vendors = Loadable(lazy(() => import('../views/neosync/vendors/Vendors')))
const Customers = Loadable(lazy(() => import('../views/neosync/customers/Customers')))
const Warehouses = Loadable(lazy(() => import('../views/neosync/warehouses/Warehouses')))
const SaleOrders = Loadable(lazy(() => import('../views/neosync/orders/SaleOrders')))
const PurchaseOrders = Loadable(lazy(() => import('../views/neosync/orders/PurchaseOrders')))
const Catalogue = Loadable(lazy(() => import('../views/neosync/catalogue/Catalogue')))
const ProductSync = Loadable(lazy(() => import('../views/neosync/catalogue/ProductSync')))
const PriceDistribution = Loadable(lazy(() => import('../views/neosync/pricing/PriceDistribution')))
const Shipping = Loadable(lazy(() => import('../views/neosync/shipping/Shipping')))
const SalesReport = Loadable(lazy(() => import('../views/neosync/reports/SalesReport')))
const OrderReport = Loadable(lazy(() => import('../views/neosync/reports/OrderReport')))
const InventoryReport = Loadable(lazy(() => import('../views/neosync/reports/InventoryReport')))
const ChannelReport = Loadable(lazy(() => import('../views/neosync/reports/ChannelReport')))
const CustomerReport = Loadable(lazy(() => import('../views/neosync/reports/CustomerReport')))
const Staff = Loadable(lazy(() => import('../views/neosync/staff/Staff')))
const Roles = Loadable(lazy(() => import('../views/neosync/roles/Roles')))
const ActivityLog = Loadable(lazy(() => import('../views/neosync/activity-log/ActivityLog')))
const Subscription = Loadable(lazy(() => import('../views/neosync/subscription/Subscription')))
const Notifications = Loadable(lazy(() => import('../views/neosync/notifications/Notifications')))
const ProfileSettings = Loadable(lazy(() => import('../views/neosync/settings/Profile')))
const Support = Loadable(lazy(() => import('../views/neosync/support/Support')))

export const neosyncRoutes: RouteObject[] = [
  { index: true, element: <Dashboard /> },
  { path: 'vendors', element: <Vendors /> },
  { path: 'customers', element: <Customers /> },
  { path: 'warehouses', element: <Warehouses /> },
  { path: 'orders/sales', element: <SaleOrders /> },
  { path: 'orders/purchases', element: <PurchaseOrders /> },
  { path: 'catalogue', element: <Catalogue /> },
  { path: 'catalogue/sync', element: <ProductSync /> },
  { path: 'pricing', element: <PriceDistribution /> },
  { path: 'shipping', element: <Shipping /> },
  { path: 'reports/sales', element: <SalesReport /> },
  { path: 'reports/orders', element: <OrderReport /> },
  { path: 'reports/inventory', element: <InventoryReport /> },
  { path: 'reports/channels', element: <ChannelReport /> },
  { path: 'reports/customers', element: <CustomerReport /> },
  { path: 'staff', element: <Staff /> },
  { path: 'roles', element: <Roles /> },
  { path: 'activity-log', element: <ActivityLog /> },
  { path: 'subscription', element: <Subscription /> },
  { path: 'notifications', element: <Notifications /> },
  { path: 'settings/profile', element: <ProfileSettings /> },
  { path: 'support', element: <Support /> },
]
