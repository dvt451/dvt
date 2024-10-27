'use client'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { useLocale } from 'next-intl';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../shared/hooks/ThemeContext';

export default function Customcursor() {
   const locale = useLocale() === "ru"
   const {projectView,imixBlend} = useAppContext()
   const cursorRef = useRef(null)
   const dottRef = useRef(null)
   const arrowRef = useRef(null)
   const {t} = useTranslation()
   const _ = useAppContext()
   useEffect(() => {
      const isPcScreen = window.innerWidth > 991.98
      if (isPcScreen) {
         const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
               x: e.clientX,
               y: e.clientY,
               duration: locale ? 0.1 : 0.2,
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
      }, [locale]);
      return (
         <>
            <div ref={cursorRef} className={`cursor${projectView ? ' view' : ''}${imixBlend ? ' mix': ''}${_.talkHover ? ' lettalk-active' : ''}`}>
               <div className="cursor__item"></div>
            </div>
            <div className={`dott${projectView ? ' view' : ''}${imixBlend ? ' mix': ''}${_.talkHover ? ' lettalk-active' : ''}`} ref={dottRef}>
               <span>{t("Other.View")}</span>
            </div>
            <div ref={arrowRef} className={`arrow${_.talkHover ? ' lettalk-active' : ''}`}>
               {_.mail ? <GoMail /> :<IoIosArrowRoundForward />}
            </div>
         </>
  )
}
