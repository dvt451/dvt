import Panel from '@/widgets/components/Panel/Panel';
import React from 'react'
import HeadContext from './HeadContext';
import HeadAnimation from './HeadAnimation';
export default function Head() {

  return (
    <section className='head'>
      <div className="head__column">
         <HeadContext />
      </div>
      <div className="head__column">
         <div className='head-scene'>
            <HeadAnimation />
         </div>
         <Panel />
      </div>
    </section>
  )
}
