import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface AuthSplitLayoutProps {
  children: ReactNode
  headerSlot?: ReactNode
}

const AUTH_PRIMARY = '#3B59FF'

const DASHBOARD_PREVIEW =
  '/assets/images/183f80f8834468aa9de0aaf0394f58d0cbf1c5bd%20(1).png'

const PARTNER_LOGOS = [
  { src: '/assets/icons/trendyol-stayhome.png', alt: 'trendyol' },
  { src: '/assets/icons/Vector.png', alt: 'zid' },
  { src: '/assets/icons/logo-amazon.png', alt: 'amazon' },
  { src: '/assets/icons/Group@2x.png', alt: 'Alibaba' },
] as const

const AuthSplitLayout = ({ children, headerSlot }: AuthSplitLayoutProps) => {
  const { t } = useTranslation('auth')

  return (
    <div className="flex min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden">
      <div className="flex w-full flex-col items-center justify-center bg-white px-8 py-12 lg:w-[45%] lg:overflow-y-auto lg:px-16 xl:px-20">
        <div className="w-full max-w-[400px]">
          {headerSlot ? <div className="mb-6">{headerSlot}</div> : null}
          <div className="mb-5">
            <img
              src="/assets/icons/Frame%207.png"
              alt="Neosync"
              className="size-[52px] rounded-[14px]"
            />
          </div>
          {children}
        </div>
      </div>

      <div
        className="relative hidden h-screen max-h-screen overflow-hidden lg:flex lg:w-[55%]"
        style={{ backgroundColor: AUTH_PRIMARY }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative flex h-full w-full flex-col overflow-hidden pl-8 pr-0 pt-6 pb-8 xl:pl-12 xl:pt-8 xl:pb-10">
          <div className="flex min-h-0 flex-1 items-start overflow-hidden">
            <img
              src={DASHBOARD_PREVIEW}
              alt=""
              className="h-full w-[118%] max-w-none rounded-2xl object-cover object-left-top shadow-[0_24px_64px_rgba(0,0,0,0.22)]"
            />
          </div>

          <div className="w-full max-w-[560px] shrink-0 pt-8 text-white">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-white">
              {t('marketing.title')}
            </h2>
            <p className="mt-3 max-w-[460px] text-[14px] leading-relaxed text-white">
              {t('marketing.subtitle')}
            </p>

            <div className="mt-7 grid w-full grid-cols-4 items-center gap-3">
              {PARTNER_LOGOS.map((logo) => (
                <div key={logo.alt} className="flex h-8">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain mix-blend-lighten"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthSplitLayout
