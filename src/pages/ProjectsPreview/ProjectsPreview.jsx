import React from 'react'
import PageTitle from './PageTitle'
import ModalSection from './ModalSection'

export default function ProjectsPreview() {
   return (
    <section id='portfolio' className={'portfolio'}>
      <div className='project-preview__container'>
         <h2 className={'portfolio__title'}>
            <PageTitle />
         </h2>
         <ModalSection />
      </div>
    </section>
  )
}