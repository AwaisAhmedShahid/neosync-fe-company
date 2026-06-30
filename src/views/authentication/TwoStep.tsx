import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'
import AuthSplitLayout from 'src/layouts/auth/AuthSplitLayout'
import { Button } from 'src/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from 'src/components/ui/input-otp'
import { Label } from 'src/components/ui/label'

const AUTH_PRIMARY = '#3B59FF'

const otpSlotClassName =
  'h-14 w-11 rounded-lg border border-[#E5E7EB] bg-white text-base font-medium text-[#111827] first:rounded-lg first:border-l last:rounded-lg'

const TwoStep = () => {
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
          {t('twoStep.backToLogin')}
        </Link>
      }
    >
      <div className="mb-8 space-y-2">
        <h1 className="text-[32px] font-bold leading-tight text-[#111827]">
          {t('twoStep.title')}
        </h1>
        <p className="text-base text-[#6B7280]">{t('twoStep.subtitle')}</p>
      </div>

      <div className="space-y-5">
        <div className="space-y-3">
          <Label className="text-sm font-medium text-[#374151]">{t('twoStep.codeLabel')}</Label>
          <InputOTP maxLength={6}>
            <InputOTPGroup className="gap-3">
              <InputOTPSlot index={0} className={otpSlotClassName} />
              <InputOTPSlot index={1} className={otpSlotClassName} />
              <InputOTPSlot index={2} className={otpSlotClassName} />
              <InputOTPSlot index={3} className={otpSlotClassName} />
              <InputOTPSlot index={4} className={otpSlotClassName} />
              <InputOTPSlot index={5} className={otpSlotClassName} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button
          type="button"
          className="h-12 w-full rounded-lg text-base font-semibold hover:opacity-90"
          style={{ backgroundColor: AUTH_PRIMARY }}
          asChild
        >
          <Link to="/">{t('twoStep.submit')}</Link>
        </Button>

        <p className="text-center text-sm text-[#6B7280]">
          {t('twoStep.noCode')}{' '}
          <button
            type="button"
            className="font-medium hover:underline"
            style={{ color: AUTH_PRIMARY }}
          >
            {t('twoStep.resend')}
          </button>
        </p>
      </div>
    </AuthSplitLayout>
  )
}

export default TwoStep
