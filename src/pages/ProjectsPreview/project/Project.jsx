import React from 'react';
import { useIsDesktop } from '@/shared/hooks/useIsDesktop';
import { useAppContext } from '@/shared/hooks/ThemeContext';
import Image from 'next/image';

export default function Project({ index, title, setModal, link, source, color, date }) {
  const _ = useAppContext();
  const isDesktop = useIsDesktop();  // Using the custom hook to determine if it's desktop view

  return (
    <a href={link} target='_blank' className={'project'}
      onMouseEnter={() => {
        if (isDesktop) {
          setModal({ active: true, index: index });
          _.setProjectView(true);
        }
      }}
      onMouseLeave={() => {
        if (isDesktop) {
          setModal({ active: false, index: index });
          _.setProjectView(false);
        }
      }}
    >
      {/* For mobile view, directly display the modal content */}
      {!isDesktop && (
        <div className={'project-modal'}>
          <div className={'project-modal__slider'}>
            <div key={`modal_${index}`} className={'project-modal__block'}>
              <Image
                src={source}
                width={400}
                height={500}
                alt={'image'}
              />
            </div>
            <div style={{ backgroundColor: color }} className={'project-modal__layer'}></div>
          </div>
        </div>
      )}
      <h3>
        <span>{title}</span>
        <span>{title}</span>
      </h3>
      <p><span>Design & development</span><span> {date}</span></p>
    </a>
  );
}
