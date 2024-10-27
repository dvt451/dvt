'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css';
import { useEffect, useState } from "react";
import { useAppContext } from '../../../shared/hooks/ThemeContext';

export default function PanelDisplay() {
   const _ = useAppContext()
   const updateProjects = [
      {
         src: '/updates/video1.webm',
         link: 'https://proyect-brown.vercel.app/'
      },
      {
         src: '/updates/video2.webm',
         link: 'https://creedz.net/'
      }
   ]
   const projectMouseEnter = ()=>{
      _.setProjectView(true)
  }
  const projectMouseLeave = ()=>{
   _.setProjectView(false)
}
   const [isDesktop, setIsDesktop] = useState(false)
   useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth > 991.98);
      }
    }, []);
  return (
   <Swiper
   modules={[Navigation,Pagination]}
   allowTouchMove={true}
   loop
   breakpoints={{
      991.98: {
         allowTouchMove: false
      },
    }}
   pagination={{ clickable: true }}
   navigation={{
     nextEl: '.preview__next',
     prevEl: '.preview__prev'
   }}
 >
   {
      updateProjects.map((item,i)=>{
         return <SwiperSlide key={i}>
         <a
            aria-label="Link to the project webpage"
           href={item.link}
           target='_blank'
           onMouseEnter={projectMouseEnter ? projectMouseEnter : null}
           onMouseLeave={projectMouseLeave ? projectMouseLeave : null}
           className={'panelVideo__wrapper'}
         >
           <video loop muted autoPlay playsInline src={item.src}></video>
         </a>
         </SwiperSlide>
      })
   }
   </Swiper>
  )
}