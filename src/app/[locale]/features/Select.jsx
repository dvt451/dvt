'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../../i18nConfig';

export default function Select() {
   const { t, i18n } = useTranslation();
   const selectRef = useRef(null);
   const [active, setActive] = useState(false);
   const currentLocale = i18n.language;
   const router = useRouter();
   const currentPathname = usePathname();

   // Moved options inside the component to make translations reactive
   const options = [
     {
       lang: t("SelectLanguages.en"),
       value: 'en',
     },
     {
       lang: t("SelectLanguages.ru"),
       value: 'ru',
     },
   ];

   const handleChange = (i) => {
     const newLocale = options[i].value;  // Get the selected language code
     setOptnum(i);  // Update the selected option index
     setActive(false);

     // Set a cookie for the new locale
     const days = 30;
     const date = new Date();
     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
     const expires = date.toUTCString();
     document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

     // Redirect to the new locale path
     if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
       router.push('/' + newLocale + currentPathname);
     } else {
       router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
     }

     router.refresh(); // Refresh the router after navigation
   };

   const [optnum, setOptnum] = useState(() => {
     // Set initial selected option based on current locale
     return options.findIndex(option => option.value === currentLocale);
   });

   const handleClickOutside = (event) => {
     if (selectRef.current && !selectRef.current.contains(event.target)) {
       setActive(false);
     }
   };

   useEffect(() => {
     document.addEventListener('click', handleClickOutside);
     return () => {
       document.removeEventListener('click', handleClickOutside);
     };
   }, []);

   return (
     <div ref={selectRef} className={`select ${active ? 'active' : ''}`}>
       <button className="option selected" onClick={() => setActive(!active)}>
         <div className="selected-content">
           <div className="selected-content-icon"></div>
           <span className="selected-text">{options[optnum].lang}</span>
         </div>
         <span className={`selected-icon ${active ? 'active' : ''}`}>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none">
             <path d="M7.49932 10.8155C7.22726 11.0875 6.77274 11.0875 6.49998 10.8155L0.206656 4.53826C-0.0688853 4.26272 -0.0688853 3.81587 0.206656 3.54103C0.482197 3.26549 0.929748 3.26549 1.20529 3.54103L6.99997 9.3196L12.794 3.54033C13.0702 3.26479 13.517 3.26479 13.7933 3.54033C14.0688 3.81587 14.0688 4.26272 13.7933 4.53757L7.49932 10.8155Z" fill="#060606"></path>
           </svg>
         </span>
       </button>
       <div className={`option-list ${active ? 'option-open' : ''}`}>
         {options.map((item, i) => (
           <button
             key={i}
             className="option"
             onClick={() => handleChange(i)}
           >
             {item.lang}
           </button>
         ))}
       </div>
     </div>
   );
}
