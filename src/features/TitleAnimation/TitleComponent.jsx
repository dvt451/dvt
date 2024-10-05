'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { slideUp } from './TextAnim';

export default function TitleComponent({text,nameClass = ''}) {
   const container = useRef(null)
   const isInView = useInView(container)
   const title = text.split(" ").length === 1 ? text.split("") : text.split(" ")

  return (
   <div ref={container} className={`${nameClass}`}>
   {
      title.map((word,index)=>{
         return text.split(" ").length === 1 ? 
         <motion.span key={index} variants={slideUp} custom={index} initial="initial" animate={isInView ? "open" : "closed"}>{word}</motion.span> : 
         <div key={index} className="word">
            {
               word.split("").map((char,ind)=>{
                  return <motion.span key={ind} variants={slideUp} custom={ind} initial="initial" animate={isInView ? "open" : "closed"}>{char}</motion.span>
               })
            }
         </div>
      })
   }
</div>
  )
}
