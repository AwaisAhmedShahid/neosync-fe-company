import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { cn } from 'src/lib/utils'

const AUTH_PRIMARY = '#3B59FF'

const fieldClassName =
  'h-12 rounded-lg border-[#E5E7EB] bg-white px-4 text-base text-[#111827] placeholder:text-[#9CA3AF] focus-visible:border-[#3B59FF]'

const UpdatePassword = () => {
  const { t } = useTranslation('auth')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <AuthSplitLayout
      headerSlot={
        <Link
          to="/auth/login"
          className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          style={{ color: AUTH_PRIMARY }}
        >
          <ArrowLeft className="size-4" />
          {t('updatePassword.backToLogin')}
        </Link>
      }
    >
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-bold leading-tight text-[#111827]">
          {t('updatePassword.title')}
        </h1>
        <p className="text-base text-[#6B7280]">{t('updatePassword.subtitle')}</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="new-password" className="text-sm font-medium text-[#374151]">
            {t('updatePassword.newPassword')}
          </Label>
          <div className="relative">
            <Input
              id="new-password"
              type={showNewPassword ? 'text' : 'password'}
              placeholder={t('updatePassword.newPasswordPlaceholder')}
              className={cn(fieldClassName, 'pe-11')}
            />
            <button
              type="button"
              onClick={() => setShowNewPassword((prev) => !prev)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
              aria-label={
                showNewPassword ? t('login.hidePassword') : t('login.showPassword')
              }
            >
              {showNewPassword ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password" className="text-sm font-medium text-[#374151]">
            {t('updatePassword.confirmPassword')}
          </Label>
          <div className="relative">
            <Input
              id="confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder={t('updatePassword.confirmPasswordPlaceholder')}
              className={cn(fieldClassName, 'pe-11')}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
              aria-label={
                showConfirmPassword ? t('login.hidePassword') : t('login.showPassword')
              }
            >
              {showConfirmPassword ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-lg text-base font-semibold hover:opacity-90"
          style={{ backgroundColor: AUTH_PRIMARY }}
          asChild
        >
          <Link to="/auth/login">{t('updatePassword.submit')}</Link>
        </Button>
      </form>
    </AuthSplitLayout>
  )
}

export default UpdatePassword
