'use client'
import React, { useState } from 'react'

export default function Calculations() {
   const [inputValue, setInputValue] = useState(null);  // Store the input value

   // Function to handle input change
   const handleInputChange = (e) => {
     setInputValue(e.target.value); // Update the state with the new input value
   };

   // Function to handle the calculation (you can add your logic here)
   const handleCalculation = () => {
     console.log(`Input value: ${inputValue}`);
     // Add calculation logic here based on inputValue
   };

   return (
     <div className='calculation'>
       <div className='calculation__top'>
         <div>
           <input
             type="number"
             value={inputValue}  // Bind input to state
             onChange={handleInputChange}  // Handle changes to input
           />
           <span>px</span>
         </div>
       </div>
       <div className="result">The Price: <span className='usd'>{inputValue && inputValue * 0.010 + 15}</span></div>
     </div>
   );
}
