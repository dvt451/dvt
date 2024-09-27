'use client'
import { Typewriter } from 'react-simple-typewriter'
export default function SimpleTypewriterBlock() {
  return (
   <p>
      <Typewriter
      words={['HTML CSS and SCSS', 'React.js and Next.js']}
      loop={true}
      cursor
      cursorStyle='|'
      typeSpeed={500}
      deleteSpeed={200}
      delaySpeed={1000}
   />
   </p>

  )
}
