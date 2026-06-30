import { useState } from 'react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Eye, EyeOff } from 'lucide-react'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Checkbox } from 'src/components/ui/checkbox'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { cn } from 'src/lib/utils'

const AUTH_PRIMARY = '#3B59FF'

const fieldClassName =
  'h-12 rounded-lg border-[#E5E7EB] bg-white px-4 text-base text-[#111827] placeholder:text-[#9CA3AF] focus-visible:border-[#3B59FF]'

const Login = () => {
  const { t } = useTranslation('auth')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <AuthSplitLayout>
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-bold leading-tight text-[#111827]">
          {t('login.title')}
        </h1>
        <p className="text-base text-[#6B7280]">{t('login.subtitle')}</p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-[#374151]">
            {t('login.email')}
          </Label>
          <Input
            id="email"
            type="email"
            placeholder={t('login.emailPlaceholder')}
            className={fieldClassName}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-[#374151]">
            {t('login.password')}
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={t('login.passwordPlaceholder')}
              className={cn(fieldClassName, 'pe-11')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
              aria-label={showPassword ? t('login.hidePassword') : t('login.showPassword')}
            >
              {showPassword ? <Eye className="size-5" /> : <EyeOff className="size-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2.5">
            <Checkbox
              id="keep-logged-in"
              defaultChecked
              className="size-[18px] rounded-[4px] border-[#D1D5DB] data-[state=checked]:border-[#3B59FF] data-[state=checked]:bg-[#3B59FF]"
            />
            <Label
              htmlFor="keep-logged-in"
              className="cursor-pointer text-sm font-normal text-[#374151]"
            >
              {t('login.keepLoggedIn')}
            </Label>
          </div>
          <Link
            to="/auth/forgot-password"
            className="text-sm font-medium hover:underline"
            style={{ color: AUTH_PRIMARY }}
          >
            {t('login.forgotPassword')}
          </Link>
        </div>

        <Button
          type="submit"
          className="h-12 w-full rounded-lg text-base font-semibold hover:opacity-90"
          style={{ backgroundColor: AUTH_PRIMARY }}
          asChild
        >
          <Link to="/">{t('login.submit')}</Link>
        </Button>
      </form>
    </AuthSplitLayout>
  )
}

export default Login
