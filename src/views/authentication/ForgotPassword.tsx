import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'

const ForgotPassword = () => {
  const { t } = useTranslation('auth')

  return (
    <AuthSplitLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{t('forgotPassword.title')}</h1>
          <p className="text-muted-foreground mt-1">{t('forgotPassword.subtitle')}</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="email">{t('forgotPassword.email')}</Label>
            <Input id="email" type="email" placeholder="you@company.com" />
          </div>
          <Button type="submit" className="w-full">
            {t('forgotPassword.submit')}
          </Button>
        </form>
        <p className="text-sm text-center">
          <Link to="/auth/login" className="text-primary hover:underline">
            {t('forgotPassword.backToLogin')}
          </Link>
        </p>
      </div>
    </AuthSplitLayout>
  )
}

export default ForgotPassword
