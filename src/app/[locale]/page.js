import Head from "./pages/Head/Head";
import Letstalk from "./pages/Letstalk";
import ProjectsPreview from './pages/ProjectsPreview/ProjectsPreview';
import Price from './pages/Price/Price';
import initTranslations from '../i18n';
import Preloader from "./widgets/Preloader/Preloader";
import TranslationsProvider from "./features/TranslationsProvider";

const i18nnamespaces = ['home']

export default async function Home({params: {locale}}) {
      const {t,resources} = await initTranslations(locale, i18nnamespaces)
      return (
      <>
      <TranslationsProvider resources={resources} locale={locale} namespaces={i18nnamespaces}>
         <Preloader />
         <main>
            <Head t={t}/>
            <ProjectsPreview t={t}/>
            <Price t={t} />
            <Letstalk />
         </main>
      </TranslationsProvider>
      </>
  );
}
