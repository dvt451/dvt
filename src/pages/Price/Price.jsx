import React from 'react'
import Calculations from './Calculations'
import TitleComponent from '@/features/TitleAnimation/TitleComponent'
export default function Price() {
  return (
    <div id='price' className='price'>
      <div className="price__container">
         <h2><TitleComponent text={'Price'}/></h2>
         <div className="price__content">
            <p><span className='space'></span>To calculate the aproximate price of your project write the height of your layout by pixels.</p>
            <Calculations />
            <div>In this price are included:
               <ul>
                  <li>Hover effects</li>
                  <li>Pop ups</li>
                  <li>Accordions</li>
                  <li>Adaptive</li>
                  <li>Simple sliders</li>
               </ul>
            </div>
         </div>
      </div>
    </div>
  )
}
