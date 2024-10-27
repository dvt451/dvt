'use client'
import { useAppContext } from "../../../shared/hooks/ThemeContext";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function PanelHeader({children}) {
   const _ = useAppContext()
   const headerEnter = ()=>{
      _.setImixBlend(true)
   }
   const headerLeave = ()=>{
      _.setImixBlend(false)
   }
  return (
      <div onMouseEnter={headerEnter} onMouseLeave={headerLeave} className={'panel__header'}>
         {children}
         <div className='buttons'>
            <button aria-label='Switch to previous' className='preview-buttons preview__prev'><IoIosArrowBack /></button>
            <button aria-label='Switch to next' className='preview-buttons preview__next'><IoIosArrowForward /></button>
         </div>
      </div>
  )
}
