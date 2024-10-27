import React from 'react'
import Calculations from './Calculations'
import TitleComponent from '../features/TitleAnimation/TitleComponent'

export default function page() {
  return (
    <main className='admin'>
      <div id='admin-price' className='admin__price admin-price'>
      <div className="admin-price__container">
         <h2><TitleComponent text={'Price'}/></h2>
         <Calculations />
      </div>
    </div>
    </main>
  )
}
