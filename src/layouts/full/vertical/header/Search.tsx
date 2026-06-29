import { useState, useMemo } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router'
import SimpleBar from 'simplebar-react'
import { useTranslation } from 'react-i18next'
import { Input } from 'src/components/ui/input'
import SidebarContent, { ChildItem, MenuItem } from '../sidebar/sidebaritems'

interface SearchResult {
  name: string
  url: string
  path: string
  icon?: string
}

function Search() {
  const { t } = useTranslation('common')
  const [query, setQuery] = useState('')

  const searchItems = (
    items: (MenuItem | ChildItem)[],
    q: string,
    translate: (key: string) => string,
    parentPath = '',
  ): SearchResult[] => {
    let results: SearchResult[] = []

    items.forEach((item) => {
      const name = item.nameKey ? translate(item.nameKey) : ''
      const currentPath = parentPath ? `${parentPath} → ${name}` : name

      if (name.toLowerCase().includes(q.toLowerCase()) && item.url) {
        results.push({
          name,
          url: item.url,
          path: currentPath,
          icon: item.icon,
        })
      }

      if (item.children) {
        results = [...results, ...searchItems(item.children, q, translate, currentPath)]
      }
    })

    return results
  }

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchItems(SidebarContent, query, t)
  }, [query, t])

  return (
    <div className="relative w-full">
      <div className="flex items-center relative lg:w-xs mx-auto">
        <Icon
          icon="solar:magnifer-linear"
          width="18"
          height="18"
          className="absolute start-3 top-1/2 -translate-y-1/2"
        />
        <Input
          placeholder={t('header.searchPlaceholder')}
          className="rounded-xl ps-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div
        className={`absolute w-full bg-background rounded-md top-11 z-10 start-0 shadow-md border border-border ${
          Boolean(query) ? 'block' : 'hidden'
        }`}
      >
        <SimpleBar className="h-72 p-4 custom-scroll">
          {results.length > 0 ? (
            results.map((item, i) => (
              <Link
                key={i}
                to={item.url}
                onClick={() => setQuery('')}
                className="p-2 mb-1.5 last:mb-0 flex items-center bg-input/30 gap-2 text-sm font-medium rounded-md hover:bg-primary/20 hover:text-primary w-full"
              >
                <Icon icon={item.icon ?? 'solar:widget-2-linear'} width={18} height={18} />
                <div className="ps-3 min-w-0">
                  <h5 className="mb-1 text-sm truncate">{item.name}</h5>
                  <span className="text-xs block truncate text-muted-foreground">{item.path}</span>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-sm text-muted-foreground">—</p>
            </div>
          )}
        </SimpleBar>
      </div>
    </div>
  )
}

export default Search
