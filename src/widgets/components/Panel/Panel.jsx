import React from 'react'
import PanelDisplay from './PanelDisplay'
import PanelHeader from './PanelHeader'
import { useTranslations } from 'next-intl'

export default function Panel() {
   const t = useTranslations("HeadContext")
  return (
      <div className={'panel'}>
         <div className={'panel__body'}>
            <div className={'panel__board'}>
               <PanelHeader>
                  <p className={'header__text'}>{t('LatestProjectPreview')}</p>
               </PanelHeader>
               <PanelDisplay />
            </div>
         </div>
      </div>
  )
}
