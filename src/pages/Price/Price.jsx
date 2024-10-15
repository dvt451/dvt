import React from 'react'
import Calculations from './Calculations'
import TitleComponent from '@/features/TitleAnimation/TitleComponent'
import { useTranslations } from 'next-intl'
export default function Price() {
   const t =useTranslations("Price")
  return (
    <section id='price' className='price'>
      <div className="price__container">
         <h2><TitleComponent text={t('title')}/></h2>
         <div className="price__content">
            <p><span className='space'></span>{t('description')}</p>
            <Calculations />
            <div>{t('Inthispriceareincluded')}
               <ul>
                  <li>{t('Hovereffects')}</li>
                  <li>{t('Popups')}</li>
                  <li>{t('Accordions')}</li>
                  <li>{t('Adaptive')}</li>
                  <li>{t('Simplesliders')}</li>
               </ul>
            </div>
         </div>
      </div>
    </section>
  )
}
