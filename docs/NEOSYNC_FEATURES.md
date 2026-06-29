# Neosync Feature Build Guide

Reference for implementing each module after the setup scaffold. The app shell, routes, i18n, and placeholder pages are already in place.

## Route map

### Product routes (Neosync)

| Route | View | i18n keys |
|-------|------|-----------|
| `/` | Dashboard | `pages.dashboard.*` |
| `/vendors` | Vendors | `pages.vendors.*` |
| `/customers` | Customers | `pages.customers.*` |
| `/warehouses` | Warehouses | `pages.warehouses.*` |
| `/orders/sales` | Sale Orders | `pages.saleOrders.*` |
| `/orders/purchases` | Purchase Orders | `pages.purchaseOrders.*` |
| `/catalogue` | Catalogue | `pages.catalogue.*` |
| `/catalogue/sync` | Product Sync | `pages.productSync.*` |
| `/pricing` | Price Distribution | `pages.pricing.*` |
| `/shipping` | Shipping Companies | `pages.shipping.*` |
| `/reports/sales` | Sales Report | `pages.salesReport.*` |
| `/reports/orders` | Order Report | `pages.orderReport.*` |
| `/reports/inventory` | Inventory Report | `pages.inventoryReport.*` |
| `/reports/channels` | Channel Performance | `pages.channelReport.*` |
| `/reports/customers` | Customer Reports | `pages.customerReport.*` |
| `/staff` | Staff Members | `pages.staff.*` |
| `/roles` | Roles & Permissions | `pages.roles.*` |
| `/activity-log` | Activity Log | `pages.activityLog.*` |
| `/subscription` | Subscription | `pages.subscription.*` |
| `/notifications` | Notifications | `pages.notifications.*` |
| `/settings/profile` | Profile Settings | `pages.settings.*` |
| `/support` | Support (UChat placeholder) | `pages.support.*` |

### Auth routes

| Route | View |
|-------|------|
| `/auth/login` | Sign in (split layout) |
| `/auth/forgot-password` | Forgot password |
| `/auth/two-step` | 2FA OTP |
| `/auth/404` | Error page |

### Template demos (`/template/*`)

Local-only legacy theme pages for reference. Remove when no longer needed.

| Route | Legacy component |
|-------|------------------|
| `/template` | Hub index |
| `/template/dashboard/modern` | Modern dashboard |
| `/template/notes` | Notes app |
| `/template/tickets` | Tickets list |
| `/template/tickets/create` | Create ticket |
| `/template/blog` | Blog listing |
| `/template/blog/:id` | Blog detail |
| `/template/form` | Form demo |
| `/template/table` | TanStack table demo |
| `/template/user-profile` | User profile |
| `/template/icons` | Iconify icons |
| `/template/auth/login` | Template auth login |
| `/template/auth/register` | Template auth register |
| `/template/maintenance` | Maintenance page |

---

## Recommended build order

Aligned with the 12-week project plan (tenant dashboard only; super-admin deferred).

| Phase | Weeks | Modules |
|-------|-------|---------|
| Foundation | 1–2 | MSW, AuthGuard, full auth flow, error toasts |
| Dashboard | 2–3 | Setup wizard, KPI cards, module empty states, ApexCharts sparklines |
| Core CRUD | 3–4 | Warehouses → Vendors → Customers → Notifications → Settings |
| Commerce | 4–6 | Orders (stepper), Catalogue, Price Distribution, Product Sync |
| Integrations | 5–7 | Connection wizards (Salla, Zid, Shopify, Amazon, etc.), sync status |
| Admin | 8–9 | Subscription/billing, Staff, Roles, Activity Log, Shipping |
| Reports | 10–11 | 6 core reports with ApexCharts + CSV export |
| Hardening | 12 | Real API swap, tests, perf, full AR copy pass |

---

## Per-feature specs (from Figma)

### Dashboard (`/`)

- Welcome header with user name
- Profile setup wizard: progress bar + checklist (Integrate channel, Add Warehouse, Add Product, Price sync)
- KPI row: Products, Orders, Revenue, Customers
- Module cards with empty states and CTAs
- **Stack:** `KpiCard`, ApexCharts (optional), zustand `onboarding-store`

### Vendors (`/vendors`)

- Page header + "Add Vendor" / "Import" buttons
- Tabs: All, Vendors, Suppliers
- TanStack Table: Name, Type, Location, Orders, Actions
- Add Vendor dialog: personal info + bank details
- **i18n namespace:** `vendors.json`

### Customers (`/customers`)

- Customer table with avatar, phone, email, status, total spent
- Drill-down: `/customers/:id/orders` for order history
- **Reference template:** `/template/table`

### Warehouses (`/warehouses`)

