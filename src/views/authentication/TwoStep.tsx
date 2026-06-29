import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from 'src/components/ui/input-otp'

const TwoStep = () => {
  const { t } = useTranslation('auth')

  return (
    <AuthSplitLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{t('twoStep.title')}</h1>
          <p className="text-muted-foreground mt-1">{t('twoStep.subtitle')}</p>
        </div>
        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button type="button" className="w-full" asChild>
          <Link to="/">{t('twoStep.submit')}</Link>
        </Button>
        <p className="text-sm text-center">
          <Link to="/auth/login" className="text-primary hover:underline">
            {t('twoStep.backToLogin')}
          </Link>
        </p>
      </div>
    </AuthSplitLayout>
  )
}

export default TwoStep
