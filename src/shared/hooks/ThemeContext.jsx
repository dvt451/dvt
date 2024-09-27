'use client'
import React, { createContext, useContext, useState } from 'react';

// Create a new context instance
const AppContext = createContext();

// Exported wrapper component to provide context
export function AppWrapper({ children }) {
  // State management within the context
  const [burgerState, setBurgerState] = useState(false);
  const [projectView, setProjectView] = useState(false)
  const [imixBlend, setImixBlend] = useState(false)
  const [talkHover, setTalkHover] = useState(false)
  const [mail,setMail] = useState(false)

  const projectMouseEnter = ()=>{
      setProjectView(true)
  }
  const projectMouseLeave = ()=>{
   setProjectView(false)
}
  // Object containing values and functions to be shared via context
  const _ = {
    burgerState,
    setBurgerState,
    projectView,
    setProjectView,
    projectMouseEnter,
    projectMouseLeave,
    imixBlend,
    setImixBlend,
    talkHover,
    setTalkHover,
    mail,
    setMail
  };

  // Provide the context value to the children components
  return (
    <AppContext.Provider value={_}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to consume the context
export function useAppContext() {
   return useContext(AppContext);
 }
 