- Simplest CRUD — use as pattern for all list pages
- Table + Add Warehouse form/dialog

### Orders (`/orders/sales`, `/orders/purchases`)

- Summary cards (totals, pending counts)
- Table with status badges, payment progress bars
- Create flows: vertical stepper + right-side order summary panel
- zustand wizard state for multi-step forms
- **Most complex UI in the app**

### Catalogue (`/catalogue`)

- Product cards with per-channel sync status (Salla, Zid, Amazon)
- Price/stock per channel, "Sync Now" CTA

### Product Sync (`/catalogue/sync`, `/catalogue/sync/:channel`)

- Field mapping table (✓/✗ status per row)
- Channel-specific fields (Amazon bullet points, Zid category tree)

### Price Distribution (`/pricing`)

- Master-detail: product list left, pricing detail right
- Base price breakdown (cost, VAT, total)
- Distribution table per channel
- Edit Price List dialog

### Shipping (`/shipping`)

- Table + Add Shipping Company form

### Reports (`/reports/*`)

| Report | Charts | Table |
|--------|--------|-------|
| Sales | Line: sales by period | Sales by product |
| Orders | Bar: by size; stacked: by channel | Order history |
| Inventory | Bar: stock by warehouse | Stock aging & status |
| Channels | Line: revenue + order trends | Channel performance |
| Customers | Line: new customer trend | — |

- Date range filter, channel filter, CSV export
- **Stack:** ApexCharts + React Query

### Subscription (`/subscription`)

- Current plan card, invoice table, Change Plan modal (3 tiers)

### Staff (`/staff`)

- Table with avatar, role, status badge, Add Staff dialog

### Roles (`/roles`)

- Matrix table: Feature × Admin/Editor/Viewer

### Activity Log (`/activity-log`)

- Paginated audit table

### Notifications (`/notifications`)

- All/Unread tabs, mark-as-read

### Settings (`/settings/profile`)

- View/edit cards: personal + business profile

### Support (`/support`)

- Placeholder for UChat embed (post-launch per project plan)

---

## Data patterns

### API strategy

Start with **MSW mocks** + typed contracts. Swap handlers to real REST as backend delivers OpenAPI spec.

```
src/mocks/handlers/<feature>.ts
src/features/<feature>/api/use-<feature>.ts   # React Query hooks
src/lib/api-client.ts                          # axios + JWT interceptor
```

### React Query pattern

```tsx
export function useVendors(filters: VendorFilters) {
  return useQuery({ queryKey: ['vendors', filters], queryFn: () => api.getVendors(filters) })
}
```

### Form pattern

- `react-hook-form` + `zod`
- shadcn Form/Field components
- Dialog for create/edit; full page for multi-step (orders)

### Table pattern

- Evolve `/template/table` DataTable into `src/shared/components/DataTable`
- Column defs in `features/<x>/columns.tsx`
- Filters in URL search params

### Permissions

- `usePermission('vendors:create')` from auth store
- Hide/disable UI; backend enforces RBAC

---

## i18n conventions

- Locales: `src/i18n/locales/{en,ar}/`
- **common.json** — nav, header, shared UI
- **auth.json** — auth screens
- Add per feature: `vendors.json`, `orders.json`, etc.
- Toggle: header `LanguageSwitcher` → `i18n.changeLanguage()` + `dir` on `<html>`
- RTL test every new screen in Arabic locale
- Never hardcode user-visible strings in Neosync views

---

## Template cleanup (when ready)

Delete in this order:

1. `src/routes/template-routes.tsx`
2. `src/views/template/TemplateIndex.tsx`
3. "Template demos" entry in `sidebaritems.ts`
4. `src/views/apps/`, `src/views/utilities/`, `src/views/dashboards/`, `src/views/authentication/auth2/`
5. `src/context/notes-context`, `blog-context`, `ticket-context`
6. `src/api/notes`, `blog`, `ticket` mock data

---

## Deferred (post-MVP)

- Super-admin portal (tenant list, suspend, impersonate)
- UChat customer support embed
- Dropshipping supplier portal
- Custom role builder
- Demand forecasting ML charts
- Apple/Google/STC Pay (Al Rajhi UI in weeks 8–9)

---

## File locations (scaffold)

| Concern | Path |
|---------|------|
| Routes | `src/routes/neosync-routes.tsx`, `template-routes.tsx`, `auth-routes.tsx` |
| Neosync views | `src/views/neosync/**` |
| Placeholder | `src/shared/components/PlaceholderPage.tsx` |
| Sidebar nav | `src/layouts/full/vertical/sidebar/sidebaritems.ts` |
| i18n | `src/i18n/` |
| Stores | `src/stores/ui-store.ts`, `auth-store.ts` |
| API client | `src/lib/api-client.ts` |
