import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import FullLogo from 'src/layouts/full/shared/logo/FullLogo'

interface AuthSplitLayoutProps {
  children: ReactNode
}

const AuthSplitLayout = ({ children }: AuthSplitLayoutProps) => {
  const { t } = useTranslation('auth')

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-16 bg-background">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <FullLogo />
          </div>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center bg-primary text-white p-12">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">{t('marketing.title')}</h2>
          <p className="text-white/80 text-lg">{t('marketing.subtitle')}</p>
          <div className="mt-10 rounded-xl bg-white/10 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4 text-start text-sm">
              <div className="rounded-lg bg-white/10 p-4">
                <p className="font-semibold">Products</p>
                <p className="text-white/70 text-2xl font-bold mt-1">1,240</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="font-semibold">Orders</p>
                <p className="text-white/70 text-2xl font-bold mt-1">847</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="font-semibold">Revenue</p>
                <p className="text-white/70 text-2xl font-bold mt-1">SAR 99K</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="font-semibold">Channels</p>
                <p className="text-white/70 text-2xl font-bold mt-1">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthSplitLayout
