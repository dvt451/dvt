'use client'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
   const [isPending,startTransition] = useTransition()
   const t = useTranslations('SelectLanguages');
   const router = useRouter()
   const localActive = useLocale()
   const onSelectChange = (e)=>{
      const nextLocale = e.target.value 
      startTransition(()=>{
         router.replace(`/${nextLocale}`)
      })
   }
  return (
    <select style={{marginLeft: 'auto',marginRight: '60px'}}
      defaultValue={localActive}
      onChange={onSelectChange}
    >
      <option value="en">{t('en')}</option>
      <option value="ru">{t('ru')}</option>
    </select>
  )
}
