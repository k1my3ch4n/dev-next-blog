// import Maintenance from "./_components/Maintenance";

import prefetchHomeData from "@prefetcher/prefetchHomeData";
import Blog from "./_components/Blog";
import Extra from "./_components/Extra";
import Introduce from "./_components/Introduce";
import Projects from "./_components/Projects";

export default async function Home() {
  await prefetchHomeData();

  return (
    <>
      <Introduce />
      <Projects />
      <Blog />
      <Extra />
    </>
  );
}

// export default function Home() {
//   return <Maintenance />;
// }
