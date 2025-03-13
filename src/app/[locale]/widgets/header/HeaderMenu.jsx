'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { MenuList } from '../../shared/menu/Menu';

export default function HeaderMenu() {
	const pathname = usePathname();
	const { t } = useTranslation();
	const menuList = MenuList(t);
	const isHomePage = pathname === '/' || pathname === '/ru';
	return (
		<nav className="header__menu menu">
			<ul className="menu__list">
				{menuList.map((item, i) => (
					<li key={i}>
						{
							// Если это домашняя страница и у нас есть якорь, то прокручиваем страницу
							isHomePage ? (
								<button onClick={() => {
									const element = document.querySelector(item.href);
									element?.scrollIntoView({
										behavior: 'smooth'
									})
								}}>
									<span>{item.title}</span>
									<span>{item.title}</span>
								</button>
							)
								: <Link href={'/'} onClick={() => {
									setTimeout(() => {
										const element = document.querySelector(item.href);
										element?.scrollIntoView({
											behavior: 'smooth'
										})
									}, 1500);
								}}>
									<span>{item.title}</span>
									<span>{item.title}</span>
								</Link>
						}
					</li>
				))}
			</ul>
		</nav>
	);
}
