'use client'
import React, { useEffect, useState } from 'react'
import Project from './project/Project'
import {ProjectList} from '../../shared/ProjectList'
import Modal from './modal/Modal'
import TitleComponent from '@/features/TitleAnimation/TitleComponent'

export default function ProjectsPreview() {

   const [modal, setModal] = useState({active: false,index: 0})
   const [isDesktop, setIsDesktop] = useState(false)
   useEffect(() => {
      setIsDesktop(window.innerWidth > 991.98)
   }, [])
   
   return (
    <section id='portfolio' className={'portfolio'}>
      <div className='project-preview__container'>
         <h2 className={'portfolio__title'}>
            <TitleComponent text={'Recent Projects'} />
         </h2>
         <div className={'portfolio__body'}>
            {
               ProjectList.map((project,index)=>{
                  return <Project key={index} date={project.date} link={project.link} index={index} title={project.title} source={project.src} setModal={setModal} color={project.color}/>
               })
            }
         </div>
         {isDesktop && <Modal modal={modal} />}
      </div>
    </section>
  )
}