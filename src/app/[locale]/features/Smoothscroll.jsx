'use client'
import Lenis from "@studio-freight/lenis"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Smoothscroll({children}) {
   const location = usePathname()
  useEffect(() => {
   const lenis = new Lenis()
   function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
   }
   requestAnimationFrame(raf)
  }, [location])
  return children
  
}
