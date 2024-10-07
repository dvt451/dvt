// import { Inter, Montserrat } from "next/font/google";
import Smoothscroll from '@/features/Smoothscroll';
import '../shared/scss/style.scss'
import Customcursor from '@/features/CustomCursor/Customcursor';
import { AppWrapper } from '@/shared/hooks/ThemeContext';
import Header from '@/widgets/header/Header';


export const metadata = {
  title: "dvt",
  description: 'Animated websites with React and Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
         <Smoothscroll>
            <Customcursor />
         <div className='wrapper'>
            <Header />
               {children}
         </div>
         </Smoothscroll>
         </AppWrapper>
      </body>
    </html>
  );
}
