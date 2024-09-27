import Head from "@/pages/Head/Head";
import Letstalk from "@/pages/Letstalk";
import ProjectsPreview from "@/pages/ProjectsPreview/ProjectsPreview";
import Header from '@/widgets/header/Header';


export default function Home() {

  return (
      <>
         <Header />
         <main>
            <Head />
            <ProjectsPreview />
            <Letstalk />
          </main>
      </>
  );
}
