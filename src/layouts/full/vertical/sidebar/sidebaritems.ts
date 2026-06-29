import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  nameKey?: string
  icon?: string
  children?: ChildItem[]
  url?: string
  disabled?: boolean
}

export interface MenuItem {
  headingKey?: string
  nameKey?: string
  icon?: string
  id?: number | string
  children?: ChildItem[]
  url?: string
  disabled?: boolean
}

const SidebarContent: MenuItem[] = [
  {
    children: [
      {
        nameKey: 'nav.dashboard',
        icon: 'solar:widget-2-linear',
        id: uniqueId(),
        url: '/',
      },
      {
        nameKey: 'nav.vendorManagement',
        icon: 'solar:shop-linear',
        id: uniqueId(),
        url: '/vendors',
      },
      {
        nameKey: 'nav.customerManagement',
        icon: 'solar:users-group-rounded-linear',
        id: uniqueId(),
        url: '/customers',
      },
      {
        nameKey: 'nav.warehouseManagement',
        icon: 'solar:box-linear',
        id: uniqueId(),
        url: '/warehouses',
      },
      {
        nameKey: 'nav.orderManagement',
        icon: 'solar:cart-large-2-linear',
        id: uniqueId(),
        children: [
          {
            nameKey: 'nav.saleOrders',
            icon: 'solar:bag-check-linear',
            id: uniqueId(),
            url: '/orders/sales',
          },
          {
            nameKey: 'nav.purchaseOrders',
            icon: 'solar:bag-4-linear',
            id: uniqueId(),
            url: '/orders/purchases',
          },
        ],
      },
      {
        nameKey: 'nav.productManagement',
        icon: 'solar:box-minimalistic-linear',
        id: uniqueId(),
        children: [
          {
            nameKey: 'nav.catalogue',
            icon: 'solar:layers-linear',
            id: uniqueId(),
            url: '/catalogue',
          },
          {
            nameKey: 'nav.productSync',
            icon: 'solar:refresh-linear',
            id: uniqueId(),
            url: '/catalogue/sync',
          },
          {
            nameKey: 'nav.priceDistribution',
            icon: 'solar:tag-price-linear',
            id: uniqueId(),
            url: '/pricing',
          },
        ],
      },
      {
        nameKey: 'nav.shippingCompanies',
        icon: 'solar:delivery-linear',
        id: uniqueId(),
        url: '/shipping',
      },
      {
        nameKey: 'nav.reportAnalytics',
        icon: 'solar:chart-2-linear',
        id: uniqueId(),
        children: [
          {
            nameKey: 'nav.salesReport',
            id: uniqueId(),
            url: '/reports/sales',
          },
          {
            nameKey: 'nav.orderReport',
            id: uniqueId(),
            url: '/reports/orders',
          },
          {
            nameKey: 'nav.inventoryReport',
            id: uniqueId(),
            url: '/reports/inventory',
          },
          {
            nameKey: 'nav.channelReport',
            id: uniqueId(),
            url: '/reports/channels',
          },
          {
            nameKey: 'nav.customerReport',
            id: uniqueId(),
            url: '/reports/customers',
          },
        ],
      },
      {
        nameKey: 'nav.userPermissions',
        icon: 'solar:shield-user-linear',
        id: uniqueId(),
        children: [
          {
            nameKey: 'nav.staffMembers',
            id: uniqueId(),
            url: '/staff',
          },
          {
            nameKey: 'nav.rolesPermissions',
            id: uniqueId(),
            url: '/roles',
          },
          {
            nameKey: 'nav.activityLog',
            id: uniqueId(),
            url: '/activity-log',
          },
        ],
      },
      {
        nameKey: 'nav.account',
        icon: 'solar:user-id-linear',
        id: uniqueId(),
        children: [
          {
            nameKey: 'nav.subscription',
            id: uniqueId(),
            url: '/subscription',
          },
          {
            nameKey: 'nav.notifications',
            id: uniqueId(),
            url: '/notifications',
          },
          {
            nameKey: 'nav.settings',
            id: uniqueId(),
            url: '/settings/profile',
          },
        ],
      },
      {
        nameKey: 'nav.support',
        icon: 'solar:chat-round-dots-linear',
        id: uniqueId(),
        url: '/support',
      },
    ],
  },
  {
    headingKey: 'nav.templateDemos',
    children: [
      {
        nameKey: 'nav.templateDemos',
        icon: 'solar:code-linear',
        id: uniqueId(),
        url: '/template',
      },
    ],
  },
]

export default SidebarContent
