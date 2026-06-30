import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

const AUTH_PRIMARY = '#3B59FF'

const fieldClassName =
  'h-12 rounded-lg border-[#E5E7EB] bg-white px-4 text-base text-[#111827] placeholder:text-[#9CA3AF] focus-visible:border-[#3B59FF]'

const ForgotPassword = () => {
  const { t } = useTranslation('auth')

  return (
    <AuthSplitLayout
      headerSlot={
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          style={{ color: AUTH_PRIMARY }}
        >
          <ArrowLeft className="size-4" />
          {t('forgotPassword.backToLogin')}
        </Link>
      }
    >
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-bold leading-tight text-[#111827]">
          {t('forgotPassword.title')}
        </h1>
        <p className="text-base text-[#6B7280]">{t('forgotPassword.subtitle')}</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-[#374151]">
            {t('forgotPassword.email')}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={t('forgotPassword.emailPlaceholder')}
            className={fieldClassName}
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-lg text-base font-semibold hover:opacity-90"
          style={{ backgroundColor: AUTH_PRIMARY }}
          asChild
        >
          <Link to="/auth/two-step">{t('forgotPassword.submit')}</Link>
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6B7280]">
        {t('forgotPassword.rememberPassword')}{' '}
        <Link
          to="/auth/login"
          className="font-medium hover:underline"
          style={{ color: AUTH_PRIMARY }}
        >
          {t('forgotPassword.backToLoginLink')}
        </Link>
      </p>
    </AuthSplitLayout>
  )
}

export default ForgotPassword
