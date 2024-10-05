import Head from "@/pages/Head/Head";
import Letstalk from "@/pages/Letstalk";
import Price from "@/pages/Price/Price";
import ProjectsPreview from "@/pages/ProjectsPreview/ProjectsPreview";

export default function Home() {

  return (
      <>
         <main>
            <Head />
            <ProjectsPreview />
            <Price />
            <Letstalk />
          </main>
      </>
  );
}
