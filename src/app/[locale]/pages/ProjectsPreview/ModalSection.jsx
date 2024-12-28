'use client'
import React, { useEffect, useState } from 'react'
import Modal from './modal/Modal'
import Project from './project/Project'
import { ProjectList } from '../../shared/ProjectList'

export default function ModalSection() {
	const [modal, setModal] = useState({ active: false, index: 0 })
	const [isDesktop, setIsDesktop] = useState(false)
	useEffect(() => {
		setIsDesktop(window.innerWidth > 991.98)
	}, [])
	return (
		<>
			<div className={'portfolio__body'}>
				{
					ProjectList.map((project, index) => {
						return <Project key={index} date={project.date} link={project.link} index={index} title={project.title} source={project.src} setModal={setModal} color={project.color} />
					})
				}
			</div>
			{isDesktop && <Modal modal={modal} />}
		</>
	)
}
