import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
import Smoothscroll from '@/features/Smoothscroll';
import '../../shared/scss/style.scss'
import Customcursor from '@/features/CustomCursor/Customcursor';
import { AppWrapper } from '@/shared/hooks/ThemeContext';
import Header from '@/widgets/header/Header';

export const metadata = {
  title: "dvt",
  description: 'Animated websites with React and Next.js'
};

export default async function LocaleLayout({
   children,
   params: {locale}
 }){
   // Providing all messages to the client
   // side is the easiest way to get started
   const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages}>
        <AppWrapper>
         <Smoothscroll>
            <NextIntlClientProvider messages={messages}>
            <Customcursor />
         <div className='wrapper'>
            <Header />
               {children}
         </div>
         </NextIntlClientProvider>
         </Smoothscroll>
         </AppWrapper>
         </NextIntlClientProvider>
      </body>
    </html>
  );
}
