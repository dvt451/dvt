import Head from "@/pages/Head/Head";
import Letstalk from "@/pages/Letstalk";
import Price from "@/pages/Price/Price";
import ProjectsPreview from "@/pages/ProjectsPreview/ProjectsPreview";
import Preloader from '@/widgets/Preloader/Preloader';

export default function Home() {

  return (
      <>
      <Preloader />
         <main>
            <Head />
            <ProjectsPreview />
            <Price />
            <Letstalk />
          </main>
      </>
  );
}
