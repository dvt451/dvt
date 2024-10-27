'use client'
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Preloadtrigger from './Preloadtrigger';
import { useAppContext } from '../../shared/hooks/ThemeContext';

export default function Preloader() {
   const _ = useAppContext()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
         setIsLoading(false);
      }, 3500)
      setTimeout(() => {
         window.scrollTo(0,0);
      }, 500)
   }, [])
  return (
      <AnimatePresence mode='wait'>
      {isLoading && <Preloadtrigger />}
      </AnimatePresence>
  )
}