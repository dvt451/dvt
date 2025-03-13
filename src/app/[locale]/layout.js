import './shared/scss/style.scss'
import initTranslations from '../i18n';
import Smoothscroll from './features/Smoothscroll';
import Customcursor from './features/CustomCursor/Customcursor';
import { AppWrapper } from './shared/hooks/ThemeContext';
import Header from './widgets/header/Header';
import TranslationsProvider from './features/TranslationsProvider';

export const metadata = {
	title: "dvt",
	description: 'Animated websites with React and Next.js'
};
const i18nnamespaces = ['home']

export default async function LocaleLayout({ children, params: { locale } }) {
	const { resources } = await initTranslations(locale, i18nnamespaces)
	return (
		<html lang={locale}>
			<body>
				<AppWrapper>
					<Smoothscroll>
						<TranslationsProvider resources={resources} locale={locale} namespaces={i18nnamespaces}>
							<Customcursor />
							<div className='wrapper'>
								<Header />
								{children}
							</div>
						</TranslationsProvider>
					</Smoothscroll>
				</AppWrapper>
			</body>
		</html>
	);
}
