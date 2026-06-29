import { useState, useEffect, useEffectEvent } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router'
import Messages from './Messages'
import FullLogo from '../../shared/logo/FullLogo'
import Profile from './Profile'
import SidebarLayout from '../sidebar/Sidebar'
import { useTheme } from 'src/components/provider/theme-provider'
import LanguageSwitcher from 'src/shared/components/LanguageSwitcher'
import { Sheet, SheetContent, SheetTitle } from 'src/components/ui/sheet'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Search from './Search'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = useEffectEvent(() => {
    setIsSticky(window.scrollY > 50)
  })

  const handleResize = useEffectEvent(() => {
    if (window.innerWidth > 1023) setIsOpen(false)
  })

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMode = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <>
      <header
        className={`sticky top-0 z-[2] ${
          isSticky ? 'bg-white dark:bg-dark shadow-md fixed w-full' : 'bg-transparent'
        }`}
      >
        <nav className="rounded-none bg-transparent dark:bg-transparent py-4 px-6 !max-w-full flex justify-between items-center gap-4">
          <span
            onClick={() => setIsOpen(true)}
            className="px-[15px] hover:text-primary dark:hover:text-primary text-foreground dark:text-muted-foreground relative after:absolute after:w-10 after:h-10 after:rounded-full hover:after:bg-lightprimary after:bg-transparent rounded-full xl:hidden flex justify-center items-center cursor-pointer"
          >
            <Icon icon="tabler:menu-2" height={20} />
          </span>

          <div className="hidden xl:flex items-center gap-2 flex-1 max-w-md">
            <Search />
          </div>

          <div className="block xl:hidden">
            <FullLogo />
          </div>

          <div className="flex items-center gap-1 ms-auto">
            <LanguageSwitcher />
            <button
              type="button"
              className="hover:text-primary px-2 rounded-full flex justify-center items-center cursor-pointer text-foreground dark:text-muted-foreground"
              onClick={toggleMode}
            >
              <Icon icon={theme === 'light' ? 'tabler:moon' : 'solar:sun-bold-duotone'} width="20" />
            </button>
            <Link
              to="/notifications"
              className="hover:text-primary px-2 rounded-full flex justify-center items-center text-foreground dark:text-muted-foreground"
            >
              <Icon icon="solar:bell-linear" width="20" />
            </Link>
            <Messages />
            <Profile />
          </div>
        </nav>
      </header>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <VisuallyHidden>
            <SheetTitle>sidebar</SheetTitle>
          </VisuallyHidden>
          <SidebarLayout onClose={() => setIsOpen(false)} />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Header
