import { useTranslations } from 'next-intl'

export default function LangTitle() {
   const t =useTranslations("Price")
   return (
    t('title')
  )
}
