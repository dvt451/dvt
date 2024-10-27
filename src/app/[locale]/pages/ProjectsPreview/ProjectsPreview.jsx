import React from 'react'
import ModalSection from './ModalSection'
import TitleComponent from '../../features/TitleAnimation/TitleComponent'

export default function ProjectsPreview({t}) {
   return (
    <section id='portfolio' className={'portfolio'}>
      <div className='project-preview__container'>
         <h2 className={'portfolio__title'}>
            <TitleComponent text={t('MainTitles.RecentProjects')} />
         </h2>
         <ModalSection />
      </div>
    </section>
  )
}