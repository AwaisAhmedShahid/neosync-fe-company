import { useTranslation } from 'react-i18next'
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp'
import CardBox from 'src/components/shared/CardBox'
import { Icon } from '@iconify/react'

interface PlaceholderPageProps {
  titleKey: string
  subtitleKey?: string
  breadcrumb?: { to?: string; title: string }[]
}

const PlaceholderPage = ({ titleKey, subtitleKey, breadcrumb }: PlaceholderPageProps) => {
  const { t } = useTranslation('common')

  const crumbs = breadcrumb ?? [{ to: '/', title: t('nav.dashboard') }, { title: t(titleKey) }]

  return (
    <>
      <BreadcrumbComp title={t(titleKey)} items={crumbs} />
      <div className="mt-6">
        {subtitleKey && (
          <p className="text-muted-foreground mb-6">{t(subtitleKey)}</p>
        )}
        <CardBox className="flex flex-col items-center justify-center py-16 text-center">
          <div className="size-16 rounded-full bg-lightprimary flex items-center justify-center mb-4">
            <Icon icon="solar:widget-2-linear" className="size-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{t('app.comingSoon')}</h3>
          <p className="text-muted-foreground max-w-md">{t('app.comingSoonDescription')}</p>
        </CardBox>
      </div>
    </>
  )
}

export default PlaceholderPage
