import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import CardBox from 'src/components/shared/CardBox'
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp'
import { Icon } from '@iconify/react'

const templateDemos = [
  { path: '/template/dashboard/modern', labelKey: 'template.modernDashboard', icon: 'solar:widget-2-linear' },
  { path: '/template/notes', labelKey: 'template.notes', icon: 'solar:notes-linear' },
  { path: '/template/tickets', labelKey: 'template.tickets', icon: 'solar:ticket-linear' },
  { path: '/template/tickets/create', labelKey: 'template.createTicket', icon: 'solar:add-circle-linear' },
  { path: '/template/blog', labelKey: 'template.blog', icon: 'solar:document-text-linear' },
  { path: '/template/form', labelKey: 'template.form', icon: 'solar:document-add-linear' },
  { path: '/template/table', labelKey: 'template.table', icon: 'solar:server-linear' },
  { path: '/template/user-profile', labelKey: 'template.userProfile', icon: 'solar:user-circle-linear' },
  { path: '/template/icons', labelKey: 'template.icons', icon: 'solar:star-linear' },
  { path: '/template/auth/login', labelKey: 'template.authLogin', icon: 'solar:login-2-linear' },
  { path: '/template/auth/register', labelKey: 'template.authRegister', icon: 'solar:user-plus-linear' },
  { path: '/template/maintenance', labelKey: 'template.maintenance', icon: 'solar:settings-linear' },
] as const

const TemplateIndex = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <BreadcrumbComp
        title={t('pages.template.title')}
        items={[{ to: '/', title: t('nav.dashboard') }, { title: t('pages.template.title') }]}
      />
      <p className="text-muted-foreground mt-4 mb-6">{t('pages.template.subtitle')}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templateDemos.map((demo) => (
          <Link key={demo.path} to={demo.path}>
            <CardBox className="p-5 hover:border-primary transition-colors cursor-pointer h-full">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-lightprimary flex items-center justify-center shrink-0">
                  <Icon icon={demo.icon} className="size-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{t(demo.labelKey)}</span>
              </div>
            </CardBox>
          </Link>
        ))}
      </div>
    </>
  )
}

export default TemplateIndex
