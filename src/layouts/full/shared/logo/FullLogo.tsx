import { useTranslation } from 'react-i18next'
import neosyncLogo from 'src/assets/images/logos/neosync-logo.png'

const FullLogo = () => {
  const { t } = useTranslation('common')

  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <img
        src={neosyncLogo}
        alt={t('app.name')}
        className="size-9 shrink-0 rounded-[10px]"
      />
      <span className="text-lg font-semibold text-foreground truncate">
        {t('app.name')}
      </span>
    </div>
  )
}

export default FullLogo
