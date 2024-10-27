import React from 'react';
import HeadContext from './HeadContext';
import HeadAnimation from './HeadAnimation';
import Panel from '../../widgets/components/Panel/Panel';

export default function Head({ t }) {
  return (
    <section className='head'>
      <div className="head__column">
        <HeadContext t={t} />
      </div>
      <div className="head__column">
        <div className='head-scene'>
          <HeadAnimation />
        </div>
        <Panel t={t} />
      </div>
    </section>
  );
}
