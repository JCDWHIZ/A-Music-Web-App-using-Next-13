import Hero from "./components/Hero";
import Player from "./components/Player";
import Albums from "./components/albulms/Albums";
import Events from "./components/events/Events";
import Blog from "./components/blog/Blog";
import Newsletter from "./components/Newsletter";
import { Suspense } from "react";
import Loading from "./components/Loading";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Hero />
        <Player />
        <Events />
        <Albums />
        <Blog />
        <Newsletter />
      </Suspense>
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
