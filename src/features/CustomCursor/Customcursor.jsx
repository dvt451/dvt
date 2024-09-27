'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { useAppContext } from '@/shared/hooks/ThemeContext'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoMail } from "react-icons/go";

export default function Customcursor() {
   const {projectView,imixBlend} = useAppContext()
   const cursorRef = useRef(null)
   const dottRef = useRef(null)
   const arrowRef = useRef(null)
   const _ = useAppContext()
   useEffect(() => {
      const isPcScreen = window.innerWidth > 991.98
      if (isPcScreen) {
         const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: 0.2,
            });
            gsap.to(dottRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: 0,
            });
            gsap.to(arrowRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: 0,
            });
         };
         
         document.addEventListener('mousemove', moveCursor);
         
         return () => {
            document.removeEventListener('mousemove', moveCursor);
         };
      }
      }, []);
      return (
         <>
            <div ref={cursorRef} className={`cursor${projectView ? ' view' : ''}${imixBlend ? ' mix': ''}${_.talkHover ? ' lettalk-active' : ''}`}>
               <div className="cursor__item"></div>
            </div>
            <div className={`dott${projectView ? ' view' : ''}${imixBlend ? ' mix': ''}${_.talkHover ? ' lettalk-active' : ''}`} ref={dottRef}>
               <span>View</span>
            </div>
            <div ref={arrowRef} className={`arrow${_.talkHover ? ' lettalk-active' : ''}`}>
               {_.mail ? <GoMail /> :<IoIosArrowRoundForward />}
            </div>
         </>
  )
}
