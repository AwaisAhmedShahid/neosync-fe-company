import { FormEvent, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import { isAxiosError } from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'
import { login } from 'src/api/auth/auth-api'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Checkbox } from 'src/components/ui/checkbox'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { cn } from 'src/lib/utils'
import { useAuthStore } from 'src/stores/auth-store'

const AUTH_PRIMARY = '#3B59FF'

const fieldClassName =
  'h-12 rounded-lg border-[#E5E7EB] bg-white px-4 text-base text-[#111827] placeholder:text-[#9CA3AF] focus-visible:border-[#3B59FF]'

const Login = () => {
  const { t } = useTranslation('auth')
  const navigate = useNavigate()
  const location = useLocation()
  const setAuth = useAuthStore((state) => state.setAuth)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await login({ email, password })

      if (!response.success) {
        setError(response.message)
        return
      }

      const { user, accessToken, expiresAt } = response.data
      setAuth(user, accessToken, expiresAt)
      toast.success(response.message)

      const redirectTo = (() => {
        const from = (location.state as { from?: string } | null)?.from
        return from && from !== '/auth/login' ? from : '/'
      })()

      navigate(redirectTo, { replace: true })
    } catch (err) {
      const message = isAxiosError(err)
        ? (err.response?.data as { message?: string } | undefined)?.message
        : undefined

      setError(message ?? t('login.errors.generic'))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AuthSplitLayout>
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-bold leading-tight text-[#111827]">
          {t('login.title')}
        </h1>
        <p className="text-base text-[#6B7280]">{t('login.subtitle')}</p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {error ? (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        ) : null}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-[#374151]">
            {t('login.email')}
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t('login.emailPlaceholder')}
            className={fieldClassName}
            disabled={isSubmitting}
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
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={t('login.passwordPlaceholder')}
              className={cn(fieldClassName, 'pe-11')}
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#6B7280]"
              aria-label={showPassword ? t('login.hidePassword') : t('login.showPassword')}
              disabled={isSubmitting}
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
          disabled={isSubmitting}
          className="h-12 w-full rounded-lg text-base font-semibold hover:opacity-90 disabled:opacity-60"
          style={{ backgroundColor: AUTH_PRIMARY }}
        >
          {isSubmitting ? t('login.submitting') : t('login.submit')}
        </Button>
      </form>
    </AuthSplitLayout>
  )
}

export default Login
