'use client'
import React, { useState } from 'react'
import LangTitle from './LangTitle';
import { useAppContext } from '@/shared/hooks/ThemeContext';

export default function Calculations() {
   const [inputValue, setInputValue] = useState(0);  // Store the input value
   const _ = useAppContext()
   // Function to handle input change
   const handleInputChange = (e) => {
     setInputValue(e.target.value); // Update the state with the new input value
   };

   return (
     <div className='calculation'>
       <div className='calculation__top'>
         <div>
           <input
             className='calc-input'
             type="number"
             value={inputValue}  // Bind input to state
             onChange={handleInputChange}  // Handle changes to input
           />
           <span>px</span>
         </div>
       </div>
       <div className="result"><LangTitle /> <span className='usd'>{inputValue && inputValue * _.projectCost + 15}</span></div>
     </div>
   );
}
