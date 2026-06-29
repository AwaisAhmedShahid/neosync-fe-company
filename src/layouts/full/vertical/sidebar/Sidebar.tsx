import SidebarContent, { ChildItem, MenuItem } from './sidebaritems'
import SimpleBar from 'simplebar-react'
import { Icon } from '@iconify/react'
import FullLogo from '../../shared/logo/FullLogo'
import { Link, useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'src/components/provider/theme-provider'
import { AMLogo, AMMenu, AMMenuItem, AMSidebar, AMSubmenu } from 'tailwind-sidebar'
import 'tailwind-sidebar/styles.css'

interface SidebarItemType {
  headingKey?: string
  id?: number | string
  nameKey?: string
  icon?: string
  url?: string
  children?: SidebarItemType[]
  disabled?: boolean
}

const isPathActive = (currentPath: string, url?: string) => {
  if (!url) return false
  if (url === '/') return currentPath === '/'
  return currentPath === url || currentPath.startsWith(`${url}/`)
}

const renderSidebarItems = (
  items: SidebarItemType[],
  currentPath: string,
  t: (key: string) => string,
  onClose?: () => void,
  isSubItem: boolean = false,
) => {
  return items.map((item) => {
    const isSelected = isPathActive(currentPath, item.url)
    const IconComp = item.icon || null
    const label = item.nameKey ? t(item.nameKey) : ''

    const iconElement = IconComp ? (
      <Icon icon={IconComp} height={21} width={21} />
    ) : (
      <Icon icon="ri:checkbox-blank-circle-line" height={9} width={9} />
    )

    if (item.headingKey) {
      return (
        <div className="mb-1 mt-4" key={item.headingKey}>
          <AMMenu
            subHeading={t(item.headingKey)}
            ClassName="hide-menu leading-21 text-sidebar-foreground font-bold uppercase text-xs dark:text-sidebar-foreground"
          />
        </div>
      )
    }

    if (item.children?.length) {
      return (
        <AMSubmenu
          key={item.id}
          icon={iconElement}
          title={label}
          ClassName="mt-0.5 text-sidebar-foreground dark:text-sidebar-foreground"
        >
          {renderSidebarItems(item.children, currentPath, t, onClose, true)}
        </AMSubmenu>
      )
    }

    const itemClassNames = isSubItem
      ? `mt-0.5 text-sidebar-foreground dark:text-sidebar-foreground !hover:bg-transparent ${
          isSelected ? '!bg-transparent !text-primary' : ''
        }`
      : `mt-0.5 text-sidebar-foreground dark:text-sidebar-foreground`

    return (
      <div onClick={onClose} key={item.id}>
        <AMMenuItem
          icon={iconElement}
          isSelected={isSelected}
          link={item.url || undefined}
          disabled={item.disabled}
          component={Link}
          className={itemClassNames}
        >
          <span className="truncate flex-1">{label}</span>
        </AMMenuItem>
      </div>
    )
  })
}

const SidebarLayout = ({ onClose }: { onClose?: () => void }) => {
  const location = useLocation()
  const pathname = location.pathname
  const { theme } = useTheme()
  const { t } = useTranslation('common')

  const sidebarMode = theme === 'light' || theme === 'dark' ? theme : undefined

  return (
    <AMSidebar
      collapsible="none"
      animation={true}
      showProfile={false}
      width="270px"
      showTrigger={false}
      mode={sidebarMode}
      className="fixed start-0 top-0 border border-border dark:border-border bg-sidebar dark:bg-sidebar z-10 h-screen"
    >
      <div className="px-6 flex items-center brand-logo overflow-hidden">
        <AMLogo component={Link} href="/" img="">
          <FullLogo />
        </AMLogo>
      </div>

      <SimpleBar className="h-[calc(100vh-80px)]">
        <div className="px-6 pb-6">
          {SidebarContent.map((section, index) => (
            <div key={index}>
              {renderSidebarItems(
                [
                  ...(section.headingKey ? [{ headingKey: section.headingKey, id: `heading-${index}` }] : []),
                  ...(section.children || []),
                ],
                pathname,
                t,
                onClose,
              )}
            </div>
          ))}
        </div>
      </SimpleBar>
    </AMSidebar>
  )
}

export default SidebarLayout
export { SidebarContent }
export type { MenuItem, ChildItem }
