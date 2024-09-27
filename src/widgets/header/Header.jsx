'use client'
import { MenuList } from "@/shared/menu/Menu";
import Logo from "../buttons/Logo";
import Eye from "@/pages/Eye";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="header__menu menu">
         <ul className="menu__list">
            {
               MenuList.map((item,i)=>{
                  return <li key={i}><button href={'#'} onClick={()=>{
                     const element = document.querySelector(item.href);
                   element?.scrollIntoView({
                      behavior: 'smooth'
                   })
                  }}>
                     <span>{item.title}</span>
                     <span>{item.title}</span>
                     </button></li>
               })
            }
         </ul>
      </nav>
      <Eye />
    </header>
  )
}
