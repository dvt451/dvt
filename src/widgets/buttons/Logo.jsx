'use client'
export default function Logo() {
  return (
   <button aria-label="Reach to top" onClick={()=>{
      const element = document.querySelector('main');
      element?.scrollIntoView({
         behavior: 'smooth'
      });
   }} className="header__logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 160 160" fill="none">
   <path d="M103.776 82.4382H25L47.7287 107.492H81.8219L73.5569 119.115L68.7831 125.184L83.8882 143.393L115.399 107.492L103.776 82.4382Z" fill="#5046E5"/>
   <path d="M60.7941 74.6592H135.311L113.811 50.9601H81.5612L89.3793 39.9658L94.1435 33.3364L79.6066 16.9999L49.7998 50.9601L60.7941 74.6592Z" fill="#5046E5"/>
 </svg></button>

  )
}
