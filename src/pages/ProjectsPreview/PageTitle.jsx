import React from 'react'
import TitleComponent from '@/features/TitleAnimation/TitleComponent'
import { useTranslations } from 'next-intl'

export default function PageTitle() {
   const t = useTranslations("MainTitles")
  return (
    <TitleComponent text={t('RecentProjects')} />
    )
}