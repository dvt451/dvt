'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { MenuList } from '../../shared/menu/Menu';
export default function HeaderMenu() {
   const pathname = usePathname();
   
   const {t} = useTranslation()
   const menulist = MenuList(t)
  return (   
   <nav className="header__menu menu">
      <ul className="menu__list">
      {
         menulist.map((item,i)=>{
            return <li key={i}>
               {item.href ? pathname === '/' ? <button onClick={()=>{
               const element = document.querySelector(item.href);
             element?.scrollIntoView({
                behavior: 'smooth'
             })
            }}>
               <span>{item.title}</span>
               <span>{item.title}</span>
               </button> : <Link href={'/'} onClick={()=>{
                  setTimeout(() => {
                     const element = document.querySelector(item.href);
                     element?.scrollIntoView({
                        behavior: 'smooth'
                     })
                  }, 300);
               }}>
                  <span>{item.title}</span>
                  <span>{item.title}</span>
                  </Link> : 
               <Link href={item.link}>
                  <span>{item.title}</span>
                  <span>{item.title}</span>
               </Link>
               }
               </li>
         })
      }
      </ul>
   </nav>
  )
}
