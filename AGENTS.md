# Agent guide — Neosync frontend

Neosync tenant dashboard — Vite + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + React Query + Zustand + i18next (AR/EN).

**Feature build reference:** [docs/NEOSYNC_FEATURES.md](docs/NEOSYNC_FEATURES.md)

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Typecheck (`tsc`) then production build → `dist/` |
| `npm run lint` | ESLint on `.ts` / `.tsx` |
| `npm run preview` | Preview production build |

## Architecture

```
src/
├── i18n/              # AR/EN locales (common.json, auth.json per language)
├── lib/               # query-client, api-client, utils
├── stores/            # zustand: ui-store (locale, sidebar), auth-store (stub)
├── routes/
│   ├── Router.tsx         # composes layouts + route modules
│   ├── neosync-routes.tsx # product routes
│   ├── template-routes.tsx # legacy demos under /template/*
│   └── auth-routes.tsx    # /auth/*
├── views/
│   ├── neosync/       # Neosync placeholder + future feature pages
│   ├── template/      # Template demo hub
│   ├── authentication/ # Neosync auth (split layout)
│   ├── apps/          # Legacy template apps (via /template/* only)
│   └── utilities/     # Legacy form/table demos (via /template/* only)
├── shared/components/ # PlaceholderPage, LanguageSwitcher
├── layouts/
│   ├── full/          # Sidebar + header shell
│   ├── blank/         # Auth/error shell
│   └── auth/          # AuthSplitLayout
├── components/ui/     # shadcn primitives
└── css/globals.css    # Neosync design tokens (primary: #3b82f6)
```

### Providers (App.tsx)

`I18nextProvider` → `QueryClientProvider` → `ThemeProvider` → `RouterProvider` → `Toaster`

## Routing

- **Product routes:** `src/routes/neosync-routes.tsx` — all Figma modules (placeholder pages today)
- **Template demos:** `src/routes/template-routes.tsx` — legacy theme under `/template/*` only
- **Auth:** `src/routes/auth-routes.tsx` — `/auth/login`, `/auth/forgot-password`, `/auth/two-step`
- **Sidebar:** `src/layouts/full/vertical/sidebar/sidebaritems.ts` — uses `nameKey` for i18n

### Neosync routes

| Path | Module |
|------|--------|
| `/` | Dashboard |
| `/vendors` | Vendor Management |
| `/customers` | Customer Management |
| `/warehouses` | Warehouses |
| `/orders/sales`, `/orders/purchases` | Orders |
| `/catalogue`, `/catalogue/sync`, `/pricing` | Product Management |
| `/shipping` | Shipping Companies |
| `/reports/*` | Reports (sales, orders, inventory, channels, customers) |
| `/staff`, `/roles`, `/activity-log` | User & Permissions |
| `/subscription`, `/notifications`, `/settings/profile` | Account |
| `/support` | Support (placeholder) |
| `/template` | Template demo hub (dev reference) |

Full route map and per-feature specs: [docs/NEOSYNC_FEATURES.md](docs/NEOSYNC_FEATURES.md)

## i18n (AR / EN)

- Config: `src/i18n/index.ts`
- Locales: `src/i18n/locales/{en,ar}/common.json`, `auth.json`
- Toggle: header `LanguageSwitcher` — persists to `localStorage` (`neosync-locale`)
- RTL: `document.documentElement.dir = 'rtl'` when locale is `ar`
- **Rule:** no hardcoded UI strings in Neosync views — use `t('key')` and add keys to locale JSON
- Add per-feature namespaces when building modules (`vendors.json`, etc.)

## Styling

- **Tailwind v4** via `src/css/globals.css`
- **Primary:** `#3b82f6` (Neosync brand blue)
- **Utility:** `cn()` from `src/lib/utils`
- **Path alias:** `src/*`

## shadcn/ui

- Config: `components.json` (style: `new-york`)
- **MCP:** `.cursor/mcp.json` — use MCP tools to browse/add components
- CLI fallback: `npx shadcn@latest add <component>`

## State & data (scaffolded, wire per feature)

| Library | Use |
|---------|-----|
| **Zustand** | `ui-store` (locale), `auth-store` (stub) |
| **React Query** | Server state — add hooks per feature in `docs/NEOSYNC_FEATURES.md` |
| **MSW** | Deferred — add when first API integration ships |
| **axios** | `src/lib/api-client.ts` — JWT from localStorage |

## Template demos

Legacy TailwindAdmin pages live under `/template/*` only. No external pro/purchase links.

**Cleanup checklist:** see [docs/NEOSYNC_FEATURES.md](docs/NEOSYNC_FEATURES.md#template-cleanup-when-ready)

## What to avoid

- Do not add external nav links (tailwind-admin.com, etc.)
- Do not put product routes outside `neosync-routes.tsx`
- Do not hardcode strings in Neosync views — use i18n keys
- Do not commit secrets (`.env`, credentials)

## Keeping Cursor context current

| Change | Update |
|--------|--------|
| New Neosync route | `neosync-routes.tsx`, `sidebaritems.ts`, locale JSON, `NEOSYNC_FEATURES.md` |
| New feature built | `NEOSYNC_FEATURES.md` + feature locale namespace |
| Template removed | Follow cleanup checklist in `NEOSYNC_FEATURES.md` |
| Stack / tooling | This file + `.cursor/rules/` |
