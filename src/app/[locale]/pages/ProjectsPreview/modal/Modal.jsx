'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ProjectList } from '../../../shared/ProjectList'

const scaleAnimation = {
   initial: { scale: 0, x: "-50%", y: "-50%" },
   open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
   closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}

export default function Modal({ modal = { active: false, index: 0 } }) {  // Default prop value
   const container = useRef(null)
   const { active, index } = modal
   const [isDesktop, setIsDesktop] = useState(false)

   useEffect(() => {
      // Check screen size on mount
      setIsDesktop(window.innerWidth > 991.98)

      // Handle mouse move animation on desktop screens
      if (isDesktop) {
         const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
         const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })

         const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            moveContainerX(clientX)
            moveContainerY(clientY)
         }

         window.addEventListener("mousemove", handleMouseMove)

         // Clean up event listener on component unmount
         return () => {
            window.removeEventListener("mousemove", handleMouseMove)
         }
      }
   }, [isDesktop])

   return (
      <motion.div
         ref={container}
         variants={isDesktop ? scaleAnimation : {}}
         initial={isDesktop ? "initial" : false}
         animate={isDesktop ? (active ? "open" : "closed") : false}
         className={'modal'}
      >
         <div style={{ top: isDesktop ? index * -100 + '%' : '0' }} className={'modal__slider'}>
            {ProjectList.map((project, idx) => {
               const { src, color } = project
               return (
                  <div key={`modal_${idx}`} className={'modal__block'}>
                     <Image
                        src={src}
                        width={300}
                        height={0}
                        alt={'image'}
                     />
                     <div style={{ backgroundColor: color }} className={'modal__layer'}></div>
                  </div>
               )
            })}
         </div>
      </motion.div>
   )
}
