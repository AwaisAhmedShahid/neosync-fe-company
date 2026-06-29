import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

const Login = () => {
  const { t } = useTranslation('auth')

  return (
    <AuthSplitLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{t('login.title')}</h1>
          <p className="text-muted-foreground mt-1">{t('login.subtitle')}</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">{t('login.email')}</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">{t('login.password')}</Label>
              <Link to="/auth/forgot-password" className="text-sm text-primary hover:underline">
                {t('login.forgotPassword')}
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full" asChild>
            <Link to="/">{t('login.submit')}</Link>
          </Button>
        </form>
        <p className="text-sm text-muted-foreground text-center">
          {t('login.noAccount')}{' '}
          <span className="text-primary">{t('login.contactAdmin')}</span>
        </p>
      </div>
    </AuthSplitLayout>
  )
}

export default Login
