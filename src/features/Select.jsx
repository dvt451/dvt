import React, { useEffect, useRef, useState, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';



export default function Select() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('SelectLanguages');
  const router = useRouter();
  const currentLocale = useLocale(); // renamed for clarity
  const selectRef = useRef(null);
  const [active, setActive] = useState(false);
  // Moved options outside the component for optimization
const options = [
   {
     lang: t("en"),
     value: 'en',
   },
   {
     lang: t("ru"),
     value: 'ru',
   },
 ];
 
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
            onClick={() => {
              setOptnum(i);
              setActive(false);
              const nextLocale = item.value;
              startTransition(() => {
                router.replace(`/${nextLocale}`);
              });
            }}
          >
            {item.lang}
          </button>
        ))}
      </div>
    </div>
  );
}
