'use client'
import { MenuList } from "@/shared/menu/Menu";
import Logo from "../buttons/Logo";
import Eye from "@/pages/Eye";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Header() {
   const pathname = usePathname();
  return (
    <header className="header">
      <Logo />
      <nav className="header__menu menu">
         <ul className="menu__list">
            {
               MenuList.map((item,i)=>{
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
      <Eye />
    </header>
  )
}
