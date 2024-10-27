import React from 'react';
import PanelDisplay from './PanelDisplay';
import PanelHeader from './PanelHeader';

export default function Panel({ t }) {
  return (
    <div className='panel'>
      <div className='panel__body'>
        <div className='panel__board'>
          <PanelHeader>
            <p className='header__text'>{t('HeadContext.LatestProjectPreview')}</p>
          </PanelHeader>
          <PanelDisplay />
        </div>
      </div>
    </div>
  );
}
