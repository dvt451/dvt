import React from 'react'
import PanelDisplay from './PanelDisplay'
import PanelHeader from './PanelHeader'

export default function Panel() {

  return (
      <div className={'panel'}>
         <div className={'panel__body'}>
            <div className={'panel__board'}>
               <PanelHeader>
                  <p className={'header__text'}>Latest project preview</p>
               </PanelHeader>
               <PanelDisplay />
            </div>
         </div>
      </div>
  )
}
