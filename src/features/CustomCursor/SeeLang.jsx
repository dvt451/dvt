import { useTranslations } from 'next-intl'
import React from 'react'

export default function SeeLang() {
   const t = useTranslations("Other")
  return (
   <span>{t('View')}</span>
  )
}
