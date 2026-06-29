import { useTranslation } from 'react-i18next'
import i18n from 'src/i18n'
import { useUiStore } from 'src/stores/ui-store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'src/components/ui/dropdown-menu'
import { Button } from 'src/components/ui/button'
import { Icon } from '@iconify/react'

const LanguageSwitcher = () => {
  const { t } = useTranslation('common')
  const { locale, setLocale } = useUiStore()

  const switchLocale = (lng: 'en' | 'ar') => {
    void i18n.changeLanguage(lng)
    setLocale(lng)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Icon icon="solar:global-linear" className="size-4" />
          <span className="hidden sm:inline">
            {locale === 'ar' ? t('header.arabic') : t('header.english')}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale('en')}>
          {t('header.english')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale('ar')}>
          {t('header.arabic')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSwitcher
