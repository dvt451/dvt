import React from 'react'
import Calculations from './Calculations'
import TitleComponent from '../../features/TitleAnimation/TitleComponent'
export default function Price({ t }) {
	return (
		<section id='price' className='price'>
			<div className="price__container">
				<h2><TitleComponent text={t('Price.title')} /></h2>
				<div className="price__content">
					<p><span className='space'></span>{t('Price.description')}</p>
					<Calculations />
					<div>{t('Price.Inthispriceareincluded')}
						<ul>
							<li>{t('Price.Hovereffects')}</li>
							<li>{t('Price.Popups')}</li>
							<li>{t('Price.Accordions')}</li>
							<li>{t('Price.Adaptive')}</li>
							<li>{t('Price.Simplesliders')}</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
